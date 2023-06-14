import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import nature1 from './images/nature1.jpeg';
import nature2 from './images/nature2.jpeg';
import nature3 from './images/nature3.jpg';
import rose from './images/rose.jpg';
import { Route } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import DataFetch from './Update';

function App() {

  <Route exact path="/Contact" component={Contact} />

//   const name="Kaninians!!"
//   const changeBackground=true;
  
//   const hStyle={
//     color:'green',
//     fontSize:'16px',
//     fontWeight:'bold'
//   }
//   const cStyle={
//     backgroundColor:'lightgray',
//     padding:'10px',
//     position:'relative',
  
//   }
//   const tStyle={
//     fontStyle:'italic',
    
//   }
//   const combinedStyle={
//     // color:'blue'
//      ...hStyle,
//      ...cStyle,
//      ...tStyle
//   }
//   const nature=[{
//     id:101,
//     name:'Sunset',
//     images:[
//       {
//         name:'Sunset',
//         img:nature1

//       },
//       {
//         name:'Blossom',
//         img:nature2
//       },
//       {
//         name:'Snow Blossom',
//         img:nature3
//       }
//     ]
//   },
//   {
//     id:102,
//     name:'Sunset',
//     images:[
//       {
//         name:'Sunset',
//         img:nature1

//       },
//       {
//         name:'Blossom',
//         img:nature2
//       },
//       {
//         name:'Snow Blossom',
//         img:nature3
//       }
//     ]
//   },
//   {
//     id:103,
//     name:'Sunset',
//     images:[
//       {
//         name:'Sunset',
//         img:nature1

//       },
//       {
//         name:'Blossom',
//         img:nature2
//       },
//       {
//         name:'Snow Blossom',
//         img:nature3
//       }
//     ]
//   }
 
// ]
// const filnat=nature.filter((nature)=>nature.id==102);
  

//   // img=""
  return (
  <div>
  {/* <h1 className="MyStyle">Hello {name}</h1>
  <h1 style={{backgroundColor:changeBackground?'blue':'red',color:'white'}}>Hello {name}</h1>
  <h1 style={combinedStyle}>Hello</h1>
  <h1 className={changeBackground?'redBg':'blueBg'}>Hello {name}</h1>
  <button className="btn btn-dark">Click</button>
  <table>
    <tr>
      <td></td>
    </tr>
  </table> */}

  <Navbar/>
  

  {/* <h1 align='center'>Welcome to Nature gallery</h1>
  <table className="table table-hover table-dark">
  <thead >
      <td><h2>ID</h2></td> */}
      {/* <td><h2>Name</h2></td> */}
      {/* <td><h2>Picture</h2></td> */}
  
    {/* </thead>
    <tbody > */}
    {/* {filnat.map((nat)=>(
      <tr key={nat.id}>
        <td>{nat.id}</td>
        
        {nat.images.map((i,index)=>(
          <tr key={index}>
            <td>{i.name}</td>
            <td><img src={i.img}/></td>
          </tr>
        ))}
      </tr>
    ))} */}
      
      {/* <tr>
        <td>SnowBlossom</td>
        <td><img src={nature2}/></td>
      </tr>
      <tr>
        <td>Blossom</td>
        <td><img src={nature3}/></td>
      </tr>
      <tr>
        <td>Rose</td>
        <td><img src={rose}/></td>
      </tr> */}
    {/* </tbody>
  </table> */}

  </div>
  )
}

export default App;
