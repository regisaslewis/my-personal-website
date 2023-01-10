const h2 = document.createElement("h2");
h2.textContent = "(Oh, God, I hope I don't screw this up)"
document.querySelector("#container").appendChild(h2);

const photoButton = document.getElementById("photo-button");
function addSection() {
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", "new-container");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "new-div");
    newDiv.innerHTML = "Please, <em>oh please</em>, just <strong>work.</strong>";
    const newButton = document.createElement("button");
    newButton.setAttribute("id", "new-button");
    newButton.textContent = "...phew";
    document.body.appendChild(newContainer);
    document.newContainer.appendChild(newDiv);
    document.newContainer.appendChild(newButton);
    document.getElementById("photo-button").remove();
}
photoButton.addEventListener("click", addSection);