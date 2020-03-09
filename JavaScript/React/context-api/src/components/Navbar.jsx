import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
const Navbar = () => {
    const context = useContext(MyContext);
    return (
        <div style={{height: "100px", width: "100%", background: "blue", textAlign: "right", marginBottom: "20px"}}>
            <h2 style={{marginRight: "100px", lineHeight: "85px"}}>{context.val.name != '' && "Hi, " + context.val.name + "!"}</h2>
        </div>
    )
}

export default Navbar
