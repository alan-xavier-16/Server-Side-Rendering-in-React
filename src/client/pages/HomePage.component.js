import React from "react";

const HomePage = (props) => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={() => console.log("Hi there!")}>Press me!</button>
    </div>
  );
};

export default { component: HomePage };
