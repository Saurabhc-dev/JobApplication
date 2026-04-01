import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Step2({errors}) {
      const { formData, updateField } = useContext(FormContext);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <p className="text-sm text-gray-500 mt-1">Tell us about your academic background</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Degree *
          </label>
          <input
            type="text"
            placeholder="e.g., Bachelor of Science in Computer Science"
            className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            value={formData.degree}
        onChange={(e) => updateField("degree", e.target.value)}
      />
      {errors.degree && <p style={{ color: "red" }}>{errors.degree}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            University
          </label>
          <input
            type="text"
            placeholder="e.g., Stanford University"
            className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}