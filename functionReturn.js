function showMessage(message) {
    console.log(message);
}
showMessage('Hello everyone!');
function showMessageNumber(message) {
    return 10;
}
console.log(showMessageNumber('')); //10
function showMessageString(message) {
    return message;
}
console.log(showMessageString('Print text'));
//implicit return
function showImplicitReturn(message) {
    return message;
}
console.log("Show ".concat(showImplicitReturn('implicit return')));
