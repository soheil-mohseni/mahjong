
import React , { useState , useEffect } from "react";
import "./input.css"
import { bank_imgs } from "./bank_list_img"
import Image from "./Image";


function App() {


const [deciderimg, setDeciderimg] = useState(false);
const [first,setFirst] = useState();
const [second,setSecond] = useState();

const queOnChangeHandler = (event) => {
    setDeciderimg(false)
            }; 

// useEffect(() => {
//    kk.push(...imgs1)
// },[])

//  const kk = []
// setImg(kk)
// console.log(kk ,"11111111111111111111111111111");

  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  var nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

   const firsts = (numberi) => {
    console.log("a1d",numberi);
    console.log("SSSSSS",second);
    setFirst(numberi)
    console.log("FFFFFF",first);
    if (first === second){
      console.log("hcxciiii");
    }
  }

  const seconds = (number) => {

    console.log("a1d",number);
    setSecond(number + 1)
    console.log("SSSSSS",second);
    console.log("FFFFFF",first);

    if (first === second){
      console.log("asdasdasd",first);
      console.log("hiiii");
    }
  }


  return (
   
        <div style={{backgroundColor: "red" }} class="grid grid-cols-6 gap-2 max-w-4xl ml-12 mr-12">
          
          {/* {deciderimg && bank_imgs.map((imgs,index) => {
            console.log("2231232fffffff",imgs);
            return(
            <> */}
                {/* <img onClick={queOnChangeHandler}  key={imgs.urls} src={ require(`${imgs.urls}`)}/> */}
            {/* </>
            )
          })} */}
          
        {nums.map((num,index)=>{
            return (
            <Image number={index} onFirst={firsts}/> 
            )
          })}

        {nums2.map((num,index)=>{
            return (
            <Image number={index} onFirst={seconds}/> 
            )
          })}
          {/* {!deciderimg && bank_imgs.map((imgas,index) => {
            return(
            <> */}
                {/* <img onClick={imageOnChangeHandler}  key={index} src={ require("./qq.webp")}/> */}
            {/* </>
            )
          })} */}

        </div>
  );
}

export default App;
