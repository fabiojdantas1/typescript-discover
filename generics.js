/**
 * CONVENTIONS
 * S => state
 * T => type
 * K => key
 * V => values
 * E => element
 * ...
 */
function useState() {
    var state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get: get, set: set };
}
var newState = useState();
newState.set('Fábio');
console.log("Defined value: ".concat(newState.get()));
newState.set(123);
console.log("Defined value: ".concat(newState.get()));
newState.set(null);
console.log("Defined value: ".concat(newState.get()));
var newState2 = useState();
newState2.set('José');
console.log("Defined value: ".concat(newState2.get()));
//newState2.set(123); //error: expected string
//newState2.set(null); //error: expected string
function useStateExtends() {
    var state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get: get, set: set };
}
//sets the type at create time
var newStateExtendsString = useStateExtends();
newStateExtendsString.set('José');
console.log("The string value is ".concat(newStateExtendsString.get()));
//newStateExtendsString.set(123); //error: expected string
var newStateExtendsNumber = useStateExtends();
//newStateExtendsNumber.set('José'); //error: expected number
newStateExtendsNumber.set(123); //error: expected string
console.log("The value is ".concat(newStateExtendsNumber.get()));
//uses default type if type is not set at creation
function useStateExtendsOrDefault() {
    var state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get: get, set: set };
}
var newStateExtendsOrDefault = useStateExtendsOrDefault();
newStateExtendsOrDefault.set('default type');
console.log("The type used is ".concat(newStateExtendsOrDefault.get()));
//newStateExtendsString.set(123); //error: expected string
