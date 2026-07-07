console.log("GrowEveryday Loaded Successfully 🌱");
function welcomeUser() {
    alert("Welcome to GrowEveryday 🌱");
}
let water = 0;
function drinkWater() {

    if (water < 8) {

        water++;
        
        document.getElementById("waterCount").innerText =
        water + " / 8 Glass";

        document.getElementById("progressFill").style.width =
        (water / 8) * 100 + "%";
    }
    if (water === 8) {
        alert("  🎉 Amazing Sameer! You completed today's water goal.");
    }
}
function toggleTheme(){
    document.body.classList.toggle("dark");
}
