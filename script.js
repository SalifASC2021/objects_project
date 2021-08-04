let profileDiv = document.querySelector('#content');
let firstPerson = document.querySelector("#first");
let secondPerson = document.querySelector("#second");
let thirdPerson = document.querySelector("#third");
let fourthPerson = document.querySelector("#fourth");

function profileSetup(personNum) {
    
    profileDiv.innerHTML = "";
    let newDiv = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");
    let buttonDiv = document.createElement("div");
    
    p1.innerHTML = "My name is "+ info[personNum].firstName + " " + info[personNum].lastName;
    p2.innerHTML = "I am " + info[personNum].heightFeet + " feet " + info[personNum].heighInches + " inches";
    p3.innerHTML = "My favorite food is " + info[personNum].favoriteFood + " and my favorite color is " + info[personNum].favoriteColor;

  
    newDiv.style.color = "white";
    newDiv.style.fontSize = "50px";
    newDiv.style.margin = "5% 20% 5% 20%";
    newDiv.style.padding = "30px";
    newDiv.style.border = "solid black 5px";
    
    

   
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    newDiv.appendChild(buttonDiv);
    profileDiv.appendChild(newDiv);
}

firstPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(0);
    
    
}
secondPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(1);
    
}
thirdPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(2);
  
}
fourthPerson.onclick = function(event) {
    event.preventDefault();
    profileSetup(3);
    
}


let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        firstName: "Salif",
        lastName: "Sangare",
        heightFeet: "5",
        heighInches: "10",
        favoriteFood: "salad",
        favoriteColor: "green",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    2: {
        firstName: "james",
        lastName: "bronk",
        heightFeet: "6",
        heighInches: "0",
        favoriteFood: "fries",
        favoriteColor: "blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    3: {
        firstName: "bill",
        lastName: "jack",
        heightFeet: "5",
        heighInches: "7",
        favoriteFood: "pepper",
        favoriteColor: "orange",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}