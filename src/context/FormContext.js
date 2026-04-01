import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [formData, setFormData] = useState({
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

  // ✅ LOAD saved data when app starts
  useEffect(() => {
    const saved = localStorage.getItem("jobAppData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // ✅ AUTO SAVE with debounce (important 🔥)
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("jobAppData", JSON.stringify(formData));
      console.log("💾 Auto-saved");
    }, 500); // save after 500ms pause

    return () => clearTimeout(timer);
  }, [formData]);

  function updateField(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <FormContext.Provider value={{ formData, updateField, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}