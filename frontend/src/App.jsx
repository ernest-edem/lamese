import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HealthAnalysis from "./pages/HealthAnalysis";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/analysis"
          element={<HealthAnalysis />}
        />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}