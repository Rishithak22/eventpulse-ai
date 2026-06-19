import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapSection() {
  const [dispatched, setDispatched] = useState(false);

const handleDispatch = () => {
  setDispatched(true);

  setTimeout(() => {
    alert(
      "🚨 Emergency Units Dispatched Successfully!\n\n" +
      "🚓 Patrol-07 Assigned\n" +
      "🚑 Ambulance AMB-12 Assigned\n" +
      "🚦 Route B Activated"
    );
  }, 200);
};
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 h-[670px]">

      <div className="flex justify-between mb-4">

        <div>
          <h2 className="text-3xl font-bold">
            Live Traffic Monitoring
          </h2>

          <p className="text-gray-400">
            AI Powered Smart City Surveillance
          </p>
        </div>

        <div className="text-green-400 font-bold text-lg">
          ● LIVE
        </div>

      </div>

      <MapContainer
        center={[13.0827, 80.2707]}
        zoom={12}
        className="h-[520px] rounded-xl"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Accident */}

        <Marker position={[13.0827, 80.2707]}>
          <Popup>
  <div className="w-64">

    <h2 className="text-red-600 font-bold text-lg">
      🚨 Accident Detected
    </h2>

    <hr className="my-2" />

    <p><strong>Location:</strong> Anna Salai Junction</p>
    <p><strong>Severity:</strong> HIGH</p>
    <p><strong>AI Confidence:</strong> 98.7%</p>
    <p><strong>Vehicles:</strong> 3</p>
    <p><strong>Police ETA:</strong> 2 min</p>
    <p><strong>Ambulance ETA:</strong> 4 min</p>

    {dispatched && (
      <div className="mt-3 bg-green-500/20 border border-green-500 rounded-lg p-2 text-green-300 text-sm">
        ✅ Emergency Units Dispatched
      </div>
    )}

    <button
      onClick={handleDispatch}
      disabled={dispatched}
      className={`mt-3 w-full py-2 rounded-lg text-white transition ${
        dispatched
          ? "bg-green-600 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {dispatched ? "✓ Dispatched" : "Dispatch Emergency"}
    </button>

  </div>
</Popup>
        </Marker>

        {/* Police */}

        <Marker position={[13.076, 80.265]}>
          <Popup>

            <div className="w-60">

              <h2 className="text-blue-600 font-bold text-lg">
                🚓 Police Patrol Unit
              </h2>

              <hr className="my-2" />

              <p><strong>Unit:</strong> Patrol-07</p>

              <p><strong>Status:</strong> Available</p>

              <p><strong>Distance:</strong> 1.2 km</p>

              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
                Assign Unit
              </button>

            </div>

          </Popup>
        </Marker>

        {/* Ambulance */}

        <Marker position={[13.088, 80.282]}>
          <Popup>

            <div className="w-60">

              <h2 className="text-green-600 font-bold text-lg">
                🚑 Ambulance
              </h2>

              <hr className="my-2" />

              <p><strong>Vehicle:</strong> AMB-12</p>

              <p><strong>Status:</strong> Ready</p>

              <p><strong>ETA:</strong> 4 min</p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg">
                Dispatch Ambulance
              </button>

            </div>

          </Popup>
        </Marker>

        {/* CCTV */}

        <Marker position={[13.071, 80.295]}>
          <Popup>

            <div className="w-60">

              <h2 className="text-purple-600 font-bold text-lg">
                📹 CCTV Camera
              </h2>

              <hr className="my-2" />

              <p><strong>Camera:</strong> CAM-14</p>

              <p><strong>Status:</strong> Online</p>

              <p><strong>AI Detection:</strong> Vehicle Collision</p>

            </div>

          </Popup>
        </Marker>

        {/* Traffic */}

        <Marker position={[13.095, 80.248]}>
          <Popup>

            <div className="w-60">

              <h2 className="text-orange-500 font-bold text-lg">
                🚦 Heavy Traffic
              </h2>

              <hr className="my-2" />

              <p><strong>Congestion:</strong> 82%</p>

              <p><strong>Average Speed:</strong> 14 km/h</p>

              <p><strong>Suggestion:</strong> Divert Traffic</p>

            </div>

          </Popup>
        </Marker>

      </MapContainer>

      <div className="flex flex-wrap gap-5 mt-5 text-sm">

        <div>🚨 Accident</div>

        <div>🚓 Police Unit</div>

        <div>🚑 Ambulance</div>

        <div>📹 CCTV Camera</div>

        <div>🚦 Heavy Traffic</div>

      </div>

    </div>
  );
}