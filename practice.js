

function temp () {
    let temp = prompt("enter a temp")
    if(temp != null){
    document.getElementById("thetemp").innerHTML = `the temperature in celsiusis${temp}.`;
     }
}
function toCelsius(fahrenheit){
    return (5/9) *(fahrenheit - 32);

}
return(Math.round(toCelsius()));


