import { CloudSun } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-5">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-400">
            Weather
          </p>

          <h2 className="text-4xl font-bold mt-2">
            28°C
          </h2>

          <p className="text-gray-400 mt-2">
            Partly Cloudy
          </p>

        </div>

        <CloudSun
          size={45}
          className="text-yellow-400"
        />

      </div>

      <div className="grid grid-cols-3 mt-6 text-center">

        <div>

          <p className="text-gray-500 text-sm">
            Wind
          </p>

          <h3>12 km/h</h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Humidity
          </p>

          <h3>71%</h3>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Visibility
          </p>

          <h3>8 km</h3>

        </div>

      </div>

    </div>
  );
}