export const loginStart = () => ({  //After login button they can call loginStart function
    type: "LOGIN_START"         // The loginStart function returns an object with a type property set to "LOGIN_START".
});

export const loginSuccess = (user) => ({    // The loginSuccess function takes in a user as an argument and returns an object with a type property set to "LOGIN_SUCCESS" and a payload property set to the user.
    type: "LOGIN_SUCCESS",                      
    payload: user,
})

export const loginFailure = () => ({        // The loginFailure function returns an object with a type property set to "LOGIN_FAILURE".
    type: "LOGIN_FAILURE",                  // The loginFailure function does not take in any arguments.
})

//logout

export const logoutStart = () => ({
    type: "LOGOUT",
});