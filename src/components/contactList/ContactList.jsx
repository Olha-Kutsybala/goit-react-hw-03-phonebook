import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <p className={css.contactInfo}>
            {name}: {number}
          </p>
          <button
            className={css.contactDeleteBtn}
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
//pr
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
