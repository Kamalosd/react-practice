import React from "react";
import { createContext, useState ,useContext} from "react";

export const ThemeContext=createContext()//ata norml var return kre na compont ret kre

export const ThemeProvider=({children})=>{//child k destructure krtei hbe,r return a return krte heb otake wrap krte hbe within providr...//providr property 

  const [theme,setTheme]=useState('Dark')

  const handleToggleTheme=()=>{
     setTheme((prevTheme)=>prevTheme==='Dark'?'Light':"Dark")
  }
  return<ThemeContext.Provider value={{theme,handleToggleTheme}}>

   {children}
  
  </ThemeContext.Provider>
}


//create a compont
export const DarkLight=()=>{

  const {theme,handleToggleTheme}=useContext(ThemeContext)
  return(
    <div className={`p-20 min-h-screen flex flex-col justify-center items-center ${theme==='Dark'?"bg-red-600 text-white":"bg-white text-black"}`}>
      

      <h1 className={`my-4 text-2xl ${theme==='Dark'?"bg-red-600 text-white":"bg-white text-black"}`}>drk lt mode</h1>

     <p  className={`my-4 text-2xl ${theme==='Dark'?"bg-red-600 text-white":"bg-white text-black"}`}>Current theme: {theme}</p>

      <button   onClick={handleToggleTheme}  
      
      className="bg-blue-500 hover:bg-blue-700 text-black rounded-md mt-4 p-3"> {theme==='Dark'?"switch to liGht mode":"switch to dark mode"}</button>
    </div>
  )
}



//app.jsx
import React from 'react'
import { DarkLight, ThemeProvider } from './DarkLight'


export default function App() {
  return (
    <div>
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </div>
  )
}
