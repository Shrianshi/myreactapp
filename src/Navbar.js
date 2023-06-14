import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Aboutus from './Aboutus'
import PageNotFound from './PageNotFound'
import Delete from './Delete'
import Update from './Update'
// import Get from './get'
// import Pagenotfound from './pagenotfound'
//import '../components/employee.css'
// const navStyle = {
//     height:"100px",
//     width:"100%",
//     backgroundColor : "#F2BE22",
//     color: "white",
// }
// const Nav = {
//     width:"25%",
//     display : "flex",
//     flexDirection : "row",
//     justifyContent:"space-between"
// }
// const mainContent = {
//     margin: "auto",
//   width: "50%",
//   position: "relative",
//   top: "100px"
// }
function Navbar(props) {
  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
            <ul class="navbar-nav">
                <li class="nav-item nav-link"><Link to={'/Contact'} className='btn btn-success navTab'>Contact Us</Link></li>
                <li class="nav-item nav-link"><Link to={'/Update'} className='btn btn-warning navTab'>DataFetch</Link></li>
                <li class="nav-item nav-link"><Link to={'/PageNotFound'} className='btn btn-danger navTab'>Link</Link></li>


                

                {/* <li><Link to={'/list'} className='btn btn-outline-danger navTab'>List</Link></li>
                <li><Link to={'/get'} className='btn btn-outline-danger navTab'>Get</Link></li> */}
            </ul>
        </nav>
        
    <Routes>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Update" element={<Update/>}></Route>
      <Route path="/PageNotFound" element={<PageNotFound/>}></Route>
      
      {/* <Route path="/list" element={<EmployeeList e={props}/>}></Route>
      <Route path="/get" element={<Get />}></Route> */}
      {/* <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route> */}




    </Routes>
    
    </div>

    )
}

export default Navbar
