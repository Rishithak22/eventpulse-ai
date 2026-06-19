import {
  CarFront,
  Ambulance,
  Shield,
} from "lucide-react";

const units = [
  {
    name: "Police Unit 12",
    status: "Available",
    icon: Shield,
    color: "text-green-400",
  },
  {
    name: "Ambulance 07",
    status: "Responding",
    icon: Ambulance,
    color: "text-yellow-400",
  },
  {
    name: "Traffic Vehicle 05",
    status: "Patrolling",
    icon: CarFront,
    color: "text-blue-400",
  },
];

export default function PatrolUnits() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-5">

      <h2 className="font-bold text-lg mb-4">
        🚓 Patrol Units
      </h2>

      <div className="space-y-3">

        {units.map((unit) => {

          const Icon = unit.icon;

          return (

            <div
              key={unit.name}
              className="bg-slate-800 rounded-lg p-3 flex justify-between items-center"
            >

              <div className="flex gap-3 items-center">

                <Icon
                  className={unit.color}
                  size={22}
                />

                <div>

                  <h3>{unit.name}</h3>

                  <p className="text-gray-400 text-sm">
                    {unit.status}
                  </p>

                </div>

              </div>

              <span className="w-3 h-3 bg-green-400 rounded-full"></span>

            </div>

          );

        })}

      </div>

    </div>
  );
}