const messagedebile1 = "J'aime les chaussons aux tomates"
console.log(messagedebile1);

//Je récupère l'ensemble de mes inputs HTML dans une constante et ensuite j'affiche la valeur saisie dans chacun des inputs en console log

const inputsdemessagecon = document.querySelectorAll('input');

inputsdemessagecon.forEach(input => {
console.log(input.value);
});