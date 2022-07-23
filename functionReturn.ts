function showMessage(message: string): void { 
  console.log(message);
}

showMessage('Hello everyone!');

function showMessageNumber(message: string): number { 
  return 10;
}

console.log(showMessageNumber('')); //10

function showMessageString(message: string): string {
  return message;
}

console.log(showMessageString('Print text'));

//implicit return
function showImplicitReturn(message: string) {
  return message;
}

console.log(`Show ${showImplicitReturn('implicit return')}`);