
export function html([first, ...strings], ...values) {
    const result = values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
    return result
}

export function createStore(reducer) {
    let state = reducer()
    const roots  = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            console.log(args)
            state = reducer(state, action, args)
            render()
        },
    }
}