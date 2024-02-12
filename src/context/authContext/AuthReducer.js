const AuthReducer = (state, action) => {
  switch (action.type) {             // The function takes in a state and an action as arguments and uses a switch statement to determine which action to take based on the action type.
    case "LOGIN_START":              // If the action type is "LOGIN_START", the function returns a new state object with the user property set to null, the isFetching property set to true, and the error property set to false.
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":       // If the action type is "LOGIN_SUCCESS", the function returns a new state object with the user property set to the action payload, the isFetching property set to false, and the error property set to false.
        return {
            user: action.payload,
            isFetching: false,
            error: false,
        };
    case "LOGIN_FAILURE":       // If the action type is "LOGIN_FAILURE", the function returns a new state object with the user property set to null, the isFetching property set to false, and the error property set to true.
        return {
            user: null,
            isFetching: false,
            error: true,
        };
    case "LOGOUT":       // If the action type is "LOGIN_FAILURE", the function returns a new state object with the user property set to null, the isFetching property set to false, and the error property set to true.
        return {
            user: null,
            isFetching: false,
            error: false,
        };
    default:
        return { ...state };            // If the action type does not match any of the cases, the function returns the current state.
    }
}

export default AuthReducer;