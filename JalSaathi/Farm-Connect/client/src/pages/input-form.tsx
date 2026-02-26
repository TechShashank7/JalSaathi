import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Info, X, Droplets, Thermometer, Wifi, Activity, CheckCircle2, AlertCircle, RefreshCw, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AnimatePresence, motion } from "framer-motion";

export default function InputForm() {
  const [, setLocation] = useLocation();
  const [isFetchingMoisture, setIsFetchingMoisture] = useState(true);
  const [isFetchingTemp, setIsFetchingTemp] = useState(true);
  const [moistureValue, setMoistureValue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [isManualInput, setIsManualInput] = useState(false);

  const startFetching = () => {
    setIsFetchingMoisture(true);
    setIsFetchingTemp(true);
    setIsManualInput(false);
    
    setTimeout(() => {
      setMoistureValue("42");
      setIsFetchingMoisture(false);
    }, 2500);

    setTimeout(() => {
      setTempValue("28");
      setIsFetchingTemp(false);
    }, 3200);
  };

  useEffect(() => {
    if (!isManualInput) {
      startFetching();
    }
  }, [isManualInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/processing");
  };

  return (
    <div className="flex flex-col h-full bg-background animate-in slide-in-from-right duration-300 relative">
      <header className="flex items-center p-4 border-b bg-card">
        <button onClick={() => setLocation("/")} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl font-semibold ml-2 text-foreground">Irrigation Analysis</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <form id="analysis-form" onSubmit={handleSubmit} className="space-y-6">
          <Card className="p-5 shadow-sm border-none bg-card rounded-2xl">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="crop" className="text-base font-medium text-foreground/80">Select Crop</Label>
                <Select required defaultValue="wheat">
                  <SelectTrigger className="h-14 text-base rounded-xl border-muted-foreground/20 focus:ring-primary/20">
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="tomato">Tomato</SelectItem>
                    <SelectItem value="potato">Potato</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor="moisture" className="text-base font-medium text-foreground/80">Soil Moisture (%)</Label>
                <div className="relative">
                  <Input 
                    id="moisture" 
                    type="number" 
                    value={moistureValue}
                    onChange={(e) => setMoistureValue(e.target.value)}
                    placeholder={isFetchingMoisture ? "Fetching live moisture..." : "e.g. 45"} 
                    className={`h-14 text-base rounded-xl transition-all ${isFetchingMoisture ? "pl-11 italic text-muted-foreground bg-muted/30" : "pl-4"}`}
                    disabled={isFetchingMoisture && !isManualInput}
                    required 
                  />
                  {isFetchingMoisture && !isManualInput && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  )}
                  {!isFetchingMoisture && !isManualInput && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor="temp" className="text-base font-medium text-foreground/80">Temperature (°C)</Label>
                <div className="relative">
                  <Input 
                    id="temp" 
                    type="number" 
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    placeholder={isFetchingTemp ? "Fetching live temperature..." : "e.g. 32"} 
                    className={`h-14 text-base rounded-xl transition-all ${isFetchingTemp ? "pl-11 italic text-muted-foreground bg-muted/30" : "pl-4"}`}
                    disabled={isFetchingTemp && !isManualInput}
                    required 
                  />
                  {isFetchingTemp && !isManualInput && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  )}
                  {!isFetchingTemp && !isManualInput && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="days" className="text-base font-medium text-foreground/80">Days Since Last Irrigation</Label>
                <Input id="days" type="number" placeholder="e.g. 5" className="h-14 text-base rounded-xl border-muted-foreground/20" required />
              </div>
            </div>
          </Card>
        </form>
      </div>

      <div className="p-4 bg-background space-y-4">
        <Card className="p-4 border border-primary/10 bg-primary/5 rounded-xl flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground/80">Suspicious about the fetched data?</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowDiagnostics(true)}
            className="text-primary font-semibold hover:bg-primary/10"
          >
            Run diagnostics
          </Button>
        </Card>

        <div className="border-t pt-4">
          <Button 
            form="analysis-form" 
            type="submit" 
            className="w-full text-lg h-14 rounded-xl shadow-lg font-medium group active:scale-95 transition-all" 
            size="lg"
            disabled={isFetchingMoisture || isFetchingTemp}
          >
            Analyze Now
          </Button>
        </div>
      </div>

      {/* Diagnostics Liquid Glass Modal */}
      <AnimatePresence>
        {showDiagnostics && (
          <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-md"
              onClick={() => setShowDiagnostics(false)}
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm bg-white/70 backdrop-blur-2xl border-t sm:border border-white/40 shadow-[0_0_40px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 max-h-[90%] overflow-y-auto"
            >
              <button 
                onClick={() => setShowDiagnostics(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X className="w-5 h-5 text-foreground/60" />
              </button>

              <div className="mb-6 mt-2">
                <h2 className="text-2xl font-bold text-foreground">System Diagnostics</h2>
                <p className="text-muted-foreground text-sm">Checking sensor reliability and data accuracy</p>
              </div>

              <div className="space-y-3 mb-6">
                {/* Moisture Sensor Card */}
                <Card className="p-4 border-none bg-white/40 backdrop-blur-md shadow-sm rounded-2xl flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Droplets className="w-4 h-4 text-primary" />
                      <h4 className="font-semibold text-sm">Soil Moisture Sensor</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-y-1">
                      <p className="text-xs text-muted-foreground">Status: <span className="text-green-600 font-medium">Working Normally</span></p>
                      <p className="text-xs text-muted-foreground">Signal: <span className="text-foreground font-medium">92%</span></p>
                      <p className="text-xs text-muted-foreground">Last Updated: <span className="text-foreground font-medium">1m ago</span></p>
                    </div>
                  </div>
                </Card>

                {/* Temperature Sensor Card */}
                <Card className="p-4 border-none bg-white/40 backdrop-blur-md shadow-sm rounded-2xl flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="w-4 h-4 text-warning" />
                      <h4 className="font-semibold text-sm">Air Temperature Sensor</h4>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Status: <span className="text-yellow-600 font-medium">Minor Fluctuation Detected</span></p>
                      <div className="flex justify-between">
                        <p className="text-xs text-muted-foreground">Variation: <span className="text-foreground font-medium">±2°C</span></p>
                      </div>
                      <p className="text-[10px] text-warning-foreground font-medium mt-1 bg-yellow-500/10 p-1.5 rounded-lg">
                        Recommendation: Recalibration suggested
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Data Connectivity Card */}
                <Card className="p-4 border-none bg-white/40 backdrop-blur-md shadow-sm rounded-2xl flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Wifi className="w-4 h-4 text-blue-500" />
                      <h4 className="font-semibold text-sm">Data Connectivity</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-y-1">
                      <p className="text-xs text-muted-foreground">Status: <span className="text-green-600 font-medium">Connected</span></p>
                      <p className="text-xs text-muted-foreground">Latency: <span className="text-foreground font-medium">120ms</span></p>
                      <p className="text-xs text-muted-foreground">Last Sync: <span className="text-foreground font-medium">Just Now</span></p>
                    </div>
                  </div>
                </Card>

                {/* Overall System Health Summary Card */}
                <Card className="p-5 border-none bg-primary/10 backdrop-blur-md shadow-sm rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-base">Overall System Status</h4>
                    </div>
                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Stable</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-muted-foreground font-medium">System Reliability</p>
                    <p className="text-xs font-bold text-primary">88%</p>
                  </div>
                  <Progress value={88} className="h-2 bg-primary/10" />
                </Card>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    setShowDiagnostics(false);
                    setMoistureValue("");
                    setTempValue("");
                    startFetching();
                  }}
                  className="w-full h-12 rounded-xl font-bold shadow-md bg-primary hover:bg-primary/90 text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Recalibrate Sensors
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setShowDiagnostics(false);
                    setIsManualInput(true);
                  }}
                  className="w-full h-12 rounded-xl font-bold border-black/10 hover:bg-black/5"
                >
                  <Keyboard className="w-4 h-4 mr-2" />
                  Switch to Manual Input
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
