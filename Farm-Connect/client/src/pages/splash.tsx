import { Link } from "wouter";
import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 text-center animate-in fade-in duration-700 bg-background h-full">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        <div className="bg-primary/10 p-6 rounded-full mb-8">
          <Droplets className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-3 tracking-tight">JalMitra</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Smart Irrigation Decision Assistant
        </p>
      </div>
      <div className="w-full pb-8">
        <Link href="/input">
          <Button className="w-full text-lg h-14 rounded-xl shadow-lg font-medium" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
