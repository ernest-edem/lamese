import {
    FiActivity,
    FiHeart,
    FiClock,
  } from "react-icons/fi";
  
  import { useNavigate, useLocation } from "react-router-dom";
  
  export default function Sidebar() {
    const navigate = useNavigate();
  
    const location = useLocation();
  
    const navItemClass = (path) => {
      const isActive = location.pathname === path;
  
      return `
        flex items-center gap-3 px-4 py-3 rounded-xl transition w-full
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-100 text-gray-700"
        }
      `;
    };
  
    return (
      <aside className="hidden lg:flex w-[260px] bg-white border-r border-gray-200 flex-col p-6 rounded-l-3xl">
        {/* LOGO */}
  
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            LAMESE AI
          </h1>
  
          <p className="text-sm text-gray-500 mt-2">
            Intelligent Health Platform
          </p>
        </div>
  
        {/* NAVIGATION */}
  
        <nav className="flex flex-col gap-4">
          {/* DASHBOARD */}
  
          <button
            onClick={() => navigate("/dashboard")}
            className={navItemClass("/dashboard")}
          >
            <FiActivity size={20} />
            Dashboard
          </button>
  
          {/* HEALTH ANALYSIS */}
  
          <button
            onClick={() => navigate("/analysis-result")}
            className={navItemClass("/analysis-result")}
          >
            <FiHeart size={20} />
            Health Analysis
          </button>
  
          {/* HISTORY */}
  
          <button
            onClick={() => navigate("/history")}
            className={navItemClass("/history")}
          >
            <FiClock size={20} />
            History
          </button>
        </nav>
  
        {/* FOOTER CARD */}
  
        <div className="mt-auto bg-blue-50 rounded-2xl p-5">
          <h2 className="font-semibold text-blue-700">
            AI Medical Assistant
          </h2>
  
          <p className="text-sm text-gray-600 mt-2 leading-6">
            Upload records, analyze symptoms,
            and receive AI-powered health insights.
          </p>
        </div>
      </aside>
    );
  }