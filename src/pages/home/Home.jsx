import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [taskName, setTaskName] = useState();
  return (
    <>
    <div className="button-input">
      <button className="btn">+</button>
      <input className="input-text"
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="Your next task..."
      />
    </div>
    </>
  );
};

export default Home;
