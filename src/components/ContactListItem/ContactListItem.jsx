import React from 'react';
import PropTypes from 'prop-types';

import './ContactListItem.module.css';

const ContactListItem = ({ contact }) => (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
  
  ContactListItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default ContactListItem;