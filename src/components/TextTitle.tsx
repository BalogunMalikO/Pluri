import React, { useState } from "react";

function TextTitle({ fileTitle, handleChange }: any) {
  return (
    <div>
      <form>
        <label>
        <div className="absolute top-[142px] left-[825px] text-smi tracking-[-0.33px] text-lightslategray">
          File Title
          <input
            type="text"
            name="fileTitle"
            value={fileTitle}
            onChange={handleChange}
          />
          </div>
        </label>
      </form>
    </div>
  );
}

export default TextTitle;
