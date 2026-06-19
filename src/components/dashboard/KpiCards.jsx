import {
  AlertTriangle,
  Car,
  Ambulance,
  Brain,
} from "lucide-react";

const cards = [
  {
    title: "Active Incidents",
    value: "47",
    subtitle: "+12% Today",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Vehicles Monitored",
    value: "15,782",
    subtitle: "Live Count",
    icon: Car,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Avg Response",
    value: "4 min",
    subtitle: "Emergency",
    icon: Ambulance,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "AI Accuracy",
    value: "98.7%",
    subtitle: "Confidence",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-4 gap-5 mb-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className={`${card.bg} border border-slate-700 rounded-xl p-5 hover:scale-105 transition-all duration-300`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-400 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

                <p className="text-gray-400 mt-2 text-sm">
                  {card.subtitle}
                </p>

              </div>

              <Icon
                className={card.color}
                size={38}
              />

            </div>

          </div>

        );
      })}

    </div>
  );
}