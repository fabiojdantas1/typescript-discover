type IdTypes = string | number | boolean;

let userId: IdTypes;
let adminId: IdTypes;
let activate: IdTypes;

userId = 123;
adminId = "admin";
activate = true;

console.log(`The userId is ${userId} and adminId is ${adminId} and activate is ${activate}`);

//userId = null; //unspecified type
