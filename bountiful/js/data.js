const reqURL ="js/data.json";
const gridbtn = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div");




fetch(reqURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject.fruits);  // temporary checking for valid response and data parsing
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayfruits);
  });

  console.log(fruits);
  //const prophets = jsonObject['prophets'];
  //companies.forEach(displaycompanies);

  function displayfruits(fruits) {

    let card=document.createElement("section");
    let fruitsName = document.createElement("h2");
    let fruitsGenus = document.createElement("p");
    let fruitsId =document.createElement("p");
    let fruitsOrder = document.createElement("p");
    let fruitsNutritions=document.createElement("p");
    let fruitsNutritions1=document.createElement("p");
    let fruitsNutritions2=document.createElement("p");
    let fruitsNutritions3=document.createElement("p");
    let fruitsNutritions4=document.createElement("p");
    let fruitsNutritions5=document.createElement("p");
    // Change the textContent property of the h2 element to contain the companies full name
    fruitsName.textContent =`${fruits.name}`; 
    fruitsGenus.textContent =`Genus:${fruits.genus}`;
    fruitsId.textContent =`ID:${fruits.id}`;
    fruitsOrder.textContent =`ORDER:${fruits.order}`;
    fruitsNutritions.textContent =`${fruits.nutritions.carbohydrates}`;
    fruitsNutritions1.textContent =`fat:${fruits.nutritions.fat}`;
    fruitsNutritions2.textContent =`sugar:${fruits.nutritions.sugar}`;
    fruitsNutritions3.textContent =`protein:${fruits.nutritions.protein}`;
    fruitsNutritions4.textContent =`calories:${fruits.nutritions.calories}`;
    fruitsNutritions5.textContent=`carbohydrates:${fruits.nutritions.carbohydrates}`;
  
    
    //companiesImg.setAttribute('src',companies.imageurl);
    //companiesImg.setAttribute('alt',companies.name);
    //companiesImg.setAttribute('loading','lazy');
    

  
    // Add/append the section(card) with the h2 element
    card.appendChild(fruitsName);
    card.appendChild(fruitsGenus);
    card.appendChild(fruitsId);
    card.appendChild(fruitsOrder);
    card.appendChild(fruitsNutritions);
    card.appendChild(fruitsNutritions1);
    card.appendChild(fruitsNutritions2);
    card.appendChild(fruitsNutritions3);
    card.appendChild(fruitsNutritions4);
    card.appendChild(fruitsNutritions5);

    
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.menu').appendChild(card);


// The following code could be written cleaner. How We may have to simplfiy our HTMl and think about a default view.

gridbtn.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function


function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
}

function check(){
  document.getElementById("first_name").innerHTML=document.form.name.value;
  document.getElementById("address").innerHTML=document.from.address.value;
  document.getElementById("tel_num").innerHTML=document.from.tel_num.value;
  document.getElementById("email").innerHTML=document.from.email.valume;
}
