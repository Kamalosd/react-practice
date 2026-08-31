import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeaDer from './components/Header/HeaDer.jsx'
import Searchbar from './components/SearchBar/Searchbar.jsx'
import Jobcard from './components/JobCard/Jobcard.jsx'
import jobData from "./JobDummyData.js"
const App = () => {
  return (
    <div>
    <Navbar/>
    <HeaDer/>
    <Searchbar/>
   {jobData.map((job) => (
  <Jobcard key={job.id} {...job} />
))}
  
    </div>
  )
}

export default App
