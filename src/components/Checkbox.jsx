import React, { useState } from "react";
import tick from "../assets/changeAccountAssets/1024px-Green_tick_pointed.svg.png";

function CheckboxWithTick() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`border border-inherit w-8 h-8 relative cursor-pointer ${
          isChecked ? "" : "text-green-500 border border-none transition-transform"
        }`}
      >
        {isChecked ? null : (
          <img
            src={tick}
            alt="tick mark"
            className="w-6 h-6 absolute inset-0 m-auto border border-none"
          />
        )}
      </div>
    </label>
  );
}

export default CheckboxWithTick;