
const initState = ''

const nouse = (state = initState, action) => {
    switch (action.type) {
        case 'ACTION.NOUSE':
            return state = action.payload
        default:
            return state
    }
}

export default nouse