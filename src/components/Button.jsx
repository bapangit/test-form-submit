import React from "react";

export default function Button({ text, ...rest }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <button className="btn btn-warning m-2  w-25" {...rest}>
        {text}
      </button>
    </div>
  );
}
