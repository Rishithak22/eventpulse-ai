import { useState } from "react";
import {
  Eye,
  CheckCircle,
  Clock3,
  AlertTriangle,
  X,
} from "lucide-react";

const incidents = [
  {
    id: "INC-201",
    location: "Anna Salai",
    severity: "High",
    status: "Active",
    officer: "Officer-12",
    confidence: "98.7%",
    police: "2 min",
    ambulance: "4 min",
  },
  {
    id: "INC-202",
    location: "Marina Beach",
    severity: "Medium",
    status: "Responding",
    officer: "Officer-08",
    confidence: "96.1%",
    police: "3 min",
    ambulance: "5 min",
  },
  {
    id: "INC-203",
    location: "T Nagar",
    severity: "Low",
    status: "Resolved",
    officer: "Officer-05",
    confidence: "94.5%",
    police: "Completed",
    ambulance: "Completed",
  },
  {
    id: "INC-204",
    location: "Guindy",
    severity: "High",
    status: "Active",
    officer: "Officer-10",
    confidence: "99.1%",
    police: "1 min",
    ambulance: "3 min",
  },
];

export default function IncidentTable() {
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <>
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Incident Management
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
            View All
          </button>
        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-gray-400">

              <th className="text-left py-3">ID</th>
              <th className="text-left">Location</th>
              <th className="text-left">Severity</th>
              <th className="text-left">Status</th>
              <th className="text-left">Officer</th>
              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {incidents.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="py-4 font-semibold">
                  {item.id}
                </td>

                <td>{item.location}</td>

                <td>

                  {item.severity === "High" && (
                    <span className="text-red-400 font-semibold">
                      🔴 High
                    </span>
                  )}

                  {item.severity === "Medium" && (
                    <span className="text-yellow-400 font-semibold">
                      🟡 Medium
                    </span>
                  )}

                  {item.severity === "Low" && (
                    <span className="text-green-400 font-semibold">
                      🟢 Low
                    </span>
                  )}

                </td>

                <td>

                  {item.status === "Active" && (
                    <span className="flex items-center gap-1 text-red-400">
                      <AlertTriangle size={16} />
                      Active
                    </span>
                  )}

                  {item.status === "Responding" && (
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Clock3 size={16} />
                      Responding
                    </span>
                  )}

                  {item.status === "Resolved" && (
                    <span className="flex items-center gap-1 text-green-400">
                      <CheckCircle size={16} />
                      Resolved
                    </span>
                  )}

                </td>

                <td>{item.officer}</td>

                <td className="text-center">

                  <button
                    onClick={() => setSelectedIncident(item)}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg flex items-center gap-2 mx-auto"
                  >
                    <Eye size={16} />
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selectedIncident && (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-[500px]">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold">
                🚨 Incident Details
              </h2>

              <button
                onClick={() => setSelectedIncident(null)}
              >
                <X />
              </button>

            </div>

            <div className="space-y-3">

              <p><strong>ID:</strong> {selectedIncident.id}</p>

              <p><strong>Location:</strong> {selectedIncident.location}</p>

              <p><strong>Severity:</strong> {selectedIncident.severity}</p>

              <p><strong>Status:</strong> {selectedIncident.status}</p>

              <p><strong>Assigned Officer:</strong> {selectedIncident.officer}</p>

              <p><strong>AI Confidence:</strong> {selectedIncident.confidence}</p>

              <p><strong>Police ETA:</strong> {selectedIncident.police}</p>

              <p><strong>Ambulance ETA:</strong> {selectedIncident.ambulance}</p>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => alert("Emergency Units Dispatched Successfully")}
                className="flex-1 bg-red-600 hover:bg-red-700 rounded-lg py-3"
              >
                Dispatch
              </button>

              <button
                onClick={() => setSelectedIncident(null)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 rounded-lg py-3"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
}