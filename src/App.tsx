import React, { useEffect, useState } from "react";
import api from './services/api'

export default function App() {
  const [stores, setStores] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setStores(response.data.stores);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      {stores?.map((store, key) => {
        return (
          <>
            <div className="" >
              <p key={key} >{store.name}</p>
            </div>
          </>
        )
      })}

    </div>
  );
}
