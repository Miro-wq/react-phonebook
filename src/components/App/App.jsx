import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;


//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number, contacts } = this.state;
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     this.setState({
//       contacts: [...contacts, newContact],
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { contacts, name, number } = this.state;

//     return (
//       <div>
//         <h1>Contact Book</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Number:
//             <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//             />
//             </label>
//           <button type="submit">Add Contact</button>
//         </form>

//         <h2>Contacts</h2>
//         <ul>
//           {contacts.map(contact => (
//             <li key={contact.id}>{contact.name}: {contact.number}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
