
import React , { useState , useEffect } from "react";
import "./input.css"
import { bank_imgs } from "./bank_list_img"
function App() {


const [deciderimg, setDeciderimg] = useState(false);
const [img, setImg] = useState();



const imageOnChangeHandler = (event) => {
  setDeciderimg(true)
      }; 
const queOnChangeHandler = (event) => {
    setDeciderimg(false)
            }; 

  return (
   
        <div style={{backgroundColor: "red" }} class="grid grid-cols-6 gap-2 max-w-4xl ml-12 mr-12">
          
          {deciderimg && bank_imgs.map((imgs,index) => {
            console.log("2231232fffffff",imgs);
            return(
            <>
                <img onClick={queOnChangeHandler}  key={imgs.urls} src={ require(`${imgs.urls}`)}/>
            </>
            )
          })}


          {!deciderimg && bank_imgs.map((imgas,index) => {
            return(
            <>
                <img onClick={imageOnChangeHandler}  key={index} src={ require("./qq.webp")}/>
            </>
            )
          })}

        </div>
  );
}

export default App;
