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

USAGE:

const [var, setVar] = useState

<button onClick={()=>setVar()}>Click me <button/>

- Array states :

If initial value of state is array, you need to pass array afterwards

- ... notation usage :

const [friends, setFriends] = useState(["sdad","adas"])
setFriends([...friends, "ayşe"])

- Object states
