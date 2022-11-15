
import React , { useState , useEffect } from "react";
import "./input.css"
import { bank_imgs } from "./bank_list_img"





function Image(props) {


const [deciderimg, setDeciderimg] = useState(true);
const [img, setImg] = useState("");
const [first, setFirst] = useState();


// const imgs1 = ran_img()

const imageOnChangeHandler = (event) => {
    console.log(props.number);
    console.log(props.number);
    console.log(props.number);

  props.onFirst(props.number)
  setDeciderimg(true)
      }; 
const queOnChangeHandler = (event) => {
    setDeciderimg(false)
            }; 

useEffect(()=> {
    setTimeout(function(){
        setDeciderimg(false)
    }, 2000);
},[deciderimg])

  return (
   
        <>
            {deciderimg && <img onClick={queOnChangeHandler}  src={ require(`${bank_imgs[props.number].urls}`)}/> }

            {!deciderimg && <img onClick={imageOnChangeHandler} src={ require("./qq.webp")}/>}
    
         </>
  );
}

export default Image;
