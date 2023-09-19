import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.screen.width);
  const [height, setHeight] = useState(window.screen.height);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  });

  return (
    <div className="App">
      <div className="text">
        <i id="size">{width} X {height}</i>
      </div>
    </div>
  );
}

export default App;
