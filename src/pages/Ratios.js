// Opstmt.js
import React, { useContext,useEffect, useState } from 'react';
import axios from 'axios'
import { AppContext } from '../AppContext';


function Ratio( ) {

  const { inputValues, setInputValues,tot2020,Cost37, setCost37,Cost31, setCost31,tot37,
    Cost27, setCost27,
    Cost26, setCost26,
    sumB50, setSumB50,
    sumC50, setSumC50,
    sumD50, setSumD50,
    sumE50, setSumE50,
    sumF50, setSumF50,
    sumG50, setSumG50,
    sumH50, setSumH50,
    sumI50, setSumI50,
    sumB30, setSumB30,
    sumC30, setSumC30,
    sumD30, setSumD30,
    sumE30, setSumE30,
    sumF30, setSumF30,
    sumG30, setSumG30,
    sumH30, setSumH30,
    sumI30, setSumI30,
    sumB2, setSumB2,
    sumC2, setSumC2,
    sumD2, setSumD2,
    sumE2, setSumE2,
    sumF2, setSumF2,
    sumG2, setSumG2,
    sumH2, setSumH2,
    sumI2, setSumI2,
    sumB38, setSumB38,
    sumC38, setSumC38,
    sumD38, setSumD38,
    sumE38, setSumE38,
    sumF38, setSumF38,
    sumG38, setSumG38,
    sumH38, setSumH38,
    sumI38, setSumI38,
    sumB44, setSumB44,
    sumC44, setSumC44,
    sumD44, setSumD44,
    sumE44, setSumE44,
    sumF44, setSumF44,
    sumG44, setSumG44,
    sumH44, setSumH44,
    sumI44, setSumI44,
    sumB45, setSumB45,
    sumC45, setSumC45,
    sumD45, setSumD45,
    sumE45, setSumE45,
    sumF45, setSumF45,
    sumG45, setSumG45,
    sumH45, setSumH45,
    sumI45, setSumI45,
    sumB4_25, setSumB4_25,
    sumC4_25, setSumC4_25,
    sumD4_25, setSumD4_25,
    sumE4_25, setSumE4_25,
    sumF4_25, setSumF4_25,
    sumG4_25, setSumG4_25,
    sumH4_25, setSumH4_25,
    sumI4_25, setSumI4_25,
    sumC4_26, setSumC4_26,
    sumD4_26, setSumD4_26,
    sumE4_26, setSumE4_26,
    sumF4_26, setSumF4_26,
    sumG4_26, setSumG4_26,
    sumH4_26, setSumH4_26,
    sumI4_26, setSumI4_26,
       } = useContext(AppContext);

  
  const [sumB4_6, setSumB4_6] = useState(0);
  const [sumC4_6, setSumC4_6] = useState(0);
  const [sumD4_6, setSumD4_6] = useState(0);
  const [sumE4_6, setSumE4_6] = useState(0);
  const [sumF4_6, setSumF4_6] = useState(0);
  const [sumG4_6, setSumG4_6] = useState(0);
  const [sumH4_6, setSumH4_6] = useState(0);
  const [sumI4_6, setSumI4_6] = useState(0);

  const [sumB4_7, setSumB4_7] = useState(0);
  const [sumC4_7, setSumC4_7] = useState(0);
  const [sumD4_7, setSumD4_7] = useState(0);
  const [sumE4_7, setSumE4_7] = useState(0);
  const [sumF4_7, setSumF4_7] = useState(0);
  const [sumG4_7, setSumG4_7] = useState(0);
  const [sumH4_7, setSumH4_7] = useState(0);
  const [sumI4_7, setSumI4_7] = useState(0);

  const [sumB4_8, setSumB4_8] = useState(0);
  const [sumC4_8, setSumC4_8] = useState(0);
  const [sumD4_8, setSumD4_8] = useState(0);
  const [sumE4_8, setSumE4_8] = useState(0);
  const [sumF4_8, setSumF4_8] = useState(0);
  const [sumG4_8, setSumG4_8] = useState(0);
  const [sumH4_8, setSumH4_8] = useState(0);
  const [sumI4_8, setSumI4_8] = useState(0);

  const [sumB4_9, setSumB4_9] = useState(0);
  const [sumC4_9, setSumC4_9] = useState(0);
  const [sumD4_9, setSumD4_9] = useState(0);
  const [sumE4_9, setSumE4_9] = useState(0);
  const [sumF4_9, setSumF4_9] = useState(0);
  const [sumG4_9, setSumG4_9] = useState(0);
  const [sumH4_9, setSumH4_9] = useState(0);
  const [sumI4_9, setSumI4_9] = useState(0);
 
  const [sumB4_10, setSumB4_10] = useState(0);
  const [sumC4_10, setSumC4_10] = useState(0);
  const [sumD4_10, setSumD4_10] = useState(0);
  const [sumE4_10, setSumE4_10] = useState(0);
  const [sumF4_10, setSumF4_10] = useState(0);
  const [sumG4_10, setSumG4_10] = useState(0);
  const [sumH4_10, setSumH4_10] = useState(0);
  const [sumI4_10, setSumI4_10] = useState(0);

  const [sumB4_11, setSumB4_11] = useState(0);
  const [sumC4_11, setSumC4_11] = useState(0);
  const [sumD4_11, setSumD4_11] = useState(0);
  const [sumE4_11, setSumE4_11] = useState(0);
  const [sumF4_11, setSumF4_11] = useState(0);
  const [sumG4_11, setSumG4_11] = useState(0);
  const [sumH4_11, setSumH4_11] = useState(0);
  const [sumI4_11, setSumI4_11] = useState(0);

  const [sumB4_12, setSumB4_12] = useState(0);
  const [sumC4_12, setSumC4_12] = useState(0);
  const [sumD4_12, setSumD4_12] = useState(0);
  const [sumE4_12, setSumE4_12] = useState(0);
  const [sumF4_12, setSumF4_12] = useState(0);
  const [sumG4_12, setSumG4_12] = useState(0);
  const [sumH4_12, setSumH4_12] = useState(0);
  const [sumI4_12, setSumI4_12] = useState(0);

  const [sumB4_13, setSumB4_13] = useState(0);
  const [sumC4_13, setSumC4_13] = useState(0);
  const [sumD4_13, setSumD4_13] = useState(0);
  const [sumE4_13, setSumE4_13] = useState(0);
  const [sumF4_13, setSumF4_13] = useState(0);
  const [sumG4_13, setSumG4_13] = useState(0);
  const [sumH4_13, setSumH4_13] = useState(0);
  const [sumI4_13, setSumI4_13] = useState(0);
  
  const [sumB4_14, setSumB4_14] = useState(0);
  const [sumC4_14, setSumC4_14] = useState(0);
  const [sumD4_14, setSumD4_14] = useState(0);
  const [sumE4_14, setSumE4_14] = useState(0);
  const [sumF4_14, setSumF4_14] = useState(0);
  const [sumG4_14, setSumG4_14] = useState(0);
  const [sumH4_14, setSumH4_14] = useState(0);
  const [sumI4_14, setSumI4_14] = useState(0);

  const [sumB4_15, setSumB4_15] = useState(0);
  const [sumC4_15, setSumC4_15] = useState(0);
  const [sumD4_15, setSumD4_15] = useState(0);
  const [sumE4_15, setSumE4_15] = useState(0);
  const [sumF4_15, setSumF4_15] = useState(0);
  const [sumG4_15, setSumG4_15] = useState(0);
  const [sumH4_15, setSumH4_15] = useState(0);
  const [sumI4_15, setSumI4_15] = useState(0);

  const [sumB4_16, setSumB4_16] = useState(0);
  const [sumC4_16, setSumC4_16] = useState(0);
  const [sumD4_16, setSumD4_16] = useState(0);
  const [sumE4_16, setSumE4_16] = useState(0);
  const [sumF4_16, setSumF4_16] = useState(0);
  const [sumG4_16, setSumG4_16] = useState(0);
  const [sumH4_16, setSumH4_16] = useState(0);
  const [sumI4_16, setSumI4_16] = useState(0);

  const [sumB4_17, setSumB4_17] = useState(0);
  const [sumC4_17, setSumC4_17] = useState(0);
  const [sumD4_17, setSumD4_17] = useState(0);
  const [sumE4_17, setSumE4_17] = useState(0);
  const [sumF4_17, setSumF4_17] = useState(0);
  const [sumG4_17, setSumG4_17] = useState(0);
  const [sumH4_17, setSumH4_17] = useState(0);
  const [sumI4_17, setSumI4_17] = useState(0);

  const [sumB4_18, setSumB4_18] = useState(0);
  const [sumC4_18, setSumC4_18] = useState(0);
  const [sumD4_18, setSumD4_18] = useState(0);
  const [sumE4_18, setSumE4_18] = useState(0);
  const [sumF4_18, setSumF4_18] = useState(0);
  const [sumG4_18, setSumG4_18] = useState(0);
  const [sumH4_18, setSumH4_18] = useState(0);
  const [sumI4_18, setSumI4_18] = useState(0);



 
  const [sumB4_21, setSumB4_21] = useState(0);
  const [sumC4_21, setSumC4_21] = useState(0);
  const [sumD4_21, setSumD4_21] = useState(0);
  const [sumE4_21, setSumE4_21] = useState(0);
  const [sumF4_21, setSumF4_21] = useState(0);
  const [sumG4_21, setSumG4_21] = useState(0);
  const [sumH4_21, setSumH4_21] = useState(0);
  const [sumI4_21, setSumI4_21] = useState(0);

  const [sumC4_22, setSumC4_22] = useState(0);
  const [sumD4_22, setSumD4_22] = useState(0);
  const [sumE4_22, setSumE4_22] = useState(0);
  const [sumF4_22, setSumF4_22] = useState(0);
  const [sumG4_22, setSumG4_22] = useState(0);
  const [sumH4_22, setSumH4_22] = useState(0);
  const [sumI4_22, setSumI4_22] = useState(0);

  const [sumB4_23, setSumB4_23] = useState(0);
  const [sumC4_23, setSumC4_23] = useState(0);
  const [sumD4_23, setSumD4_23] = useState(0);
  const [sumE4_23, setSumE4_23] = useState(0);
  const [sumF4_23, setSumF4_23] = useState(0);
  const [sumG4_23, setSumG4_23] = useState(0);
  const [sumH4_23, setSumH4_23] = useState(0);
  const [sumI4_23, setSumI4_23] = useState(0); 

  const [sumB4_24, setSumB4_24] = useState(0);
  const [sumC4_24, setSumC4_24] = useState(0);
  const [sumD4_24, setSumD4_24] = useState(0);
  const [sumE4_24, setSumE4_24] = useState(0);
  const [sumF4_24, setSumF4_24] = useState(0);
  const [sumG4_24, setSumG4_24] = useState(0);
  const [sumH4_24, setSumH4_24] = useState(0);
  const [sumI4_24, setSumI4_24] = useState(0);

  const [sumB4_27, setSumB4_27] = useState(0);
  const [sumC4_27, setSumC4_27] = useState(0);
  const [sumD4_27, setSumD4_27] = useState(0);
  const [sumE4_27, setSumE4_27] = useState(0);
  const [sumF4_27, setSumF4_27] = useState(0);
  const [sumG4_27, setSumG4_27] = useState(0);
  const [sumH4_27, setSumH4_27] = useState(0);
  const [sumI4_27, setSumI4_27] = useState(0);

  const [sumB4_28, setSumB4_28] = useState(0);
  const [sumC4_28, setSumC4_28] = useState(0);
  const [sumD4_28, setSumD4_28] = useState(0);
  const [sumE4_28, setSumE4_28] = useState(0);
  const [sumF4_28, setSumF4_28] = useState(0);
  const [sumG4_28, setSumG4_28] = useState(0);
  const [sumH4_28, setSumH4_28] = useState(0);
  const [sumI4_28, setSumI4_28] = useState(0);

  const [sumB4_29, setSumB4_29] = useState(0);
  const [sumC4_29, setSumC4_29] = useState(0);
  const [sumD4_29, setSumD4_29] = useState(0);
  const [sumE4_29, setSumE4_29] = useState(0);
  const [sumF4_29, setSumF4_29] = useState(0);
  const [sumG4_29, setSumG4_29] = useState(0);
  const [sumH4_29, setSumH4_29] = useState(0);
  const [sumI4_29, setSumI4_29] = useState(0);

  const [sumB4_30, setSumB4_30] = useState(0);
  const [sumC4_30, setSumC4_30] = useState(0);
  const [sumD4_30, setSumD4_30] = useState(0);
  const [sumE4_30, setSumE4_30] = useState(0);
  const [sumF4_30, setSumF4_30] = useState(0);
  const [sumG4_30, setSumG4_30] = useState(0);
  const [sumH4_30, setSumH4_30] = useState(0);
  const [sumI4_30, setSumI4_30] = useState(0);





  const [sumB4_39, setSumB4_39] = useState(0);
  const [sumC4_39, setSumC4_39] = useState(0);
  const [sumD4_39, setSumD4_39] = useState(0);
  const [sumE4_39, setSumE4_39] = useState(0);
  const [sumF4_39, setSumF4_39] = useState(0);
  const [sumG4_39, setSumG4_39] = useState(0);
  const [sumH4_39, setSumH4_39] = useState(0);
  const [sumI4_39, setSumI4_39] = useState(0);























  

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------


  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_ratio/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cell_id, cell_value, user_id })
      });
      console.log('Response:', res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

   const calculateTotal = (arr) => {
    return arr.reduce((total, currentValue) => total + parseFloat(inputValues[currentValue] || 0), 0);
  
  
  };


   
  //------------------------------------------------ MAIN FUNCION ---------------------------------------------
  
    
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
          const res = await fetch("http://127.0.0.1:8000/api/save_ratio/", {
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



  //------------------------------------------------ SAVE FOR 6 TO DATABASE ---------------------------------------------




  const updateB4_6 = () => {
    setSumB4_6(calculateTotal([0]) + (parseFloat(tot2020.B1_10 || 0)));
    setSumC4_6(calculateTotal([0]) + (parseFloat(tot2020.C1_10 || 0)));
    setSumD4_6(calculateTotal([0]) + (parseFloat(tot2020.D1_10 || 0)));
    setSumE4_6(calculateTotal([0]) + (parseFloat(tot2020.E1_10 || 0)));
    setSumF4_6(calculateTotal([0]) + (parseFloat(tot2020.F1_10 || 0)));
    setSumG4_6(calculateTotal([0]) + (parseFloat(tot2020.G1_10 || 0)));
    setSumH4_6(calculateTotal([0]) + (parseFloat(tot2020.H1_10 || 0)));
    setSumI4_6(calculateTotal([0]) + (parseFloat(tot2020.I1_10 || 0)));
  };

  useEffect(() => {
    updateB4_6();
  }, [inputValues, tot2020]);

  useEffect(() => {
    const uploadB4_6 = async () => {
      await uploadData("B4_6", sumB4_6.toString());
      await uploadData("C4_6", sumC4_6.toString());
      await uploadData("D4_6", sumD4_6.toString());
      await uploadData("E4_6", sumE4_6.toString());
      await uploadData("F4_6", sumF4_6.toString());
      await uploadData("G4_6", sumG4_6.toString());
      await uploadData("H4_6", sumH4_6.toString());
      await uploadData("I4_6", sumI4_6.toString());
    };
    if (sumB4_6 || sumC4_6 || sumD4_6 || sumE4_6 || sumF4_6 || sumG4_6 || sumH4_6 || sumI4_6) {
      uploadB4_6();
    }
  }, [sumB4_6, sumC4_6, sumD4_6, sumE4_6, sumF4_6, sumG4_6, sumH4_6, sumI4_6]);



  //------------------------------------------------------ CODE FOR 7  ---------------------------------------------

  const updateTotals = () => {
    setSumB4_7(calculateTotal(["B1_15", "B1_16"]) - parseFloat(inputValues["B1_25"] || 0));
    setSumC4_7(calculateTotal(["B1_25", "C1_16"]) - parseFloat(inputValues["C1_25"] || 0));
    setSumD4_7(calculateTotal(["C1_25", "D1_16"]) - parseFloat(inputValues["D1_25"] || 0));
    setSumE4_7(calculateTotal(["D1_25", "E1_16"]) - parseFloat(inputValues["E1_25"] || 0));
    setSumF4_7(calculateTotal(["E1_25", "F1_16"]) - parseFloat(inputValues["F1_25"] || 0));
    setSumG4_7(calculateTotal(["F1_25", "G1_16"]) - parseFloat(inputValues["G1_25"] || 0));
    setSumH4_7(calculateTotal(["G1_25", "H1_16"]) - parseFloat(inputValues["H1_25"] || 0));
    setSumI4_7(calculateTotal(["H1_25", "I1_16"]) - parseFloat(inputValues["I1_25"] || 0));
  };

  useEffect(() => {
    updateTotals();
  }, [inputValues, ]);

  useEffect(() => {
    const uploadTotals = async () => {
      await uploadData("B4_7", sumB4_7.toString());
      await uploadData("C4_7", sumC4_7.toString());
      await uploadData("D4_7", sumD4_7.toString());
      await uploadData("E4_7", sumE4_7.toString());
      await uploadData("F4_7", sumF4_7.toString());
      await uploadData("G4_7", sumG4_7.toString());
      await uploadData("H4_7", sumH4_7.toString());
      await uploadData("I4_7", sumI4_7.toString());
    };

  if (sumB4_7 || sumC4_7 || sumD4_7 || sumE4_7 || sumF4_7 || sumG4_7 || sumH4_7 || sumI4_7) {
    uploadTotals();
  }
}, [sumB4_7, sumC4_7, sumD4_7, sumE4_7, sumF4_7, sumG4_7, sumH4_7, sumI4_7]);



  //------------------------------------------------ SAVE FOR 8 TO DATABASE ---------------------------------------------




  const updateB4_8 = () => {
    setSumB4_8((parseFloat(Cost27.B1_27 || 0)));
    setSumC4_8((parseFloat(Cost27.C1_27 || 0)));
    setSumD4_8((parseFloat(Cost27.D1_27 || 0)));
    setSumE4_8((parseFloat(Cost27.E1_27 || 0)));
    setSumF4_8((parseFloat(Cost27.F1_27 || 0)));
    setSumG4_8((parseFloat(Cost27.G1_27 || 0)));
    setSumH4_8((parseFloat(Cost27.H1_27 || 0)));
    setSumI4_8((parseFloat(Cost27.I1_27 || 0)));
  };

  useEffect(() => {
    updateB4_8();
  }, [inputValues, Cost27,]);

  useEffect(() => {
    const uploadB4_8 = async () => {
      await uploadData("B4_8", sumB4_8.toString());
      await uploadData("C4_8", sumC4_8.toString());
      await uploadData("D4_8", sumD4_8.toString());
      await uploadData("E4_8", sumE4_8.toString());
      await uploadData("F4_8", sumF4_8.toString());
      await uploadData("G4_8", sumG4_8.toString());
      await uploadData("H4_8", sumH4_8.toString());
      await uploadData("I4_8", sumI4_8.toString());
    };
    if (sumB4_8 || sumC4_8 || sumD4_8 || sumE4_8 || sumF4_8 || sumG4_8 || sumH4_8 || sumI4_8) {
      uploadB4_8();
    }
  }, [sumB4_8, sumC4_8, sumD4_8, sumE4_8, sumF4_8, sumG4_8, sumH4_8, sumI4_8]);


//------------------------------------------------ SAVE FOR 9 TO DATABASE ---------------------------------------------




const updateB4_9 = () => {
  setSumB4_9((parseFloat(Cost26.B1_26 || 0)));
  setSumC4_9((parseFloat(Cost26.C1_26 || 0)));
  setSumD4_9((parseFloat(Cost26.D1_26 || 0)));
  setSumE4_9((parseFloat(Cost26.E1_26 || 0)));
  setSumF4_9((parseFloat(Cost26.F1_26 || 0)));
  setSumG4_9((parseFloat(Cost26.G1_26 || 0)));
  setSumH4_9((parseFloat(Cost26.H1_26 || 0)));
  setSumI4_9((parseFloat(Cost26.I1_26 || 0)));
};

useEffect(() => {
  updateB4_9();
}, [inputValues, Cost26,]);

useEffect(() => {
  const uploadB4_9 = async () => {
    await uploadData("B4_9", sumB4_9.toString());
    await uploadData("C4_9", sumC4_9.toString());
    await uploadData("D4_9", sumD4_9.toString());
    await uploadData("E4_9", sumE4_9.toString());
    await uploadData("F4_9", sumF4_9.toString());
    await uploadData("G4_9", sumG4_9.toString());
    await uploadData("H4_9", sumH4_9.toString());
    await uploadData("I4_9", sumI4_9.toString());
  };
  if (sumB4_9 || sumC4_9 || sumD4_9 || sumE4_9 || sumF4_9 || sumG4_9 || sumH4_9 || sumI4_9) {
    uploadB4_9();
  }
}, [sumB4_9, sumC4_9, sumD4_9, sumE4_9, sumF4_9, sumG4_9, sumH4_9, sumI4_9]);


 //------------------------------------------------------ CODE FOR 10  ---------------------------------------------

 const updateB4_10 = () => {
  setSumB4_10(parseFloat(tot2020.B1_10 || 0) + parseFloat(inputValues["B1_23"] || 0) + parseFloat(inputValues["B1_24"] || 0) - parseFloat(inputValues["B1_13"] || 0) - parseFloat(inputValues["B1_14"] || 0) );
  setSumC4_10(parseFloat(tot2020.C1_10 || 0) + parseFloat(inputValues["C1_23"] || 0) + parseFloat(inputValues["C1_24"] || 0) - parseFloat(inputValues["B1_23"] || 0) - parseFloat(inputValues["B1_24"] || 0) );
  setSumD4_10(parseFloat(tot2020.D1_10 || 0) + parseFloat(inputValues["D1_23"] || 0) + parseFloat(inputValues["D1_24"] || 0) - parseFloat(inputValues["C1_23"] || 0) - parseFloat(inputValues["C1_24"] || 0) );
  setSumE4_10(parseFloat(tot2020.E1_10 || 0) + parseFloat(inputValues["E1_23"] || 0) + parseFloat(inputValues["E1_24"] || 0) - parseFloat(inputValues["D1_23"] || 0) - parseFloat(inputValues["D1_24"] || 0) );
  setSumF4_10(parseFloat(tot2020.F1_10 || 0) + parseFloat(inputValues["F1_23"] || 0) + parseFloat(inputValues["F1_24"] || 0) - parseFloat(inputValues["E1_23"] || 0) - parseFloat(inputValues["E1_24"] || 0) );
  setSumG4_10(parseFloat(tot2020.G1_10 || 0) + parseFloat(inputValues["G1_23"] || 0) + parseFloat(inputValues["G1_24"] || 0) - parseFloat(inputValues["F1_23"] || 0) - parseFloat(inputValues["F1_24"] || 0) );
  setSumH4_10(parseFloat(tot2020.H1_10 || 0) + parseFloat(inputValues["H1_23"] || 0) + parseFloat(inputValues["H1_24"] || 0) - parseFloat(inputValues["G1_23"] || 0) - parseFloat(inputValues["G1_24"] || 0) );
  setSumI4_10(parseFloat(tot2020.I1_10 || 0) + parseFloat(inputValues["I1_23"] || 0) + parseFloat(inputValues["I1_24"] || 0) - parseFloat(inputValues["H1_23"] || 0) - parseFloat(inputValues["H1_24"] || 0) );
};

useEffect(() => {
  updateB4_10();
}, [inputValues,tot2020 ]);

useEffect(() => {
  const uploadB4_10 = async () => {
    await uploadData("B4_10", sumB4_10.toString());
    await uploadData("C4_10", sumC4_10.toString());
    await uploadData("D4_10", sumD4_10.toString());
    await uploadData("E4_10", sumE4_10.toString());
    await uploadData("F4_10", sumF4_10.toString());
    await uploadData("G4_10", sumG4_10.toString());
    await uploadData("H4_10", sumH4_10.toString());
    await uploadData("I4_10", sumI4_10.toString());
  };

if (sumB4_10 || sumC4_10 || sumD4_10 || sumE4_10 || sumF4_10 || sumG4_10 || sumH4_10 || sumI4_10) {
  uploadB4_10();
}
}, [sumB4_10, sumC4_10, sumD4_10, sumE4_10, sumF4_10, sumG4_10, sumH4_10, sumI4_10]);




 //------------------------------------------------------ CODE FOR 11  ---------------------------------------------

 const updateB4_11 = () => {
  setSumB4_11(((parseFloat(sumB4_8 || 0) - parseFloat(sumB4_9 || 0)) / (parseFloat(sumB4_10 || 0) + parseFloat(inputValues["B1_23"] || 0) - parseFloat(inputValues["B1_13"] || 0)))*100 );
  setSumC4_11(((parseFloat(sumC4_8 || 0) - parseFloat(sumC4_9 || 0)) / (parseFloat(sumC4_10 || 0) + parseFloat(inputValues["C1_23"] || 0) - parseFloat(inputValues["B1_23"] || 0)))*100 );
  setSumD4_11(((parseFloat(sumD4_8 || 0) - parseFloat(sumD4_9 || 0)) / (parseFloat(sumD4_10 || 0) + parseFloat(inputValues["D1_23"] || 0) - parseFloat(inputValues["C1_23"] || 0)))*100 );
  setSumE4_11(((parseFloat(sumE4_8 || 0) - parseFloat(sumE4_9 || 0)) / (parseFloat(sumE4_10 || 0) + parseFloat(inputValues["E1_23"] || 0) - parseFloat(inputValues["D1_23"] || 0)))*100 );
  setSumF4_11(((parseFloat(sumF4_8 || 0) - parseFloat(sumF4_9 || 0)) / (parseFloat(sumF4_10 || 0) + parseFloat(inputValues["F1_23"] || 0) - parseFloat(inputValues["E1_23"] || 0)))*100 );
  setSumG4_11(((parseFloat(sumG4_8 || 0) - parseFloat(sumG4_9 || 0)) / (parseFloat(sumG4_10 || 0) + parseFloat(inputValues["G1_23"] || 0) - parseFloat(inputValues["F1_23"] || 0)))*100 );
  setSumH4_11(((parseFloat(sumH4_8 || 0) - parseFloat(sumH4_9 || 0)) / (parseFloat(sumH4_10 || 0) + parseFloat(inputValues["H1_23"] || 0) - parseFloat(inputValues["G1_23"] || 0)))*100 );
  setSumI4_11(((parseFloat(sumI4_8 || 0) - parseFloat(sumI4_9 || 0)) / (parseFloat(sumI4_10 || 0) + parseFloat(inputValues["I1_23"] || 0) - parseFloat(inputValues["H1_23"] || 0)))*100 );
};

useEffect(() => {
  updateB4_11();
}, [inputValues,sumB4_10, sumC4_10, sumD4_10, sumE4_10, sumF4_10, sumG4_10, sumH4_10, sumI4_10 ,sumB4_9, sumC4_9, sumD4_9, sumE4_9, sumF4_9, sumG4_9, sumH4_9, sumI4_9,sumB4_8, sumC4_8, sumD4_8, sumE4_8, sumF4_8, sumG4_8, sumH4_8, sumI4_8]);

useEffect(() => {
  const uploadB4_11 = async () => {
    await uploadData("B4_11", sumB4_11.toString());
    await uploadData("C4_11", sumC4_11.toString());
    await uploadData("D4_11", sumD4_11.toString());
    await uploadData("E4_11", sumE4_11.toString());
    await uploadData("F4_11", sumF4_11.toString());
    await uploadData("G4_11", sumG4_11.toString());
    await uploadData("H4_11", sumH4_11.toString());
    await uploadData("I4_11", sumI4_11.toString());
  };

if (sumB4_11 || sumC4_11 || sumD4_11 || sumE4_11 || sumF4_11 || sumG4_11 || sumH4_11 || sumI4_11) {
  uploadB4_11();
}
}, [sumB4_11, sumC4_11, sumD4_11, sumE4_11, sumF4_11, sumG4_11, sumH4_11, sumI4_11]);



//  ------------------------------------------------------ CODE FOR 12  ---------------------------------------------

 const updateB4_12 = () => {
  setSumB4_12(((parseFloat(sumB4_9 || 0) - parseFloat(sumB4_39 || 0)) / parseFloat(sumB4_6 || 0)) * 100);
  setSumC4_12(((parseFloat(sumC4_9 || 0) - parseFloat(sumC4_39 || 0)) / parseFloat(sumC4_6 || 0)) * 100);
  setSumD4_12(((parseFloat(sumD4_9 || 0) - parseFloat(sumD4_39 || 0)) / parseFloat(sumD4_6 || 0)) * 100);
  setSumE4_12(((parseFloat(sumE4_9 || 0) - parseFloat(sumE4_39 || 0)) / parseFloat(sumE4_6 || 0)) * 100);
  setSumF4_12(((parseFloat(sumF4_9 || 0) - parseFloat(sumF4_39 || 0)) / parseFloat(sumF4_6 || 0)) * 100);
  setSumG4_12(((parseFloat(sumG4_9 || 0) - parseFloat(sumG4_39 || 0)) / parseFloat(sumG4_6 || 0)) * 100);
  setSumH4_12(((parseFloat(sumH4_9 || 0) - parseFloat(sumH4_39 || 0)) / parseFloat(sumH4_6 || 0)) * 100);
  setSumI4_12(((parseFloat(sumI4_9 || 0) - parseFloat(sumI4_39 || 0)) / parseFloat(sumI4_6 || 0)) * 100);
};

useEffect(() => {
  updateB4_12();
}, [inputValues,sumB4_6, sumC4_6, sumD4_6, sumE4_6, sumF4_6, sumG4_6, sumH4_6, sumI4_6 ,sumB4_9, sumC4_9, sumD4_9, sumE4_9, sumF4_9, sumG4_9, sumH4_9, sumI4_9,sumB4_39, sumC4_39, sumD4_39, sumE4_39, sumF4_39, sumG4_39, sumH4_39, sumI4_39]);

useEffect(() => {
  const uploadB4_12 = async () => {
    await uploadData("B4_12", sumB4_12.toString());
    await uploadData("C4_12", sumC4_12.toString());
    await uploadData("D4_12", sumD4_12.toString());
    await uploadData("E4_12", sumE4_12.toString());
    await uploadData("F4_12", sumF4_12.toString());
    await uploadData("G4_12", sumG4_12.toString());
    await uploadData("H4_12", sumH4_12.toString());
    await uploadData("I4_12", sumI4_12.toString());
  };

if (sumB4_12 || sumC4_12 || sumD4_12 || sumE4_12 || sumF4_12 || sumG4_12 || sumH4_12 || sumI4_12) {
  uploadB4_12();
}
}, [sumB4_12, sumC4_12, sumD4_12, sumE4_12, sumF4_12, sumG4_12, sumH4_12, sumI4_12]);


//  ------------------------------------------------------ CODE FOR 13  ---------------------------------------------

const updateB4_13 = () => {
  setSumB4_13((parseFloat(sumB4_7 || 0) / parseFloat(sumB4_10 || 0)) * 100);
  setSumC4_13((parseFloat(sumC4_7 || 0) / parseFloat(sumC4_10 || 0)) * 100);
  setSumD4_13((parseFloat(sumD4_7 || 0) / parseFloat(sumD4_10 || 0)) * 100);
  setSumE4_13((parseFloat(sumE4_7 || 0) / parseFloat(sumE4_10 || 0)) * 100);
  setSumF4_13((parseFloat(sumF4_7 || 0) / parseFloat(sumF4_10 || 0)) * 100);
  setSumG4_13((parseFloat(sumG4_7 || 0) / parseFloat(sumG4_10 || 0)) * 100);
  setSumH4_13((parseFloat(sumH4_7 || 0) / parseFloat(sumH4_10 || 0)) * 100);
  setSumI4_13((parseFloat(sumI4_7 || 0) / parseFloat(sumI4_10 || 0)) * 100);
};

useEffect(() => {
  updateB4_13();
}, [inputValues,sumB4_7, sumC4_7, sumD4_7, sumE4_7, sumF4_7, sumG4_7, sumH4_7, sumI4_7 ,sumB4_10, sumC4_10, sumD4_10, sumE4_10, sumF4_10, sumG4_10, sumH4_10, sumI4_10]);

useEffect(() => {
  const uploadB4_13 = async () => {
    await uploadData("B4_13", sumB4_13.toString());
    await uploadData("C4_13", sumC4_13.toString());
    await uploadData("D4_13", sumD4_13.toString());
    await uploadData("E4_13", sumE4_13.toString());
    await uploadData("F4_13", sumF4_13.toString());
    await uploadData("G4_13", sumG4_13.toString());
    await uploadData("H4_13", sumH4_13.toString());
    await uploadData("I4_13", sumI4_13.toString());
  };

if (sumB4_13 || sumC4_13 || sumD4_13 || sumE4_13 || sumF4_13 || sumG4_13 || sumH4_13 || sumI4_13) {
  uploadB4_13();
}
}, [sumB4_13, sumC4_13, sumD4_13, sumE4_13, sumF4_13, sumG4_13, sumH4_13, sumI4_13]);




 //------------------------------------------------------ CODE FOR 14  ---------------------------------------------

 const updateB4_14 = () => {
  setSumB4_14((parseFloat(Cost37.B1_37 || 0) / parseFloat(tot2020.B1_10 || 0))*100);
  setSumC4_14((parseFloat(Cost37.C1_37 || 0) / parseFloat(tot2020.C1_10 || 0))*100); 
  setSumD4_14((parseFloat(Cost37.D1_37 || 0) / parseFloat(tot2020.D1_10 || 0))*100);
  setSumE4_14((parseFloat(Cost37.E1_37 || 0) / parseFloat(tot2020.E1_10 || 0))*100); 
  setSumF4_14((parseFloat(Cost37.F1_37 || 0) / parseFloat(tot2020.F1_10 || 0))*100);
  setSumG4_14((parseFloat(Cost37.G1_37 || 0) / parseFloat(tot2020.G1_10 || 0))*100);
  setSumH4_14((parseFloat(Cost37.H1_37 || 0) / parseFloat(tot2020.H1_10 || 0))*100); 
  setSumI4_14((parseFloat(Cost37.I1_37 || 0) / parseFloat(tot2020.I1_10 || 0))*100); 
};

useEffect(() => {
  updateB4_14();
}, [inputValues,tot2020,Cost37 ]);

useEffect(() => {
  const uploadB4_14 = async () => {
    await uploadData("B4_14", sumB4_14.toString());
    await uploadData("C4_14", sumC4_14.toString());
    await uploadData("D4_14", sumD4_14.toString());
    await uploadData("E4_14", sumE4_14.toString());
    await uploadData("F4_14", sumF4_14.toString());
    await uploadData("G4_14", sumG4_14.toString());
    await uploadData("H4_14", sumH4_14.toString());
    await uploadData("I4_14", sumI4_14.toString());
  };

if (sumB4_14 || sumC4_14 || sumD4_14 || sumE4_14 || sumF4_14 || sumG4_14 || sumH4_14 || sumI4_14) {
  uploadB4_14();
}
}, [sumB4_14, sumC4_14, sumD4_14, sumE4_14, sumF4_14, sumG4_14, sumH4_14, sumI4_14]);


 //------------------------------------------------------ CODE FOR 15  ---------------------------------------------

 const updateB4_15 = () => {
  setSumB4_15(100 - ((parseFloat(Cost31.B1_31 || 0) / parseFloat(Cost26.B1_26 || 0))*100));
  setSumC4_15(100 - ((parseFloat(Cost31.C1_31 || 0) / parseFloat(Cost26.C1_26 || 0))*100)); 
  setSumD4_15(100 - ((parseFloat(Cost31.D1_31 || 0) / parseFloat(Cost26.D1_26 || 0))*100));
  setSumE4_15(100 - ((parseFloat(Cost31.E1_31 || 0) / parseFloat(Cost26.E1_26 || 0))*100)); 
  setSumF4_15(100 - ((parseFloat(Cost31.F1_31 || 0) / parseFloat(Cost26.F1_26 || 0))*100));
  setSumG4_15(100 - ((parseFloat(Cost31.G1_31 || 0) / parseFloat(Cost26.G1_26 || 0))*100));
  setSumH4_15(100 - ((parseFloat(Cost31.H1_31 || 0) / parseFloat(Cost26.H1_26 || 0))*100)); 
  setSumI4_15(100 - ((parseFloat(Cost31.I1_31 || 0) / parseFloat(Cost26.I1_26 || 0))*100)); 
};

useEffect(() => {
  updateB4_15();
}, [inputValues,Cost31,Cost26 ]);

useEffect(() => {
  const uploadB4_15 = async () => {
    await uploadData("B4_15", sumB4_15.toString());
    await uploadData("C4_15", sumC4_15.toString());
    await uploadData("D4_15", sumD4_15.toString());
    await uploadData("E4_15", sumE4_15.toString());
    await uploadData("F4_15", sumF4_15.toString());
    await uploadData("G4_15", sumG4_15.toString());
    await uploadData("H4_15", sumH4_15.toString());
    await uploadData("I4_15", sumI4_15.toString());
  };

if (sumB4_15 || sumC4_15 || sumD4_15 || sumE4_15 || sumF4_15 || sumG4_15 || sumH4_15 || sumI4_15) {
  uploadB4_15();
}
}, [sumB4_15, sumC4_15, sumD4_15, sumE4_15, sumF4_15, sumG4_15, sumH4_15, sumI4_15]);



 //------------------------------------------------------ CODE FOR 16  ---------------------------------------------

 const updateB4_16 = () => {
  setSumB4_16((parseFloat(inputValues["B1_20"] || 0) / parseFloat(Cost26.B1_26 || 0))*100);
  setSumC4_16((parseFloat(inputValues["C1_20"] || 0) / parseFloat(Cost26.C1_26 || 0))*100); 
  setSumD4_16((parseFloat(inputValues["D1_20"] || 0) / parseFloat(Cost26.D1_26 || 0))*100);
  setSumE4_16((parseFloat(inputValues["E1_20"] || 0) / parseFloat(Cost26.E1_26 || 0))*100); 
  setSumF4_16((parseFloat(inputValues["F1_20"] || 0) / parseFloat(Cost26.F1_26 || 0))*100);
  setSumG4_16((parseFloat(inputValues["G1_20"] || 0) / parseFloat(Cost26.G1_26 || 0))*100);
  setSumH4_16((parseFloat(inputValues["H1_20"] || 0) / parseFloat(Cost26.H1_26 || 0))*100); 
  setSumI4_16((parseFloat(inputValues["I1_20"] || 0) / parseFloat(Cost26.I1_26 || 0))*100); 
};

useEffect(() => {
  updateB4_16();
}, [inputValues,Cost26 ]);

useEffect(() => {
  const uploadB4_16 = async () => {
    await uploadData("B4_16", sumB4_16.toString());
    await uploadData("C4_16", sumC4_16.toString());
    await uploadData("D4_16", sumD4_16.toString());
    await uploadData("E4_16", sumE4_16.toString());
    await uploadData("F4_16", sumF4_16.toString());
    await uploadData("G4_16", sumG4_16.toString());
    await uploadData("H4_16", sumH4_16.toString());
    await uploadData("I4_16", sumI4_16.toString());
  };

if (sumB4_16 || sumC4_16 || sumD4_16 || sumE4_16 || sumF4_16 || sumG4_16 || sumH4_16 || sumI4_16) {
  uploadB4_16();
}
}, [sumB4_16, sumC4_16, sumD4_16, sumE4_16, sumF4_16, sumG4_16, sumH4_16, sumI4_16]);



 //------------------------------------------------------ CODE FOR 17  ---------------------------------------------

 const updateB4_17 = () => {
  setSumB4_17((parseFloat(inputValues["B1_29"] || 0) / parseFloat(Cost26.B1_26 || 0))*100);
  setSumC4_17((parseFloat(inputValues["C1_29"] || 0) / parseFloat(Cost26.C1_26 || 0))*100); 
  setSumD4_17((parseFloat(inputValues["D1_29"] || 0) / parseFloat(Cost26.D1_26 || 0))*100);
  setSumE4_17((parseFloat(inputValues["E1_29"] || 0) / parseFloat(Cost26.E1_26 || 0))*100); 
  setSumF4_17((parseFloat(inputValues["F1_29"] || 0) / parseFloat(Cost26.F1_26 || 0))*100);
  setSumG4_17((parseFloat(inputValues["G1_29"] || 0) / parseFloat(Cost26.G1_26 || 0))*100);
  setSumH4_17((parseFloat(inputValues["H1_29"] || 0) / parseFloat(Cost26.H1_26 || 0))*100); 
  setSumI4_17((parseFloat(inputValues["I1_29"] || 0) / parseFloat(Cost26.I1_26 || 0))*100); 
};

useEffect(() => {
  updateB4_17();
}, [inputValues,Cost26 ]);

useEffect(() => {
  const uploadB4_17 = async () => {
    await uploadData("B4_17", sumB4_17.toString());
    await uploadData("C4_17", sumC4_17.toString());
    await uploadData("D4_17", sumD4_17.toString());
    await uploadData("E4_17", sumE4_17.toString());
    await uploadData("F4_17", sumF4_17.toString());
    await uploadData("G4_17", sumG4_17.toString());
    await uploadData("H4_17", sumH4_17.toString());
    await uploadData("I4_17", sumI4_17.toString());
  };

if (sumB4_17 || sumC4_17 || sumD4_17 || sumE4_17 || sumF4_17 || sumG4_17 || sumH4_17 || sumI4_17) {
  uploadB4_17();
}
}, [sumB4_17, sumC4_17, sumD4_17, sumE4_17, sumF4_17, sumG4_17, sumH4_17, sumI4_17]);



 //------------------------------------------------------ CODE FOR 18  ---------------------------------------------

 const updateB4_18 = () => {
  setSumB4_18((parseFloat(inputValues["B1_30"] || 0) / parseFloat(Cost26.B1_26 || 0))*100);
  setSumC4_18((parseFloat(inputValues["C1_30"] || 0) / parseFloat(Cost26.C1_26 || 0))*100); 
  setSumD4_18((parseFloat(inputValues["D1_30"] || 0) / parseFloat(Cost26.D1_26 || 0))*100);
  setSumE4_18((parseFloat(inputValues["E1_30"] || 0) / parseFloat(Cost26.E1_26 || 0))*100); 
  setSumF4_18((parseFloat(inputValues["F1_30"] || 0) / parseFloat(Cost26.F1_26 || 0))*100);
  setSumG4_18((parseFloat(inputValues["G1_30"] || 0) / parseFloat(Cost26.G1_26 || 0))*100);
  setSumH4_18((parseFloat(inputValues["H1_30"] || 0) / parseFloat(Cost26.H1_26 || 0))*100); 
  setSumI4_18((parseFloat(inputValues["I1_30"] || 0) / parseFloat(Cost26.I1_26 || 0))*100); 
};

useEffect(() => {
  updateB4_18();
}, [inputValues,Cost26 ]);

useEffect(() => {
  const uploadB4_18 = async () => {
    await uploadData("B4_18", sumB4_18.toString());
    await uploadData("C4_18", sumC4_18.toString());
    await uploadData("D4_18", sumD4_18.toString());
    await uploadData("E4_18", sumE4_18.toString());
    await uploadData("F4_18", sumF4_18.toString());
    await uploadData("G4_18", sumG4_18.toString());
    await uploadData("H4_18", sumH4_18.toString());
    await uploadData("I4_18", sumI4_18.toString());
  };

if (sumB4_18 || sumC4_18 || sumD4_18 || sumE4_18 || sumF4_18 || sumG4_18 || sumH4_18 || sumI4_18) {
  uploadB4_18();
}
}, [sumB4_17, sumC4_18, sumD4_18, sumE4_18, sumF4_18, sumG4_18, sumH4_18, sumI4_18]);





//------------------------------------------------- TOTAL OF 21 -------------------------------------------------------


const uploadSumB4_21 = () => {
  setSumB4_21( + parseFloat(sumB50 || 0) - parseFloat(sumB30 || 0)); 
  setSumC4_21( + parseFloat(sumC50 || 0) - parseFloat(sumC30 || 0));
  setSumD4_21( + parseFloat(sumD50 || 0) - parseFloat(sumD30 || 0));
  setSumE4_21( + parseFloat(sumE50 || 0) - parseFloat(sumE30 || 0));
  setSumF4_21( + parseFloat(sumF50 || 0) - parseFloat(sumF30 || 0));
  setSumG4_21( + parseFloat(sumG50 || 0) - parseFloat(sumG30 || 0));
  setSumH4_21( + parseFloat(sumH50 || 0) - parseFloat(sumH30 || 0));
  setSumI4_21( + parseFloat(sumI50 || 0) - parseFloat(sumI30 || 0));
};

useEffect(() => {
  uploadSumB4_21();
}, [inputValues,sumB50, sumC50, sumD50, sumE50, sumF50, sumG50, sumH50, sumI50,sumB30, sumC30, sumD30, sumE30, sumF30, sumG30, sumH30, sumI30]);

useEffect(() => {
  const uploadSumB4_21 = async () => {
    await uploadData("B2_21", sumB4_21.toString());
    await uploadData("C2_21", sumC4_21.toString());
    await uploadData("D2_21", sumD4_21.toString());
    await uploadData("E2_21", sumE4_21.toString());
    await uploadData("F2_21", sumF4_21.toString());
    await uploadData("G2_21", sumG4_21.toString());
    await uploadData("H2_21", sumH4_21.toString());
    await uploadData("I2_21", sumI4_21.toString());
  };
  if (sumB4_21 || sumC4_21 || sumD4_21 || sumE4_21 || sumF4_21 || sumG4_21 || sumH4_21 || sumI4_21) {
    uploadSumB4_21();
  }
}, [sumB4_21, sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);


//------------------------------------------------- TOTAL OF 22 -------------------------------------------------------


const uploadSumB4_22 = () => {
  setSumC4_22( + parseFloat(sumC4_21 || 0) - parseFloat(sumB4_21 || 0));
  setSumD4_22( + parseFloat(sumD4_21 || 0) - parseFloat(sumC4_21 || 0));
  setSumE4_22( + parseFloat(sumE4_21 || 0) - parseFloat(sumD4_21 || 0));
  setSumF4_22( + parseFloat(sumF4_21 || 0) - parseFloat(sumE4_21 || 0)); 
  setSumG4_22( + parseFloat(sumG4_21 || 0) - parseFloat(sumF4_21 || 0));
  setSumH4_22( + parseFloat(sumH4_21 || 0) - parseFloat(sumG4_21 || 0));
  setSumI4_22( + parseFloat(sumI4_21 || 0) - parseFloat(sumH4_21 || 0));
};

useEffect(() => {
  uploadSumB4_22();
}, [inputValues,sumB4_21, sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);

useEffect(() => {
  const uploadSumB4_22 = async () => {
    await uploadData("C4_22", sumC4_22.toString());
    await uploadData("D4_22", sumD4_22.toString());
    await uploadData("E4_22", sumE4_22.toString());
    await uploadData("F4_22", sumF4_22.toString());
    await uploadData("G4_22", sumG4_22.toString());
    await uploadData("H4_22", sumH4_22.toString());
    await uploadData("I4_22", sumI4_22.toString());
  };
  if ( sumC4_22 || sumD4_22 || sumE4_22 || sumF4_22 || sumG4_22 || sumH4_22 || sumI4_22) {
    uploadSumB4_22();
  }
}, [ sumC4_22, sumD4_22, sumE4_22, sumF4_22, sumG4_22, sumH4_22, sumI4_22]);


//------------------------------------------------- TOTAL OF 23 -------------------------------------------------------


const uploadSumB4_23 = () => {
  setSumB4_23(  parseFloat(sumB4_21 || 0) - parseFloat(inputValues["B2_23"] || 0));
  setSumC4_23(  parseFloat(sumC4_21 || 0) - parseFloat(inputValues["C2_23"] || 0));
  setSumD4_23(  parseFloat(sumD4_21 || 0) - parseFloat(inputValues["D2_23"] || 0));
  setSumE4_23(  parseFloat(sumE4_21 || 0) - parseFloat(inputValues["E2_23"] || 0)); 
  setSumF4_23(  parseFloat(sumF4_21 || 0) - parseFloat(inputValues["F2_23"] || 0));
  setSumG4_23(  parseFloat(sumG4_21 || 0) - parseFloat(inputValues["G2_23"] || 0));
  setSumH4_23(  parseFloat(sumH4_21 || 0) - parseFloat(inputValues["H2_23"] || 0));
  setSumI4_23(  parseFloat(sumI4_21 || 0) - parseFloat(inputValues["I2_23"] || 0));
};

useEffect(() => {
  uploadSumB4_23();
}, [inputValues,sumB4_21, sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);

useEffect(() => {
  const uploadSumB4_23 = async () => {
    await uploadData("B4_23", sumB4_23.toString());
    await uploadData("C4_23", sumC4_23.toString());
    await uploadData("D4_23", sumD4_23.toString());
    await uploadData("E4_23", sumE4_23.toString());
    await uploadData("F4_23", sumF4_23.toString());
    await uploadData("G4_23", sumG4_23.toString());
    await uploadData("H4_23", sumH4_23.toString());
    await uploadData("I4_23", sumI4_23.toString());
  };
  if ( sumB4_23 || sumC4_23 || sumD4_23 || sumE4_23 || sumF4_23 || sumG4_23 || sumH4_23 || sumI4_23) {
    uploadSumB4_23();
  }
}, [ sumB4_23,sumC4_23, sumD4_23, sumE4_23, sumF4_23, sumG4_23, sumH4_23, sumI4_23]);



//------------------------------------------------- TOTAL OF 24 -------------------------------------------------------
const uploadSumB4_24 = () =>
  {
  setSumB4_24( calculateTotal(["B3_33"] || 0) + parseFloat(sumB4_21 || 0)); 
  setSumC4_24( calculateTotal(["C3_33"] || 0) + parseFloat(sumC4_21 || 0)); 
  setSumD4_24( calculateTotal(["D3_33"] || 0) + parseFloat(sumD4_21 || 0)); 
  setSumE4_24( calculateTotal(["E3_33"] || 0) + parseFloat(sumE4_21 || 0));  
  setSumF4_24( calculateTotal(["F3_33"] || 0) + parseFloat(sumF4_21 || 0)); 
  setSumG4_24( calculateTotal(["G3_33"] || 0) + parseFloat(sumG4_21 || 0)); 
  setSumH4_24( calculateTotal(["H3_33"] || 0) + parseFloat(sumH4_21 || 0)); 
  setSumI4_24( calculateTotal(["I3_33"] || 0) + parseFloat(sumI4_21 || 0)); 
};

useEffect(() => {
  uploadSumB4_24();
}, [inputValues,sumB4_21, sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);

useEffect(() => {
  const uploadSumB4_24 = async () => {
    await uploadData("B4_24", sumB4_24.toString());
    await uploadData("C4_24", sumC4_24.toString());
    await uploadData("D4_24", sumD4_24.toString());
    await uploadData("E4_24", sumE4_24.toString());
    await uploadData("F4_24", sumF4_24.toString());
    await uploadData("G4_24", sumG4_24.toString());
    await uploadData("H4_24", sumH4_24.toString());
    await uploadData("I4_24", sumI4_24.toString());
  };
  if ( sumB4_24 || sumC4_24 || sumD4_24 || sumE4_24 || sumF4_24 || sumG4_24 || sumH4_24 || sumI4_24) {
    uploadSumB4_24();
  }
}, [ sumB4_24,sumC4_24, sumD4_24, sumE4_24, sumF4_24, sumG4_24, sumH4_24, sumI4_24]);



//------------------------------------------------- TOTAL OF 25 -------------------------------------------------------


const uploadSumB4_25 = () => {
  setSumB4_25( + parseFloat( sumB2 || 0) - parseFloat(sumB38 || 0));
  setSumC4_25( + parseFloat( sumC2 || 0) - parseFloat(sumC38 || 0));
  setSumD4_25( + parseFloat( sumD2 || 0) - parseFloat(sumD38 || 0));
  setSumE4_25( + parseFloat( sumE2 || 0) - parseFloat(sumE38 || 0));
  setSumF4_25( + parseFloat( sumF2 || 0) - parseFloat(sumF38 || 0)); 
  setSumG4_25( + parseFloat( sumG2 || 0) - parseFloat(sumG38 || 0));
  setSumH4_25( + parseFloat( sumH2 || 0) - parseFloat(sumH38 || 0));
  setSumI4_25( + parseFloat( sumI2 || 0) - parseFloat(sumI38 || 0));
};

useEffect(() => {
  uploadSumB4_25();
}, [inputValues,sumB2, sumC2, sumD2, sumE2, sumF2, sumG2, sumH2, sumI2,sumB38, sumC38, sumD38, sumE38, sumF38, sumG38, sumH38, sumI38]);

useEffect(() => {
  const uploadSumB4_25 = async () => {
    await uploadData("B4_25", sumB4_25.toString());
    await uploadData("C4_25", sumC4_25.toString());
    await uploadData("D4_25", sumD4_25.toString());
    await uploadData("E4_25", sumE4_25.toString());
    await uploadData("F4_25", sumF4_25.toString());
    await uploadData("G4_25", sumG4_25.toString());
    await uploadData("H4_25", sumH4_25.toString());
    await uploadData("I4_25", sumI4_25.toString());
  };
  if ( sumC4_25 || sumD4_25 || sumE4_25 || sumF4_25 || sumG4_25 || sumH4_25 || sumI4_25) {
    uploadSumB4_25();
  }
}, [ sumB4_25,sumC4_25, sumD4_25, sumE4_25, sumF4_25, sumG4_25, sumH4_25, sumI4_25]);



//------------------------------------------------- TOTAL OF 26 -------------------------------------------------------


const uploadSumB4_26 = () => {
  setSumC4_26( + parseFloat(sumC4_25 || 0) - parseFloat(sumB4_25 || 0));
  setSumD4_26( + parseFloat(sumD4_25 || 0) - parseFloat(sumC4_25 || 0));
  setSumE4_26( + parseFloat(sumE4_25 || 0) - parseFloat(sumD4_25 || 0));
  setSumF4_26( + parseFloat(sumF4_25 || 0) - parseFloat(sumE4_25 || 0)); 
  setSumG4_26( + parseFloat(sumG4_25 || 0) - parseFloat(sumF4_25 || 0));
  setSumH4_26( + parseFloat(sumH4_25 || 0) - parseFloat(sumG4_25 || 0));
  setSumI4_26( + parseFloat(sumI4_25 || 0) - parseFloat(sumH4_25 || 0));
};

useEffect(() => {
  uploadSumB4_26();
}, [inputValues,sumB4_25, sumC4_25, sumD4_25, sumE4_25, sumF4_25, sumG4_25, sumH4_25, sumI4_25]);

useEffect(() => {
  const uploadSumB4_26 = async () => {
    await uploadData("C4_26", sumC4_26.toString());
    await uploadData("D4_26", sumD4_26.toString());
    await uploadData("E4_26", sumE4_26.toString());
    await uploadData("F4_26", sumF4_26.toString());
    await uploadData("G4_26", sumG4_26.toString());
    await uploadData("H4_26", sumH4_26.toString());
    await uploadData("I4_26", sumI4_26.toString());
  };
  if ( sumC4_26 || sumD4_26 || sumE4_26 || sumF4_26 || sumG4_26 || sumH4_26 || sumI4_26) {
    uploadSumB4_26();
  }
}, [ sumC4_26, sumD4_26, sumE4_26, sumF4_26, sumG4_26, sumH4_26, sumI4_26]);

 
//------------------------------------------------- TOTAL OF 27 -------------------------------------------------------


const uploadSumB4_27 = () => {
  setSumB4_27(  parseFloat( sumB2 || 0) / parseFloat(sumB38 || 0));
  setSumC4_27(  parseFloat( sumC2 || 0) / parseFloat(sumC38 || 0));
  setSumD4_27(  parseFloat( sumD2 || 0) / parseFloat(sumD38 || 0));
  setSumE4_27(  parseFloat( sumE2 || 0) / parseFloat(sumE38 || 0));
  setSumF4_27(  parseFloat( sumF2 || 0) / parseFloat(sumF38 || 0)); 
  setSumG4_27(  parseFloat( sumG2 || 0) / parseFloat(sumG38 || 0));
  setSumH4_27(  parseFloat( sumH2 || 0) / parseFloat(sumH38 || 0));
  setSumI4_27(  parseFloat( sumI2 || 0) / parseFloat(sumI38 || 0));
};

useEffect(() => {
  uploadSumB4_27();
}, [inputValues,sumB2, sumC2, sumD2, sumE2, sumF2, sumG2, sumH2, sumI2,sumB38, sumC38, sumD38, sumE38, sumF38, sumG38, sumH38, sumI38]);

useEffect(() => {
  const uploadSumB4_27 = async () => {
    await uploadData("B4_27", sumB4_27.toString());
    await uploadData("C4_27", sumC4_27.toString());
    await uploadData("D4_27", sumD4_27.toString());
    await uploadData("E4_27", sumE4_27.toString());
    await uploadData("F4_27", sumF4_27.toString());
    await uploadData("G4_27", sumG4_27.toString());
    await uploadData("H4_27", sumH4_27.toString());
    await uploadData("I4_27", sumI4_27.toString());
  };
  if ( sumC4_27 || sumD4_27 || sumE4_27 || sumF4_27 || sumG4_27 || sumH4_27 || sumI4_27) {
    uploadSumB4_27();
  }
}, [ sumB4_27,sumC4_27, sumD4_27, sumE4_27, sumF4_27, sumG4_27, sumH4_27, sumI4_27]);


//------------------------------------------------- TOTAL OF 28 -------------------------------------------------------
const uploadSumB4_28 = () =>
  {
  setSumB4_28((( parseFloat(sumB38 || 0)  +  parseFloat(sumB44 || 0)) -  parseFloat(tot37.B3_37 || 0)) /  parseFloat(sumB4_21 || 0) ); 
  setSumC4_28((( parseFloat(sumC38 || 0)  +  parseFloat(sumC44 || 0)) -  parseFloat(tot37.C3_37 || 0)) /  parseFloat(sumC4_21 || 0) ); 
  setSumD4_28((( parseFloat(sumD38 || 0)  +  parseFloat(sumD44 || 0)) -  parseFloat(tot37.D3_37 || 0)) /  parseFloat(sumD4_21 || 0) ); 
  setSumE4_28((( parseFloat(sumE38 || 0)  +  parseFloat(sumE44 || 0)) -  parseFloat(tot37.E3_37 || 0)) /  parseFloat(sumE4_21 || 0) );  
  setSumF4_28((( parseFloat(sumF38 || 0)  +  parseFloat(sumF44 || 0)) -  parseFloat(tot37.F3_37 || 0)) /  parseFloat(sumF4_21 || 0) ); 
  setSumG4_28((( parseFloat(sumG38 || 0)  +  parseFloat(sumG44 || 0)) -  parseFloat(tot37.G3_37 || 0)) /  parseFloat(sumG4_21 || 0) ); 
  setSumH4_28((( parseFloat(sumH38 || 0)  +  parseFloat(sumH44 || 0)) -  parseFloat(tot37.H3_37 || 0)) /  parseFloat(sumH4_21 || 0) ); 
  setSumI4_28((( parseFloat(sumI38 || 0)  +  parseFloat(sumI44 || 0)) -  parseFloat(tot37.I3_37 || 0)) /  parseFloat(sumI4_21 || 0) ); 
};

useEffect(() => {
  uploadSumB4_28();
}, [inputValues,tot37,sumB38,sumC38, sumD38, sumE38, sumF38, sumG38, sumH38, sumI38,sumB44,sumC44, sumD44, sumE44, sumF44, sumG44, sumH44, sumI44,sumB4_21,sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);

useEffect(() => {
  const uploadSumB4_28 = async () => {
    await uploadData("B4_28", sumB4_28.toString());
    await uploadData("C4_28", sumC4_28.toString());
    await uploadData("D4_28", sumD4_28.toString());
    await uploadData("E4_28", sumE4_28.toString());
    await uploadData("F4_28", sumF4_28.toString());
    await uploadData("G4_28", sumG4_28.toString());
    await uploadData("H4_28", sumH4_28.toString());
    await uploadData("I4_28", sumI4_28.toString());
  };
  if ( sumB4_28 || sumC4_28 || sumD4_28 || sumE4_28 || sumF4_28 || sumG4_28 || sumH4_28 || sumI4_28) {
    uploadSumB4_28();
  }
}, [ sumB4_28,sumC4_28, sumD4_28, sumE4_28, sumF4_28, sumG4_28, sumH4_28, sumI4_28]);




//------------------------------------------------- TOTAL OF 29 -------------------------------------------------------
const uploadSumB4_29 = () =>
  {
  setSumB4_29(( parseFloat(sumB45 || 0)  -  parseFloat(inputValues["B3_36"] || 0)) /  (parseFloat(inputValues["B3_33"] || 0) +  parseFloat(sumB4_21 || 0) )); 
  setSumC4_29(( parseFloat(sumC45 || 0)  -  parseFloat(inputValues["C3_36"] || 0)) /  (parseFloat(inputValues["C3_33"] || 0) +  parseFloat(sumC4_21 || 0) )); 
  setSumD4_29(( parseFloat(sumD45 || 0)  -  parseFloat(inputValues["D3_36"] || 0)) /  (parseFloat(inputValues["D3_33"] || 0) +  parseFloat(sumD4_21 || 0) )); 
  setSumE4_29(( parseFloat(sumE45 || 0)  -  parseFloat(inputValues["E3_36"] || 0)) /  (parseFloat(inputValues["E3_33"] || 0) +  parseFloat(sumE4_21 || 0) ));  
  setSumF4_29(( parseFloat(sumF45 || 0)  -  parseFloat(inputValues["F3_36"] || 0)) /  (parseFloat(inputValues["F3_33"] || 0) +  parseFloat(sumF4_21 || 0) )); 
  setSumG4_29(( parseFloat(sumG45 || 0)  -  parseFloat(inputValues["G3_36"] || 0)) /  (parseFloat(inputValues["G3_33"] || 0) +  parseFloat(sumG4_21 || 0) )); 
  setSumH4_29(( parseFloat(sumH45 || 0)  -  parseFloat(inputValues["H3_36"] || 0)) /  (parseFloat(inputValues["H3_33"] || 0) +  parseFloat(sumH4_21 || 0) )); 
  setSumI4_29(( parseFloat(sumI45 || 0)  -  parseFloat(inputValues["I3_36"] || 0)) /  (parseFloat(inputValues["I3_33"] || 0) +  parseFloat(sumI4_21 || 0) )); 
};

useEffect(() => {
  uploadSumB4_29();
}, [inputValues,tot37,sumB45,sumC45, sumD45, sumE45, sumF45, sumG45, sumH45, sumI45,sumB4_21,sumC4_21, sumD4_21, sumE4_21, sumF4_21, sumG4_21, sumH4_21, sumI4_21]);

useEffect(() => {
  const uploadSumB4_29 = async () => {
    await uploadData("B4_29", sumB4_29.toString());
    await uploadData("C4_29", sumC4_29.toString());
    await uploadData("D4_29", sumD4_29.toString());
    await uploadData("E4_29", sumE4_29.toString());
    await uploadData("F4_29", sumF4_29.toString());
    await uploadData("G4_29", sumG4_29.toString());
    await uploadData("H4_29", sumH4_29.toString());
    await uploadData("I4_29", sumI4_29.toString());
  };
  if ( sumB4_29 || sumC4_29 || sumD4_29 || sumE4_29 || sumF4_29 || sumG4_29 || sumH4_29 || sumI4_29) {
    uploadSumB4_29();
  }
}, [ sumB4_29,sumC4_29, sumD4_29, sumE4_29, sumF4_29, sumG4_29, sumH4_29, sumI4_29]);



//------------------------------------------------- TOTAL OF 30 -------------------------------------------------------
const uploadSumB4_30 = () =>
  {
  setSumB4_30((( parseFloat(inputValues["B2_40"] || 0)) -  parseFloat(inputValues["B3_39"] || 0)) /  parseFloat(sumB4_23 || 0) ); 
  setSumC4_30((( parseFloat(inputValues["C2_40"] || 0)) -  parseFloat(inputValues["C3_39"] || 0)) /  parseFloat(sumC4_23 || 0) ); 
  setSumD4_30((( parseFloat(inputValues["D2_40"] || 0)) -  parseFloat(inputValues["D3_39"] || 0)) /  parseFloat(sumD4_23 || 0) ); 
  setSumE4_30((( parseFloat(inputValues["E2_40"] || 0)) -  parseFloat(inputValues["E3_39"] || 0)) /  parseFloat(sumE4_23 || 0) );  
  setSumF4_30((( parseFloat(inputValues["F2_40"] || 0)) -  parseFloat(inputValues["F3_39"] || 0)) /  parseFloat(sumF4_23 || 0) ); 
  setSumG4_30((( parseFloat(inputValues["G2_40"] || 0)) -  parseFloat(inputValues["G3_39"] || 0)) /  parseFloat(sumG4_23 || 0) ); 
  setSumH4_30((( parseFloat(inputValues["H2_40"] || 0)) -  parseFloat(inputValues["H3_39"] || 0)) /  parseFloat(sumH4_23 || 0) ); 
  setSumI4_30((( parseFloat(inputValues["I2_40"] || 0)) -  parseFloat(inputValues["I3_39"] || 0)) /  parseFloat(sumI4_23 || 0) ); 
};

useEffect(() => {
  uploadSumB4_30();
}, [inputValues,sumB4_23,sumC4_23, sumD4_23, sumE4_23, sumF4_23, sumG4_23, sumH4_23, sumI4_23]);

useEffect(() => {
  const uploadSumB4_30 = async () => {
    await uploadData("B4_30", sumB4_30.toString());
    await uploadData("C4_30", sumC4_30.toString());
    await uploadData("D4_30", sumD4_30.toString());
    await uploadData("E4_30", sumE4_30.toString());
    await uploadData("F4_30", sumF4_30.toString());
    await uploadData("G4_30", sumG4_30.toString());
    await uploadData("H4_30", sumH4_30.toString());
    await uploadData("I4_30", sumI4_30.toString());
  };
  if ( sumB4_30 || sumC4_30 || sumD4_30 || sumE4_30 || sumF4_30 || sumG4_30 || sumH4_30 || sumI4_30) {
    uploadSumB4_30();
  }
}, [ sumB4_30,sumC4_30, sumD4_30, sumE4_30, sumF4_30, sumG4_30, sumH4_30, sumI4_30]);


















//------------------------------------------------ SAVE FOR 39 TO DATABASE ---------------------------------------------




const updateB4_39 = () => {
  setSumB4_39((parseFloat(inputValues["B1_21"] || 0)));
  setSumC4_39((parseFloat(inputValues["C1_21"] || 0)));
  setSumD4_39((parseFloat(inputValues["D1_21"] || 0)));
  setSumE4_39((parseFloat(inputValues["E1_21"] || 0)));
  setSumF4_39((parseFloat(inputValues["F1_21"] || 0)));
  setSumG4_39((parseFloat(inputValues["G1_21"] || 0)));
  setSumH4_39((parseFloat(inputValues["H1_21"] || 0)));
  setSumI4_39((parseFloat(inputValues["I1_21"] || 0)));
};

useEffect(() => {
  updateB4_39();
}, [inputValues]);

useEffect(() => {
  const uploadB4_39 = async () => {
    await uploadData("B4_39", sumB4_39.toString());
    await uploadData("C4_39", sumC4_39.toString());
    await uploadData("D4_39", sumD4_39.toString());
    await uploadData("E4_39", sumE4_39.toString());
    await uploadData("F4_39", sumF4_39.toString());
    await uploadData("G4_39", sumG4_39.toString());
    await uploadData("H4_39", sumH4_39.toString());
    await uploadData("I4_39", sumI4_39.toString());
  };
  if (sumB4_39 || sumC4_39 || sumD4_39 || sumE4_39 || sumF4_39 || sumG4_39 || sumH4_39 || sumI4_39) {
    uploadB4_39();
  }
}, [sumB4_39, sumC4_39, sumD4_39, sumE4_39, sumF4_39, sumG4_39, sumH4_39, sumI4_39]);

























 

  return (
<div style={{ marginTop: 25 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5>COMPARATIVE RATIOS</h5>
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

    
{/*---------------------------------------- OPERATING DATA -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >OPERATING DATA </h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Net Sales
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_6"
          value={sumB4_6}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_6"  
          value={sumC4_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_6"  
          value={sumD4_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_6"  
          value={sumE4_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_6" 
          value={sumF4_6}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_6"  
          value={sumG4_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_6"  
          value={sumH4_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_6"  
          value={sumI4_6}
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
      <h6>Consumption of Raw Materials
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_7"
          value={sumB4_7}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_7"  
          value={ sumC4_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_7"  
          value={ sumD4_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_7"  
          value={ sumE4_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_7" 
          value={ sumF4_7}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_7"  
          value={ sumG4_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_7"  
          value={ sumH4_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_7"  
          value={ sumI4_7}
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
            <h6>Cost Of Production
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B4_8"
                        value={sumB4_8}
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
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C4_8"
                        value={sumC4_8}
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
                name="D4_8"  
                value={sumD4_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_8"  
                value={sumE4_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_8"  
                value={sumF4_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_8" 
                value={sumG4_8}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_8"  
                value={sumH4_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_8"  
                value={sumI4_8}
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
            <h6>Cost of Sales
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_9"  
                value={sumB4_9}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_9"
                value={sumC4_9}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D4_9"  
                value={sumD4_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_9"  
                value={sumE4_9}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_9" 
                value={sumF4_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_9"  
                value={sumG4_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_9"  
                value={sumH4_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_9"  
                value={sumI4_9}
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
            <h6>Production at Sale Value
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_10"
                value={sumB4_10}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_10"  
                value={sumC4_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D4_10"  
                value={sumD4_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_10"  
                value={sumE4_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_10" 
                value={sumF4_10}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_10"  
                value={sumG4_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_10"  
                value={sumH4_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_10"  
                value={sumI4_10}
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
            <h6>Cost of Production -Depn/Sales+inc 
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B4_11"
                        value={sumB4_11}
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
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C4_11"
                        value={sumC4_11}
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
                name="D4_11"  
                value={sumD4_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_11"  
                value={sumE4_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_11"  
                value={sumF4_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_11" 
                value={sumG4_11}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_11"  
                value={sumH4_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_11"  
                value={sumI4_11}
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
            <h6>Cost of sales-Depn/Sales
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_12"  
                value={sumB4_12}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_12"
                value={sumC4_12}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D4_12"  
                value={sumD4_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_12"  
                value={sumE4_12}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_12" 
                value={sumF4_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_12"  
                value={sumG4_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_12"  
                value={sumH4_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_12"  
                value={sumI4_12}
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
            <h6>RM/Production Sales %
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_13"
                value={sumB4_13}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_13"  
                value={sumC4_13}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D4_13"  
                value={sumD4_13}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_13"  
                value={sumE4_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_13" 
                value={sumF4_13}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_13"  
                value={sumG4_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_13"  
                value={sumH4_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_13"  
                value={sumI4_13}
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
      <h6>Net Profit / Sales %
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_14"
          value={sumB4_14}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_14"  
          value={sumC4_14}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_14"  
          value={sumD4_14}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_14"  
          value={sumE4_14}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_14" 
          value={sumF4_14}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_14"  
          value={sumG4_14}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_14"  
          value={sumH4_14}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_14"  
          value={sumI4_14}
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
      <h6>Operating Cost / Cost of Sales %
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_15"
          value={sumB4_15}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_15"  
          value={sumC4_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_15"  
          value={sumD4_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_15"  
          value={sumE4_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_15" 
          value={sumF4_15}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_15"  
          value={sumG4_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_15"  
          value={sumH4_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_15"  
          value={sumI4_15}
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
      <h6>Mfg Exp / Cost of Sales %
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_16"
          value={sumB4_16}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_16"  
          value={sumC4_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_16"  
          value={sumD4_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_16"  
          value={sumE4_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_16" 
          value={sumF4_16}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_16"  
          value={sumG4_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_16"  
          value={sumH4_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_16"  
          value={sumI4_16}
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
      <h6>Selling/Admn Exp/Cost of Sales %
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_17"
          value={sumB4_17}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_17"  
          value={sumC4_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_17"  
          value={sumD4_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_17"  
          value={sumE4_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_17" 
          value={sumF4_17}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_17"  
          value={sumG4_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_17"  
          value={sumH4_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_17"  
          value={sumI4_17}
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
      <h6>Fin. Charges / Cost of Sales %
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_18"
          value={sumB4_18}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_18"  
          value={sumC4_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_18"  
          value={sumD4_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_18"  
          value={sumE4_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_18" 
          value={sumF4_18}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_18"  
          value={sumG4_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_18"  
          value={sumH4_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_18"  
          value={sumI4_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>



{/*---------------------------------------- FINANCIAL INDICATORS -------------------------------------*/}


    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >FINANCIAL INDICATORS</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Tangible Net Worth(TNW)
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B4_21"
                        value={sumB4_21}
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
                        name="C4_21"
                        value={sumC4_21}
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
                name="D4_21"  
                value={sumD4_21}
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
                name="E4_21"  
                value={sumE4_21}
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
                name="F4_21"  
                value={sumF4_21}
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
                name="G4_21" 
                value={sumG4_21}
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
                name="H4_21"  
                value={sumH4_21}
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
                name="I4_21"  
                value={sumB4_21}
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
            <h6>Increase / Decrease
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_22"  
                value={inputValues.B4_22}
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
                name="C4_22"
                value={sumC4_22}
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
                name="D4_22"  
                value={sumD4_22}
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
                name="E4_22"  
                value={sumE4_22}
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
                name="F4_22" 
                value={sumF4_22}
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
                name="G4_22"  
                value={sumG4_22}
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
                name="H4_22"  
                value={sumH4_22}
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
                name="I4_22"  
                value={sumI4_22}
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
      <h6>TNW (Adjusted)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_23"
          value={sumB4_23}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_23"  
          value={sumC4_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_23"  
          value={sumD4_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_23"  
          value={sumE4_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_23" 
          value={sumF4_23}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_23"  
          value={sumG4_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_23"  
          value={sumH4_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_23"  
          value={sumI4_23}
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
            <h6>TNW (Quasi Equity)
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B4_24"
                value={sumB4_24}
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
                name="C4_24"  
                value={sumC4_24}
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
                name="D4_24"  
                value={sumD4_24}
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
                name="E4_24"  
                value={sumE4_24}
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
                name="F4_24" 
                value={sumF4_24}
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
                name="G4_24"  
                value={sumG4_24}
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
                name="H4_24"  
                value={sumH4_24}
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
                name="I4_24"  
                value={sumI4_24}
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
      <h6>Net Working Capital(NWC)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_25"
          value={sumB4_25}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_25"  
          value={sumC4_25}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_25"  
          value={sumD4_25}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_25"  
          value={sumE4_25}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_25" 
          value={sumF4_25}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_25"  
          value={sumG4_25}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_25"  
          value={sumH4_25}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_25"  
          value={sumI4_25}
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
      <h6>Increase / Decrease
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_26"
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_26"  
          value={sumC4_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_26"  
          value={sumD4_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_26"  
          value={sumE4_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_26" 
          value={sumF4_26}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_26"  
          value={sumG4_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_26"  
          value={sumH4_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_26"  
          value={sumI4_26}
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
      <h6>Current Ratio
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_27"
          value={sumB4_27}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_27"  
          value={sumC4_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_27"  
          value={sumD4_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_27"  
          value={sumE4_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_27" 
          value={sumF4_27}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_27"  
          value={sumG4_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_27"  
          value={sumH4_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_27"  
          value={sumI4_27}
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
      <h6>TOL / T N W
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_28"
          value={sumB4_28}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_28"  
          value={sumC4_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_28"  
          value={sumD4_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_28"  
          value={sumE4_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_28" 
          value={sumF4_28}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_28"  
          value={sumG4_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_28"  
          value={sumH4_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_28"  
          value={sumI4_28}
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
      <h6>TOL / T N W(Quasi Equity)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_29"
          value={sumB4_29}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_29"  
          value={sumC4_29}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_29"  
          value={sumD4_29}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_29"  
          value={sumE4_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_29" 
          value={sumF4_29}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_29"  
          value={sumG4_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_29"  
          value={sumH4_29}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_29"  
          value={sumI4_29}
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
      <h6>TOL / T N W(Adjusted)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_30"
          value={sumB4_30}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_30"  
          value={sumC4_30}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_30"  
          value={sumD4_30}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_30"  
          value={sumE4_30}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_30" 
          value={sumF4_30}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_30"  
          value={sumG4_30}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_30"  
          value={sumH4_30}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_30"  
          value={sumI4_30}
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
      <h6 style={{color:"red"}}>Funded Debt / T N W
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_31"
          value={inputValues.B4_31}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_31"  
          value={inputValues.C4_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_31"  
          value={inputValues.D4_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_31"  
          value={inputValues.E4_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_31" 
          value={inputValues.F4_31}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_31"  
          value={inputValues.G4_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_31"  
          value={inputValues.H4_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_31"  
          value={inputValues.I4_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>
    

{/*---------------------------------------- PROFITABILITY RATIOS -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >PROFITABILITY RATIOS </h5>
          </div>
        </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>NET SALES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B4_34"
                        value={inputValues.B4_34}
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
                        name="C4_34"
                        value={inputValues.C4_34}
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
                name="D4_34"  
                value={inputValues.D4_34}
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
                name="E4_34"  
                value={inputValues.E4_34}
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
                name="F4_34"  
                value={inputValues.F4_34}
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
                name="G4_34" 
                value={inputValues.G4_34}
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
                name="H4_34"  
                value={inputValues.H4_34}
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
                name="I4_34"  
                value={inputValues.I4_34}
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
            <h6>% rise (+) / fall(-) in sales
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_35"  
                value={inputValues.B4_35}
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
                name="C4_35"
                value={inputValues.C4_35}
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
                name="D4_35"  
                value={inputValues.D4_35}
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
                name="E4_35"  
                value={inputValues.E4_35}
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
                name="F4_35" 
                value={inputValues.F4_35}
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
                name="G4_35"  
                value={inputValues.G4_35}
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
                name="H4_35"  
                value={inputValues.H4_35}
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
                name="I4_35"  
                value={inputValues.I4_35}
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
            <h6>Operating Profit
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B4_36"
                value={inputValues.B4_36}
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
                name="C4_36"  
                value={inputValues.C4_36}
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
               
                name="D4_36"  
                value={inputValues.D4_36}
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
                name="E4_36"  
                value={inputValues.E4_36}
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
                name="F4_36" 
                value={inputValues.F4_36}
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
                name="G4_36"  
                value={inputValues.G4_36}
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
                name="H4_36"  
                value={inputValues.H4_36}
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
                name="I4_36"  
                value={inputValues.I4_36}
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
            <h6>PBDIT
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B4_37"
                value={inputValues.B4_37}
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
                name="C4_37"  
                value={inputValues.C4_37}
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
               
                name="D4_37"  
                value={inputValues.D4_37}
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
                name="E4_37"  
                value={inputValues.E4_37}
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
                name="F4_37" 
                value={inputValues.F4_37}
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
                name="G4_37"  
                value={inputValues.G4_37}
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
                name="H4_37"  
                value={inputValues.H4_37}
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
                name="I4_37"  
                value={inputValues.I4_37}
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
            <h6>NET PROFIT
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B4_38"
                value={inputValues.B4_38}
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
                name="C4_38"  
                value={inputValues.C4_38}
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
               
                name="D4_38"  
                value={inputValues.D4_38}
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
                name="E4_38"  
                value={inputValues.E4_38}
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
                name="F4_38" 
                value={inputValues.F4_38}
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
                name="G4_38"  
                value={inputValues.G4_38}
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
                name="H4_38"  
                value={inputValues.H4_38}
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
                name="I4_38"  
                value={inputValues.I4_38}
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
      <h6>Depreciation
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_39"
          value={sumB4_39}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_39"  
          value={sumC4_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_39"  
          value={sumD4_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_39"  
          value={sumE4_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_39" 
          value={sumF4_39}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_39"  
          value={sumG4_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_39"  
          value={sumH4_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_39"  
          value={sumI4_39}
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
      <h6>Cash accruals
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_40"
          value={inputValues.B4_40}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_40"  
          value={inputValues.C4_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_40"  
          value={inputValues.D4_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_40"  
          value={inputValues.E4_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_40" 
          value={inputValues.F4_40}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_40"  
          value={inputValues.G4_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_40"  
          value={inputValues.H4_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_40"  
          value={inputValues.I4_40}
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
      <h6>PBDIT / Sales%
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_41"
          value={inputValues.B4_41}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_41"  
          value={inputValues.C4_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_41"  
          value={inputValues.D4_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_41"  
          value={inputValues.E4_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_41" 
          value={inputValues.F4_41}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_41"  
          value={inputValues.G4_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_41"  
          value={inputValues.H4_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_41"  
          value={inputValues.I4_41}
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
      <h6>Operating Cost / Sales(%)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_42"
          value={inputValues.B4_42}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_42"  
          value={inputValues.C4_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_42"  
          value={inputValues.D4_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_42"  
          value={inputValues.E4_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_42" 
          value={inputValues.F4_42}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_42"  
          value={inputValues.G4_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_42"  
          value={inputValues.H4_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_42"  
          value={inputValues.I4_42}
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
      <h6>Net Profile / Sales(%)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_43"
          value={inputValues.B4_43}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_43"  
          value={inputValues.C4_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_43"  
          value={inputValues.D4_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_43"  
          value={inputValues.E4_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_43" 
          value={inputValues.F4_43}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_43"  
          value={inputValues.G4_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_43"  
          value={inputValues.H4_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_43"  
          value={inputValues.I4_43}
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
      <h6>Net Profit / TNW (%)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_44"
          value={inputValues.B4_44}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_44"  
          value={inputValues.C4_44}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_44"  
          value={inputValues.D4_44}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_44"  
          value={inputValues.E4_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_44" 
          value={inputValues.F4_44}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_44"  
          value={inputValues.G4_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_44"  
          value={inputValues.H4_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_44"  
          value={inputValues.I4_44}
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
      <h6>Sales / T N W
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_45"
          value={inputValues.B4_45}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_45"  
          value={inputValues.C4_45}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_45"  
          value={inputValues.D4_45}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_45"  
          value={inputValues.E4_45}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_45" 
          value={inputValues.F4_45}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_45"  
          value={inputValues.G4_45}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_45"  
          value={inputValues.H4_45}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_45"  
          value={inputValues.I4_45}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>

{/*---------------------------------------- BANK FINANCE -------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >BANK FINANCE</h5>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>TOTAL BANK BORROWINGS
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B4_48"
                        value={inputValues.B4_48}
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
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="C4_48"
                        value={inputValues.C4_48}
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
                name="D4_48"  
                value={inputValues.D4_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_48"  
                value={inputValues.E4_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_48"  
                value={inputValues.F4_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_48" 
                value={inputValues.G4_48}
                onChange={changeData} />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_48"  
                value={inputValues.H4_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_48"  
                value={inputValues.I4_48}
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
            <h6>Inc / dec in Bank Borrowings%
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_49"  
                value={inputValues.B4_49}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_49"
                value={inputValues.C4_49}
                onChange={changeData}  />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="D4_49"  
                value={inputValues.D4_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_49"  
                value={inputValues.E4_49}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_49" 
                value={inputValues.F4_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_49"  
                value={inputValues.G4_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_49"  
                value={inputValues.H4_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_49"  
                value={inputValues.I4_49}
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
            <h6>Bank Finance / Current Assets
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B4_50"
                value={inputValues.B4_50}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C4_50"  
                value={inputValues.C4_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D4_50"  
                value={inputValues.D4_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E4_50"  
                value={inputValues.E4_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F4_50" 
                value={inputValues.F4_50}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G4_50"  
                value={inputValues.G4_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H4_50"  
                value={inputValues.H4_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I4_50"  
                value={inputValues.I4_50}
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
      <h6>Inc + Receivables / Sales (days)
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_51"
          value={inputValues.B4_51}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_51"  
          value={inputValues.C4_51}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_51"  
          value={inputValues.D4_51}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_51"  
          value={inputValues.E4_51}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_51" 
          value={inputValues.F4_51}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_51"  
          value={inputValues.G4_51}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_51"  
          value={inputValues.H4_51}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_51"  
          value={inputValues.I4_51}
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
      <h6>PBDIT / Interest
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B4_52"
          value={inputValues.B4_52}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C4_52"  
          value={inputValues.C4_52}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D4_52"  
          value={inputValues.D4_52}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E4_52"  
          value={inputValues.E4_52}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F4_52" 
          value={inputValues.F4_52}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G4_52"  
          value={inputValues.G4_52}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H4_52"  
          value={inputValues.H4_52}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I4_52"  
          value={inputValues.I4_52}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    {/* Add similar input fields for other years here */}
</div>
</div>
    
    
</div>
 

    
  );
  
}

export default Ratio;
