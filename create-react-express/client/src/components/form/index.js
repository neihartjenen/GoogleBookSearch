import React from "react";

export function Input({props}) {
   return ( 
    <div className="form-group">
        <input className="form-control" style={{width:"90%", marginLeft:"10px"}} {...props}/>
    </div>
    )
}

export function searchBtn({props}) {
    return (
    <button {...props} style={{float:"right"}} className="btn btn-primary">
        {props.children}
    </button>
    )
}