import React, { useState } from "react";

function LangProficiencyDropdown({ proficiency, handleChange }: any) {
  return (
    <div>
      <form>
        <select name="proficiency" value={proficiency} onChange={handleChange}>
          <option value="default" disabled selected>
            Select proficiency
          </option>
          <option value="A1">A1</option>
          <option value="B1">B1</option>
          <option value="C1">C1</option>
        </select>
      </form>
    </div>
  );
}

export default LangProficiencyDropdown;
