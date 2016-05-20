// src/components/ContactListItem.js

import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

const ContactListItem = ({contact}) => <ListGroupItem>
  <Link to={`/contact/${contact.id}`}>
    <h4>{contact.name}</h4>
  </Link>
</ListGroupItem>;

export default ContactListItem;