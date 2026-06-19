export default function RightPanel() {
  return (
    <aside className="bg-slate-900 h-full p-5 border-l border-slate-700">

      <h2 className="text-xl font-bold mb-4">
        Live Alerts
      </h2>

      <div className="bg-red-500 rounded-lg p-4 mb-4">
        🚨 Accident Detected
      </div>

      <div className="bg-yellow-500 text-black rounded-lg p-4 mb-4">
        🚧 Traffic Congestion
      </div>

      <div className="bg-green-500 rounded-lg p-4">
        🚑 Ambulance Dispatched
      </div>

    </aside>
  );
}