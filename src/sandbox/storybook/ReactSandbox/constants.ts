import React, { useEffect, useState } from "react";
import COMPONENTS from "../../../index";

export const REACT_LIVE_SAMPLE = `
  () => {
    const [buttonName, setButtonName] = useState("Click Here");
      
    return( 
      <div>
        <h2>Check out this awesome button!</h2>
        <button type="button" onClick={() =>setButtonName('Clicked')}>{buttonName}</button>
      </div>
    )
  }
`;
export const REACT_LIVE_SCOPE = { ...COMPONENTS, React, useEffect, useState };
