
function App() {
  
  const postFromData=(event)=>{
    event.preventDefault()
    alert('form submittede')

  }
//button submit krle r foem ta reload hbe na.form r default nature
  return (
    <div>
<form onSubmit={postFromData}>
  <input placeholder="name"/>
  <button type="submit">submit</button>
</form>
    </div>
  )
}

export default App
