function registerNewUser(userInfo) {
    return userInfo;
}
var newUserInfo = {
    id: 12,
    name: 'John Smith',
    email: 'john@example.com',
    age: 44
};
console.log('User data:\n', registerNewUser(newUserInfo));
function registerNewAccount(newAccount) {
    return newAccount;
}
var newAccount = {
    id: 25,
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    age: 44,
    method: 'cred card'
};
console.log('Account data:', registerNewAccount(newAccount));
