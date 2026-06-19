import {
  Camera,
  AlertTriangle,
  Car,
  Shield,
} from "lucide-react";

const cameras = [
  {
    id: "CAM-01",
    location: "Anna Salai",
    status: "Live",
    detection: "Accident Detected",
    color: "bg-red-500",
    icon: AlertTriangle,
  },
  {
    id: "CAM-02",
    location: "Central Junction",
    status: "Live",
    detection: "Heavy Traffic",
    color: "bg-yellow-500",
    icon: Car,
  },
  {
    id: "CAM-03",
    location: "Airport Road",
    status: "Live",
    detection: "Helmet Detection",
    color: "bg-green-500",
    icon: Shield,
  },
];

export default function CCTVPanel() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-6">

      <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
        <Camera className="text-blue-500" />
        Live CCTV Monitoring
      </h2>

      <div className="space-y-4">

        {cameras.map((camera) => {

          const Icon = camera.icon;

          return (

            <div
              key={camera.id}
              className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="font-bold">
                    {camera.id}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {camera.location}
                  </p>

                </div>

                <span className="text-green-400 text-sm">
                  ● LIVE
                </span>

              </div>

              <div className="mt-4 flex items-center gap-3">

                <div className={`${camera.color} p-2 rounded-lg`}>
                  <Icon size={18} />
                </div>

                <span>{camera.detection}</span>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}