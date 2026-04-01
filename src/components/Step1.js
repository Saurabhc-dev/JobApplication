import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Step1({ errors }) {
  const { formData, updateField } = useContext(FormContext);
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Personal Information
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Please fill in your details
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone *
            </label>
            <input
              type="text"
              placeholder="+91 9967690655"
              className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
