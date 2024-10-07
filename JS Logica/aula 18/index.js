// try{
//     // É executada quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipuler o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch{
//     // É executada quando não há erros
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
//     // Sempre
// }

function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}

try{
const data = new Date('00:00:00');
const hora = retornaHora();
console.log(hora);
} catch(e){
    //tratar erro
} finally{
    console.log('Tenha um bom dia!')
}