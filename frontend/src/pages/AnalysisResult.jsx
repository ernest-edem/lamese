import {
    FiHeart,
    FiActivity,
    FiClock,
    FiAlertTriangle,
  } from "react-icons/fi";

  import Sidebar from "../components/Sidebar";  
  import { useNavigate, useLocation } from "react-router-dom";
  
  export default function AnalysisResult() {
    const navigate = useNavigate();
  
    const location = useLocation();
  
    const result = location.state?.result;
  
    if (!result) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              No Analysis Found
            </h2>
  
            <p className="text-gray-500 mt-3">
              Please generate a health analysis first.
            </p>
  
            <button
              onClick={() => navigate("/analysis")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl"
            >
              Go To Analysis
            </button>
          </div>
        </div>
      );
    }
  
    const riskScore = result?.risk_score || 0;
  
    let riskLevel = "Low";
    let ringColor = "#22c55e";
    let bgColor = "bg-green-50";
    let textColor = "text-green-600";
    let borderColor = "border-green-100";
  
    if (riskScore >= 30 && riskScore < 60) {
      riskLevel = "Medium";
      ringColor = "#eab308";
      bgColor = "bg-yellow-50";
      textColor = "text-yellow-600";
      borderColor = "border-yellow-100";
    }
  
    if (riskScore >= 60 && riskScore < 85) {
      riskLevel = "High";
      ringColor = "#ef4444";
      bgColor = "bg-red-50";
      textColor = "text-red-600";
      borderColor = "border-red-100";
    }
  
    if (riskScore >= 85) {
      riskLevel = "Emergency";
      ringColor = "#dc2626";
      bgColor = "bg-red-100";
      textColor = "text-red-700";
      borderColor = "border-red-200";
    }
  
    const circumference = 2 * Math.PI * 85;
  
    const offset =
      circumference -
      (riskScore / 100) * circumference;
  
    return (
      <div className="min-h-screen bg-[#f4f7fb]">
        <div className="w-[1100px] max-w-full m-auto flex">
          {/* SIDEBAR */}
  
            <Sidebar />
  
          {/* MAIN CONTENT */}
  
          <main className="flex-1 p-8">
            {/* HEADER */}
  
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-800">
                  AI Health Analysis
                </h1>
  
                <p className="text-gray-500 mt-2">
                  AI-generated medical prediction and recommendations
                </p>
              </div>
  
              <button
                onClick={() => navigate("/analysis")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition"
              >
                New Analysis
              </button>
            </div>
  
            {/* TOP SECTION */}
  
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 mb-8">
              {/* RING GRAPH */}
  
              <div
                className={`
                  bg-white rounded-3xl p-8 border shadow-sm flex flex-col items-center justify-center
                  ${borderColor}
                  ${
                    riskLevel === "Emergency"
                      ? "animate-pulse"
                      : ""
                  }
                `}
              >
                <div className="relative w-[240px] h-[240px]">
                  <svg
                    width="240"
                    height="240"
                    className="-rotate-90"
                  >
                    <circle
                      cx="120"
                      cy="120"
                      r="85"
                      stroke="#e5e7eb"
                      strokeWidth="18"
                      fill="transparent"
                    />
  
                    <circle
                      cx="120"
                      cy="120"
                      r="85"
                      stroke={ringColor}
                      strokeWidth="18"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      style={{
                        transition:
                          "stroke-dashoffset 1.2s ease",
                      }}
                    />
                  </svg>
  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2
                      className={`text-5xl font-bold ${textColor}`}
                    >
                      {riskScore}%
                    </h2>
  
                    <p
                      className={`mt-2 text-lg font-semibold ${textColor}`}
                    >
                      {riskLevel}
                    </p>
                  </div>
                </div>
  
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Risk Assessment
                  </h3>
  
                  <p className="text-gray-500 mt-3 leading-7">
                    AI-generated disease risk analysis based on symptoms,
                    lifestyle and medical history.
                  </p>
                </div>
              </div>
  
              {/* RIGHT SIDE */}
  
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <FiAlertTriangle
                        size={28}
                        className="text-blue-600"
                      />
                    </div>
  
                    <div>
                      <p className="text-sm text-gray-500">
                        Predicted Disease
                      </p>
  
                      <h2 className="text-3xl font-bold text-gray-800 mt-1">
                        {result.disease}
                      </h2>
                    </div>
                  </div>
                </div>
  
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-500">
                    AI Confidence
                  </p>
  
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-5xl font-bold text-green-600">
                      {result.confidence}%
                    </h2>
  
                    <div className="w-[180px] bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{
                          width: `${result.confidence}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
  
                <div
                  className={`
                    rounded-3xl p-8 border shadow-sm
                    ${bgColor}
                    ${borderColor}
                  `}
                >
                  <p className="text-sm text-gray-500">
                    Risk Level
                  </p>
  
                  <div className="flex items-center justify-between mt-3">
                    <h2
                      className={`text-4xl font-bold ${textColor}`}
                    >
                      {riskLevel}
                    </h2>
  
                    <div
                      className={`
                        px-5 py-2 rounded-full text-sm font-semibold
                        ${bgColor}
                        ${textColor}
                      `}
                    >
                      {riskScore}% Risk
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* EXPLANATION */}
  
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                AI Explanation
              </h3>
  
              <p className="text-gray-600 leading-8">
                {result.explanation}
              </p>
            </div>
  
            {/* RECOMMENDATIONS */}
  
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                AI Recommendations
              </h3>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {result.recommendations?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5"
                    >
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2" />
  
                      <p className="text-gray-600 leading-7">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }