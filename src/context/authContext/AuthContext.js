import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {         // The INITIAL_STATE object contains the initial state of the context, which includes the user property set to null, the isFetching property set to false, and the error property set to false.
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    };

export const AuthContext = createContext(INITIAL_STATE);    // The AuthContext object is created using the createContext() function from React, and the initial state is passed as an argument.

export const AuthContextProvider = ({ children }) => {       // The AuthContextProvider component takes in a children prop and returns the AuthContext.Provider component with the value prop set to the result of the useReducer() hook, which takes in the AuthReducer function and the INITIAL_STATE object as arguments.
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {       // The useEffect() hook is used to persist the user data in the local storage. The hook takes in a function as the first argument and an empty dependency array as the second argument.
        localStorage.setItem("user", JSON.stringify(state.user));  // The localStorage.setItem() method is called with the key set to "user" and the value set to the user object converted to a JSON string using the JSON.stringify() method.
    }, [state.user]);

    return (        // The component returns the AuthContext.Provider component with the value prop set to an object containing the state and dispatch properties, and the children as its children.
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}