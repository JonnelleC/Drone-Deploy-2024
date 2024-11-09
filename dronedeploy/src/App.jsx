import { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import DroneDataTable from "./DroneDataTable.jsx";
import QueryInput from "./QueryInput.jsx";
import DroneData from "./DroneData.jsx";
=======
import DroneDataTable from "./src/DroneDataTable.js";
import QueryInput from "./src/QueryInput.js";
import DroneData from "./src/DroneData.jsx";
>>>>>>> ba4bd7e4a6c0f7d8c54dc83e246bf76d99771b6d

const App = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuerySubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/query", {
        query,
      });
      setResponse(data.response);
    } catch (error) {
      console.error("Error fetching response:", error.message);
      setResponse("Error fetching response from server.");
    }
  };

  return (
    <div className="App">
      <h1>Drone Image Specifications</h1>
      <DroneDataTable data={DroneData} />
      <QueryInput
        query={query}
        setQuery={setQuery}
        handleQuerySubmit={handleQuerySubmit}
      />
      <div className="response-box">
        <h3>AI Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default App;
