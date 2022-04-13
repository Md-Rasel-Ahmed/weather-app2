let inputValue = document.querySelector("#inputField");
let form = document.querySelector("form");
let img = document.querySelector("img");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue.value === "" ? alert("Provide the valid name") : loadApi();
  inputValue.value = "";
});
const loadApi = () => {
  let apiKey = "286d000a6c9e918a917bacf08d63cdb0";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
    })
    .catch((err) => {
      document.querySelector("#not").style.display = "block";
    });
};

const displayData = (data) => {
  document.querySelector("#not").style.display = "none";
  img.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  console.log(data);
  showingDisplay("countryName", data.name);
  showingDisplay("temp", data.main.temp);
  showingDisplay("clouds", data.weather[0].description);
};
// set weather for display of the text id
const showingDisplay = (id, text) => {
  document.getElementById(id).textContent = text;
};

// dynamic shoing weather for display
const defalut = () => {
  let apiKey = "286d000a6c9e918a917bacf08d63cdb0";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      showingDisplay("countryName", data.name);
      showingDisplay("temp", data.main.temp);
      showingDisplay("clouds", data.weather[0].description);
    });
};
defalut();
