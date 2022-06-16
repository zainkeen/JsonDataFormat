const initialState = [];

const manupulateState = (state = initialState, action, data) => {
  switch (action.type) {
    case "ADD":
      return initialState.push(data);
    case "REMOVE": {
      const index = initialState
        .map(function (e) {
          return e.name;
        })
        .indexOf(data.name);
      if (index > -1) {
        initialState.splice(index, 1);
      }
      return initialState;
    }
    default:
      return initialState;
  }
};

export default manupulateState;
