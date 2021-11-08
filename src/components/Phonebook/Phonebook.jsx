import s from "./Phonebook.module.scss";
import { Component } from "react";
import shortid from "shortid";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

class Section extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem("contacts"));
    this.setState({ contacts: contactsLS });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  handleSubmit = ({ name, number }) => {
    if (this.isInclude(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prev) => {
      return {
        contacts: prev.contacts.concat({
          id: shortid.generate(),
          name,
          number,
        }),
      };
    });
  };

  contactFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  isInclude = (name) => {
    return this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  deleteContact = (e) => {
    const delIdx = this.state.contacts.findIndex((contact) => {
      return contact.id === e.target.dataset.contactId;
    });

    this.setState((prev) => {
      const prevCopy = [...prev.contacts];
      prevCopy.splice(delIdx, 1);

      return {
        contacts: prevCopy,
      };
    });
  };

  render() {
    return (
      <section className={s.phonebook}>
        <h1>Phonebook</h1>
        <div className={s.featuresWrap}>
          <div className={s.addContact}>
            <h2>Add new contact</h2>
            <ContactForm onSubmit={this.handleSubmit} />
          </div>
          <div>
            <h2>Contacts</h2>
            <Filter filter={this.state.filter} onChange={this.contactFilter} />
            <ContactList
              contacts={this.getFilteredContacts()}
              handleDel={this.deleteContact}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
