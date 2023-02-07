import React, {useState} from "react";
import './Sbbutton.css';



function Sbbutton(){
    const [state, setState]=useState(false);
    const toggle=()=>{
        setState(!state);
    }
    return(
        <div className="Sbbutton">
            <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close':'')}> 
        {state ? 'mckinsey & company' : 'company name'}
            </button>
        </div>
    )
}
export default Sbbutton;