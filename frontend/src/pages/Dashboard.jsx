import {
    FiActivity,
    FiAlertCircle,
    FiClock,
    FiHeart,
    FiTrendingUp,
    FiPlus,
    FiCpu,
  } from "react-icons/fi";
  
  import { useNavigate } from "react-router-dom";
  
  export default function Dashboard() {
    const navigate = useNavigate();
  
    const healthTrends = [
      {
        day: "Mon",
        score: 72,
      },
      {
        day: "Tue",
        score: 81,
      },
      {
        day: "Wed",
        score: 65,
      },
      {
        day: "Thu",
        score: 90,
      },
      {
        day: "Fri",
        score: 82,
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#f4f7fb] py-6">
        {/* CENTERED LAYOUT */}
  
        <div className="w-[1100px] max-w-full m-auto flex bg-[#f4f7fb]">
          {/* SIDEBAR */}
  
          <aside className="hidden lg:flex w-[260px] bg-white border-r border-gray-200 flex-col p-6 rounded-l-3xl">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-blue-700">
                LAMESE AI
              </h1>
  
              <p className="text-sm text-gray-500 mt-2">
                Intelligent Health Platform
              </p>
            </div>
  
            <nav className="flex flex-col gap-4">
              <button className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-xl">
                <FiActivity size={20} />
                Dashboard
              </button>
  
              <button
                onClick={() => navigate("/analysis")}
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-3 rounded-xl transition"
              >
                <FiHeart size={20} />
                Health Analysis
              </button>
  
              <button
                onClick={() => navigate("/history")}
                className="flex items-center gap-3 hover:bg-gray-100 px-4 py-3 rounded-xl transition"
              >
                <FiClock size={20} />
                History
              </button>
            </nav>
  
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
  
          {/* MAIN CONTENT */}
  
          <main className="flex-1 p-4 md:p-8 bg-[#f4f7fb]">
            {/* TOP BAR */}
  
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Medical Dashboard
                </h1>
  
                <p className="text-gray-500 mt-2">
                  Monitor health insights and AI predictions
                </p>
              </div>
  
              <button
                onClick={() => navigate("/analysis")}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
              >
                <FiPlus />
                New Analysis
              </button>
            </div>
  
            {/* HEALTH OVERVIEW */}
  
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {/* HEALTH SCORE */}
  
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Health Score
                    </p>
  
                    <h2 className="text-4xl font-bold mt-3 text-gray-800">
                      82
                    </h2>
                  </div>
  
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <FiHeart
                      size={28}
                      className="text-blue-600"
                    />
                  </div>
                </div>
  
                <div className="mt-5">
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[82%]" />
                  </div>
  
                  <p className="text-sm text-gray-500 mt-2">
                    Good condition
                  </p>
                </div>
              </div>
  
              {/* RISK LEVEL */}
  
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">
                      Risk Level
                    </p>
  
                    <h2 className="text-4xl font-bold mt-3 text-red-500">
                      High
                    </h2>
                  </div>
  
                  <div className="bg-red-100 p-4 rounded-2xl">
                    <FiAlertCircle
                      size={28}
                      className="text-red-500"
                    />
                  </div>
                </div>
  
                <p className="text-sm text-gray-500 mt-5">
                  Elevated diabetes risk detected
                </p>
              </div>
  
              {/* AI CONFIDENCE */}
  
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">
                      AI Confidence
                    </p>
  
                    <h2 className="text-4xl font-bold mt-3 text-gray-800">
                      91%
                    </h2>
                  </div>
  
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <FiTrendingUp
                      size={28}
                      className="text-green-600"
                    />
                  </div>
                </div>
  
                <p className="text-sm text-gray-500 mt-5">
                  High prediction confidence
                </p>
              </div>
            </section>
  
            {/* MIDDLE LAYER */}
  
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* START ANALYSIS */}
  
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-7 text-white">
                <div className="bg-white/20 w-fit p-4 rounded-2xl">
                  <FiHeart size={28} />
                </div>
  
                <h2 className="text-2xl font-bold mt-6">
                  Start Health Analysis
                </h2>
  
                <p className="mt-3 text-blue-100 leading-7">
                  Analyze symptoms and receive
                  AI-powered medical predictions.
                </p>
  
                <button
                  onClick={() => navigate("/analysis")}
                  className="mt-6 bg-white text-blue-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                  Analyze Now
                </button>
              </div>
  
              {/* AI RECOMMENDATION */}
  
              <div className="lg:col-span-2 bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
  <div className="bg-purple-100 w-fit p-4 rounded-2xl">
    <FiCpu
      size={30}
      className="text-purple-600"
    />
  </div>

  <h2 className="text-2xl font-bold text-gray-800">
    AI Recommendation Engine
  </h2>
</div>
  
                  
                </div>
  
                <p className="mt-5 text-gray-500 leading-8">
                  LAMESE AI combines uploaded
                  medical records, symptom patterns,
                  voice-based symptom descriptions,
                  and historical health analyses to
                  generate the most current and
                  intelligent disease risk assessments
                  and personalized health recommendations.
                </p>
  
                
              </div>
            </section>
  
            {/* HEALTH TREND GRAPH */}
  
            <section className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Health Trend Analysis
                  </h2>
  
                  <p className="text-gray-500 mt-2">
                    Most recent 5 AI health analyses
                  </p>
                </div>
  
                <div className="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-medium">
                  Live Analytics
                </div>
              </div>
  
              {/* BAR GRAPH */}
  
              <div className="flex items-end justify-between gap-4 h-[320px]">
                {healthTrends.map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div className="mb-3 text-sm font-semibold text-gray-700">
                      {item.score}%
                    </div>
  
                    <div className="w-full bg-gray-100 rounded-t-3xl relative overflow-hidden h-[260px] flex items-end">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-3xl transition-all duration-500"
                        style={{
                          height: `${item.score}%`,
                        }}
                      />
                    </div>
  
                    <div className="mt-4 text-gray-500 font-medium">
                      {item.day}
                    </div>
                  </div>
                ))}
              </div>
            </section>
  
            {/* DISCLAIMER */}
  
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <p className="text-sm text-yellow-800 leading-7">
                This AI platform provides preliminary
                health insights and does not replace
                professional medical advice, diagnosis,
                or treatment.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }