import React, { Component } from "react";
import styles from './App.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }

    // Trimite datele noului contact în componenta App.jsx prin props.onSubmit
    this.props.onSubmit(name, number);

    // Resetează câmpurile de input după submit
    this.setState({
      name: '',
      number: ''
    });
  };

  handleKeyPress = (event) => {
    const charCode = event.keyCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 43) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            name="name"
            id="nameInput"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z])$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            className={styles.input}
            autoComplete="name"
          />

          <label htmlFor="numberInput">Number</label>
          <input
            type="tel"
            name="number"
            id="numberInput"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
            className={styles.input}
            autoComplete="tel"
          />

          <button type="submit" className={styles.button}>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;