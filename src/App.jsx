// App.jsx

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import SpotlightLayout from "./layout/SpotlightLayout";

import Home from "./pages/Home";
import Spotlight from "./pages/spotlight";
import SubmitPortfolio from "./pages/SubmitPortfolio";
import SubmissionGuidelines from "./pages/SubmissionGuidelines";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SubmissionPolicy from "./pages/SubmissionPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";
import SuccessMessage from "./components/SuccessMessage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="bg-black text-white">
     <Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: "#0b0b0b",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "16px 18px",
      borderRadius: "14px",
    },
    success: {
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    },
  }}
/>
      {/* AUTO SCROLL TO TOP */}
      <ScrollToTop />
      <ScrollToHashElement/>

      {/* CURSOR GLOW */}
      <div
        id="cursor-glow-wrapper"
        className="
          fixed
          inset-0
          z-[9999]
          pointer-events-none
          transition-opacity
          duration-300
        "
      >
        <CursorGlow />
      </div>

      <Routes>

        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
        </Route>

        {/* SPOTLIGHT WEBSITE */}
        <Route element={<SpotlightLayout />}>

          <Route
            path="/spotlight"
            element={<Spotlight />}
          />

          <Route
            path="/submit-portfolio"
            element={<SubmitPortfolio />}
          />

          <Route
            path="/submission-guidelines"
            element={<SubmissionGuidelines />}
          />

          <Route
            path="/message"
            element={<SuccessMessage />}
          />

          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />
          <Route
            path="/Submission-policy"
            element={<SubmissionPolicy />}
          />
          <Route
            path="/refund-policy"
            element={<RefundPolicy />}
          />

        </Route>

      </Routes>
    </div>
  );
}

export default App;