import React, { useState } from "react";

function LangDropdown({ language, handleChange }: any) {
  return (
    <div>
      <form>
        <select name="language" value={language} onChange={handleChange}>
          <option value="default" disabled selected>
            Select a language
          </option>
          <option value="Yoruba">Yoruba</option>
          <option value="Igbo"> Igbo</option>
          <option value="Hausa">Hausa</option>
        </select>
      </form>
    </div>
  );
}

export default LangDropdown;
