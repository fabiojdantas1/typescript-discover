/**
 * CONVENTIONS
 * S => state
 * T => type
 * K => key
 * V => values
 * E => element
 * ...
 */

function useState<T>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState();
newState.set('Fábio');
console.log(`Defined value: ${newState.get()}`);
newState.set(123);
console.log(`Defined value: ${newState.get()}`);
newState.set(null);
console.log(`Defined value: ${newState.get()}`);

let newState2 = useState<string>();
newState2.set('José');
console.log(`Defined value: ${newState2.get()}`);
//newState2.set(123); //error: expected string
//newState2.set(null); //error: expected string

function useStateExtends<T extends number | string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

//sets the type at create time
let newStateExtendsString = useStateExtends<string>();
newStateExtendsString.set('José');
console.log(`The string value is ${newStateExtendsString.get()}`);
//newStateExtendsString.set(123); //error: expected string

let newStateExtendsNumber = useStateExtends<number>();
//newStateExtendsNumber.set('José'); //error: expected number
newStateExtendsNumber.set(123); //error: expected string
console.log(`The value is ${newStateExtendsNumber.get()}`);

//uses default type if type is not set at creation
function useStateExtendsOrDefault<T extends number | string = string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newStateExtendsOrDefault = useStateExtendsOrDefault();
newStateExtendsOrDefault.set('default type');
console.log(`The type used is ${newStateExtendsOrDefault.get()}`);
//newStateExtendsString.set(123); //error: expected string
