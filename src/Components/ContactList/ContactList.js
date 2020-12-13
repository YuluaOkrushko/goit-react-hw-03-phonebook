import React from 'react';
import styles from "./ContactList.module.css"
import PropTypes from "prop-types";


const ContactList = ({contacts, onDelete}) => (
    <ul className={styles.item}>
    {contacts.map((item) => (
      <li className={styles.list} key={item.id}>
        {item.name} : {item.number}
        <button className={styles.button} id={item.id} onClick={onDelete}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ContactList;