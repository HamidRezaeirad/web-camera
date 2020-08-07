import React, { lazy, Suspense } from "react";
import Spinner from "./components/backdrop/Spinner";
import "./App.css";

const CameraPage = lazy(() => import("./containers/camera/CameraPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner status={true} />
        </div>
      }
    >
      <div className="App">
        <CameraPage></CameraPage>
      </div>
    </Suspense>
  );
}

export default App;
