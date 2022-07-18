
export default function Volume({
    florest,
    rain,
    coffeeShop,
    firePlace,
}) {

    function setVolFlorest() {
        florest.volume = Number(document.querySelector(".volume1").value / 100);
    }
    function setVolRain() {
        rain.volume = Number(document.querySelector(".volume2").value / 100);
    }
    function setVolCoffeShop() {
        coffeeShop.volume = Number(document.querySelector(".volume3").value / 100);
    }
    function setVolFirePlace() {
        firePlace.volume = Number(document.querySelector(".volume4").value / 100);
    }

    return {
        setVolFlorest,
        setVolRain,
        setVolCoffeShop,
        setVolFirePlace
    }
}

