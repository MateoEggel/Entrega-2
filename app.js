let pregunta = prompt("Tenes sed?");

let consed = "si";
let sinsed = "no";

if(pregunta == consed) {
    alert("Levantate y buscate un vaso de agua");
} else if (pregunta == sinsed) {
    alert("Entonces segui haciendo lo que estabas haciendo");
} 

if (pregunta != consed && pregunta != sinsed) {
    alert("Si no sabes vos no sabe nadie")
}