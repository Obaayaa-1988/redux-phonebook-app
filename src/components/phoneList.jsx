import React from "react";
import PhoneItems from "./phoneItems";
import PhoneForm from "./phoneForm";
import { connect } from "react-redux";

const PhoneList = ({ contacts }) => {

    return (
        <div>
            <PhoneForm />
            { contacts.map((contact, key ) => ( <PhoneItems name={contact} key={key} />)
                
            )}
          

        </div>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.contacts
})

export default connect(mapStateToProps) (PhoneList);