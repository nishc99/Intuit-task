import React from 'react'
import "./App.css";
import SideBar from './components/Sidebar/SideBar'
import Getthings from './Pages/Getthings';
import Business from './Pages/Business';
import Banking from './Pages/Banking';
import Getpaid from './Pages/Getpaid';
import Customers from './Pages/Customers';
import Commerce from './Pages/Commerce';
import Payroll from './Pages/Payroll';
import Bookkeep from './Pages/Bookkeep';
import Taxes from './Pages/Taxes';
import Apps from "./Pages/Apps";
import More from "./Pages/More";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
      <SideBar/>
      
         <Routes>
              <Route path="/" element={<Getthings />} />
              <Route path="/dashboard" element={<Business />} />
              <Route path="/analytics" element={<Banking />} />
              <Route path="/architecture" element={<Getpaid />} />
              <Route path="/digital" element={<Customers />} />
              <Route path="/documentation" element={<Commerce />} />
              <Route path="/team" element={<Payroll />} />
              <Route path="/search" element={<Bookkeep />} />              
              <Route path="/taxes" element={<Taxes />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/more" element={<More />} />

        <Route path="*" element={<> not found</>} />
        
        </Routes>
     </Router>
    </>
    
  )
}

export default App


// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Getthings from './Pages/Getthings';
// import Business from './Pages/Business';
// import Banking from './Pages/Banking';
// import Getpaid from './Pages/Getpaid';
// import Customers from './Pages/Customers';
// import Commerce from './Pages/Commerce';
// import Payroll from './Pages/Payroll';
// import Bookkeep from './Pages/Bookkeep';
// import Taxes from './Pages/Taxes';
// import Apps from "./Pages/Apps";
// import More from "./Pages/More";
// import SideBar from "./components/Sidebar/SideBar";
// function App() {
//   return (
//     <Router>
//       <SideBar>
//         <Routes>

//              <Route path="/" element={<Getthings />} />
//              <Route path="/dashboard" element={<Business />} />
//              <Route path="/analytics" element={<Banking />} />
//              <Route path="/architecture" element={<Getpaid />} />
//              <Route path="/digital" element={<Customers />} />
//              <Route path="/documentation" element={<Commerce />} />
//              <Route path="/team" element={<Payroll />} />
//              <Route path="/search" element={<Bookkeep />} />
//              <Route path="/taxes" element={<Taxes />} />
//              <Route path="/apps" element={<Apps />} />
//              <Route path="/more" element={<More />} />

//           <Route path="*" element={<> not found</>} />
//           <More/>
//         </Routes>
//         </SideBar>
//     </Router>
//   );
// }

// export default App;





// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Getthings from './Pages/Getthings';
// import Business from './Pages/Business';
// import Banking from './Pages/Banking';
// import Getpaid from './Pages/Getpaid';
// import Customers from './Pages/Customers';
// import Commerce from './Pages/Commerce';
// import Payroll from './Pages/Payroll';
// import Bookkeep from './Pages/Bookkeep';



// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Getthings />} />
//           <Route path="/dashboard" element={<Business />} />
//           <Route path="/analytics" element={<Banking />} />
//           <Route path="/architecture" element={<Getpaid />} />
//           <Route path="/digital" element={<Customers />} />
//           <Route path="/documentation" element={<Commerce />} />
//           <Route path="/team" element={<Payroll />} />
//           <Route path="/search" element={<Bookkeep />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;







// import './App.css';
// import Sidebar from './components/Sidebar';
//import Thirdpage from './Pages/Thirdpage';
//import Signin from './Pages/Signin';

// function App() {
//   return (
//     <Sidebar/>
//   );
// }

// export default App;
