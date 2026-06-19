import {
  Car,
  Shield,
  AlertTriangle,
  Route,
  Brain,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Vehicles Detected",
    value: "12,854",
    icon: Car,
    color: "text-blue-400",
  },
  {
    title: "Helmet Violations",
    value: "17",
    icon: Shield,
    color: "text-green-400",
  },
  {
    title: "Overspeed Cases",
    value: "28",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    title: "Wrong Way Vehicles",
    value: "5",
    icon: Route,
    color: "text-yellow-400",
  },
  {
    title: "Crowd Density",
    value: "Moderate",
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "AI Confidence",
    value: "98.7%",
    icon: Brain,
    color: "text-cyan-400",
  },
];

export default function AIDetection() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-5">

      <h2 className="text-xl font-bold mb-5">
        🤖 AI Detection Summary
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition"
            >

              <Icon
                className={`${item.color} mb-3`}
                size={28}
              />

              <p className="text-gray-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.value}
              </h3>

            </div>

          );

        })}

      </div>

    </div>
  );
}