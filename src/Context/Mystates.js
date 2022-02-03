import React, { useState } from "react";
import myContext from "./Mycontext";
const MyStates = (props) => {
    const [state, setState] = useState(true);
    const [FullName,setFullName]=useState({
        name:"Shubham",
        professional:"Webdevloper"
    }
        );
    const [Loginu,setuname]=useState("Shubham");
    const [Loginpass,setpassword]=useState("12345");
    const update = () => {
        const p = window.confirm("Are You Sure");
        if (p === true) {
            if (state) {
                setState(false)
            } else {
                setState(true)
            }
        }
    }
    const nameupdate=(arg)=>{
        setFullName({...FullName,name:arg});
        window.alert("Successfully updated0");
    }
    return (
        <myContext.Provider value={{ state, update ,FullName,Loginu,Loginpass,nameupdate}}>
            {props.children}
        </myContext.Provider>
    )
}
export default MyStates;