let add = async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let imageUrl = document.getElementById("imageUrl").value;
  let description = document.getElementById("description").value;
  let obj = { name, imageUrl, description };

  try {
    let response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    let result = await response;
    window.location.replace("./index.html");
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("button").addEventListener("click", add);
