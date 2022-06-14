import React from "react";

function saludo({ greeting }) {
  return (
    <div className="container mx-auto flex px-8">
      <h1 className="text-6xl font-mono leading-normal mt-0 mb-2 text-red-500">{greeting}</h1>
    </div>
  );
}

export default saludo;
