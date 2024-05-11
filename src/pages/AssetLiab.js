// Opstmt.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function Opstmt({inputValues, setInputValues}) {
  
    // const [inputValues, setInputValues] = useState({
    //     B2_7: '',
    //     B2_8: '',
    //     B2_9: '',
    //     B2_10: '',
        
    //     C2_7: '',
    //     C2_8: '',
    //     C2_9: '',
    //     C2_10: '',
        
    // });




    let [tot2020,setTot2020]=useState(0)

    
    const changeData = async (e) => {
      try {
          const { name, value } = e.target;
          
          console.log(value); // Log the value being set
          setInputValues(prev => ({ ...prev, [name]: value }));
          const user_id = localStorage.getItem("user_id");

          let da= JSON.stringify({
            cell_id:name, cell_value:value,user_id:user_id
        })

          console.log(da); // Log the name being set
          
         if(value!=""){
          setTot2020(tot2020+=parseInt(value))
          const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify( {
              cell_id:name, cell_value:value,user_id:user_id
          })
        })
        console.log('Response:', res); // Log the response data
         }
          
      } catch (error) {

          console.error('Error:', error); // Log any errors that occur during the request
      }
  };


 useEffect(()=>{
  console.log(tot2020);
  console.log(inputValues);
  async function upload() {
    const user_id = localStorage.getItem("user_id");
    const res = await fetch("http://127.0.0.1:8000/api/save_assets/", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify( {
        cell_id: "B2_7", cell_value: inputValues["B1_23"],user_id:user_id
      })
    })
  }
  upload();
 },[tot2020])
 

  return (
<div style={{ marginTop: 25 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>Analysis Of Balance Sheet</h5>
          </div>
          <div className="col-lg-8 border-start d-flex justify-content-center">
            <h5>For the year ended/ending (Rs. in Lacs)</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 className="navbar-brand">PARTICULARS</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2020</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2021</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2022</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2023</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2024</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2025</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2026</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 className="navbar-brand">2027</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 className="navbar-brand"></h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6>Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6>Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6>Audited</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Projected</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Projected</h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <h6 >Projected</h6>
          </div>
        </div>
      </div>

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"red"}}>CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6><b>Raw Materials</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_7"
                value={inputValues.B1_25}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_7"  
                value={inputValues.C2_7}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_7"  
                value={inputValues.D2_7}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_7"  
                value={inputValues.E2_7}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_7" 
                value={inputValues.F2_7}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_7"  
                value={inputValues.G2_7}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_7"  
                value={inputValues.H2_7}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_7"  
                value={inputValues.I2_7}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
  </div>
  <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6 ><b>Stock in Process</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_8"
                value={inputValues.B1_24}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_8"  
                value={inputValues.C2_8}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_8"  
                value={inputValues.D2_8}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_8"  
                value={inputValues.E2_8}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_8" 
                value={inputValues.F2_8}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_8"  
                value={inputValues.G2_8}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_8"  
                value={inputValues.H2_8}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_8"  
                value={inputValues.I2_8}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
  </div>
  

<div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h6><b>Finishing Goods</b></h6>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_9"
                value={inputValues.B1_23}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_9"  
                value={inputValues.C2_9}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_9"  
                value={inputValues.D2_9}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_9"  
                value={inputValues.E2_9}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_9" 
                value={inputValues.F2_9}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_9"  
                value={inputValues.G2_9}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_9"  
                value={inputValues.H2_9}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_9"  
                value={inputValues.I2_9}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Consumable Spares
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        name="B2_10"
                        value={inputValues.B2_10}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        name="C2_10"
                        value={inputValues.C2_10}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="D2_10"  
                value={inputValues.D2_10}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="E2_10"  
                value={inputValues.E2_10}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="F2_10"  
                value={inputValues.F2_10}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="G2_10" 
                value={inputValues.G2_10}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="H2_10"  
                value={inputValues.H2_10}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="I2_10"  
                value={inputValues.I2_10}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 style={{color:"blue"}}>Trade Debtors Less 6 Months
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_11"  
                value={inputValues.B2_11}
                onChange={changeData}
                />
                

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               placeholder="Rs."
                aria-label="First name" 
                name="C2_11"
                value={inputValues.C2_11}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="D2_11"  
                value={inputValues.D2_11}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="E2_11"  
                value={inputValues.E2_11}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="F2_11" 
                value={inputValues.F2_11}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               placeholder="Rs."
                aria-label="First name" 
                name="G2_11"  
                value={inputValues.G2_11}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               placeholder="Rs."
                aria-label="First name" 
                name="H2_11"  
                value={inputValues.H2_11}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="I2_11"  
                value={inputValues.I2_11}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Current Assets</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_12"
                value={inputValues.B2_12}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="C2_12"  
                value={inputValues.C2_12}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_12"  
                value={inputValues.D2_12}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="E2_12"  
                value={inputValues.E2_12}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="F2_12" 
                value={inputValues.F2_12}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="G2_12"  
                value={inputValues.G2_12}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="H2_12"  
                value={inputValues.H2_12}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="I2_12"  
                value={inputValues.I2_12}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>TOTAL CURRENT ASSETS</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_13"
                value={inputValues.B2_13}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_13"  
                value={inputValues.C2_13}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_13"  
                value={inputValues.D2_13}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_13"  
                value={inputValues.E2_13}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_13" 
                value={inputValues.F2_13}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_13"  
                value={inputValues.G2_13}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_13"  
                value={inputValues.H2_13}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_13"  
                value={inputValues.I2_13}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>FIXED ASSETS
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        name="B2_14"
                        value={inputValues.B2_14}
                        onChange={changeData}
                    />
    
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        
                        type="number"
                         placeholder="Rs."
                        className="form-control"
                        aria-label="First name"
                        name="C2_14"
                        value={inputValues.C2_14}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="D2_14"  
                value={inputValues.D2_14}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="E2_14"  
                value={inputValues.E2_14}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="F2_14"  
                value={inputValues.F2_14}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="G2_14" 
                value={inputValues.G2_14}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="H2_14"  
                value={inputValues.H2_14}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                  placeholder="Rs."
                aria-label="First name" 
                name="I2_14"  
                value={inputValues.I2_14}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Land & Building
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_15"  
                value={inputValues.B2_15}
                onChange={changeData}
                />
                

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="C2_15"
                value={inputValues.C2_15}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="D2_15"  
                value={inputValues.D2_15}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="E2_15"  
                value={inputValues.E2_15}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="F2_15" 
                value={inputValues.F2_15}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="G2_15"  
                value={inputValues.G2_15}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="H2_15"  
                value={inputValues.H2_15}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="I2_15"  
                value={inputValues.I2_15}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Plant & Machinery
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B2_16"
                value={inputValues.B2_16}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="C2_16"  
                value={inputValues.C2_16}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               aria-label="First name" 
               placeholder="Rs."
                name="D2_16"  
                value={inputValues.D2_16}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="E2_16"  
                value={inputValues.E2_16}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="F2_16" 
                value={inputValues.F2_16}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="G2_16"  
                value={inputValues.G2_16}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="H2_16"  
                value={inputValues.H2_16}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="I2_16"  
                value={inputValues.I2_16}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Furniture / Fixtures / Sundries
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B2_17"
                value={inputValues.B2_17}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="C2_17"  
                value={inputValues.C2_17}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               aria-label="First name" 
               placeholder="Rs."
                name="D2_17"  
                value={inputValues.D2_17}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="E2_17"  
                value={inputValues.E2_17}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="F2_17" 
                value={inputValues.F2_17}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="G2_17"  
                value={inputValues.G2_17}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="H2_17"  
                value={inputValues.H2_17}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="I2_17"  
                value={inputValues.I2_17}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Capital Work in Progress
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B2_18"
                value={inputValues.B2_18}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number"
                className="form-control" 
                 placeholder="Rs."
                aria-label="First name" 
                name="C2_18"  
                value={inputValues.C2_18}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
               aria-label="First name" 
               placeholder="Rs."
                name="D2_18"  
                value={inputValues.D2_18}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="E2_18"  
                value={inputValues.E2_18}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="F2_18" 
                value={inputValues.F2_18}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="G2_18"  
                value={inputValues.G2_18}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="H2_18"  
                value={inputValues.H2_18}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="I2_18"  
                value={inputValues.I2_18}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>GROSS BLOCK</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_19"
                value={inputValues.B2_19}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_19"  
                value={inputValues.C2_19}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_19"  
                value={inputValues.D2_19}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_19"  
                value={inputValues.E2_19}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_19" 
                value={inputValues.F2_19}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_19"  
                value={inputValues.G2_19}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_19"  
                value={inputValues.H2_19}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_19"  
                value={inputValues.I2_19}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Less Depreciation
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        name="B2_20"
                        value={inputValues.B2_20}
                        onChange={changeData}
                    />
                    {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        name="C2_20"
                        value={inputValues.C2_20}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="D2_20"  
                value={inputValues.D2_20}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_20"  
                value={inputValues.E2_20}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_20"  
                value={inputValues.F2_20}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_20" 
                value={inputValues.G2_20}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_20"  
                value={inputValues.H2_20}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_20"  
                value={inputValues.I2_20}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>NET FIXED ASSETS</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control"
                aria-label="First name" 
                name="B2_21"
                value={inputValues.B2_21}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_21"  
                value={inputValues.C2_21}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_21"  
                value={inputValues.D2_21}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_21"  
                value={inputValues.E2_21}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_21" 
                value={inputValues.F2_21}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_21"  
                value={inputValues.G2_21}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_21"  
                value={inputValues.H2_21}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_21"  
                value={inputValues.I2_21}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/* ------------------------------- NON CURRENT ASSETS ----------------------------------------------- */}
   
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >NON CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Investment / Loan to Associate
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_23"  
                value={inputValues.B2_23}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_23"
                value={inputValues.C2_23}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="D2_23"  
                value={inputValues.D2_23}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_23"  
                value={inputValues.E2_23}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_23" 
                value={inputValues.F2_23}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_23"  
                value={inputValues.G2_23}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_23"  
                value={inputValues.H2_23}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_23"  
                value={inputValues.I2_23}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Non Current Assets</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_24"
                value={inputValues.B2_24}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="C2_24"  
                value={inputValues.C2_24}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_24"  
                value={inputValues.D2_24}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="E2_24"  
                value={inputValues.E2_24}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="F2_24" 
                value={inputValues.F2_24}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="G2_24"  
                value={inputValues.G2_24}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="H2_24"  
                value={inputValues.H2_24}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="I2_24"  
                value={inputValues.I2_24}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center" style={{backgroundColor: "rgb(169, 255, 251)"}}>
          <h5 style={{color:"red"}}>TOTAL NCA</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_25"
                value={inputValues.B2_25}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="C2_25"  
                value={inputValues.C2_25}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_25"  
                value={inputValues.D2_25}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="E2_25"  
                value={inputValues.E2_25}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="F2_25" 
                value={inputValues.F2_25}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="G2_25"  
                value={inputValues.G2_25}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="H2_25"  
                value={inputValues.H2_25}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                aria-label="First name" 
                name="I2_25"  
                value={inputValues.I2_25}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>


    {/* ---------------------------------------NON CURRENT ASSETS ------------------------------------------*/}


    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >INTANGIBLE ASSETS</h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Expenses not written off
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B2_27"
          value={inputValues.B2_27}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="C2_27"  
          value={inputValues.C2_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
          name="D2_27"  
          value={inputValues.D2_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="E2_27"  
          value={inputValues.E2_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="F2_27" 
          value={inputValues.F2_27}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="G2_27"  
          value={inputValues.G2_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="H2_27"  
          value={inputValues.H2_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="I2_27"  
          value={inputValues.I2_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Profit & Loss a/c
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B2_28"
          value={inputValues.B2_28}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="C2_28"  
          value={inputValues.C2_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
          name="D2_28"  
          value={inputValues.D2_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="E2_28"  
          value={inputValues.E2_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="F2_28" 
          value={inputValues.F2_28}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="G2_28"  
          value={inputValues.G2_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="H2_28"  
          value={inputValues.H2_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="I2_28"  
          value={inputValues.I2_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Defered Revenue expenditure
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B2_29"
          value={inputValues.B2_29}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="C2_29"  
          value={inputValues.C2_29}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
          name="D2_29"  
          value={inputValues.D2_29}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="E2_29"  
          value={inputValues.E2_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="F2_29" 
          value={inputValues.F2_29}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="G2_29"  
          value={inputValues.G2_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="H2_29"  
          value={inputValues.H2_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="I2_29"  
          value={inputValues.I2_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>

 <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5 style={{color:"red"}}> TOTAL IA</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_30"
                value={inputValues.B2_30}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_30"  
                value={inputValues.C2_30}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_30"  
                value={inputValues.D2_30}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_30"  
                value={inputValues.E2_30}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_30" 
                value={inputValues.F2_30}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_30"  
                value={inputValues.G2_30}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_30"  
                value={inputValues.H2_30}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_30"  
                value={inputValues.I2_30}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5 style={{color:"red"}}><b>TOTAL ASSETS</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_31"
                value={inputValues.B2_31}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_31"  
                value={inputValues.C2_31}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_30"  
                value={inputValues.D2_30}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_31"  
                value={inputValues.E2_31}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_31" 
                value={inputValues.F2_31}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_31"  
                value={inputValues.G2_31}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_31"  
                value={inputValues.H2_31}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_31"  
                value={inputValues.I2_31}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 ><b>LIABILITIES</b></h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 style={{color:"blue"}}>CURRENT LIABILITIES</h6>
          </div>
        </div>
    </div>
    
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>WC Borrowings From IOB
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_34"  
                value={inputValues.B2_34}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_34"
                value={inputValues.C2_34}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="D2_34"  
                value={inputValues.D2_34}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_34"  
                value={inputValues.E2_34}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_34" 
                value={inputValues.F2_34}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_34"  
                value={inputValues.G2_34}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_34"  
                value={inputValues.H2_34}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_34"  
                value={inputValues.I2_34}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>WC From Banks/Institution
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_35"
                value={inputValues.B2_35}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_35"  
                value={inputValues.C2_35}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
                name="D2_35"  
                value={inputValues.D2_35}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_35"  
                value={inputValues.E2_35}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_35" 
                value={inputValues.F2_35}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_35"  
                value={inputValues.G2_35}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_35"  
                value={inputValues.H2_35}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_35"  
                value={inputValues.I2_35}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
      </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Sundry Creditors-Trade
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B2_36"
          value={inputValues.B2_36}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="C2_36"  
          value={inputValues.C2_36}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
          name="D2_36"  
          value={inputValues.D2_36}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="E2_36"  
          value={inputValues.E2_36}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="F2_36" 
          value={inputValues.F2_36}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="G2_36"  
          value={inputValues.G2_36}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="H2_36"  
          value={inputValues.H2_36}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="I2_36"  
          value={inputValues.I2_36}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(159, 252, 204)"}}>
          <h5>Other Current Liabilities</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_37"
                value={inputValues.B2_37}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="C2_37"  
                value={inputValues.C2_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_37"  
                value={inputValues.D2_37}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="E2_37"  
                value={inputValues.E2_37}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="F2_37" 
                value={inputValues.F2_37}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="G2_37"  
                value={inputValues.G2_37}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="H2_37"  
                value={inputValues.H2_37}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                aria-label="First name" 
                name="I2_37"  
                value={inputValues.I2_37}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
<div className="row" >
  <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
    <h5><b>TOTAL CURRENT LIABILITIES</b></h5>
  </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          type="text" 
          className="form-control" 
          aria-label="First name" 
          name="B2_38"
          value={inputValues.B2_38}
          onChange={changeData}  
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text"
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="C2_38"  
          value={inputValues.C2_38}
          onChange={changeData}
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          type="text" 
          className="form-control" 
         aria-label="First name" 
          name="D2_38"  
          value={inputValues.D2_38}
          onChange={changeData}
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="E2_38"  
          value={inputValues.E2_38}
          onChange={changeData} 
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="F2_38" 
          value={inputValues.F2_38}
          onChange={changeData}

          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="G2_38"  
          value={inputValues.G2_38}
          onChange={changeData} 
          />

        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="H2_38"  
          value={inputValues.H2_38}
          onChange={changeData} 
          />
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
          style={{backgroundColor: "rgb(189, 254, 243)"}}
          aria-label="First name" 
          name="I2_38"  
          value={inputValues.I2_38}
          onChange={changeData} 
          />
        </div>
      </div>
    </div>
</div>
</div>

     {/* ------------------------------- OTHER INCOME / EXPENCE----------------------------------------------- */}


     <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"blue"}}>DEFFERRED LIABILITIES</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>TERM LOAN IOB
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_40"  
                value={inputValues.B2_40}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_40"
                value={inputValues.C2_40}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="D2_40"  
                value={inputValues.D2_40}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_40"  
                value={inputValues.E2_40}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_40" 
                value={inputValues.F2_40}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_40"  
                value={inputValues.G2_40}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_40"  
                value={inputValues.H2_40}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_40"  
                value={inputValues.I2_40}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Term Loan Other Banks
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_41"
                value={inputValues.B2_41}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_41"  
                value={inputValues.C2_41}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
                name="D2_41"  
                value={inputValues.D2_41}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_41"  
                value={inputValues.E2_41}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_41" 
                value={inputValues.F2_41}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_41"  
                value={inputValues.G2_41}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_41"  
                value={inputValues.H2_41}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_41"  
                value={inputValues.I2_41}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          
      </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Term Loan Institution
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B2_42"
          value={inputValues.B2_42}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="C2_42"  
          value={inputValues.C2_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." aria-label="First name" 
          name="D2_42"  
          value={inputValues.D2_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="E2_42"  
          value={inputValues.E2_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="F2_42" 
          value={inputValues.F2_42}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="G2_42"  
          value={inputValues.G2_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="H2_42"  
          value={inputValues.H2_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="I2_42"  
          value={inputValues.I2_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>


    
    {/*-------------------------------------- LINE ( 37 - 39 ) -------------------------------------------------*/}


    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(188, 245, 185"}}>
          <h5>Other Long Term-Liabilities</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_43"
                value={inputValues.B2_43}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="C2_43"  
                value={inputValues.C2_43}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_43"  
                value={inputValues.D2_43}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="E2_43"  
                value={inputValues.E2_43}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="F2_43" 
                value={inputValues.F2_43}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="G2_43"  
                value={inputValues.G2_43}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="H2_43"  
                value={inputValues.H2_43}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(188, 245, 185"}}
                aria-label="First name" 
                name="I2_43"  
                value={inputValues.I2_43}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5>LONG TERM LIABILITIES</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_44"
                value={inputValues.B2_44}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_44"  
                value={inputValues.C2_44}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_44"  
                value={inputValues.D2_44}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_44"  
                value={inputValues.E2_44}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_44" 
                value={inputValues.F2_44}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_44"  
                value={inputValues.G2_44}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_44"  
                value={inputValues.H2_44}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_44"  
                value={inputValues.I2_44}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(189, 254, 243)"}}>
          <h5>TOTAL OUTSIDE LIABILITIES</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_45"
                value={inputValues.B2_45}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="C2_45"  
                value={inputValues.C2_45}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_45"  
                value={inputValues.D2_45}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
               style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="E2_45"  
                value={inputValues.E2_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="F2_45" 
                value={inputValues.F2_45}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="G2_45"  
                value={inputValues.G2_45}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="H2_45"  
                value={inputValues.H2_45}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(189, 254, 243)"}}
                aria-label="First name" 
                name="I2_45"  
                value={inputValues.I2_45}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>

    {/*---------------------------------------- INTANGIBLE ASSETS -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 style={{color:"blue"}}>CAPITAL & SURPLUS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Paid Up Capital
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_47"
                value={inputValues.B2_47}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_47"  
                value={inputValues.C2_47}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
                name="D2_47"  
                value={inputValues.D2_47}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_47"  
                value={inputValues.E2_47}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_47" 
                value={inputValues.F2_47}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_47"  
                value={inputValues.G2_47}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_47"  
                value={inputValues.H2_47}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_47"  
                value={inputValues.I2_47}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>  
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Reserves and Surplus
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_48"
                value={inputValues.B2_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_48"  
                value={inputValues.C2_48}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
                name="D2_48"  
                value={inputValues.D2_48}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_48"  
                value={inputValues.E2_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_48" 
                value={inputValues.F2_48}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_48"  
                value={inputValues.G2_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_48"  
                value={inputValues.H2_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_48"  
                value={inputValues.I2_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>  
      </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Profit & Loss a/c
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B2_49"
                value={inputValues.B2_49}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="C2_49"  
                value={inputValues.C2_49}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." aria-label="First name" 
                name="D2_49"  
                value={inputValues.D2_49}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="E2_49"  
                value={inputValues.E2_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="F2_49" 
                value={inputValues.F2_49}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="G2_49"  
                value={inputValues.G2_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="H2_49"  
                value={inputValues.H2_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="I2_49"  
                value={inputValues.I2_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>  
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(238, 193, 255)"}}>
          <h5>NET WORTH</h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_50"
                value={inputValues.B2_50}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="C2_50"  
                value={inputValues.C2_50}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_50"  
                value={inputValues.D2_50}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="E2_50"  
                value={inputValues.E2_50}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="F2_50" 
                value={inputValues.F2_50}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="G2_50"  
                value={inputValues.G2_50}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="H2_50"  
                value={inputValues.H2_50}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(238, 193, 255)"}}
                aria-label="First name" 
                name="I2_50"  
                value={inputValues.I2_50}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row" >
        <div className="col-lg-4 border-end d-flex justify-content-center"style={{backgroundColor: "rgb(247, 197, 237)"}}>
          <h5><b>TOTAL LIABILITIES</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B2_51"
                value={inputValues.B2_51}
                onChange={changeData}  
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="C2_51"  
                value={inputValues.C2_51}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                type="text" 
                className="form-control" 
               aria-label="First name" 
                name="D2_51"  
                value={inputValues.D2_51}
                onChange={changeData}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="E2_51"  
                value={inputValues.E2_51}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="F2_51" 
                value={inputValues.F2_51}
                onChange={changeData}

                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="G2_51"  
                value={inputValues.G2_51}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="H2_51"  
                value={inputValues.H2_51}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                style={{backgroundColor: "rgb(247, 197, 237)"}}
                aria-label="First name" 
                name="I2_51"  
                value={inputValues.I2_51}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>





</div>
 

    
  );
  
}

export default Opstmt;
