import { useState } from "react";
import {
  Ambulance,
  Shield,
  Route,
  Siren,
  Clock3,
  CheckCircle,
} from "lucide-react";

export default function EmergencyResponse() {
  const [dispatched, setDispatched] = useState(false);
  const [resolved, setResolved] = useState(false);

  const handleDispatch = () => {
    setDispatched(true);

    setTimeout(() => {
      alert(
        "🚨 Emergency Units Dispatched Successfully!\n\n" +
        "🚓 Police Patrol-07 Assigned\n" +
        "🚑 Ambulance AMB-12 Assigned\n" +
        "🚦 Route B Activated"
      );
    }, 200);
  };

  const handleResolve = () => {
    setResolved(true);

    setTimeout(() => {
      alert("✅ Incident Marked as Resolved");
    }, 200);
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-6">

      <h2 className="text-2xl font-bold mb-5">
        🚨 Emergency Response Center
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Ambulance className="text-green-400" />
            <div>
              <h3 className="font-semibold">Ambulance</h3>
              <p className="text-gray-400 text-sm">
                Unit AMB-12
              </p>
            </div>
          </div>

          <span className="text-green-400 font-semibold">
            ETA 4 min
          </span>
        </div>

        <div className="flex justify-between items-center bg-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-400" />
            <div>
              <h3 className="font-semibold">Police Patrol</h3>
              <p className="text-gray-400 text-sm">
                Patrol-07
              </p>
            </div>
          </div>

          <span className="text-blue-400 font-semibold">
            ETA 2 min
          </span>
        </div>

        <div className="flex justify-between items-center bg-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Route className="text-yellow-400" />
            <div>
              <h3 className="font-semibold">
                Traffic Diversion
              </h3>
              <p className="text-gray-400 text-sm">
                Route B Activated
              </p>
            </div>
          </div>

          <span className="text-yellow-400 font-semibold">
            Ready
          </span>
        </div>

      </div>

      {dispatched && (
        <div className="mt-5 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3">

          <CheckCircle className="text-green-400" />

          <div>
            <h3 className="font-semibold text-green-400">
              Emergency Units Dispatched
            </h3>

            <p className="text-sm text-gray-300">
              Police, Ambulance and Diversion Team have been assigned.
            </p>
          </div>

        </div>
      )}

      {resolved && (
        <div className="mt-4 bg-blue-500/20 border border-blue-500 rounded-lg p-4">

          <p className="text-blue-300 font-semibold">
            ✔ Incident Successfully Resolved
          </p>

        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <button
          onClick={handleDispatch}
          disabled={dispatched}
          className={`rounded-lg py-3 flex justify-center items-center gap-2 transition-all duration-300 ${
            dispatched
              ? "bg-green-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          <Siren size={20} />

          {dispatched ? "Units Dispatched" : "Dispatch All"}
        </button>

        <button
          onClick={handleResolve}
          disabled={resolved}
          className={`rounded-lg py-3 flex justify-center items-center gap-2 transition-all duration-300 ${
            resolved
              ? "bg-blue-700 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <Clock3 size={20} />

          {resolved ? "Resolved" : "Mark Resolved"}
        </button>

      </div>

    </div>
  );
}