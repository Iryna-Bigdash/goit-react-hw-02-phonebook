import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeletContact}) => (
<ul>
{contacts.map(({id, name, number}) => (
<li key={id}>
    <p>{name}: <span>{number}</span>
    </p>
    <button onClick={()=>onDeletContact(id)}>Delete</button>
</li>
))}
</ul>
);

export default ContactList;

ContactList.protoType = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeletContact: PropTypes.func.isRequired,
}