// Opstmt.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function Opstmt() {
  
    const [inputValues, setInputValues] = useState({
        B1_7: '',
        B1_8: '',
        B1_9: '',
        B1_10: '',
        
        C1_7: '',
        C1_8: '',
        C1_9: '',
        C1_10: '',
        
    });




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
          const res = await fetch("http://127.0.0.1:8000/api/save_opstmt/", {
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
  
  
 },[tot2020])
 

  return (
<div style={{ marginTop: 25 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>DETAILS OF OCA, NCA, OCL, OTL</h5>
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
            <h5 >OTHER CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Cash & Bank balance
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_7"
          value={inputValues.B3_7}
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
          name="C3_7"  
          value={inputValues.C3_7}
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
          name="D3_7"  
          value={inputValues.D3_7}
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
          name="E3_7"  
          value={inputValues.E3_7}
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
          name="F3_7" 
          value={inputValues.F3_7}
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
          name="G3_7"  
          value={inputValues.G3_7}
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
          name="H3_7"  
          value={inputValues.H3_7}
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
          name="I3_7"  
          value={inputValues.I3_7}
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
      <h6>Fixed deposits with Bank
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_8"
          value={inputValues.B3_8}
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
          name="C3_8"  
          value={inputValues.C3_8}
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
          name="D3_8"  
          value={inputValues.D3_8}
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
          name="E3_8"  
          value={inputValues.E3_8}
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
          name="F3_8" 
          value={inputValues.F3_8}
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
          name="G3_8"  
          value={inputValues.G3_8}
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
          name="H3_8"  
          value={inputValues.H3_8}
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
          name="I3_8"  
          value={inputValues.I3_8}
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
            <h6>Advance Income Tax/Sales Tax
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
                        name="B3_9"
                        value={inputValues.B3_9}
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
                        name="C3_9"
                        value={inputValues.C3_9}
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
                name="D3_9"  
                value={inputValues.D3_9}
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
                name="E3_9"  
                value={inputValues.E3_9}
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
                name="F3_9"  
                value={inputValues.F3_9}
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
                name="G3_9" 
                value={inputValues.G3_9}
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
                name="H3_9"  
                value={inputValues.H3_9}
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
                name="I3_9"  
                value={inputValues.I3_9}
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
            <h6>Advance to staff/Directors
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_10"  
                value={inputValues.B3_10}
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
                name="C3_10"
                value={inputValues.C3_10}
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
                name="D3_10"  
                value={inputValues.D3_10}
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
                name="E3_10"  
                value={inputValues.E3_10}
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
                name="F3_10" 
                value={inputValues.F3_10}
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
                name="G3_10"  
                value={inputValues.G3_10}
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
                name="H3_10"  
                value={inputValues.H3_10}
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
                name="I3_10"  
                value={inputValues.I3_10}
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
            <h6>Advance to Suppliers
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_11"
                value={inputValues.B3_11}
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
                name="C3_11"  
                value={inputValues.C3_11}
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
                name="D3_11"  
                value={inputValues.D3_11}
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
                name="E3_11"  
                value={inputValues.E3_11}
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
                name="F3_11" 
                value={inputValues.F3_11}
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
                name="G3_11"  
                value={inputValues.G3_11}
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
                name="H3_11"  
                value={inputValues.H3_11}
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
                name="I3_11"  
                value={inputValues.I3_11}
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
            <h6>Excise / Customs / Tuf
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
                        name="B3_12"
                        value={inputValues.B3_12}
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
                        name="C3_12"
                        value={inputValues.C3_12}
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
                name="D3_12"  
                value={inputValues.D3_12}
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
                name="E3_12"  
                value={inputValues.E3_12}
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
                name="F3_12"  
                value={inputValues.F3_12}
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
                name="G3_12" 
                value={inputValues.G3_12}
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
                name="H3_12"  
                value={inputValues.H3_12}
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
                name="I3_12"  
                value={inputValues.I3_12}
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
            <h6>Loans and advances
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_13"  
                value={inputValues.B3_13}
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
                name="C3_13"
                value={inputValues.C3_13}
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
                name="D3_13"  
                value={inputValues.D3_13}
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
                name="E3_13"  
                value={inputValues.E3_13}
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
                name="F3_13" 
                value={inputValues.F3_13}
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
                name="G3_13"  
                value={inputValues.G3_13}
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
                name="H3_13"  
                value={inputValues.H3_13}
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
                name="I3_13"  
                value={inputValues.I3_13}
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
            <h6>Others
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_14"
                value={inputValues.B3_14}
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
                name="C3_14"  
                value={inputValues.C3_14}
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
                name="D3_14"  
                value={inputValues.D3_14}
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
                name="E3_14"  
                value={inputValues.E3_14}
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
                name="F3_14" 
                value={inputValues.F3_14}
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
                name="G3_14"  
                value={inputValues.G3_14}
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
                name="H3_14"  
                value={inputValues.H3_14}
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
                name="I3_14"  
                value={inputValues.I3_14}
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
          <h5><b>TOTAL OTHER CURRENT ASSETS</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(169, 255, 251)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B3_15"
                value={inputValues.B3_15}
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
                name="C3_15"  
                value={inputValues.C3_15}
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
                name="D3_15"  
                value={inputValues.D3_15}
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
                name="E3_15"  
                value={inputValues.E3_15}
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
                name="F3_15" 
                value={inputValues.F3_15}
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
                name="G3_15"  
                value={inputValues.G3_15}
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
                name="H3_15"  
                value={inputValues.H3_15}
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
                name="I3_15"  
                value={inputValues.I3_15}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>


    {/*------------------------------------- COST OF SALES--------------------------------------------------- */}

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >OTHER NON CURRENT ASSETS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Security deposits EB etc
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
                        name="B3_17"
                        value={inputValues.B3_17}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        
                        type="text"
                        className="form-control"
                        aria-label="First name"
                        name="C3_17"
                        value={inputValues.C3_17}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                type="text" 
                className="form-control" 
  
                aria-label="First name" 
                name="D3_17"  
                value={inputValues.D3_17}
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
                 
                aria-label="First name" 
                name="E3_17"  
                value={inputValues.E3_17}
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
                 
                aria-label="First name" 
                name="F3_17"  
                value={inputValues.F3_17}
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
                 
                aria-label="First name" 
                name="G3_17" 
                value={inputValues.G3_17}
                onChange={changeData} />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H3_17"  
                value={inputValues.H3_17}
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
                 
                aria-label="First name" 
                name="I3_17"  
                value={inputValues.I3_17}
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
            <h6>Loan and advances
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_18"  
                value={inputValues.B3_18}
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
               
                aria-label="First name" 
                name="C3_18"
                value={inputValues.C3_18}
                onChange={changeData}  />

              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text"
                className="form-control" 
                
                aria-label="First name" 
                name="D3_18"  
                value={inputValues.D3_18}
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
                
                aria-label="First name" 
                name="E3_18"  
                value={inputValues.E3_18}
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
                
                aria-label="First name" 
                name="F3_18" 
                value={inputValues.F3_18}
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
               
                aria-label="First name" 
                name="G3_18"  
                value={inputValues.G3_18}
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
               
                aria-label="First name" 
                name="H3_18"  
                value={inputValues.H3_18}
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
                
                aria-label="First name" 
                name="I3_18"  
                value={inputValues.I3_18}
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
      <h6>Sundry Debtors greater 6months
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_19"
          value={inputValues.B3_19}
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
          name="C3_19"  
          value={inputValues.C3_19}
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
          name="D3_19"  
          value={inputValues.D3_19}
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
          name="E3_19"  
          value={inputValues.E3_19}
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
          name="F3_19" 
          value={inputValues.F3_19}
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
          name="G3_19"  
          value={inputValues.G3_19}
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
          name="H3_19"  
          value={inputValues.H3_19}
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
          name="I3_19"  
          value={inputValues.I3_19}
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
            <h6>Investment
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B3_20"
                value={inputValues.B3_20}
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
                
                aria-label="First name" 
                name="C3_20"  
                value={inputValues.C3_20}
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
               aria-label="First name" 
                name="D3_20"  
                value={inputValues.D3_20}
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
               
                aria-label="First name" 
                name="E3_20"  
                value={inputValues.E3_20}
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
               
                aria-label="First name" 
                name="F3_20" 
                value={inputValues.F3_20}
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
               
                aria-label="First name" 
                name="G3_20"  
                value={inputValues.G3_20}
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
               
                aria-label="First name" 
                name="H3_20"  
                value={inputValues.H3_20}
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
               
                aria-label="First name" 
                name="I3_20"  
                value={inputValues.I3_20}
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
      <h6>Interest accured on loans
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_21"
          value={inputValues.B3_21}
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
          name="C3_21"  
          value={inputValues.C3_21}
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
          name="D3_21"  
          value={inputValues.D3_21}
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
          name="E3_21"  
          value={inputValues.E3_21}
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
          name="F3_21" 
          value={inputValues.F3_21}
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
          name="G3_21"  
          value={inputValues.G3_21}
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
          name="H3_21"  
          value={inputValues.H3_21}
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
          name="I3_21"  
          value={inputValues.I3_21}
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
      <h6>Others
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_22"
          value={inputValues.B3_22}
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
          name="C3_22"  
          value={inputValues.C3_22}
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
          name="D3_22"  
          value={inputValues.D3_22}
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
          name="E3_22"  
          value={inputValues.E3_22}
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
          name="F3_22" 
          value={inputValues.F3_22}
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
          name="G3_22"  
          value={inputValues.G3_22}
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
          name="H3_22"  
          value={inputValues.H3_22}
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
          name="I3_22"  
          value={inputValues.I3_22}
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
    <h5><b>TOTAL NON CURRENT ASSETS</b></h5>
  </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(159, 252, 204)"}}
          type="text" 
          className="form-control" 
          aria-label="First name" 
          name="B3_23"
          value={inputValues.B3_23}
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
          name="C3_23"  
          value={inputValues.C3_23}
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
          name="D3_23"  
          value={inputValues.D3_23}
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
          name="E3_23"  
          value={inputValues.E3_23}
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
          name="F3_23" 
          value={inputValues.F3_23}
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
          name="G3_23"  
          value={inputValues.G3_23}
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
          name="H3_23"  
          value={inputValues.H3_23}
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
          name="I3_23"  
          value={inputValues.I3_23}
          onChange={changeData} 
          />
        </div>
      </div>
    </div>
</div>
</div>

{/*---------------------------------------- OTHER CURRENT LIABILITIES -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >OTHER CURRENT LIABILITIES</h5>
          </div>
        </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>TL INST due in 1 year IOB
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
                        name="B3_25"
                        value={inputValues.B3_25}
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
                        name="C3_25"
                        value={inputValues.C3_25}
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
                name="D3_25"  
                value={inputValues.D3_25}
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
                name="E3_25"  
                value={inputValues.E3_25}
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
                name="F3_25"  
                value={inputValues.F3_25}
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
                name="G3_25" 
                value={inputValues.G3_25}
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
                name="H3_25"  
                value={inputValues.H3_25}
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
                name="I3_25"  
                value={inputValues.I3_25}
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
            <h6>TL INST due in 1 year Bank / Inst
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_26"  
                value={inputValues.B3_26}
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
                name="C3_26"
                value={inputValues.C3_26}
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
                name="D3_26"  
                value={inputValues.D3_26}
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
                name="E3_26"  
                value={inputValues.E3_26}
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
                name="F3_26" 
                value={inputValues.F3_26}
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
                name="G3_26"  
                value={inputValues.G3_26}
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
                name="H3_26"  
                value={inputValues.H3_26}
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
                name="I3_26"  
                value={inputValues.I3_26}
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
            <h6>Sundry Creditors Expenses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B3_27"
                value={inputValues.B3_27}
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
                name="C3_27"  
                value={inputValues.C3_27}
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
                name="D3_27"  
                value={inputValues.D3_27}
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
                name="E3_27"  
                value={inputValues.E3_27}
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
                name="F3_27" 
                value={inputValues.F3_27}
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
                name="G3_27"  
                value={inputValues.G3_27}
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
                name="H3_27"  
                value={inputValues.H3_27}
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
                name="I3_27"  
                value={inputValues.I3_27}
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
            <h6>Expences Payable
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B3_28"
                value={inputValues.B3_28}
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
                name="C3_28"  
                value={inputValues.C3_28}
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
                name="D3_28"  
                value={inputValues.D3_28}
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
                name="E3_28"  
                value={inputValues.E3_28}
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
                name="F3_28" 
                value={inputValues.F3_28}
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
                name="G3_28"  
                value={inputValues.G3_28}
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
                name="H3_28"  
                value={inputValues.H3_28}
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
                name="I3_28"  
                value={inputValues.I3_28}
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
            <h6>Provision for Tax etc
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs."
                aria-label="First name" 
                name="B3_29"
                value={inputValues.B3_29}
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
                name="C3_29"  
                value={inputValues.C3_29}
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
                name="D3_29"  
                value={inputValues.D3_29}
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
                name="E3_29"  
                value={inputValues.E3_29}
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
                name="F3_29" 
                value={inputValues.F3_29}
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
                name="G3_29"  
                value={inputValues.G3_29}
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
                name="H3_29"  
                value={inputValues.H3_29}
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
                name="I3_29"  
                value={inputValues.I3_29}
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
      <h6>Others
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_30"
          value={inputValues.B3_30}
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
          name="C3_30"  
          value={inputValues.C3_30}
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
          name="D3_30"  
          value={inputValues.D3_30}
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
          name="E3_30"  
          value={inputValues.E3_30}
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
          name="F3_30" 
          value={inputValues.F3_30}
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
          name="G3_30"  
          value={inputValues.G3_30}
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
          name="H3_30"  
          value={inputValues.H3_30}
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
          name="I3_30"  
          value={inputValues.I3_30}
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
    <h5><b>TOTAL OTHER CURRENT LIABILITIES</b></h5>
  </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input 
          style={{backgroundColor: "rgb(159, 252, 204)"}}
          type="text" 
          className="form-control" 
          aria-label="First name" 
          name="B3_32"
          value={inputValues.B3_32}
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
          name="C3_32"  
          value={inputValues.C3_32}
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
          name="D3_32"  
          value={inputValues.D3_32}
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
          name="E3_32"  
          value={inputValues.E3_32}
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
          name="F3_32" 
          value={inputValues.F3_32}
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
          name="G3_32"  
          value={inputValues.G3_32}
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
          name="H3_32"  
          value={inputValues.H3_32}
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
          name="I3_32"  
          value={inputValues.I3_32}
          onChange={changeData} 
          />
        </div>
      </div>
    </div>
</div>
</div>
  
{/*---------------------------------------- OTHER TERM LIABILITIES -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >OTHER TERM LIABILITIES</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Unsecured Loan Promotors
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
                        name="B3_34"
                        value={inputValues.B3_34}
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
                        name="C3_34"
                        value={inputValues.C3_34}
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
                name="D3_34"  
                value={inputValues.D3_34}
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
                name="E3_34"  
                value={inputValues.E3_34}
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
                name="F3_34"  
                value={inputValues.F3_34}
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
                name="G3_34" 
                value={inputValues.G3_34}
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
                name="H3_34"  
                value={inputValues.H3_34}
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
                name="I3_34"  
                value={inputValues.I3_34}
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
            <h6>Defered Tax
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_35"  
                value={inputValues.B3_35}
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
                name="C3_35"
                value={inputValues.C3_35}
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
                name="D3_35"  
                value={inputValues.D3_35}
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
                name="E3_35"  
                value={inputValues.E3_35}
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
                name="F3_35" 
                value={inputValues.F3_35}
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
                name="G3_35"  
                value={inputValues.G3_35}
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
                name="H3_35"  
                value={inputValues.H3_35}
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
                name="I3_35"  
                value={inputValues.I3_35}
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
            <h6>Security Deposits
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" 
                className="form-control" 
                placeholder="Rs." 
                aria-label="First name" 
                name="B3_36"
                value={inputValues.B3_36}
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
                name="C3_36"  
                value={inputValues.C3_36}
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
                name="D3_36"  
                value={inputValues.D3_36}
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
                name="E3_36"  
                value={inputValues.E3_36}
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
                name="F3_36" 
                value={inputValues.F3_36}
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
                name="G3_36"  
                value={inputValues.G3_36}
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
                name="H3_36"  
                value={inputValues.H3_36}
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
                name="I3_36"  
                value={inputValues.I3_36}
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
      <h6>Revaluation Reserve
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="number" 
          className="form-control" 
          placeholder="Rs." 
          aria-label="First name" 
          name="B3_37"
          value={inputValues.B3_37}
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
          name="C3_37"  
          value={inputValues.C3_37}
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
          name="D3_37"  
          value={inputValues.D3_37}
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
          name="E3_37"  
          value={inputValues.E3_37}
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
          name="F3_37" 
          value={inputValues.F3_37}
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
          name="G3_37"  
          value={inputValues.G3_37}
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
          name="H3_37"  
          value={inputValues.H3_37}
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
          name="I3_37"  
          value={inputValues.I3_37}
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
          <h5><b>TOTAL OTHER TERM LIABILITIES</b></h5>
        </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input 
                style={{backgroundColor: "rgb(159, 252, 204)"}}
                type="text" 
                className="form-control" 
                aria-label="First name" 
                name="B3_38"
                value={inputValues.B3_38}
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
                name="C3_38"  
                value={inputValues.C3_38}
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
                name="D3_38"  
                value={inputValues.D3_38}
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
                name="E3_38"  
                value={inputValues.E3_38}
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
                name="F3_38" 
                value={inputValues.F3_38}
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
                name="G3_38"  
                value={inputValues.G3_38}
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
                name="H3_38"  
                value={inputValues.H3_38}
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
                name="I3_38"  
                value={inputValues.I3_38}
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
