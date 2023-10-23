import React, { useState } from "react";

function DropDown({ fileType, handleChange }: any) {
  return (
    <div>
     
      <form>
        <select name="fileType" value={fileType} onChange={handleChange} >
          <option value="default" disabled selected>
            Choose an option
          </option>
          <option value="Audio">Audio</option>
          <option value="Video">video</option>
          <option value="Graphics">graphics</option>
        </select>
      </form>
    </div>
    
  );
}

export default DropDown;
