export default function Sidebar() {

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
    <aside className="bg-slate-900 h-full p-5 border-r border-slate-700">

      <h2 className="text-xl font-bold mb-6">
        Navigation
      </h2>

      <div className="space-y-4">

        <button
          onClick={() => scrollToSection("dashboard")}
          className="w-full text-left bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("incidents")}
          className="w-full text-left bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Incidents
        </button>

        <button
          onClick={() => scrollToSection("traffic")}
          className="w-full text-left bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Traffic
        </button>

        <button
          onClick={() => scrollToSection("emergency")}
          className="w-full text-left bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Emergency
        </button>

        <button
          onClick={() => scrollToSection("reports")}
          className="w-full text-left bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Reports
        </button>

      </div>

    </aside>
  );
}