import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "8 AM", traffic: 40 },
  { time: "10 AM", traffic: 70 },
  { time: "12 PM", traffic: 95 },
  { time: "2 PM", traffic: 65 },
  { time: "4 PM", traffic: 90 },
  { time: "6 PM", traffic: 100 },
];

export default function TrafficChart() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mt-6">

      <h2 className="text-xl font-bold mb-4">
        📈 Traffic Density Analytics
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="time" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}