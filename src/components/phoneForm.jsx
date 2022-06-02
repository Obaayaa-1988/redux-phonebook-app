import React from "react";


const PhoneForm = () => {



    return(
        <div className="merge">
        <div className="form-input">
            <h2>PhoneBook</h2>
            <h3>Create A New Contact</h3>
            <input type="text" className="input" placeholder="name"/><br />
            <input type="number" className="input" placeholder="number"/><br />
            <button className="btn">Add Your Contact </button>
        </div>
        </div>

    )
}


export default PhoneForm;