document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  // users can input a place
  // click on submit button
  // have the input box clear out and the new item appended to list

  const handleFavoriteSubmit = (event) => {
    event.preventDefault();

    const favoriteInput = document.querySelector(".favorite-input");
    const favorite = favoriteInput.value;
    favoriteInput.value = ""; //reset the submit box, clear it

    const newLi = document.createElement("li");
    newLi.textContent = favorite;

    const ul = document.getElementById("sf-places");
    ul.appendChild(newLi);
  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleFavoriteSubmit);


  // adding new photos

  const showPhotoFrom = (event) => {
    // find the div
    const photoFormDiv = document.querySelector(".photo-form-container");
    // switch the classname, hidden to not hidden - vice versa
    if (photoFormDiv.className === "photo-form-container") {
      photoFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };

  // add an event listener on the submit button - to show photo form on click
  const photoFormShowButton = document.querySelector(".photo-show-button");
  photoFormShowButton.addEventListener("click", showPhotoFrom);

  // handle the photo submit
  const handlePhotoSubmit = (event) => {
    event.preventDefault();

    const photoURLInput = document.querySelector(".photo-url-input");
    const photoURL = photoURLInput.value;
    photoURLInput.value = "";

    const newImg = document.createElement("img");
    newImg.src = photoURL;

    const newPhotoLi = document.createElement("li");
    newPhotoLi.appendChild(newImg);

    const dogPhotosUl = document.querySelector(".dog-photos");
    dogPhotosUl.appendChild(newPhotoLi);
  };

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});
