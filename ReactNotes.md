# REACT CLASSES

## JSX RULES && COMPONENTS

- Component names starts with capital letters.

- components should be inside div or empty block : <> </>

- displaying text : {`dsada ${variable_name} asdasda`}

## PROPS

- React developer tools extension for console checking react usage.

- use key for looping over props with map func

- PropTypes for defining the type of props, multiple types can be allowed with oneOfType

* is required: propType.isrequired

* PropTypes.shape ( for defining the type of each element of the objects )

* if there is no value assigned for props, default value can be assigned with defaultProps method

## STATES

- What is state ?

State keeps variables that can change.
When state changes component get re-rendered.
First thing to look at when working with states is to look at state type.

### USAGE:

const [var, setVar] = useState

<button onClick={()=>setVar()}>Click me <button/>

- Array states :

If initial value of state is array, you need to pass array afterwards

- ... notation usage :

const [friends, setFriends] = useState(["sdad","adas"])
setFriends([...friends, "ayşe"])

- Object states

## Lifecycle - useEffect

How to catch an event ? How to understand when state changes ?

useEffect :

- shuld not be controlled with if condition.
- useEffect runs on every state change.
- use [stateName] to only run for that specific state.
- if added [], when component mounts, runs function.

### Usage :

// whenever number is updated call this function
useEffect(() => {
console.log("price component updated");
setPrice(number \* 5);
}, [number]);

// so whenevet setNumber hook is used, this function will work and will update the price

## Module css

Name css file style.module.css for eviting naming conflicts.
This generates unique id's for each style, so styles for different components don't mix

className="styles.styleName"

## Axios

- not built-in, need to install it,
- similar usage with fetch

### Usage:

useEffect(() =>{
axios("url")
.then((res)=>setX(res.data))
.catch((e)=> console.log(e))
.finally(()=> do sth)
},[])

## Routing

### Install

- For docs: reactrouter.com

- npm install react-router-dom

### Cleaner way of defining Routes

<Route path="/a" component="A"/>

### Exact route

use exact property when defining routes.
