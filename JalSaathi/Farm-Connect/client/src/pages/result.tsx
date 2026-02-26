import { useLocation } from "wouter";
import { 
  ArrowLeft, 
  Droplets, 
  ArrowRight, 
  Calendar, 
  TrendingUp, 
  Leaf, 
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Result() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-full bg-[#f8faf7] animate-in slide-in-from-right duration-300">
      <header className="flex items-center p-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <button onClick={() => setLocation("/input")} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold ml-2 text-foreground">Farm Intelligence Dashboard</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-8">
        {/* 1) Top Summary Status Card */}
        <Card className="p-5 border-none shadow-sm bg-white rounded-3xl overflow-hidden relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Today's Irrigation Status</p>
              <h2 className="text-2xl font-bold text-foreground">High Irrigation Required</h2>
            </div>
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200 uppercase tracking-wider">
              Critical
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Soil moisture below optimal threshold. Immediate hydration recommended for root health.
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-semibold">Decision Confidence</span>
            </div>
            <span className="text-sm font-bold text-primary">87%</span>
          </div>
        </Card>

        {/* 2) Weekly Water Savings Card */}
        <Card className="p-5 border-none shadow-sm bg-primary/5 rounded-3xl border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-2 rounded-xl">
              <Droplets className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">Weekly Water Saved</h3>
          </div>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-black text-primary">450</span>
            <span className="text-sm font-medium text-primary/70">Liters</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs font-bold text-green-600 mb-4">
            <TrendingUp className="w-3 h-3" />
            <span>12% MORE EFFICIENT THAN LAST WEEK</span>
          </div>

          <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%] rounded-full" />
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {/* 3) Irrigation History Section */}
          <Card className="p-5 border-none shadow-sm bg-white rounded-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-bold text-foreground text-sm uppercase tracking-tight">Irrigation History</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { date: "Feb 25", label: "High Irrigation Required", color: "bg-orange-500" },
                { date: "Feb 23", label: "No Irrigation", color: "bg-green-500" },
                { date: "Feb 21", label: "Moderate Irrigation", color: "bg-blue-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* 4) Soil Health Score Card */}
          <Card className="p-5 border-none shadow-sm bg-white rounded-3xl flex flex-col items-center text-center">
            <div className="w-full text-left flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-foreground text-sm uppercase tracking-tight">Soil Health Score</h3>
            </div>
            
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100 stroke-current"
                  strokeWidth="8"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-green-600 stroke-current"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - 0.82)}
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-foreground">82</span>
                <span className="text-[10px] font-bold text-muted-foreground">/ 100</span>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-lg">
              Stable moisture balance maintained
            </p>
          </Card>

          {/* 5) Farm Efficiency Score Card */}
          <Card className="p-5 border-none shadow-sm bg-white rounded-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-foreground text-sm uppercase tracking-tight">Farm Efficiency Rating</h3>
            </div>
            
            <div className="flex items-end gap-2 mb-3">
              <span className="text-4xl font-black text-foreground">87%</span>
              <span className="text-sm font-bold text-green-600 mb-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> Excellent
              </span>
            </div>
            
            <Progress value={87} className="h-3 mb-4" />
            
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
              Based on irrigation timing, water usage, and climate data analysis.
            </p>
          </Card>
        </div>
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md border-t space-y-3 sticky bottom-0 z-20">
        <Button 
          onClick={() => setLocation("/dashboard")}
          className="w-full text-lg h-14 rounded-2xl shadow-lg shadow-primary/20 font-bold group" 
          size="lg"
        >
          View Detailed Insights
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          onClick={() => setLocation("/")}
          variant="outline"
          className="w-full text-lg h-14 rounded-2xl font-bold border-slate-200 hover:bg-slate-50 transition-all" 
          size="lg"
        >
          New Analysis
        </Button>
      </div>
    </div>
  );
}
