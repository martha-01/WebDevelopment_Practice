function switchModes() {
    if (document.body.className == "dark-theme") {
        document.body.className = "light-theme";
        document.getElementById("btn").innerText = "Dark";
    } else {
        document.body.className = "dark-theme";
        document.getElementById("btn").innerText = "Light";
    }
}