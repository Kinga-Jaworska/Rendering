import { useEffect, useState } from "react";
import { URL } from "./api/api";

export const ClientSideRedering = () => {
  const [results, setResults] = useState([]);
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setResults(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>CSR</h1>
      {results.length > 0 ? (
        <>
          <h3>CAT FACTS</h3>
          {results.map((cat) => {
            return (
              <div key={cat.id} className="items">
                <h4>{cat.id}</h4>
                <p>{cat.fact}</p>
              </div>
            );
          })}
        </>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default ClientSideRedering;
