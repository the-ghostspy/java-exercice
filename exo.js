// fonction qui verifie l'age 
function verifieAge (age){
if (age < 18){
    return "Mineur";
}
else if (age > 18 && age < 65 ){
    return "Mageur";
}
else if(age >= 65){
    return " Senior";
}
else {
 return "age invalide";
}
}
// fonction qui determine le sexe;
 function determineSexe (sexe,ager){
 if ( sexe === "M" && ager < 18 ){
    return "jeune homme";
 }
 else if( sexe ==="M" && ager >= 18 && ager < 65){
    return "monsieur";
 }
 else if ( sexe ==="F" && ager < 18 ){
    return "jeune fille";
 }
 else if( sexe ==="F" && ager >= 18 && ager < 65){
    return "madame";
 }
 else {
    return "sexe invalide";
 }
 }
let monSexe = prompt("veillez entrer votre sexe(M/F)");
let monAge = parseInt(prompt("votre age s\'il vous plais"));
statut = determineSexe(monSexe,monAge);
statutSocial = verifieAge(monAge);
message = '${statut}, vous ete ${statutSocial}';
alert(message);