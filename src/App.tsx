import React from "react";

// importing bootstrap assets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import UploadForm from "./UploadForm";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-blue-700 text-center my-4">
        Admin Dashboard
      </h1>
      <UploadForm />
    </div>
  );
}

export default App;
