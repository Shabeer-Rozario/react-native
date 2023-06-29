import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  let [value, setValue] = useState([]);
  let [id, setID] = useState();

  useEffect(() => {
    if (id != undefined) {
      let url = "https://jsonplaceholder.typicode.com/todos/";
      url = url + id;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json));
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }, [id]);

  return (
    <div className="App">
      <button onClick={() => setID("1")}>1</button>
      <button onClick={() => setID("2")}>2</button>
      <button onClick={() => setID("3")}>3</button>
    </div>
  );
}
