interface IUserInfo {
  id: number; 
  name: string;
  email: string;
  age: number;
  info?: string; // optional
}

function registerNewUser(userInfo: IUserInfo): IUserInfo {
  return userInfo;
}

let newUserInfo: IUserInfo = {
  id: 12,
  name: 'John Smith',
  email: 'john@example.com',
  age: 44,
}

console.log('User data:\n', registerNewUser(newUserInfo));

type TUserPayment = {
  method: string;
}
//creates intersection of interfaces and types with extensions and types separator ','
interface IAccount extends IUserInfo, TUserPayment {}

function registerNewAccount(newAccount: IAccount): IAccount {
  return newAccount;
}

let newAccount: IAccount = {
  id: 25,
  name: 'John Smith',
  email: 'john.smith@gmail.com',
  age: 44,
  method: 'cred card',
}

console.log('Account data:', registerNewAccount(newAccount));