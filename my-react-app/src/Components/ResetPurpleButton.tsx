import App from "../App";
import { useState } from "react";

type PurpleButtonProps = {
    count:number; 
    ResetCurrentCount: () => void;   
}

function ResetPurpleButton({count, ResetCurrentCount}:PurpleButtonProps){

  const handleResetClick = () => {
        ResetCurrentCount(); 
    }
    return(
        <>
        <div className="container-xl-4">
            <div className="row sm text-primary text-center">
                Would you like the button above to be reset?
            </div>
            <button
                type="button"
                className="counter"
                onClick={handleResetClick}
            >
                Click me to reset the button, The current count is {count}!
            </button>
        </div>
        </>
    )
}



export default ResetPurpleButton;
