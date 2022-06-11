import React, { useState } from "react";
 import PhoneStyle from './Phone.module.css';
import { connect } from "react-redux";
import { addContact } from "../store/actions/action";



const PhoneForm = ({ allContacts, addContact}) => {
    const [inputField, setInputField ] = useState("")    
    const [inputFields, setInputFields ] = useState("")




    return(
        <div className="merge">
        <div className={PhoneStyle.form_input}>
            <h2>PhoneBook</h2>
            <h3>Create A New Contact</h3>
            <input type="text" className={PhoneStyle.input} placeholder="name" value={inputField} onChange={e => setInputField(e.target.value) } /><br />
            <input type="number" className={PhoneStyle.input} placeholder="number"  value={inputFields} onChange={e => setInputFields(e.target.value) } /><br />
            <button className={PhoneStyle.btn} onClick={() => { addContact(inputFields); setInputFields('') }}>Add Your Contact </button>
        </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    allContacts: state.contacts
    

})

const mapDispatchToProps = (dispatch) => ({
    addContact: text => dispatch(addContact(text))

})


export default connect(mapStateToProps, mapDispatchToProps) (PhoneForm);
