import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Bell,
  UserCircle,
  Activity,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-8">

        <h1 className="text-2xl font-bold text-blue-500">
          🚔 EventPulse AI
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-300">

  <Link to="/">
    <li className="hover:text-blue-400 cursor-pointer">
      Dashboard
    </li>
  </Link>

  <Link to="/traffic">
    <li className="hover:text-blue-400 cursor-pointer">
      Traffic
    </li>
  </Link>

  <Link to="/incidents">
    <li className="hover:text-blue-400 cursor-pointer">
      Incidents
    </li>
  </Link>

  <Link to="/emergency">
    <li className="hover:text-blue-400 cursor-pointer">
      Emergency
    </li>
  </Link>

  <Link to="/reports">
    <li className="hover:text-blue-400 cursor-pointer">
      Reports
    </li>
  </Link>

</ul>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="hidden lg:flex items-center bg-slate-800 px-3 py-2 rounded-lg">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>

        <div className="flex items-center gap-2 text-green-400">
          <Activity size={18} />
          <span className="text-sm">
            System Online
          </span>
        </div>

        <div className="text-cyan-400 font-semibold text-sm">
          {time}
        </div>

        <Bell
          className="cursor-pointer hover:text-blue-400"
          size={22}
        />

        <UserCircle
          className="cursor-pointer hover:text-blue-400"
          size={28}
        />

      </div>

    </nav>
  );
}