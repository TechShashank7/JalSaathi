import { useLocation } from "wouter";
import { ArrowLeft, TrendingUp, History, Activity, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-full bg-background animate-in slide-in-from-right duration-300">
      <header className="flex items-center p-4 border-b bg-card shadow-sm z-10">
        <button onClick={() => setLocation("/result")} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl font-semibold ml-2 text-foreground">Sustainability Insights</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-5 pb-8">
        
        {/* Weekly Water Saved */}
        <Card className="p-6 shadow-sm border-none bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Weekly Water Saved
            </h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-primary tracking-tight">450</span>
            <span className="text-muted-foreground font-medium mb-1">Liters</span>
          </div>
          <p className="text-sm text-primary/80 mt-2 font-medium">
            +12% compared to last week
          </p>
        </Card>

        {/* Soil Health Score */}
        <Card className="p-6 shadow-sm border-none bg-card rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
              <Activity className="w-5 h-5 text-secondary-foreground" />
              Soil Health Score
            </h3>
            <span className="text-2xl font-bold text-primary">82<span className="text-base text-muted-foreground">/100</span></span>
          </div>
          <Progress value={82} className="h-3 bg-secondary/30 rounded-full" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Optimal conditions for current crops. Maintain current schedule.
          </p>
        </Card>

        {/* Irrigation History Summary */}
        <Card className="p-6 shadow-sm border-none bg-card rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
              <History className="w-5 h-5 text-foreground" />
              History Summary
            </h3>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-xl">
                <CalendarDays className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-medium text-base">Wheat Field A</p>
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
                <p className="text-sm text-destructive font-medium">High Irrigation</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-xl">
                <CalendarDays className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-medium text-base">Tomato Plot</p>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </div>
                <p className="text-sm text-primary font-medium">No Irrigation (Saved)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-xl">
                <CalendarDays className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-medium text-base">Rice Paddy</p>
                  <span className="text-xs text-muted-foreground">4 days ago</span>
                </div>
                <p className="text-sm text-[#F57C00] font-medium">Moderate Irrigation</p>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
