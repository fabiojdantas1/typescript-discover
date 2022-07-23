function printUserId(userId: number | string | undefined): void {
  console.log(`The user id is: ${userId}.`);
}

printUserId(123);
printUserId('abc');
printUserId(undefined);
//printUserId(null);
