const h2 = document.createElement("h2");
h2.textContent = "(Oh, God, I hope I don't screw this up)"
document.querySelector("#container").appendChild(h2);

const testButton = document.getElementById("test-button");
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "new-div");
newDiv.setAttribute("class", "box-div");
newDiv.innerHTML = "Please, <em>oh please</em>, just <strong>work.</strong>";
const newButtonDiv = document.createElement("div");
newButtonDiv.setAttribute("id", "new-button-div");
const newButton = document.createElement("button");
newButton.setAttribute("id", "new-button");
newButton.textContent = "...phew";
const newDivTwo = document.createElement("div");
newDivTwo.setAttribute("id", "new-div-two");
newDivTwo.setAttribute("class", "box-div")
newDivTwo.textContent = "I'm sad about how long that took, but at least it's done."
const destroyerDiv = document.createElement("div");
destroyerDiv.setAttribute("id", "destroyer-div");
const destroyerButton = document.createElement("button");
destroyerButton.setAttribute("id", "destroyer");
destroyerButton.textContent = "Rid the world of this abomination."

function addSection() {
    document.body.appendChild(newDiv);
    document.body.appendChild(newButtonDiv);
    document.getElementById("new-button-div").appendChild(newButton);
    document.getElementById("test-button").remove();
}

function addSectionTwo () {
    document.body.appendChild(newDivTwo);
    document.body.appendChild(destroyerDiv);
    document.getElementById("destroyer-div").appendChild(destroyerButton);
}

function destroy() {
    newDiv.remove();
    newButton.remove();
    newDivTwo.remove();
    document.getElementById("container").remove();
    document.body.style.background = "white";
    document.getElementById("destroyer-div").remove();
}

testButton.addEventListener("click", addSection);
newButton.addEventListener("click", addSectionTwo);
destroyerButton.addEventListener("click", destroy);