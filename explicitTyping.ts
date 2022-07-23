function showTicket(user: string | null, ticket: number, info: string | number | null): void {
  console.log(`Hello, ${user ?? 'Default user'}! Your ticket number is ${ticket}`)
}

showTicket('Fábio Dantas', 123, null);
showTicket('José Dantas', 456, '');
showTicket(null, 312, null);