import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Traffic from "./pages/Traffic/Traffic";
import Incidents from "./pages/Incidents/Incidents";
import Emergency from "./pages/Emergency/Emergency";
import Reports from "./pages/Reports/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;