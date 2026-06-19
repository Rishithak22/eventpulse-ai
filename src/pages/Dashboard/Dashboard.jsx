import DashboardLayout from "../../layouts/DashboardLayout";

import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import RightPanel from "../../components/layout/RightPanel";
import Footer from "../../components/layout/Footer";

import KpiCards from "../../components/dashboard/KpiCards";
import MapSection from "../../components/dashboard/MapSection";
import AISummary from "../../components/dashboard/AISummary";
import AIDetection from "../../components/dashboard/AIDetection";
import IncidentFeed from "../../components/dashboard/IncidentFeed";
import TrafficChart from "../../components/dashboard/TrafficChart";
import IncidentTable from "../../components/dashboard/IncidentTable";
import CCTVPanel from "../../components/dashboard/CCTVPanel";
import WeatherCard from "../../components/dashboard/WeatherCard";
import PatrolUnits from "../../components/dashboard/PatrolUnits";
import EmergencyResponse from "../../components/dashboard/EmergencyResponse";
import NotificationPanel from "../../components/dashboard/NotificationPanel";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="grid grid-cols-12 min-h-[calc(100vh-7rem)]">

        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="col-span-8 bg-slate-950 p-6 space-y-6 overflow-y-auto">

          {/* Dashboard */}
          <section id="dashboard">
            <KpiCards />
          </section>

          {/* Map */}
          <div className="grid grid-cols-12 gap-5">

            <div className="col-span-9 space-y-6">

              <section id="traffic">
                <MapSection />
              </section>

              <section id="incidents">
                <IncidentFeed />
              </section>

              <section id="analytics">
                <TrafficChart />
              </section>

              <section>
                <IncidentTable />
              </section>

              <section id="emergency">
                <EmergencyResponse />
              </section>

              <section id="reports">
                <NotificationPanel />
              </section>

            </div>

            {/* Right Panel */}
            <div className="col-span-3 space-y-5">

              <AISummary />

              <AIDetection />

              <CCTVPanel />

              <WeatherCard />

              <PatrolUnits />

            </div>

          </div>

        </main>

        {/* Right Sidebar */}
        <div className="col-span-2">
          <RightPanel />
        </div>

      </div>

      <Footer />
    </DashboardLayout>
  );
}