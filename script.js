fetch("actors.json")
  .then((res) => res.json())
  .then((data) => handleProductList(data));

// Just checking
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(actor) {
  //Selecting template and cloning
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  // Change stuff
  clone.querySelector("h2.fullname").textContent = actor.fullname;
  clone.querySelector("p.movie").textContent = actor.movie;
  clone.querySelector("p.info").textContent = actor.info;
  //Selection where i want the clone
  const parent = document.querySelector("main div.list");
  //Appending it
  parent.appendChild(clone);
}
