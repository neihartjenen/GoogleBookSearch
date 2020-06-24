import React from "react";

export function Input({props}) {
   return ( 
    <div className="form-group">
        <input className="form-control" style={{width:"90%", marginLeft:"10px"}} {...props}/>
    </div>
    )
}

export function SearchBtn({props, children}) {
    return (
        <div className="col-auto"> 
    <button {...props} style={{}} className="btn btn-primary mr-0">
        {children}
    </button>
    </div>
    )
}