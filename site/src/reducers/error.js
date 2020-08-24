let errorData = {
    accountPage_title: "",
    accountPage_show: false,
    firstPage_title: "",
    firstPage_show: false,
    secondPage_title: "",
    secondPage_show: false,
    thirdPage_title: "",
    thirdPage_show: false,
    fourthPage_title: "",
    fourthPage_show: false,
    fifthPage_title: "",
    fifthPage_show: false,
    sixthPage_title: "",
    sixthPage_show: false
}


const errorReducer = (state = errorData, action) => {
    let newState = { ...state }

    switch(action.type) {
        case "ACCOUNT":
            newState.accountPage_title = action.payload;
            newState.accountPage_show = action.show;
        break;
        case "FIRST":
            newState.firstPage_title = action.payload;
            newState.firstPage_show = action.show;
        break;
        case "SECOND":
            newState.secondPage_title = action.payload;
            newState.secondPage_show = action.show;
        break;
        case "THIRD":
            newState.thirdPage_title = action.payload;
            newState.thirdPage_show = action.show;
        break;
        case "FOURTH":
            newState.fourthPage_title = action.payload;
            newState.fourthPage_show = action.show;
        break;
        case "FIFTH":
            newState.fifthPage_title = action.payload;
            newState.fifthPage_show = action.show;
        break;
        case "SIXTH":
            newState.sixthPage_title = action.payload;
            newState.sixthPage_show = action.show;
        break;
    }

    state = newState;
    return state;
}

export default errorReducer;