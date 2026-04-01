import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Step3() {
  const { formData, updateField } = useContext(FormContext);
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        <p className="text-sm text-gray-500 mt-1">
          Share your professional background
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g., Google, Microsoft, or Startup"
            className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Years of Experience
          </label>
          <input
            type="text"
            placeholder="e.g., 3 years"
            className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            value={formData.experience}
            onChange={(e) => updateField("experience", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
