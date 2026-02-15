import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookCourt from "./pages/BookCourt";
import Tennis from "./pages/Tennis";
import Padel from "./pages/Padel";
import Pickleball from "./pages/Pickleball";
import Gym from "./pages/Gym";
import Shop from "./pages/Shop";
import Membership from "./pages/Membership";
import ClubInfo from "./pages/about/ClubInfo";
import Board from "./pages/about/Board";
import AnnualReports from "./pages/about/AnnualReports";
import BoardMinutes from "./pages/about/BoardMinutes";
import Staff from "./pages/about/Staff";
import History from "./pages/about/History";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boka-bana" element={<BookCourt />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/padel" element={<Padel />} />
          <Route path="/pickleball" element={<Pickleball />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bli-medlem" element={<Membership />} />
          <Route path="/om-oss/klubbinfo" element={<ClubInfo />} />
          <Route path="/om-oss/styrelsen" element={<Board />} />
          <Route path="/om-oss/arsberattelser" element={<AnnualReports />} />
          <Route path="/om-oss/styrelseprotokoll" element={<BoardMinutes />} />
          <Route path="/om-oss/personal" element={<Staff />} />
          <Route path="/om-oss/historik" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
