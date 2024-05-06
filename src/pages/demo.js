import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [inputValues, setInputValues] = useState({
        B1_7: '',
        C1_7: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleInputBlur = (e, fieldId) => {
        handleInputChange(e); // Update the state immediately on blur
        const value = e.target.value;
        axios.post('http://127.0.0.1:8000/api/save_opstmt/', { 'B1_7': value, 'C1_7': value })
            .then(response => {
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        id="B1_7"
                        value={inputValues.B1_7}
                        onChange={handleInputChange}
                        onBlur={(e) => handleInputBlur(e, 'B1_7')}
                    />
                    {/* <!--//AAAAAAAA --> */}
                </div>
                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Rs."
                        aria-label="First name"
                        id="C1_7"
                        value={inputValues.C1_7}
                        onChange={handleInputChange}
                        onBlur={(e) => handleInputBlur(e, 'C1_7')}
                    />
                    {/* <!--//AAAAAAAA --> */}
                </div>
            </div>
        </div>
    );
};

export default YourComponent;


// ........................................................jinu sir method......................................

function Opstmt() {
  
    const [inputValues, setInputValues] = useState({
        B1_7: '',
        C1_7: ''
    });

    const changeData=async (e)=>{
      console.log(e.target.value);
      setInputValues((pre)=>({...pre,[e.target.name]:e.target.value}))
      
      console.log(e.target.id);
      const user_id=localStorage.getItem("user_id")
      const res=await  axios.post("http://127.0.0.1:8000/api/save_opstmt/",{cell_id:e.target.name,cell_value: e.target.value,user_id:user_id }) 
      console.log(res);
    }
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
</div>
</div>
</div>




 

    
  );
  
}

 Opstmt();