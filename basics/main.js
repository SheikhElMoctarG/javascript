let products = ["Apple", "Samsung", "huawei", "MacOS"];
let colors = ["green", "blue", "black", "white"]

document.write("<h1>Our Products </h1>");
for(let i =0; i<colors.length; i++){
    document.write("<div>");
    document.write(`Model: ${products[i]} \n Color: ${colors[i]}`);
    document.write("</div>");
}