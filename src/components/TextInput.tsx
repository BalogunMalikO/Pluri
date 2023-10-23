import React from "react";
import { useState } from "react";

function TextInput({ description, handleChange }: any) {
  return (
    <div>
       
      <form className="absolute top-[248px] left-[825px] text-smi tracking-[-0.33px] text-lightslategray">
        <label>Text Description</label>
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
        />
      </form>
      </div>
    
  );
}

export default TextInput;
