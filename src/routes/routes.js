import LandingPage from "@/components/Layout/LandingPage";
import MarketPage from "@/components/main/MarketPage";
import TranscriptionPage from "@/components/main/TranscriptionPage";
import MultilingualPage from "@/components/main/MultilingualPage";
import DataentryPage from "@/components/main/DataentryPage";
import CreativePage from "@/components/main/CreativePage";
import PhotoeditPage from "@/components/main/PhotoeditPage";
import VirtualPage from "@/components/main/VirtualPage";
import FinancePage from "@/components/main/FinancePage";
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/outsource-market-research-services",
    name: "MarketPage",
    component: MarketPage,
  },
  {
    path: "/transcription-services",
    name: "TranscriptionPage",
    component: TranscriptionPage,
  },
  {
    path: "/multilingual-call-center-outsourcing",
    name: "MultilingualPage",
    component: MultilingualPage,
  },
  {
    path: "/data-entry",
    name: "DataentryPage",
    component: DataentryPage,
  },
  {
    path: "/outsource-creative-services",
    name: "CreativePage",
    component: CreativePage,
  },
  {
    path: "/outsource-photo-editing-services",
    name: "PhotoeditPage",
    component: PhotoeditPage,
  },
  {
    path: "/virtual-assistant-services",
    name: "VirtualPage",
    component: VirtualPage,
  },
  {
    path: "/financePage",
    name: "FinancePage",
    component: FinancePage,
  },
  { path: "/:notFound(.*)", component: null },
];

export default routes;
