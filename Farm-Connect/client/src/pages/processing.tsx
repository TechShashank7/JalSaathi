import { useEffect } from "react";
import { useLocation } from "wouter";
import { Droplets } from "lucide-react";

export default function Processing() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/result");
    }, 2500);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-background animate-in fade-in duration-300">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
        <div className="relative bg-primary/10 p-6 rounded-full shadow-inner">
          <Droplets className="w-12 h-12 text-primary animate-pulse" />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-3">Analyzing Soil &<br/>Climate Conditions...</h2>
      <p className="text-muted-foreground text-lg">Please wait a moment while we process the data.</p>
    </div>
  );
}
