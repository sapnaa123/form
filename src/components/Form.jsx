import { useState } from "react"
function Form( {isClose, Handle}){

    const[title, settitle] = useState("")
    const[description , setdescription] = useState ("")
    const[error, setError] = useState(false)

    //validate the form

    const HandleForm =(event) => {
        event.preventDefault()
        if(title == "" && description == ""){
            setError(true)
        setTimeout(()=> {
            setError(false)
        }, 3000);
        }
    }
   


    return <div style={{display: isClose == false ? "block" : "" }} className="bg-gray-700 h-screen w-full absolute top-0 ">

     <div className="flex justify-center p-10">
        <form className="bg-white sm:w-[400px] w-[300px] sm:h-[420px] h-[420px] p-4">
        <i onClick={Handle} class="fa-solid fa-x sm:ml-[350px] ml-[240px]"></i>
        {
            error == true ? <p className="text-red-500">Fadlan soo buxi formka</p> : ""
        }
            <br />
            <input value={title} onChange={(event) =>{
                settitle(event.target.value)} }  
                className="sm:w-[350px] w-[250px] h-[20px] border-2 border-black p-5 rounded" type="text" placeholder="Enter title" />
            <br />
            <textarea value={description} className="sm:w-[350px] w-[250px] rounded border-2 border-black mt-3 row={8}" placeholder="Enter title"></textarea>
            <button onClick={HandleForm} className="bg-secondryColor text-white sm:w-[350px] w-[250px] h-[40px] text-3xl mt-10 g">save</button>
        </form>
    </div>
       
       
    </div>
}

export default Form 