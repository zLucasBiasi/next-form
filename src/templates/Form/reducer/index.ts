export const initialState = {
  titleEvent: "",
  linkEvent: "",
  contact: "",
  emailAdm: "",
  passwordToAcess: "",
  privateEvent: false,
  data: "",
  dataBefore: "",
  dataAfter: "",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TITLE_EVENT":
      return { ...state, titleEvent: action.payload };

    case "SET_LINK_EVENT":
      return { ...state, linkEvent: action.payload };

    case "SET_CONTACT":
      return { ...state, contact: action.payload };

    case "SET_ADMIN_EMAIL":
      return { ...state, adminEmail: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "SET_EVENT_PRIVATE":
      return { ...state, eventPrivate: !state.eventPrivate };

    case "SET_DATA":
      return { ...state, data: action.payload };

    case "SET_DATA_BEFORE":
      return { ...state, dataBefore: state.payload };

    case "SET_DATA_AFTER":
      return { ...state, dataAfter: state.payload };

    default:
      return state;
  }
};
