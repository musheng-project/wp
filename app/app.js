// require("../css/app.css");
require("../less/app.less");

window.onload = function(){

    let person = ["mack", "jack", "fuck"];

    let ul = document.createElement("ul");

    person.map(v => {
        console.log("v ==>", v);

        let li = document.createElement("li");
        li.textContent = v;

        ul.appendChild(li);
    })

    document.body.appendChild(ul);
}