let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;

while (true) {
      
alert("Eleição - Escolha seu candidato:");

alert("889 - Candidato X");
      
alert("847 - Candidato Y");
    
alert("515 - Candidato Z");
    
alert("0 - Voto em branco");
    
alert("1 - Finalizar a votação");
    
     
let voto = prompt("Digite o número do seu voto: "); 
   
if (voto === "889") {
    candidato_X++;
} 

else if (voto === "847") {
    candidato_Y++; 
} 
    
else if (voto === "515") {
    candidato_Z++;
} 
        
else if (voto === "0") {
    branco++;
} 

else if (voto === "1") {
        
break;
} 
   
else {
           
alert("Voto inválido! Por favor, escolha uma opção válida.");
}
 
let total_votos = candidato_X + candidato_Y + candidato_Z + branco;
let nulos = total_votos - (candidato_X + candidato_Y + candidato_Z + branco);

console.log("\nVotação finalizada!");
console.log("Resultado:");
console.log("Candidato X: ", candidato_X);
console.log("Candidato Y: ", candidato_Y);
console.log("Candidato Z: ", candidato_Z);
console.log("Votos em branco: ", branco);
console.log("Votos nulos: ", nulos);

let vencedor = Math.max(candidato_X, candidato_Y, candidato_Z, branco);
if (vencedor === branco) {
    
console.log("\nPor enquanto não temos vencedor!");
} 
else if (vencedor === candidato_x) {
    console.log("\nCandidato X é o vencedor!")
}

else if (vencedor === candidato_Y) {   
   
console.log("\nCandidato Y é o vencedor!");
} 
else if (vencedor === candidato_Z) {   
   
console.log("\nCandidato Z é o vencedor!");
}
}