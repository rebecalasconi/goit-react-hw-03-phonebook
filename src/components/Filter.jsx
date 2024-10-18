import React from "react";
import PropTypes from 'prop-types';
import styles from './App.module.css'

const Filter = ({ value, onChange }) => (
    <div className={styles.filter}>
        <label htmlFor="filter" >Find contacts by name</label>
        <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
 };

export default Filter;