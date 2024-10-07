// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mes(0-11), dia, hora, minuto, segundo, miliSegundo
 const data = new Date('2024-10-2 12:12:12')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(data.toString());