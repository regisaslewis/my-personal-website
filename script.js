const h2 = document.createElement("h2");
h2.textContent = "(Oh, God, I hope I don't screw this up)"
document.querySelector("#container").appendChild(h2);

const testButton = document.getElementById("test-button");
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "new-div");
newDiv.innerHTML = "Please, <em>oh please</em>, just <strong>work.</strong>";
const newButtonDiv = document.createElement("div");
newButtonDiv.setAttribute("id", "new-button-div");
const newButton = document.createElement("button");
newButton.setAttribute("id", "new-button");
newButton.textContent = "...phew";

function addSection() {
    document.body.appendChild(newDiv);
    document.body.appendChild(newButtonDiv);
    document.getElementById("new-button-div").appendChild(newButton);
    document.getElementById("test-button").remove();
}
testButton.addEventListener("click", addSection);