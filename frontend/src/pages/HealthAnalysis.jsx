import { useState } from "react";

import {
  FiArrowRight,
  FiArrowLeft,
  FiMic,
  FiUpload,
  FiHeart,
  FiX,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { analyzeHealth } from "../api/healthApi";

export default function HealthAnalysis() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    symptoms: "",

    sleep: 7,

    exercise: "",
    smoking: "",
    alcohol: "",
    diet: "",

    familyHistory: [],
  });

  const familyOptions = [
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Cancer",
    "Asthma",
    "Stroke",
    "Obesity",
  ];

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  const handleFamilyHistory = (value) => {
    if (formData.familyHistory.includes(value)) {
      setFormData({
        ...formData,
        familyHistory: formData.familyHistory.filter(
          (item) => item !== value
        ),
      });
    } else {
      setFormData({
        ...formData,
        familyHistory: [
          ...formData.familyHistory,
          value,
        ],
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await analyzeHealth(formData);

      navigate("/analysis-result", {
        state: {
          result: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderButtonGroup = (
    title,
    field,
    options
  ) => {
    return (
      <div className="flex items-center justify-between gap-4">
        <label className="font-medium text-gray-700 min-w-[100px]">
          {title}
        </label>

        <div className="flex flex-wrap justify-end gap-3">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  [field]: option,
                })
              }
              className={`
                px-4 py-2 rounded-xl border transition text-sm
                ${
                  formData[field] === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-6">
      <div className="w-[600px] h-[620px] bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100 flex flex-col relative">
        {/* CLOSE BUTTON */}

        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
        >
          <FiX size={22} />
        </button>

        {/* HEADER */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
          <div className="flex items-center gap-4 pr-12">
            <div className="bg-white/20 p-4 rounded-2xl">
              <FiHeart size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                AI Health Analysis
              </h1>

              <p className="text-blue-100 mt-1 text-sm">
                Intelligent disease detection platform
              </p>
            </div>
          </div>

          {/* STEP INDICATORS */}

          <div className="flex items-center gap-3 mt-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`
                  w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                  ${
                    step >= item
                      ? "bg-white text-blue-600"
                      : "bg-white/20 text-white"
                  }
                `}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* BODY */}

        <div className="flex-1 p-7 overflow-y-auto">
          {/* STEP 1 */}

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Basic Information
              </h2>

              <p className="text-gray-500 mt-2">
                Enter patient demographic information.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {/* AGE */}

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Age
                  </label>

                  <input
                    type="number"
                    placeholder="Enter age"
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        age: e.target.value,
                      })
                    }
                  />
                </div>

                {/* SEX */}

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Sex
                  </label>

                  <select
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
                    value={formData.sex}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sex: e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select sex
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Symptoms Analysis
              </h2>

              <p className="text-gray-500 mt-2">
                Describe symptoms using text or voice.
              </p>

              <div className="mt-8">
                {/* VOICE BUTTON */}

                <button
                  type="button"
                  className="w-16 h-16 rounded-full bg-green-100 hover:bg-green-200 transition flex items-center justify-center text-green-700"
                >
                  <FiMic size={28} />
                </button>

                <p className="text-sm text-gray-500 mt-3">
                  Tap for voice diagnosis
                </p>

                {/* SYMPTOMS */}

                <div className="mt-6">
                  <label className="block mb-2 font-medium text-gray-700">
                    Symptoms
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Describe symptoms..."
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500 resize-none"
                    value={formData.symptoms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        symptoms: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Medical Records
              </h2>

              <p className="text-gray-500 mt-2">
                Upload scans, reports, and prescriptions.
              </p>

              <div className="mt-8 border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center bg-gray-50">
                <div className="bg-blue-100 w-fit mx-auto p-5 rounded-3xl">
                  <FiUpload
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-5">
                  Upload Medical Files
                </h3>

                <p className="text-gray-500 mt-2 leading-7 text-sm">
                  PDF, PNG, JPEG, X-rays,
                  lab reports and prescriptions.
                </p>

                <input
                  type="file"
                  className="mt-6"
                  multiple
                />
              </div>
            </div>
          )}

          {/* STEP 4 */}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Lifestyle Parameters
              </h2>

              <p className="text-gray-500 mt-2">
                Help AI generate accurate predictions.
              </p>

              <div className="mt-8 space-y-7">
                {/* SLEEP */}

                <div>
                  <div className="flex items-center justify-between">
                    <label className="font-medium text-gray-700">
                      Sleep Per Night
                    </label>

                    <span className="text-blue-600 font-semibold">
                      {formData.sleep} hrs
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="12"
                    value={formData.sleep}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sleep: e.target.value,
                      })
                    }
                    className="w-full mt-3"
                  />
                </div>

                {renderButtonGroup(
                  "Exercise",
                  "exercise",
                  [
                    "Never",
                    "Sometimes",
                    "Regularly",
                  ]
                )}

                {renderButtonGroup(
                  "Smoking",
                  "smoking",
                  ["None", "Yes"]
                )}

                {renderButtonGroup(
                  "Alcohol",
                  "alcohol",
                  [
                    "None",
                    "Moderate",
                    "Heavy",
                  ]
                )}

                {renderButtonGroup(
                  "Diet",
                  "diet",
                  [
                    "Low",
                    "Moderate",
                    "Balanced",
                  ]
                )}

                {/* FAMILY HISTORY */}

                <div>
                  <label className="block font-medium text-gray-700 mb-4">
                    Family History
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {familyOptions.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={formData.familyHistory.includes(
                            item
                          )}
                          onChange={() =>
                            handleFamilyHistory(item)
                          }
                        />

                        <span className="text-gray-700 text-sm">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}

        <div className="p-6 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`
              flex items-center gap-2 px-5 py-3 rounded-2xl transition
              ${
                step === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }
            `}
          >
            <FiArrowLeft />
            Previous
          </button>

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition"
            >
              Next
              <FiArrowRight />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-2xl transition font-semibold"
            >
              {loading
                ? "Analyzing..."
                : "Generate Analysis"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}