import {
  AlertTriangle,
  Car,
  ShieldAlert,
  Ambulance,
} from "lucide-react";

const incidents = [
  {
    type: "Major Accident",
    place: "Anna Salai",
    time: "2 min ago",
    color: "bg-red-500",
    icon: AlertTriangle,
  },

  {
    type: "Traffic Congestion",
    place: "T Nagar",
    time: "5 min ago",
    color: "bg-yellow-500",
    icon: Car,
  },

  {
    type: "Wrong Way Vehicle",
    place: "OMR",
    time: "Now",
    color: "bg-orange-500",
    icon: ShieldAlert,
  },

  {
    type: "Ambulance Requested",
    place: "Airport Road",
    time: "1 min ago",
    color: "bg-green-500",
    icon: Ambulance,
  },
];

export default function IncidentFeed() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 p-5">

      <h2 className="text-xl font-bold mb-5">
        🚨 Live Incident Feed
      </h2>

      <div className="space-y-4">

        {incidents.map((incident, index) => {

          const Icon = incident.icon;

          return (

            <div
              key={index}
              className="flex items-center justify-between bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition"
            >

              <div className="flex gap-3 items-center">

                <div className={`${incident.color} p-2 rounded-lg`}>
                  <Icon size={18} />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {incident.type}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {incident.place}
                  </p>

                </div>

              </div>

              <span className="text-xs text-gray-400">
                {incident.time}
              </span>

            </div>

          );

        })}

      </div>

    </div>
  );
}