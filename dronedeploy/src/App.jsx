import { useState } from "react";
import axios from "axios";
import DroneDataTable from "./src/DroneDataTable.js";
import QueryInput from "./src/QueryInput.js";

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
      <DroneDataTable data={DroneDataTable} />
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
