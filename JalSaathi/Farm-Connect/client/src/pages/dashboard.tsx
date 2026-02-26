import { useLocation } from "wouter";
import { 
  ArrowLeft, 
  Droplets, 
  TrendingUp, 
  Leaf, 
  Waves,
  BarChart3,
  ShieldCheck,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-full bg-[#f4f7f2] animate-in slide-in-from-right duration-300">
      <header className="flex items-center p-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <button onClick={() => setLocation("/result")} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold ml-2 text-foreground text-[#2d4a22]">Sustainability Insights</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-8">
        {/* 1) Seasonal Water Conservation Card */}
        <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Waves className="w-24 h-24 text-[#2e7d32]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-[#2e7d32] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Total Water Saved This Season
            </h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-[#1b5e20]">3,250</span>
              <span className="text-lg font-bold text-[#2e7d32]">Liters</span>
            </div>
            <p className="text-sm font-medium text-[#388e3c] flex items-center gap-2">
              <span className="bg-[#1b5e20] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">IMPACT</span>
              Equivalent to 13 household water tanks
            </p>
          </div>
        </Card>

        {/* 2) Monthly Efficiency Trend */}
        <Card className="p-5 border-none shadow-sm bg-white rounded-3xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-tight mb-1">30-Day Efficiency Trend</h3>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg font-bold">9% Improvement</span>
              </div>
            </div>
            <div className="bg-green-50 p-2 rounded-xl">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          
          <div className="flex items-end gap-1 h-16 mb-2">
            {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-green-100 rounded-t-sm hover:bg-green-200 transition-colors cursor-pointer relative group"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {h}%
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground font-medium text-center uppercase tracking-widest">Efficiency over last 30 days</p>
        </Card>

        {/* 3) Environmental Impact Score */}
        <Card className="p-6 border-none shadow-sm bg-white rounded-3xl">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#2e7d32]" />
            <h3 className="font-bold text-foreground text-sm uppercase tracking-tight">Sustainability Score</h3>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-[#2e7d32] stroke-current"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - 0.84)}
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                <span className="text-3xl font-black text-[#1b5e20]">84</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Excellent</span>
              </div>
            </div>
            
            <div className="flex-1 ml-6 space-y-3">
              {[
                { label: "Water Conservation", value: "Good", color: "text-green-600" },
                { label: "Soil Moisture", value: "Stable", color: "text-blue-600" },
                { label: "Over-Irrigation Risk", value: "Low", color: "text-green-600" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">{item.label}</span>
                  <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 4) Soil Stability Trend Card */}
        <Card className="p-5 border-none shadow-sm bg-white rounded-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-[#689f38]" />
              <h3 className="font-bold text-foreground text-sm uppercase tracking-tight">Soil Moisture Stability</h3>
            </div>
            <span className="text-xs font-bold text-[#689f38] bg-[#f1f8e9] px-2 py-1 rounded-lg uppercase tracking-wider">Balanced</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
                No prolonged over-irrigation detected this month. Optimal root aeration maintained.
              </p>
              <div className="flex items-center gap-1">
                <div className="h-1.5 flex-1 bg-green-500 rounded-full" />
                <div className="h-1.5 flex-1 bg-green-500 rounded-full" />
                <div className="h-1.5 flex-1 bg-green-400 rounded-full" />
                <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
                <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
              </div>
            </div>
            <div className="w-16 h-16 bg-[#f1f8e9] rounded-2xl flex items-center justify-center">
              <Waves className="w-8 h-8 text-[#689f38] opacity-50" />
            </div>
          </div>
        </Card>

        <div className="bg-blue-50/50 p-4 rounded-2xl flex gap-3 border border-blue-100">
          <Info className="w-5 h-5 text-blue-500 shrink-0" />
          <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
            Sustainability metrics are calculated based on your local climate data compared to historical irrigation patterns.
          </p>
        </div>
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md border-t sticky bottom-0 z-20">
        <Button 
          onClick={() => setLocation("/")}
          variant="outline"
          className="w-full text-lg h-14 rounded-2xl font-bold border-slate-200 hover:bg-slate-50 transition-all text-[#2e7d32]" 
          size="lg"
        >
          Return to Analysis
        </Button>
      </div>
    </div>
  );
}
