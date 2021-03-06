import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { getVisibleContacts, getError } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';
import Disconnect from '../../img/disconnect.jpg';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  console.log(contacts);
  return (
    <>
      {contacts.length > 0 && !error ? (
        <ul className={s.contactList}>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={contId => dispatch(deleteContact(contId))}
            />
          ))}
        </ul>
      ) : (
        <div>
          {error && <h2>{error.message}</h2>}
          <img
            src={Disconnect}
            alt="disconnect"
            style={{ width: '600px', marginTop: '20px' }}
          />
        </div>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
