const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      errorMessage: 'name should be 3-12 characters!',
      // placeholder: 'First Name',
      label: 'First Name',
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true,
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      errorMessage: 'last name should be 3-12 characters!',
      // placeholder: 'Last Name',
      label: 'Last Name',
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      errorMessage: 'it should be a valid email address!',
      // placeholder: 'Email',
      label: 'Email Address',
      className: 'email',
      required: true,
    },

    {
      id: 4,
      name: 'queryType',
      type: 'radio',
      options: [
        { label: 'General Inquiry', value: 'generalInquiry' },
        { label: 'Support Request', value: 'supportRequest' }
      ],
      label: 'Query Type',
    },

    {
      id: 5,
      name: 'message',
      // placeholder: 'Message',
      label: 'Message',
      className: 'messageInput',
      required: true,
    },
  ];

  export default inputs;