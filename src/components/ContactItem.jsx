import React from "react";
import PropTypes from 'prop-types';
import styles from './App.module.css'

const ContactItem = ({ name, number, onDelete}) =>
    (
        <li>{name}: {number}
        <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
        </li>
    );


ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    };

export default ContactItem;