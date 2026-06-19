import { useState, useEffect } from "react";
import {
  Bell,
  AlertTriangle,
  Ambulance,
  Camera,
  Car,
} from "lucide-react";

const notifications = [
  {
    icon: AlertTriangle,
    color: "text-red-500",
    title: "Major Accident",
    place: "Anna Salai",
  },
  {
    icon: Ambulance,
    color: "text-green-500",
    title: "Ambulance Dispatched",
    place: "Airport Road",
  },
  {
    icon: Camera,
    color: "text-blue-500",
    title: "Helmet Violation",
    place: "Camera 12",
  },
  {
    icon: Car,
    color: "text-yellow-500",
    title: "Heavy Traffic",
    place: "OMR Junction",
  },
];

export default function NotificationPanel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const item = notifications[index];
  const Icon = item.icon;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-5">

      <div className="flex items-center gap-2 mb-5">

        <Bell className="text-blue-500" />

        <h2 className="text-xl font-bold">
          Live Notifications
        </h2>

      </div>

      <div className="bg-slate-800 rounded-xl p-5 transition-all duration-500">

        <Icon
          className={`${item.color} mb-3`}
          size={35}
        />

        <h3 className="text-lg font-bold">
          {item.title}
        </h3>

        <p className="text-gray-400 mt-2">
          {item.place}
        </p>

        <p className="text-sm text-blue-400 mt-4">
          Just Now
        </p>

      </div>

    </div>
  );
}