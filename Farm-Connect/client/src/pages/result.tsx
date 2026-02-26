import { useLocation } from "wouter";
import { ArrowLeft, AlertTriangle, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Result() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-full bg-background animate-in slide-in-from-right duration-300">
      <header className="flex items-center p-4 border-b bg-card">
        <button onClick={() => setLocation("/input")} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl font-semibold ml-2 text-foreground">Analysis Result</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-8">
        {/* Status Card - Red for High */}
        <Card className="p-6 border-t-4 border-t-destructive shadow-md bg-card overflow-hidden relative rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <AlertTriangle className="w-32 h-32 text-destructive" />
          </div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive font-medium rounded-full text-sm mb-4">
              Action Required
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-2">High Irrigation Required</h2>
            <p className="text-muted-foreground text-sm">
              Current conditions indicate critical moisture levels for your crop.
            </p>
          </div>
        </Card>

        {/* Details Card */}
        <Card className="p-5 shadow-sm border-none bg-card rounded-2xl">
          <h3 className="font-semibold text-lg mb-5 text-foreground">Recommendations</h3>
          
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Suggested Water Quantity</p>
                <p className="font-semibold text-lg">25 Liters <span className="text-sm font-normal text-muted-foreground">per sq.m</span></p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-xl">
                <Droplets className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Water Saved</p>
                <p className="font-semibold text-lg text-primary">120 Liters</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Alert Message */}
        <div className="bg-[#FFF3E0] border border-[#FFE0B2] p-4 rounded-xl flex gap-3 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-warning shrink-0" />
          <p className="text-sm text-warning-foreground font-medium leading-relaxed">
            High temperature detected. Soil drying rapidly. Immediate action recommended to prevent crop stress.
          </p>
        </div>
      </div>

      <div className="p-4 bg-background border-t space-y-3">
        <Button 
          onClick={() => setLocation("/dashboard")}
          className="w-full text-lg h-14 rounded-xl shadow-lg font-medium group" 
          size="lg"
        >
          View Insights
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          onClick={() => setLocation("/")}
          variant="outline"
          className="w-full text-lg h-14 rounded-xl font-medium border-border hover:bg-muted" 
          size="lg"
        >
          New Analysis
        </Button>
      </div>
    </div>
  );
}
