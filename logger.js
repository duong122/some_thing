export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Previous State: ', prevState)
        const nextState = reducer(prevState, action, args)
        console.log('Action argument: ', args)
        console.log('Next State: ', nextState)
        console.groupEnd()
        return nextState
    }
}

//30:03