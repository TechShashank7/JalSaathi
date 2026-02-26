import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Splash from "@/pages/splash";
import InputForm from "@/pages/input-form";
import Processing from "@/pages/processing";
import Result from "@/pages/result";
import Dashboard from "@/pages/dashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Splash} />
      <Route path="/input" component={InputForm} />
      <Route path="/processing" component={Processing} />
      <Route path="/result" component={Result} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-0 sm:p-6 md:p-12">
          {/* Mobile device frame */}
          <div className="w-full h-[100dvh] sm:h-auto sm:min-h-[800px] sm:max-w-[400px] bg-background sm:rounded-[2.5rem] sm:shadow-2xl relative overflow-hidden flex flex-col sm:border-[12px] border-neutral-900">
            <Toaster />
            <Router />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
