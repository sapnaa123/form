import { useState } from "react"
import Form from "./Form"
function Header (){

    const[isOpen , setisOpen]= useState(false)

    // handle open from

    const HandleOpenForm =()=>{
        setisOpen(true)
    }

    const HandleOpen = () =>{
        setisOpen(false)
    }

    return <div>

    <div className="bg-secondryColor flex justify-between w-full h-[60px] ">
        <h1 className="text-4xl text-white mx-8">Nooty</h1>
        <button onClick={HandleOpenForm} className="hover:bg-primaryColor rounded-xl mr-8 mt-4 w-[100px] h-[40px] text-xl text-white">Add note</button>
    </div>
    
    {
        isOpen == true ? <Form isClose={isOpen} Handle={HandleOpen}/> : ""
    }
    
    </div>
}
export default Header