function switchModes_myHobbies(){
    if (document.body.className == "body_myHobbies_lightMode") {
        document.body.classList.remove("body_myHobbies_lightMode")
        document.body.className = "body_myHobbies_darkMode";
        document.getElementById("lightSwitch_myHobbies").classList.remove("lightSwitch_myHobbies_lightMode");
        document.getElementById("lightSwitch_myHobbies").className = "lightSwitch_myHobbies_darkMode";
        document.getElementById("lightSwitch_myHobbies").innerText = "Light";
        const arrayOfImages = document.getElementsByClassName("td_myHobbies");
        for(let i = 0; i < arrayOfImages.length; i++){
            arrayOfImages[i].style.filter = "invert(100%)";
        }
        const arrayOfLabels = document.getElementsByClassName("p_myHobbies");
        for(let i = 0; i < arrayOfLabels.length; i++){
            arrayOfLabels[i].style.backgroundColor = "antiquewhite";
            arrayOfLabels[i].style.color = "black";
            arrayOfLabels[i].style.fontWeight = "800";
        }
    }
    else {
        document.body.classList.remove("body_myHobbies_darkMode")
        document.body.className = "body_myHobbies_lightMode";
        document.getElementById("lightSwitch_myHobbies").classList.remove("lightSwitch_myHobbies_darkMode");
        document.getElementById("lightSwitch_myHobbies").className = "lightSwitch_myHobbies_lightMode";
        document.getElementById("lightSwitch_myHobbies").innerText = "Dark";
        const arrayOfLabels = document.getElementsByClassName("p_myHobbies");
        const arrayOfImages = document.getElementsByClassName("td_myHobbies");
        for(let i = 0; i < arrayOfLabels.length; i++){
            arrayOfLabels[i].style.backgroundColor = "rgba(122, 112, 112, 0.7)";
            arrayOfLabels[i].style.color = "black";
            arrayOfLabels[i].style.fontWeight = "300";
            arrayOfImages[i].style.filter = "invert(0%)";
        }
    }
}