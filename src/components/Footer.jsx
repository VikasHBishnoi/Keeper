import React  from "react";
const day=new Date();
let year=day.getFullYear();
function footer(){
    return <footer><h1>Copyright &#169; {year} </h1></footer>;
}
export default footer;