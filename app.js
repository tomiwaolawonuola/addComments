const form = document.getElementById("form");
const container = document.querySelector(".container");
const input = document.getElementById("input");

function template(data) {
  container.insertAdjacentHTML(
    "beforeend",
    `
         <div class="comments">
        <div class="comment">
          <img src="me.jpg" class="comment-avatar" />
        </div>
        <div class="flex1">
          <h2>${data.name}</h2>
          <p>${data.comment}</p>
        </div>
      </div>
`
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {
    name: "Tomiwa Tommy",
    comment: input.value,
  };
  if (input.value == "") {
    return;
  }
  template(data);

  input.value = "";

  //setlocalStorage
  localStorage.setItem("values", container.innerHTML);
});

let get = localStorage.getItem("values");

if (get) {
  container.innerHTML = get;
}

console.log(1)
