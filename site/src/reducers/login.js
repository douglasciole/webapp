let loginData = {
    email: "",
    password: "",
    error: false
}


const loginReducer = (state = loginData, action) => {
    let newState = { ...state }

    switch(action.type) {
        case "EMAIL":
            newState.email = action.payload;
        break;
        case "PASSWORD":
            newState.password = action.payload;
        break;
        case "ERROR":
            newState.error = action.payload;
        break;
    }

    state = newState;
    return state;
}

export default loginReducer;