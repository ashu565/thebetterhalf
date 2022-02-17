import React, { useState } from "react";

function Switch({ name, value }) {
  const [checked, setChecked] = useState(value);
  return (
    <div>
      <input
        id={name}
        onChange={() => {
          setChecked((e) => !e);
        }}
        type="checkbox"
        className="hidden"
        name={name}
      />
      <label htmlFor={name}>
        <span className="h-[18px] rounded-full w-[36px] cursor-pointer flex items-center  bg-slate-200 relative ">
          <span
            className={`${
              checked ? "bg-pink-600" : "bg-gray-500"
            } h-[20px] w-[20px] transition-all  shadow-md rounded-full block  absolute  ${
              checked ? "right-0" : "left-0"
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
}

export default Switch;
