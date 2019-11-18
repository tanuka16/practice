
function addImagesToDOM() {
  const container = document.getElementById("container")

  const imageDiv = document.createElement('div');
  imageDiv.className= "one-fourth";

  let imgElement = document.createElement("img");
  imgElement.src = "http://api.adorable.io/avatars/32131231";

  imageDiv.append(imgElement);
  container.append(imageDiv);

}
addImagesToDOM();
