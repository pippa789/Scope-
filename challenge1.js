const helloCodeNation = () => {
    return("Hello Code Nation");
}
const helloCodeNation5Times = (fn) => {
    for (i = 0; i < 5; i++) {
        console.log(fn());
    }
}

helloCodeNation5Times(helloCodeNation);
