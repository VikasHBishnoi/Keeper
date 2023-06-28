import React  from "react";
// function foot
const day=new Date();
let year=day.getFullYear();
// console.log(year+" "+day);
function footer(){
    return <footer><h1>Copyright &#169; {year} </h1></footer>;
}
export default footer;