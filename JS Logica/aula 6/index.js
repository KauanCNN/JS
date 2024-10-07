// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
// ? :
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// }   else{
//     console.log('Usuário normal');
// }

