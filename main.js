const intro = document.querySelector(".intro");

const newPara = document.createElement("p");

newPara.textContent = "My Name is Abdulrahman.";
newPara.className = "name";

intro.append(newPara);
