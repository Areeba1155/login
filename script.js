const data = [];
const name = document.querySelectorAll("input")[0];
const age = document.querySelectorAll("input")[1];
const Class = document.querySelectorAll("input")[2];
const btn = document.querySelector("button");
const div = document.getElementsByClassName("secondary-container")[0];


btn.addEventListener("click", () => {
    let myHtml = " ";
    data.push({
        name: name.value,
        age: age.value,
        Class: Class.value
    })

    data.forEach((element) => {
        myHtml += `
        <div class="box">
        <h2>Name : <span>${element.name}</span></h2>
    
        <h3>Age : <span>${element.age}</span></h3>
    
        <h3>Class : <span>${element.Class}</span></h3>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur odit eligendi fugit nobis ut delectus reiciendis voluptatum doloribus, accusamus itaque totam doloremque, atque tempore. Dicta laboriosam minus placeat autem.</p>
        </div>
    `
    })
    div.innerHTML = myHtml;

})

