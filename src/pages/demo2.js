// Opstmt.js
import React from 'react';
// import React, { useState } from 'react';
import axios from 'axios'
import { debounce } from 'lodash';

function Opstmt() {
  
    // const [inputValues, setInputValues] = useState({
    //     B1_7: '',
    //     C1_7: ''
    // });

    // const changeData=async (e)=>{
    //   console.log(e.target.value);
    //   setInputValues((pre)=>({...pre,[e.target.name]:e.target.value}))
      
    //   console.log(e.target.id);
    //   const user_id=localStorage.getItem("user_id")
    //   const res=await  axios.post("http://127.0.0.1:8000/api/save_opstmt/",{cell_id:e.target.name,cell_value: e.target.value,user_id:user_id }) 
    //   console.log(res);
    // }
    const [inputValues, setInputValues] = React.useState({
      B1_7: ''
  });

  const saveData = async () => {
    const user_id = localStorage.getItem("user_id");
    const res = await axios.post("http://127.0.0.1:8000/api/save_opstmt/", {
        cell_id: 'B1_7',
        cell_value: inputValues.B1_7,
        user_id: user_id
    });
    console.log(res);
};

const changeData = async (e) => {
    try {
        const newValue = e.target.value;
        setInputValues(prev => ({ ...prev, [e.target.name]: newValue }));
        await saveData(); // Call saveData to save the updated value
    } catch (error) {
        console.error("Error:", error);
    }
};
  return (
<div style={{ marginTop: 100 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>Operating Statement</h5>
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
      </div>

    <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >NET SALES</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Sales/ Receipts- Domestic
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
                        name="B1_7"
                        value={inputValues.B1_7}
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
                        id="C1_7"
                        value={inputValues.C1_7}
                        name="c1_7"
                        // onChange={handleInputChange}
                        // onBlur={(e) => handleInputBlur(e, 'C1_7')}
                        onChange={changeData}
                    />
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="D1_7"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="E1_7"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="F1_7"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="G1_7"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="H1_7"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="I1_7"  />
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
            <h6>Sales Exports
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="B1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="C1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="D1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="E1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="F1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="G1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="H1_8"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="I1_8"  />
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
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="B1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="C1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="D1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="E1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="F1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="G1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="H1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="number" className="form-control" placeholder="Rs." aria-label="First name" id="I1_9"  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>
    <div className="container-fluid border mt-3 div_main4">
      <div className="row">
        <div className="col-lg-4 border-end d-flex justify-content-center">
          <h5><b>TOTAL SALES</b></h5>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="B1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="C1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="D1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="E1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="F1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="G1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="H1_10"> </h6>
        </div>
        <div className="col-lg-1 border-start d-flex justify-content-center">
          <h6 className="navbar-brand" id="I1_10"> </h6>
        </div>
      </div>
    </div>

</div>
 

    
  );
  
}

export default Opstmt;
