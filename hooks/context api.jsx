//index.jsx
//usecontx r sahaje konostate k Globaly declare kra jai sobai use krbe
import { createContext } from "react";//warppinG r jono parent dorechi atake


//fst step akta context create krbo
export const BioContext=createContext();//variable ta compont hisab a kj kre
 
//@nd step; 
 export const BioProvider=({children})=>{

  const myName="John Doe";
  const myAge=30;

//akne props pass krte hbe,child Gulo providr dara wrapin krbo
  return<BioContext.Provider value={{ myName, myAge }}>//provider dara val provide krechi aber je keu ata acces krte prbe bio provider r child ra tar jono fst usecontx hook lGbe je contx ta toiri krechoi seta [ass krbo]
    
    {children}

  </BioContext.Provider>

}


//home.jsx.parent compont...contx r provider dara wrappinG krbo atr jollo child k parent a aste hbe.providr r madhome data provide,usecntx r madhome data acess
import React, { useContext } from 'react'
import { BioContext } from './Index';

export const Home = () => {


  const { myName, myAge } = useContext(BioContext);
  return (
    <div>
      <h1>Hello, my name is {myName}</h1>
      <p>I am {myAge} years old.</p>
    </div>
  );
}




//app.jsx
import React from 'react'

import { BioProvider } from './Index';
import { Home } from './Home';
const App = () => {
  return (
  <BioProvider>

    <Home/>
  </BioProvider>
  )
}
export default App
