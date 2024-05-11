import React,{ useState} from 'react'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'

import Opstmt from './pages/Opstmt'
import AssetLiab from './pages/AssetLiab'
import OcaOcl from './pages/OcaOcl'
import Ratios from './pages/Ratios'
import WcTlAssmt from './pages/WcTlAssmt'
import Ff from './pages/Ff'
import Kfi from './pages/Kfi'

function App() {
  const [inputValues, setInputValues] = useState({
    B1_7: '',B1_8: '',B1_9: '',B1_10: '',C1_7: '',C1_8: '',C1_9: '',C1_10: '',
    
});
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} exact />} />
          <Route Component={Loginpage} path="/login" />
          <Route Component={Registerpage} path="/register" exact />
          <Route Component={Homepage} path="/home" exact />
          <Route element={<Opstmt inputValues={inputValues} setInputValues={setInputValues} />} path="/opstmt" exact />
          <Route element={<AssetLiab inputValues={inputValues} setInputValues={setInputValues}/>} path="/assetLiab" exact />
          <Route Component={OcaOcl} path="/ocaocl" exact />
          <Route Component={Ratios} path="/ratios" exact />
          <Route Component={WcTlAssmt} path="/wc" exact />
          <Route Component={Ff} path="/ff" exact />
          <Route Component={Kfi} path="/kfi" exact />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App


// import React from 'react'

// import {BrowserRouter as Routes, Route} from "react-router-dom"

// import { AuthProvider } from './context/AuthContext'

// import Homepage from './views/Homepage'
// import Registerpage from './views/Registerpage'
// import Loginpage from './views/Loginpage'
// import Dashboard from './views/Dashboard'
// import Navbar from './views/Navbar'

// import Opstmt from './pages/Opstmt'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'


// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>

//         < Navbar/>
//         <Routes>
//           <Route component={Dashboard} path="/dashboard" exact />
//           <Route component={Loginpage} path="/login" />
//           <Route component={Registerpage} path="/register" exact />
//           <Route component={Homepage} path="/home" exact />
//           <Route component={Opstmt} path="/opstmt" exact />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App