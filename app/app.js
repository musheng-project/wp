// 加载样式文件
// require("../css/app.css");
require("../less/app.less");

let img = require("../images/yun.png");
console.log("img ==>", img);

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

    // 创建图片对象
    let image = new Image();

    image.src = img;
    
    document.getElementById("icon").appendChild(image);
}