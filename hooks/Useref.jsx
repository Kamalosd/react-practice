//ATA DIA sorasri dom manipulate kra jai.ata dia jokon val chnGe krchi tokon react r compont ta rerendr hoina
//doc.Getelebyid krev ele k drar kj ta r krbona
//akta ref create krlm  srta h1 tG r ref attribute r modhe use krlm
import { useRef } from "react"

function App() {
  
  let myHeadLine=useRef()
  

  const chanGe=()=>{
      myHeadLine.current.innerText="hi"
  }

  return (
    <div>
      
<h1 ref={myHeadLine}></h1>//ele r vitr je val ta chnG hocche tokon compont ta rerendr hochena
<button onClick={chanGe}>hello</button>

    </div>
  )
}

export default App
