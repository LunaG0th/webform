import { useState } from 'react';
import FormInputs from './components/FormInput/FormInputs';
import Modal from './components/Modal/Modal';
import inputs from './components/FormInput/inputs.js';
import './App.css';

function App() {
  const [values, setValues] = useState({ // From Field
    firstName: '',
    lastName: '',
    email: '',
    generalInquiry: '',
    supportRequest: '',
    message: '',
    queryType: '',
  });

  //   {
  //     id: 1,
  //     name: 'firstName',
  //     type: 'text',
  //     errorMessage: 'name should be 3-12 characters!',
  //     // placeholder: 'First Name',
  //     label: 'First Name',
  //     pattern: "^[A-Za-z0-9]{3,12}$",
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'lastName',
  //     type: 'text',
  //     errorMessage: 'last name should be 3-12 characters!',
  //     // placeholder: 'Last Name',
  //     label: 'Last Name',
  //     pattern: "^[A-Za-z0-9]{3,12}$",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'email',
  //     type: 'email',
  //     errorMessage: 'it should be a valid email address!',
  //     // placeholder: 'Email',
  //     label: 'Email Address',
  //     className: 'email',
  //     required: true,
  //   },

  //   {
  //     id: 4,
  //     name: 'queryType',
  //     type: 'radio',
  //     options: [
  //       { label: 'General Inquiry', value: 'generalInquiry' },
  //       { label: 'Support Request', value: 'supportRequest' }
  //     ],
  //     label: 'Query Type',
  //   },

  //   {
  //     id: 5,
  //     name: 'message',
  //     // placeholder: 'Message',
  //     label: 'Message',
  //     className: 'messageInput',
  //     required: true,
  //   },
  // ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Modal
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className='app'>
        <div className='form__wrapper container'>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInputs
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='ticbox'>
              <input className='tixbox' type='checkbox' />
              <label>i consent to being contacted by the team</label>
            </div>
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />







      </div>
    </>
  );
}

export default App;
