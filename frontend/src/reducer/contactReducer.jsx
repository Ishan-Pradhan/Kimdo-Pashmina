const ContactReducer = (state, action) => {
  switch (action.type) {
    case "CONTACTS":
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
        featuredContacts: action.payload
          ? action.payload.filter((curEl) => curEl.isFeatured === true)
          : [],
      };

    case "SET_SINGLE_CONTACT":
      return {
        ...state,
        singleContact: action.payload,
      };

    default:
      return state;
  }
};

export default ContactReducer;
