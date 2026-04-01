import React, { useContext, useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import { FormContext } from "../context/FormContext";

export default function FormPage() {
  const [step, setStep] = useState(1);
   const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { formData , setFormData } = useContext(FormContext);
  

function validateStep() {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email.includes("@"))
        newErrors.email = "Valid email required";
      if (formData.phone.length < 10)
        newErrors.phone = "Phone must be 10 digits";
    }

    if (step === 2) {
      if (!formData.degree) newErrors.degree = "Degree required";
    }

   if (step === 4) {
  if (!formData.role) newErrors.role = "Role required";
  if (!formData.country) newErrors.country = "Country required";
  if (!formData.date) newErrors.date = "Date required";
}

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function nextStep() {
     if (!validateStep()) return;
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  async function handleSubmit() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed");

      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        degree: "",
        university: "",
        company: "",
        experience: "",
        role: "",
        country: "",
        date: "",
      });

      setStep(1);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  }

  function renderStep() {
     if (success) {
      return <h2>✅ Application Submitted Successfully!</h2>;
    }
    switch (step) {
      case 1:
        return <Step1 errors={errors}/>;
      case 2:
        return <Step2 errors={errors}/>;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 errors={errors}/>;
      case 5:
        return <Step5 />;
      default:
        return <Step1 />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Application</h1>
          <p className="text-gray-500">Complete the form to apply for the position</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step >= num
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {num}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    step === num ? "text-gray-900 font-medium" : "text-gray-400"
                  }`}
                >
                  {num === 1 && "Personal"}
                  {num === 2 && "Education"}
                  {num === 3 && "Experience"}
                  {num === 4 && "Skills"}
                  {num === 5 && "Review"}
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-0.5 bg-gray-200 w-full"></div>
            <div
              className="absolute top-0 left-0 h-0.5 bg-gray-900 transition-all duration-300"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-2 md:p-2">
            {renderStep()}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-3 mt-6">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-6 py-2.5 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              ← Back
            </button>
          ) : (
            <div></div>
          )}
          
          {step < 5 && (
            <button
              onClick={nextStep}
              className="ml-auto px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Continue →
            </button>
          )}
          
          {step === 5 && (
            <button
             onClick={handleSubmit} disabled={loading}
              className="ml-auto px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {loading ? "Submitting..." : "Submit"}
                          </button>
          )}
        </div>
      </div>
    </div>
  );
}