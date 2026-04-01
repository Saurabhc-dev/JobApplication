import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Step5() {
  const { formData } = useContext(FormContext);

  const show = (value) =>
    value?.toString().trim() ? value : "N/A";

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "N/A";

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Review & Submit
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Please review your information before submitting
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Personal Information
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Full Name</span>
              <span className="text-gray-900">{show(formData.name)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-900">{show(formData.email)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Phone</span>
              <span className="text-gray-900">{show(formData.phone)}</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Education
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Degree</span>
              <span className="text-gray-900">{show(formData.degree)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">University</span>
              <span className="text-gray-900">{show(formData.university)}</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Experience
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Company</span>
              <span className="text-gray-900">{show(formData.company)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Years</span>
              <span className="text-gray-900">{show(formData.experience)}</span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Preferences
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Role</span>
              <span className="text-gray-900">{show(formData.role)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Preferred State</span>
              <span className="text-gray-900">{show(formData.country)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Available From</span>
              <span className="text-gray-900">
                {formatDate(formData.date)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}