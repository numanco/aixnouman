import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Package, Download, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Purchase {
  id: string;
  status: string;
  created_at: string;
  products: {
    name: string;
    description: string | null;
    download_url: string | null;
    category: string;
  } | null;
}

const DashboardPage = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }

      setUserName(session.user.user_metadata?.full_name || session.user.email || "");

      const { data } = await supabase
        .from("purchases")
        .select("id, status, created_at, products(name, description, download_url, category)")
        .eq("status", "completed")
        .order("created_at", { ascending: false });

      setPurchases((data as unknown as Purchase[]) || []);
      setLoading(false);
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-heading font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {userName}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>

          <h2 className="text-xl font-heading font-semibold mb-6">Your Products</h2>

          {loading ? (
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="h-24 rounded-xl bg-card border border-border/50 animate-pulse" />
              ))}
            </div>
          ) : purchases.length === 0 ? (
            <div className="text-center py-16 rounded-2xl bg-card border border-border/50">
              <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-heading font-semibold mb-2">No purchases yet</h3>
              <p className="text-muted-foreground mb-6">Browse our store for automation templates and tools.</p>
              <Button variant="hero" onClick={() => navigate("/store")}>Browse Store</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="p-6 rounded-xl bg-card border border-border/50 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-semibold">{purchase.products?.name}</h3>
                    <p className="text-muted-foreground text-sm">{purchase.products?.description}</p>
                  </div>
                  {purchase.products?.download_url && (
                    <a href={purchase.products.download_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" /> Download
                      </Button>
                    </a>
                  )}
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

export default DashboardPage;
