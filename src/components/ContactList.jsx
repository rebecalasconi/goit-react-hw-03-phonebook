import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map((contact) => (
            <ContactItem 
                key={contact.id} 
                id={contact.id}
                name={contact.name} 
                number={contact.number}
                onDelete={() => onDeleteContact(contact.id)} 
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,  // Verificăm și id-ul în PropTypes
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,  // Verificăm că funcția de ștergere este definită
};

export default ContactList;