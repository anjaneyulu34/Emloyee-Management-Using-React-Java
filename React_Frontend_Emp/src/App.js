import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'


function App() {
  return (
    <div>
      <Header/>
      <Router>
      
     <div className='conatiner'>

      <Routes>
        <Route path='' element={<ListEmployeeComponent/>}> </Route>
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
        <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
      </Routes>
      
      </div>

      </Router>
      <Footer/>
    </div>
  )
}

export default App
