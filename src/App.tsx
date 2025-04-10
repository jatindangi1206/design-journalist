
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Editor from "./pages/Editor";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Section from "./pages/Section";
import DigitalDesign from "./pages/DigitalDesign";
import Photography from "./pages/Photography";
import VideoEditing from "./pages/VideoEditing";
import CSProjects from "./pages/CSProjects";
import BiologyResearch from "./pages/BiologyResearch";
import Writings from "./pages/Writings";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import { testSupabaseConnection } from "./lib/supabase";
import { toast } from "sonner";

const queryClient = new QueryClient();

const App = () => {
  // Moved useEffect to a separate component
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SupabaseConnectionTest />
            <Routes>
              <Route path="/" element={<Writings />} />
              <Route path="/home" element={<Index />} />
              <Route path="/article/:id" element={<Article />} />
              <Route 
                path="/editor" 
                element={
                  <PrivateRoute>
                    <Editor />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/editor/:id" 
                element={
                  <PrivateRoute>
                    <Editor />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/section/:category" element={<Section />} />
              
              {/* Dedicated pages for each section */}
              <Route path="/section/design" element={<DigitalDesign />} />
              <Route path="/section/photography" element={<Photography />} />
              <Route path="/section/video" element={<VideoEditing />} />
              <Route path="/section/cs" element={<CSProjects />} />
              <Route path="/section/biology" element={<BiologyResearch />} />
              <Route path="/section/writings" element={<Writings />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Separated the Supabase connection test into its own component
const SupabaseConnectionTest = () => {
  useEffect(() => {
    // Test the Supabase connection on app load
    testSupabaseConnection()
      .then((connected) => {
        if (connected) {
          console.log('Supabase connection verified');
        } else {
          toast.error('Could not connect to Supabase. Please check your credentials and network.');
        }
      });
  }, []);

  return null;
};

export default App;
