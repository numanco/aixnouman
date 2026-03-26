import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string;
  stripe_price_id: string | null;
}

const StorePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });
      setProducts(data || []);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleBuy = async (product: Product) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast({ title: "Please sign in first", description: "You need an account to purchase products.", variant: "destructive" });
      window.location.href = "/auth";
      return;
    }

    if (!product.stripe_price_id) {
      toast({ title: "Coming soon", description: "This product is not yet available for purchase." });
      return;
    }

    setBuyingId(product.id);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          priceId: product.stripe_price_id,
          productId: product.id,
        },
      });
      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch {
      toast({ title: "Error", description: "Could not create checkout session.", variant: "destructive" });
    }
    setBuyingId(null);
  };

  const categoryIcon = (cat: string) => {
    if (cat === "template") return <Package className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Digital Products</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Automation Templates & SaaS Tools
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use n8n workflows, AI automation templates, and SaaS tools to accelerate your business.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 rounded-2xl bg-card border border-border/50 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Products Coming Soon</h3>
              <p className="text-muted-foreground">We're preparing amazing automation templates. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="h-48 bg-secondary/50 flex items-center justify-center">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Package className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {categoryIcon(product.category)}
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">${(product.price / 100).toFixed(2)}</span>
                      <Button
                        variant="hero"
                        size="sm"
                        onClick={() => handleBuy(product)}
                        disabled={buyingId === product.id}
                      >
                        {buyingId === product.id ? "..." : <><ShoppingCart className="w-4 h-4" /> Buy Now</>}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
