import { useState } from "react"
function Form( {isClose, Handle}){
    

   


    return <div style={{display: isClose == false ? "block" : "" }} className="bg-gray-700 h-screen w-full absolute top-0 ">

     <div className="flex justify-center p-10">
        <form className="bg-white sm:w-[400px] w-[300px] sm:h-[450px] h-[420px] p-4">
        <i onClick={Handle} class="fa-solid fa-x sm:ml-[350px] ml-[240px]"></i>
            <br />
            <br />
            <input className="sm:w-[350px] w-[250px] h-[20px] border-2 border-black p-5 rounded" type="password" placeholder="Enter title" />
            <br />
            <textarea className="sm:w-[350px] w-[250px] rounded border-2 border-black mt-3 row={8}" placeholder="Enter title"></textarea>
            <button className="bg-secondryColor text-white sm:w-[350px] w-[250px] h-[40px] text-3xl mt-10 g">save</button>
        </form>
    </div>
       
       
    </div>
}

export default Form