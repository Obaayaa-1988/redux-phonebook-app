import React from "react";
import PhoneStyle from './Phone.module.css';


const PhoneItems = ({name, number}) => {
    return (
        <div className="cover">
             <div className={PhoneStyle.container}>
                 <h3>{name.text}</h3>
                 {/* <h3>{number.text}</h3> */}

                 <div>
                <button className={PhoneStyle.btn2}>delete contact</button>
                <button className={PhoneStyle.btn3}>update contact</button>
                </div>
            </div>

        </div>
    )
}

export default PhoneItems;