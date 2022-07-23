function showTicket(user, ticket, info) {
    console.log("Hello, ".concat(user !== null && user !== void 0 ? user : 'Default user', "! Your ticket number is ").concat(ticket));
}
showTicket('Fábio Dantas', 123, null);
showTicket('José Dantas', 456, '');
showTicket(null, 312, null);
