import React from "react";
import FormPage from "./pages/FormPage";
import FormProvider from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <FormPage />
    </FormProvider>
  );
}

export default App;