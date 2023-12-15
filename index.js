let deleteOne = async (e) => {
  try {
    let response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/artists/${e.target.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //let result = await response;
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

let displayAll = async () => {
  try {
    let response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/artists",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data.data);
    let body = document.querySelector("body");
    data.data.forEach((element) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      img.src = element.imageUrl;
      let p = document.createElement("p");
      let dButton = document.createElement("button");
      dButton.setAttribute("id", element.id);
      dButton.innerHTML = "DELETE";
      let pButton = document.createElement("button");
      pButton.innerHTML = "UPDATE";
      pButton.setAttribute("id", element.id);
      h3.innerHTML = element.name;
      p.innerHTML = element.description;
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(img);
      div.appendChild(dButton);
      div.appendChild(pButton);
      body.appendChild(div);
      dButton.addEventListener("click", deleteOne);
    });
  } catch (error) {
    console.log(error);
  }
};

let add = (e) => {
  console.log(e);
};

displayAll();
