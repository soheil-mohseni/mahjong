
import React , { useState ,useRef, useEffect } from "react";
import "./input.css"
import { bank_imgs } from "./bank_list_img"





function Image(props) {


const [deciderimg, setDeciderimg] = useState(false);
const [img, setImg] = useState("");
const [inputValue, setInputValue] = useState("");
const [first,setFirst] = useState(true);

const previousInputValue = useRef();

// const imgs1 = ran_img()

const imageOnChangeHandler = (event) => {
  props.onFirst(props.number)
  setImg(previousInputValue.current)
  setDeciderimg(true)
      };


const queOnChangeHandler = (event) => {
    setDeciderimg(false)
            }; 

useEffect(()=> {
  //  setTimeout(function(){
        previousInputValue.current = inputValue;
        
//       setDeciderimg(false)
    // }, 2000);
},[inputValue])

// useEffect(()=> {
//       setDeciderimg(props.dec);
//   },[])
  


  return (
   
        <>
            {deciderimg && bank_imgs[props.number].turn === true && <img onClick={queOnChangeHandler}  src={ require(`${bank_imgs[props.number].urls}`)}/> }
                
            {!deciderimg && bank_imgs[props.number].turn === true && <img onClick={imageOnChangeHandler} src={ require("./qq.webp")}/>}
    
         </>
  );
}

export default Image;
