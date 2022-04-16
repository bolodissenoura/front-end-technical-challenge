import React, { useEffect, useState } from "react";
import api from './services/api'

function App() {

  const [stores, setStores] = useState([]);

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setStores(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <h1>Good luck!</h1>
      
    </div>
  );
}

export default App;
