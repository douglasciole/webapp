export const errorMessageShow = (title, page) => {
    return {
        type: page,
        payload: title,
        show: true
    }
}

export const errorMessageHide = (page) => {
    return {
        type: page,
        payload: '',
        show: false
    }
}