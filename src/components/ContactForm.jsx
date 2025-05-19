import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../redux/task/action";
import ContactList from "./ContactList";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterAction(e.target.value));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const phone = e.target.elements.phone.value.trim();

    if (name && phone) {
      dispatch({ type: "add", payload: { name, phone } });
      e.target.reset();
    }
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <form onSubmit={handleAddContact}>
        <input name="name" placeholder="Ім’я" required />
        <input name="phone" placeholder="Телефон" required />
        <button type="submit">Додати контакт</button>
      </form>

      <input
        type="text"
        placeholder="Пошук по імені"
        onChange={handleFilter}
      />

      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default ContactForm;
