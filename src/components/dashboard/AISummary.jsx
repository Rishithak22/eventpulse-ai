import { useState } from "react";
import {
  Brain,
  AlertTriangle,
  Ambulance,
  ShieldCheck,
} from "lucide-react";

export default function AISummary() {
  const [status, setStatus] = useState("Active");
  const [buttonText, setButtonText] = useState("Dispatch Emergency Units");

  const dispatchEmergency = () => {
    setStatus("Responding");
    setButtonText("✓ Units Dispatched");

    alert(
      "Emergency Units Dispatched Successfully!\n\nPolice ETA: 2 min\nAmbulance ETA: 4 min"
    );
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 p-5 mb-5">

      <div className="flex items-center gap-3 mb-4">
        <Brain className="text-violet-500" size={28} />
        <h2 className="text-xl font-semibold">
          AI Incident Analysis
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Incident</span>
          <span className="text-red-400 font-semibold">
            Accident Detected
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Location</span>
          <span className="text-blue-400 font-semibold">
            Anna Salai Junction
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Confidence</span>
          <span className="text-green-400 font-semibold">
            98.7%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Severity</span>
          <span className="text-red-500 font-bold">
            HIGH
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>

          <span
            className={`font-bold ${
              status === "Active"
                ? "text-red-400"
                : "text-yellow-400"
            }`}
          >
            {status}
          </span>
        </div>

      </div>

      <hr className="border-slate-700 my-5" />

      <div className="space-y-3">

        <div className="flex items-center gap-2">
          <Ambulance
            className="text-green-400"
            size={20}
          />

          <span>Ambulance ETA : 4 min</span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck
            className="text-blue-400"
            size={20}
          />

          <span>Police ETA : 2 min</span>
        </div>

        <div className="flex items-center gap-2">
          <AlertTriangle
            className="text-yellow-400"
            size={20}
          />

          <span>Suggested Diversion Available</span>
        </div>

      </div>

      <button
        onClick={dispatchEmergency}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 rounded-lg py-3 font-semibold transition-all duration-300"
      >
        {buttonText}
      </button>

    </div>
  );
}