import React, { useState } from "react";

import { TodoListReact } from "./todo-list-react.tsx";
import { TodoListZustandV1 } from "./todo-list-zustand-v1.tsx";

function App() {
  const versions = ["react", "zustand-v1", "zustand-v2", "zustand-v3"];

  const [selectedVersion, setSelectedVersion] = useState("react");

  return (
    <div>
      <select
        value={selectedVersion}
        onChange={(event) => setSelectedVersion(event.target.value)}
      >
        {versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>

      {selectedVersion === "react" && <TodoListReact />}

      {selectedVersion === "zustand-v1" && <TodoListZustandV1 />}
    </div>
  );
}

export default App;
