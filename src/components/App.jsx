import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
const shortid = require('shortid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isNameInList = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInList !== undefined) {
      return alert(`Contact ${isNameInList.name} is already in your list !`);
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== contactId),
    }));
  };

  onFilterChange = (data) => {
    this.setState({ filter: data });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilterField = filter.toLowerCase();
    const visibleContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizeFilterField)
    );

    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        {contacts.length ? (
          <ContactList contactsList={visibleContacts} onDelete={this.deleteContact} />
        ) : (
          <p>No Contacts Yet ^_^</p>
        )}
      </>
    );
  }
}

export default App;
