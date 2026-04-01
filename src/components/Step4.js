import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../context/FormContext";

export default function Step4({errors}) {
  const { formData, updateField } = useContext(FormContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: "India",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const states = data.data.states.map((s) => s.name);
        setCountries(states);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
        <p className="text-sm text-gray-500 mt-1">
          Let us know your preferences
        </p>
      </div>

      <div className="space-y-4">
        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Role *
          </label>
          <div className="relative">
            <select
              value={formData.role || ""}
              onChange={(e) => updateField("role", e.target.value)}
              className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
            >
              <option value="">Select Role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
                  {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}

          </div>
        </div>

        {/* State/Country Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            State *
          </label>
          <div className="relative">
            <select
              value={formData.country || ""}
              onChange={(e) => updateField("country", e.target.value)}
              className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
            >
              <option value="">Select State</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>{country}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
                              {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}

          </div>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Available From *
          </label>
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date) => updateField("date", date)}
            placeholderText="Select Date"
            className="w-full px-4 py-2.5 text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
            dateFormat="MMMM d, yyyy"
            wrapperClassName="w-full"
          />
                                        {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

        </div>
      </div>

      <style jsx>{`
        .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>
    </div>
  );
}