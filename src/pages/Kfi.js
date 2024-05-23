// Opstmt.js
import React, { useContext,useEffect, useState } from 'react';
import axios from 'axios'
import { AppContext } from '../AppContext';

function Opstmt() {
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
    sumB37, setSumB37,
    sumC37, setSumC37,
    sumD37, setSumD37,
    sumE37, setSumE37,
    sumF37, setSumF37,
    sumG37, setSumG37,
    sumH37, setSumH37,
    sumI37, setSumI37,
    sumB4_25, setSumB4_25,
    sumC4_25, setSumC4_25,
    sumD4_25, setSumD4_25,
    sumE4_25, setSumE4_25,
    sumF4_25, setSumF4_25,
    sumG4_25, setSumG4_25,
    sumH4_25, setSumH4_25,
    sumI4_25, setSumI4_25,
   } = useContext(AppContext);

  const [sumC7_6, setSumC7_6] = useState(0);
  const [sumD7_6, setSumD7_6] = useState(0);
  const [sumE7_6, setSumE7_6] = useState(0);
  const [sumF7_6, setSumF7_6] = useState(0);
  const [sumG7_6, setSumG7_6] = useState(0);
  const [sumH7_6, setSumH7_6] = useState(0);
  const [sumI7_6, setSumI7_6] = useState(0);

  const [sumB7_7, setSumB7_7] = useState(0);
  const [sumC7_7, setSumC7_7] = useState(0);
  const [sumD7_7, setSumD7_7] = useState(0);
  const [sumE7_7, setSumE7_7] = useState(0);
  const [sumF7_7, setSumF7_7] = useState(0);
  const [sumG7_7, setSumG7_7] = useState(0);
  const [sumH7_7, setSumH7_7] = useState(0);
  const [sumI7_7, setSumI7_7] = useState(0);

  const [sumB7_8, setSumB46_8] = useState(0);
  const [sumC7_8, setSumC46_8] = useState(0);
  const [sumD7_8, setSumD46_8] = useState(0);
  const [sumE7_8, setSumE46_8] = useState(0);
  const [sumF7_8, setSumF46_8] = useState(0);
  const [sumG7_8, setSumG46_8] = useState(0);
  const [sumH7_8, setSumH46_8] = useState(0);
  const [sumI7_8, setSumI46_8] = useState(0);

  const [sumB7_9, setSumB46_9] = useState(0);
  const [sumC7_9, setSumC46_9] = useState(0);
  const [sumD7_9, setSumD46_9] = useState(0);
  const [sumE7_9, setSumE46_9] = useState(0);
  const [sumF7_9, setSumF46_9] = useState(0);
  const [sumG7_9, setSumG46_9] = useState(0);
  const [sumH7_9, setSumH46_9] = useState(0);
  const [sumI7_9, setSumI46_9] = useState(0);

  const [sumB7_10, setSumB7_10] = useState(0);
  const [sumC7_10, setSumC7_10] = useState(0);
  const [sumD7_10, setSumD7_10] = useState(0);
  const [sumE7_10, setSumE7_10] = useState(0);
  const [sumF7_10, setSumF7_10] = useState(0);
  const [sumG7_10, setSumG7_10] = useState(0);
  const [sumH7_10, setSumH7_10] = useState(0);
  const [sumI7_10, setSumI7_10] = useState(0);

  const [sumB7_11, setSumB7_11] = useState(0);
  const [sumC7_11, setSumC7_11] = useState(0);
  const [sumD7_11, setSumD7_11] = useState(0);
  const [sumE7_11, setSumE7_11] = useState(0);
  const [sumF7_11, setSumF7_11] = useState(0);
  const [sumG7_11, setSumG7_11] = useState(0);
  const [sumH7_11, setSumH7_11] = useState(0);
  const [sumI7_11, setSumI7_11] = useState(0);

  const [sumB7_12, setSumB7_12] = useState(0);
  const [sumC7_12, setSumC7_12] = useState(0);
  const [sumD7_12, setSumD7_12] = useState(0);
  const [sumE7_12, setSumE7_12] = useState(0);
  const [sumF7_12, setSumF7_12] = useState(0);
  const [sumG7_12, setSumG7_12] = useState(0);
  const [sumH7_12, setSumH7_12] = useState(0);
  const [sumI7_12, setSumI7_12] = useState(0);

  const [sumB7_13, setSumB7_13] = useState(0);
  const [sumC7_13, setSumC7_13] = useState(0);
  const [sumD7_13, setSumD7_13] = useState(0);
  const [sumE7_13, setSumE7_13] = useState(0);
  const [sumF7_13, setSumF7_13] = useState(0);
  const [sumG7_13, setSumG7_13] = useState(0);
  const [sumH7_13, setSumH7_13] = useState(0);
  const [sumI7_13, setSumI7_13] = useState(0);

  const [sumB7_14, setSumB7_14] = useState(0);
  const [sumC7_14, setSumC7_14] = useState(0);
  const [sumD7_14, setSumD7_14] = useState(0);
  const [sumE7_14, setSumE7_14] = useState(0);
  const [sumF7_14, setSumF7_14] = useState(0);
  const [sumG7_14, setSumG7_14] = useState(0);
  const [sumH7_14, setSumH7_14] = useState(0);
  const [sumI7_14, setSumI7_14] = useState(0);

  const [sumB7_15, setSumB7_15] = useState(0);
  const [sumC7_15, setSumC7_15] = useState(0);
  const [sumD7_15, setSumD7_15] = useState(0);
  const [sumE7_15, setSumE7_15] = useState(0);
  const [sumF7_15, setSumF7_15] = useState(0);
  const [sumG7_15, setSumG7_15] = useState(0);
  const [sumH7_15, setSumH7_15] = useState(0);
  const [sumI7_15, setSumI7_15] = useState(0);

  const [sumB7_16, setSumB7_16] = useState(0);
  const [sumC7_16, setSumC7_16] = useState(0);
  const [sumD7_16, setSumD7_16] = useState(0);
  const [sumE7_16, setSumE7_16] = useState(0);
  const [sumF7_16, setSumF7_16] = useState(0);
  const [sumG7_16, setSumG7_16] = useState(0);
  const [sumH7_16, setSumH7_16] = useState(0);
  const [sumI7_16, setSumI7_16] = useState(0);

  const [sumB7_17, setSumB7_17] = useState(0);
  const [sumC7_17, setSumC7_17] = useState(0);
  const [sumD7_17, setSumD7_17] = useState(0);
  const [sumE7_17, setSumE7_17] = useState(0);
  const [sumF7_17, setSumF7_17] = useState(0);
  const [sumG7_17, setSumG7_17] = useState(0);
  const [sumH7_17, setSumH7_17] = useState(0);
  const [sumI7_17, setSumI7_17] = useState(0);

  const [sumB7_18, setSumB7_18] = useState(0);
  const [sumC7_18, setSumC7_18] = useState(0);
  const [sumD7_18, setSumD7_18] = useState(0);
  const [sumE7_18, setSumE7_18] = useState(0);
  const [sumF7_18, setSumF7_18] = useState(0);
  const [sumG7_18, setSumG7_18] = useState(0);
  const [sumH7_18, setSumH7_18] = useState(0);
  const [sumI7_18, setSumI7_18] = useState(0);

  const [sumB7_21, setSumB7_21] = useState(0);
  const [sumC7_21, setSumC7_21] = useState(0);
  const [sumD7_21, setSumD7_21] = useState(0);
  const [sumE7_21, setSumE7_21] = useState(0);
  const [sumF7_21, setSumF7_21] = useState(0);
  const [sumG7_21, setSumG7_21] = useState(0);
  const [sumH7_21, setSumH7_21] = useState(0);
  const [sumI7_21, setSumI7_21] = useState(0);

  const [sumC7_22, setSumC7_22] = useState(0);
  const [sumD7_22, setSumD7_22] = useState(0);
  const [sumE7_22, setSumE7_22] = useState(0);
  const [sumF7_22, setSumF7_22] = useState(0);
  const [sumG7_22, setSumG7_22] = useState(0);
  const [sumH7_22, setSumH7_22] = useState(0);
  const [sumI7_22, setSumI7_22] = useState(0);

  const [sumB7_23, setSumB7_23] = useState(0);
  const [sumC7_23, setSumC7_23] = useState(0);
  const [sumD7_23, setSumD7_23] = useState(0);
  const [sumE7_23, setSumE7_23] = useState(0);
  const [sumF7_23, setSumF7_23] = useState(0);
  const [sumG7_23, setSumG7_23] = useState(0);
  const [sumH7_23, setSumH7_23] = useState(0);
  const [sumI7_23, setSumI7_23] = useState(0); 

  const [sumB7_24, setSumB7_24] = useState(0);
  const [sumC7_24, setSumC7_24] = useState(0);
  const [sumD7_24, setSumD7_24] = useState(0);
  const [sumE7_24, setSumE7_24] = useState(0);
  const [sumF7_24, setSumF7_24] = useState(0);
  const [sumG7_24, setSumG7_24] = useState(0);
  const [sumH7_24, setSumH7_24] = useState(0);
  const [sumI7_24, setSumI7_24] = useState(0);

  const [sumB7_25, setSumB7_25] = useState(0);
  const [sumC7_25, setSumC7_25] = useState(0);
  const [sumD7_25, setSumD7_25] = useState(0);
  const [sumE7_25, setSumE7_25] = useState(0);
  const [sumF7_25, setSumF7_25] = useState(0);
  const [sumG7_25, setSumG7_25] = useState(0);
  const [sumH7_25, setSumH7_25] = useState(0);
  const [sumI7_25, setSumI7_25] = useState(0);

  const [sumC7_26, setSumC7_26] = useState(0);
  const [sumD7_26, setSumD7_26] = useState(0);
  const [sumE7_26, setSumE7_26] = useState(0);
  const [sumF7_26, setSumF7_26] = useState(0);
  const [sumG7_26, setSumG7_26] = useState(0);
  const [sumH7_26, setSumH7_26] = useState(0);
  const [sumI7_26, setSumI7_26] = useState(0);

  const [sumB7_27, setSumB7_27] = useState(0);
  const [sumC7_27, setSumC7_27] = useState(0);
  const [sumD7_27, setSumD7_27] = useState(0);
  const [sumE7_27, setSumE7_27] = useState(0);
  const [sumF7_27, setSumF7_27] = useState(0);
  const [sumG7_27, setSumG7_27] = useState(0);
  const [sumH7_27, setSumH7_27] = useState(0);
  const [sumI7_27, setSumI7_27] = useState(0);

  const [sumB7_28, setSumB7_28] = useState(0);
  const [sumC7_28, setSumC7_28] = useState(0);
  const [sumD7_28, setSumD7_28] = useState(0);
  const [sumE7_28, setSumE7_28] = useState(0);
  const [sumF7_28, setSumF7_28] = useState(0);
  const [sumG7_28, setSumG7_28] = useState(0);
  const [sumH7_28, setSumH7_28] = useState(0);
  const [sumI7_28, setSumI7_28] = useState(0);

  const [sumB7_29, setSumB7_29] = useState(0);
  const [sumC7_29, setSumC7_29] = useState(0);
  const [sumD7_29, setSumD7_29] = useState(0);
  const [sumE7_29, setSumE7_29] = useState(0);
  const [sumF7_29, setSumF7_29] = useState(0);
  const [sumG7_29, setSumG7_29] = useState(0);
  const [sumH7_29, setSumH7_29] = useState(0);
  const [sumI7_29, setSumI7_29] = useState(0);

  const [sumB7_30, setSumB7_30] = useState(0);
  const [sumC7_30, setSumC7_30] = useState(0);
  const [sumD7_30, setSumD7_30] = useState(0);
  const [sumE7_30, setSumE7_30] = useState(0);
  const [sumF7_30, setSumF7_30] = useState(0);
  const [sumG7_30, setSumG7_30] = useState(0);
  const [sumH7_30, setSumH7_30] = useState(0);
  const [sumI7_30, setSumI7_30] = useState(0);

  const [sumB7_53, setSumB7_53] = useState(0);
  const [sumC7_53, setSumC7_53] = useState(0);
  const [sumD7_53, setSumD7_53] = useState(0);
  const [sumE7_53, setSumE7_53] = useState(0);
  const [sumF7_53, setSumF7_53] = useState(0);
  const [sumG7_53, setSumG7_53] = useState(0);
  const [sumH7_53, setSumH7_53] = useState(0);
  const [sumI7_53, setSumI7_53] = useState(0);















  

  //------------------------------------------------ MAIN FUNCION2 ---------------------------------------------


  const uploadData = async (cell_id, cell_value) => {
    try {
      const user_id = localStorage.getItem("user_id");
      const res = await fetch("http://127.0.0.1:8000/api/save_ff/", {
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
          const res = await fetch("http://127.0.0.1:8000/api/save_ff/", {
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



  //------------------------------------------------- TOTAL OF 6 -------------------------------------------------------


const uploadSumB7_6 = () => {
  setSumC7_6(  parseFloat(inputValues["C2_20"] || 0) - parseFloat(inputValues["B2_20"] || 0));
  setSumD7_6(  parseFloat(inputValues["D2_20"] || 0) - parseFloat(inputValues["C2_20"] || 0));
  setSumE7_6(  parseFloat(inputValues["E2_20"] || 0) - parseFloat(inputValues["D2_20"] || 0));
  setSumF7_6(  parseFloat(inputValues["F2_20"] || 0) - parseFloat(inputValues["E2_20"] || 0)); 
  setSumG7_6(  parseFloat(inputValues["G2_20"] || 0) - parseFloat(inputValues["F2_20"] || 0));
  setSumH7_6(  parseFloat(inputValues["H2_20"] || 0) - parseFloat(inputValues["G2_20"] || 0));
  setSumI7_6(  parseFloat(inputValues["I2_20"] || 0) - parseFloat(inputValues["H2_20"] || 0));
};

useEffect(() => {
  uploadSumB7_6();
}, [inputValues]);

useEffect(() => {
  const uploadSumB7_6 = async () => {
    await uploadData("C7_6", sumC7_6.toString());
    await uploadData("D7_6", sumD7_6.toString());
    await uploadData("E7_6", sumE7_6.toString());
    await uploadData("F7_6", sumF7_6.toString());
    await uploadData("G7_6", sumG7_6.toString());
    await uploadData("H7_6", sumH7_6.toString());
    await uploadData("I7_6", sumI7_6.toString());
  };
  if ( sumC7_6 || sumD7_6 || sumE7_6 || sumF7_6 || sumG7_6 || sumH7_6 || sumI7_6) {
    uploadSumB7_6();
  }
}, [ sumC7_6, sumD7_6, sumE7_6, sumF7_6, sumG7_6, sumH7_6, sumI7_6]);



  //------------------------------------------------- TOTAL OF 7 -------------------------------------------------------


  const uploadSumB7_7 = () => {
    setSumC7_7( ( parseFloat(inputValues["C2_47"] || 0) + parseFloat(inputValues["C2_48"] || 0 )) - ( parseFloat(inputValues["B2_47"] || 0) +  parseFloat(inputValues["B2_48"] || 0)));
    setSumD7_7( ( parseFloat(inputValues["D2_47"] || 0) + parseFloat(inputValues["D2_48"] || 0 )) - ( parseFloat(inputValues["C2_47"] || 0) +  parseFloat(inputValues["C2_48"] || 0)));
    setSumE7_7( ( parseFloat(inputValues["E2_47"] || 0) + parseFloat(inputValues["E2_48"] || 0 )) - ( parseFloat(inputValues["D2_47"] || 0) +  parseFloat(inputValues["D2_48"] || 0)));
    setSumF7_7( ( parseFloat(inputValues["F2_47"] || 0) + parseFloat(inputValues["F2_48"] || 0 )) - ( parseFloat(inputValues["E2_47"] || 0) +  parseFloat(inputValues["E2_48"] || 0))); 
    setSumG7_7( ( parseFloat(inputValues["G2_47"] || 0) + parseFloat(inputValues["G2_48"] || 0 )) - ( parseFloat(inputValues["F2_47"] || 0) +  parseFloat(inputValues["F2_48"] || 0)));
    setSumH7_7( ( parseFloat(inputValues["H2_47"] || 0) + parseFloat(inputValues["H2_48"] || 0 )) - ( parseFloat(inputValues["G2_47"] || 0) +  parseFloat(inputValues["G2_48"] || 0)));
    setSumI7_7( ( parseFloat(inputValues["I2_47"] || 0) + parseFloat(inputValues["I2_48"] || 0 )) - ( parseFloat(inputValues["H2_47"] || 0) +  parseFloat(inputValues["H2_48"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB7_7();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB7_7 = async () => {
      await uploadData("C7_7", sumC7_7.toString());
      await uploadData("D7_7", sumD7_7.toString());
      await uploadData("E7_7", sumE7_7.toString());
      await uploadData("F7_7", sumF7_7.toString());
      await uploadData("G7_7", sumG7_7.toString());
      await uploadData("H7_7", sumH7_7.toString());
      await uploadData("I7_7", sumI7_7.toString());
    };
    if ( sumC7_7 || sumD7_7 || sumE7_7 || sumF7_7 || sumG7_7 || sumH7_7 || sumI7_7) {
      uploadSumB7_7();
    }
  }, [ sumC7_7, sumD7_7, sumE7_7, sumF7_7, sumG7_7, sumH7_7, sumI7_7]);
  
  
//------------------------------------------------- TOTAL OF 21 -------------------------------------------------------


const uploadSumB7_21 = () => {
  setSumC7_21( parseFloat(inputValues["C1_40"] || 0) );
  setSumD7_21( parseFloat(inputValues["D1_40"] || 0) );
  setSumE7_21( parseFloat(inputValues["E1_40"] || 0) );
  setSumF7_21( parseFloat(inputValues["F1_40"] || 0) ); 
  setSumG7_21( parseFloat(inputValues["G1_40"] || 0) );
  setSumH7_21( parseFloat(inputValues["H1_40"] || 0) );
  setSumI7_21( parseFloat(inputValues["I1_40"] || 0) );
};

useEffect(() => {
  uploadSumB7_21();
}, [inputValues]);

useEffect(() => {
  const uploadSumB7_21 = async () => {
    await uploadData("C7_21", sumC7_21.toString());
    await uploadData("D7_21", sumD7_21.toString());
    await uploadData("E7_21", sumE7_21.toString());
    await uploadData("F7_21", sumF7_21.toString());
    await uploadData("G7_21", sumG7_21.toString());
    await uploadData("H7_21", sumH7_21.toString());
    await uploadData("I7_21", sumI7_21.toString());
  };
  if ( sumC7_21 || sumD7_21 || sumE7_21 || sumF7_21 || sumG7_21 || sumH7_21 || sumI7_21) {
    uploadSumB7_21();
  }
}, [ sumC7_21, sumD7_21, sumE7_21, sumF7_21, sumG7_21, sumH7_21, sumI7_21]);



 //------------------------------------------------- TOTAL OF 24 -------------------------------------------------------


 const uploadSumB7_24 = () => {
  setSumC7_24(  parseFloat(sumC2 || 0) - parseFloat(sumB2 || 0));
  setSumD7_24(  parseFloat(sumD2 || 0) - parseFloat(sumC2 || 0));
  setSumE7_24(  parseFloat(sumE2 || 0) - parseFloat(sumD2 || 0));
  setSumF7_24(  parseFloat(sumF2 || 0) - parseFloat(sumE2 || 0)); 
  setSumG7_24(  parseFloat(sumG2 || 0) - parseFloat(sumF2 || 0));
  setSumH7_24(  parseFloat(sumH2 || 0) - parseFloat(sumG2 || 0));
  setSumI7_24(  parseFloat(sumI2 || 0) - parseFloat(sumH2 || 0));
};

useEffect(() => {
  uploadSumB7_24();
}, [inputValues]);

useEffect(() => {
  const uploadSumB7_24 = async () => {
    await uploadData("C7_24", sumC7_24.toString());
    await uploadData("D7_24", sumD7_24.toString());
    await uploadData("E7_24", sumE7_24.toString());
    await uploadData("F7_24", sumF7_24.toString());
    await uploadData("G7_24", sumG7_24.toString());
    await uploadData("H7_24", sumH7_24.toString());
    await uploadData("I7_24", sumI7_24.toString());
  };
  if ( sumC7_24 || sumD7_24 || sumE7_24 || sumF7_24 || sumG7_24 || sumH7_24 || sumI7_24) {
    uploadSumB7_24();
  }
}, [ sumC7_24, sumD7_24, sumE7_24, sumF7_24, sumG7_24, sumH7_24, sumI7_24]);






  //------------------------------------------------- TOTAL OF 25 -------------------------------------------------------


  const uploadSumB7_25 = () => {
    setSumC7_25( ( parseFloat(inputValues["C2_36"] || 0) + parseFloat(sumC37 || 0 )) - ( parseFloat(inputValues["B2_36"] || 0) +  parseFloat(sumB37 || 0)));
    setSumD7_25( ( parseFloat(inputValues["D2_36"] || 0) + parseFloat(sumD37 || 0 )) - ( parseFloat(inputValues["C2_36"] || 0) +  parseFloat(sumC37 || 0)));
    setSumE7_25( ( parseFloat(inputValues["E2_36"] || 0) + parseFloat(sumE37 || 0 )) - ( parseFloat(inputValues["D2_36"] || 0) +  parseFloat(sumD37 || 0)));
    setSumF7_25( ( parseFloat(inputValues["F2_36"] || 0) + parseFloat(sumF37 || 0 )) - ( parseFloat(inputValues["E2_36"] || 0) +  parseFloat(sumE37 || 0))); 
    setSumG7_25( ( parseFloat(inputValues["G2_36"] || 0) + parseFloat(sumG37 || 0 )) - ( parseFloat(inputValues["F2_36"] || 0) +  parseFloat(sumF37 || 0)));
    setSumH7_25( ( parseFloat(inputValues["H2_36"] || 0) + parseFloat(sumH37 || 0 )) - ( parseFloat(inputValues["G2_36"] || 0) +  parseFloat(sumG37 || 0)));
    setSumI7_25( ( parseFloat(inputValues["I2_36"] || 0) + parseFloat(sumI37 || 0 )) - ( parseFloat(inputValues["H2_36"] || 0) +  parseFloat(sumH37 || 0)));
  };
  
  useEffect(() => {
    uploadSumB7_25();
  }, [inputValues,sumB37, sumC37, sumD37, sumE37, sumF37, sumG37, sumH37, sumI37]);
  
  useEffect(() => {
    const uploadSumB7_25 = async () => {
      await uploadData("C7_25", sumC7_25.toString());
      await uploadData("D7_25", sumD7_25.toString());
      await uploadData("E7_25", sumE7_25.toString());
      await uploadData("F7_25", sumF7_25.toString());
      await uploadData("G7_25", sumG7_25.toString());
      await uploadData("H7_25", sumH7_25.toString());
      await uploadData("I7_25", sumI7_25.toString());
    };
    if ( sumC7_25 || sumD7_25 || sumE7_25 || sumF7_25 || sumG7_25 || sumH7_25 || sumI7_25) {
      uploadSumB7_25();
    }
  }, [ sumC7_25, sumD7_25, sumE7_25, sumF7_25, sumG7_25, sumH7_25, sumI7_25]);
  

  //------------------------------------------------- TOTAL OF 28 -------------------------------------------------------


  const uploadSumB7_28 = () => {
    setSumC7_28( ( parseFloat(inputValues["C2_34"] || 0) + parseFloat(inputValues["C2_35"] || 0 )) - ( parseFloat(inputValues["B2_34"] || 0) +  parseFloat(inputValues["B2_35"] || 0)));
    setSumD7_28( ( parseFloat(inputValues["D2_34"] || 0) + parseFloat(inputValues["D2_35"] || 0 )) - ( parseFloat(inputValues["C2_34"] || 0) +  parseFloat(inputValues["C2_35"] || 0)));
    setSumE7_28( ( parseFloat(inputValues["E2_34"] || 0) + parseFloat(inputValues["E2_35"] || 0 )) - ( parseFloat(inputValues["D2_34"] || 0) +  parseFloat(inputValues["D2_35"] || 0)));
    setSumF7_28( ( parseFloat(inputValues["F2_34"] || 0) + parseFloat(inputValues["F2_35"] || 0 )) - ( parseFloat(inputValues["E2_34"] || 0) +  parseFloat(inputValues["E2_35"] || 0))); 
    setSumG7_28( ( parseFloat(inputValues["G2_34"] || 0) + parseFloat(inputValues["G2_35"] || 0 )) - ( parseFloat(inputValues["F2_34"] || 0) +  parseFloat(inputValues["F2_35"] || 0)));
    setSumH7_28( ( parseFloat(inputValues["H2_34"] || 0) + parseFloat(inputValues["H2_35"] || 0 )) - ( parseFloat(inputValues["G2_34"] || 0) +  parseFloat(inputValues["G2_35"] || 0)));
    setSumI7_28( ( parseFloat(inputValues["I2_34"] || 0) + parseFloat(inputValues["I2_35"] || 0 )) - ( parseFloat(inputValues["H2_34"] || 0) +  parseFloat(inputValues["H2_35"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB7_28();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB7_28 = async () => {
      await uploadData("C7_28", sumC7_28.toString());
      await uploadData("D7_28", sumD7_28.toString());
      await uploadData("E7_28", sumE7_28.toString());
      await uploadData("F7_28", sumF7_28.toString());
      await uploadData("G7_28", sumG7_28.toString());
      await uploadData("H7_28", sumH7_28.toString());
      await uploadData("I7_28", sumI7_28.toString());
    };
    if ( sumC7_28 || sumD7_28 || sumE7_28 || sumF7_28 || sumG7_28 || sumH7_28 || sumI7_28) {
      uploadSumB7_28();
    }
  }, [ sumC7_28, sumD7_28, sumE7_28, sumF7_28, sumG7_28, sumH7_28, sumI7_28]);
  



//------------------------------------------------- TOTAL OF 53 -------------------------------------------------------


const uploadSumB7_53 = () => {
  setSumC7_53( parseFloat(sumB4_25 || 0) );
  setSumD7_53( parseFloat(sumC4_25 || 0) );
  setSumE7_53( parseFloat(sumD4_25 || 0) );
  setSumF7_53( parseFloat(sumE4_25 || 0) ); 
  setSumG7_53( parseFloat(sumF4_25 || 0) );
  setSumH7_53( parseFloat(sumG4_25 || 0) );
  setSumI7_53( parseFloat(sumH4_25 || 0) );
};

useEffect(() => {
  uploadSumB7_53();
}, [inputValues,sumC4_25, sumD4_25, sumE4_25, sumF4_25, sumG4_25, sumH4_25, sumI4_25]);

useEffect(() => {
  const uploadSumB7_53 = async () => {
    await uploadData("C7_53", sumC7_53.toString());
    await uploadData("D7_53", sumD7_53.toString());
    await uploadData("E7_53", sumE7_53.toString());
    await uploadData("F7_53", sumF7_53.toString());
    await uploadData("G7_53", sumG7_53.toString());
    await uploadData("H7_53", sumH7_53.toString());
    await uploadData("I7_53", sumI7_53.toString());
  };
  if ( sumC7_53 || sumD7_53 || sumE7_53 || sumF7_53 || sumG7_53 || sumH7_53 || sumI7_53) {
    uploadSumB7_53();
  }
}, [ sumC7_53, sumD7_53, sumE7_53, sumF7_53, sumG7_53, sumH7_53, sumI7_53]);


//------------------------------------------------- TOTAL OF 54 -------------------------------------------------------


















  return (
<div style={{ marginTop: 25 }}>
      <div className="container-fluid border d-flex justify-content-center div_1">
        <h2 className="navbar-brand">Astral India Ltd</h2>
      </div>

      <div className="container-fluid border mt-3">
        <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>COMPARATIVE RATIOS</h6>
          </div>
          <div className="col-lg-8 border-start d-flex justify-content-center">
            <h6>For the year ended/ending (Rs. in Lacs)</h6>
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

    
{/*---------------------------------------- SOURCES ------------------------------------------------------*/}

<div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 ></h5>
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
          name="B7_5"
          value={inputValues.B7_5}
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
          name="C7_5"  
          value={inputValues.C7_5}
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
          name="D7_5"  
          value={inputValues.D7_5}
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
          name="E7_5"  
          value={inputValues.E7_5}
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
          name="F7_5" 
          value={inputValues.F7_5}
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
          name="G7_5"  
          value={inputValues.G7_5}
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
          name="H7_5"  
          value={inputValues.H7_5}
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
          name="I7_5"  
          value={inputValues.I7_5}
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
      <h6>% rise(+)/fall(-) in sales
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_6"
          value={inputValues.B7_6}
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
          name="C7_6"  
          value={sumC7_6}
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
          name="D7_6"  
          value={sumD7_6}
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
          name="E7_6"  
          value={sumE7_6}
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
          name="F7_6" 
          value={sumF7_6}
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
          name="G7_6"  
          value={sumG7_6}
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
          name="H7_6"  
          value={sumH7_6}
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
          name="I7_6"  
          value={sumI7_6}
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
      <h6>Operating Profit
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_7"
          value={inputValues.B7_7}
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
          name="C7_7"  
          value={sumC7_7}
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
          name="D7_7"  
          value={sumD7_7}
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
          name="E7_7"  
          value={sumE7_7}
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
          name="F7_7" 
          value={sumF7_7}
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
          name="G7_7"  
          value={sumG7_7}
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
          name="H7_7"  
          value={sumH7_7}
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
          name="I7_7"  
          value={sumI7_7}
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
            <h6 style={{color:"blue"}}>Net Profit After Tax
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_8"
                        value={inputValues.B7_8}
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
                        name="C7_8"
                        value={inputValues.C7_8}
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
                name="D7_8"  
                value={inputValues.D7_8}
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
                name="E7_8"  
                value={inputValues.E7_8}
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
                name="F7_8"  
                value={inputValues.F7_8}
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
                name="G7_8" 
                value={inputValues.G7_8}
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
                name="H7_8"  
                value={inputValues.H7_8}
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
                name="I7_8"  
                value={inputValues.I7_8}
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
            <h6 style={{color:"blue"}}>Cash accruals
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_9"  
                value={inputValues.B7_9}
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
                name="C7_9"
                value={inputValues.C7_9}
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
                name="D7_9"  
                value={inputValues.D7_9}
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
                name="E7_9"  
                value={inputValues.E7_9}
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
                name="F7_9" 
                value={inputValues.F7_9}
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
                name="G7_9"  
                value={inputValues.G7_9}
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
                name="H7_9"  
                value={inputValues.H7_9}
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
                name="I7_9"  
                value={inputValues.I7_9}
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
            <h6 style={{color:"blue"}}>Net Working Capital
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_10"
                value={inputValues.B7_10}
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
                name="C7_10"  
                value={inputValues.C7_10}
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
                name="D7_10"  
                value={inputValues.D7_10}
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
                name="E7_10"  
                value={inputValues.E7_10}
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
                name="F7_10" 
                value={inputValues.F7_10}
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
                name="G7_10"  
                value={inputValues.G7_10}
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
                name="H7_10"  
                value={inputValues.H7_10}
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
                name="I7_10"  
                value={inputValues.I7_10}
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
            <h6 style={{color:"blue"}}>Current Ratio
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_11"
                        value={inputValues.B7_11}
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
                        name="C7_11"
                        value={inputValues.C7_11}
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
                name="D7_11"  
                value={inputValues.D7_11}
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
                name="E7_11"  
                value={inputValues.E7_11}
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
                name="F7_11"  
                value={inputValues.F7_11}
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
                name="G7_11" 
                value={inputValues.G7_11}
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
                name="H7_11"  
                value={inputValues.H7_11}
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
                name="I7_11"  
                value={inputValues.I7_11}
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
            <h6 style={{color:"blue"}}>TNW
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_12"  
                value={inputValues.B7_12}
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
                name="C7_12"
                value={inputValues.C7_12}
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
                name="D7_12"  
                value={inputValues.D7_12}
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
                name="E7_12"  
                value={inputValues.E7_12}
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
                name="F7_12" 
                value={inputValues.F7_12}
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
                name="G7_12"  
                value={inputValues.G7_12}
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
                name="H7_12"  
                value={inputValues.H7_12}
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
                name="I7_12"  
                value={inputValues.I7_12}
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
            <h6 style={{color:"blue"}}>TNW ( Adjusted )
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_13"  
                value={inputValues.B7_13}
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
                name="C7_13"
                value={inputValues.C7_13}
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
                name="D7_13"  
                value={inputValues.D7_13}
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
                name="E7_13"  
                value={inputValues.E7_13}
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
                name="F7_13" 
                value={inputValues.F7_13}
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
                name="G7_13"  
                value={inputValues.G7_13}
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
                name="H7_13"  
                value={inputValues.H7_13}
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
                name="I7_13"  
                value={inputValues.I7_13}
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
            <h6 style={{color:"blue"}}>TOL / TNW ( Quasi Equity )
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_14"  
                value={inputValues.B7_14}
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
                name="C7_14"
                value={inputValues.C7_14}
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
                name="D7_14"  
                value={inputValues.D7_14}
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
                name="E7_14"  
                value={inputValues.E7_14}
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
                name="F7_14" 
                value={inputValues.F7_14}
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
                name="G7_14"  
                value={inputValues.G7_14}
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
                name="H7_14"  
                value={inputValues.H7_14}
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
                name="I7_14"  
                value={inputValues.I7_14}
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
      <h6 style={{color:"blue"}}>TOL / TNW ( Adjusted )
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_15"
          value={inputValues.B7_15}
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
          name="C7_15"  
          value={inputValues.C7_15}
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
          name="D7_15"  
          value={inputValues.D7_15}
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
          name="E7_15"  
          value={inputValues.E7_15}
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
          name="F7_15" 
          value={inputValues.F7_15}
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
          name="G7_15"  
          value={inputValues.G7_15}
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
          name="H7_15"  
          value={inputValues.H7_15}
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
          name="I7_15"  
          value={inputValues.I7_15}
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
      <h6 style={{color:"blue"}}>TOL / TNW ( Quasi Equity )
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_16"
          value={inputValues.B7_16}
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
          name="C7_16"  
          value={inputValues.C7_16}
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
          name="D7_16"  
          value={inputValues.D7_16}
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
          name="E7_16"  
          value={inputValues.E7_16}
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
          name="F7_16" 
          value={inputValues.F7_16}
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
          name="G7_16"  
          value={inputValues.G7_16}
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
          name="H7_16"  
          value={inputValues.H7_16}
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
          name="I7_16"  
          value={inputValues.I7_16}
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
      <h6 style={{color:"blue"}}>Funded Debt / TNW
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_17"
          value={inputValues.B7_17}
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
          name="C7_17"  
          value={inputValues.C7_17}
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
          name="D7_17"  
          value={inputValues.D7_17}
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
          name="E7_17"  
          value={inputValues.E7_17}
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
          name="F7_17" 
          value={inputValues.F7_17}
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
          name="G7_17"  
          value={inputValues.G7_17}
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
          name="H7_17"  
          value={inputValues.H7_17}
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
          name="I7_17"  
          value={inputValues.I7_17}
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
      <h6>Gross Fixed Asset/Term Loan
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_18"
          value={inputValues.B7_18}
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
          name="C7_18"  
          value={inputValues.C7_18}
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
          name="D7_18"  
          value={inputValues.D7_18}
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
          name="E7_18"  
          value={inputValues.E7_18}
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
          name="F7_18" 
          value={inputValues.F7_18}
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
          name="G7_18"  
          value={inputValues.G7_18}
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
          name="H7_18"  
          value={inputValues.H7_18}
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
          name="I7_18"  
          value={inputValues.I7_18}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >ABRIDGED FINANCIAL LIABILITIES</h5>
          </div>
        </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Capital & Reserves
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_22"  
                value={inputValues.B7_22}
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
                name="C7_22"
                value={inputValues.C7_22}
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
                name="D7_22"  
                value={inputValues.D7_22}
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
                name="E7_22"  
                value={inputValues.E7_22}
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
                name="F7_22" 
                value={inputValues.F7_22}
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
                name="G7_22"  
                value={inputValues.G7_22}
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
                name="H7_22"  
                value={inputValues.H7_22}
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
                name="I7_22"  
                value={inputValues.I7_22}
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
      <h6>Long Term Liabilities
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_23"
          value={inputValues.B7_23}
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
          name="C7_23"  
          value={inputValues.C7_23}
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
          name="D7_23"  
          value={inputValues.D7_23}
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
          name="E7_23"  
          value={inputValues.E7_23}
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
          name="F7_23" 
          value={inputValues.F7_23}
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
          name="G7_23"  
          value={inputValues.G7_23}
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
          name="H7_23"  
          value={inputValues.H7_23}
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
          name="I7_23"  
          value={inputValues.I7_23}
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
            <h6>Current Liabilities
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B7_24"
                value={inputValues.B7_24}
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
                name="C7_24"  
                value={sumC7_24}
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
                name="D7_24"  
                value={sumD7_24}
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
                name="E7_24"  
                value={sumE7_24}
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
                name="F7_24" 
                value={sumF7_24}
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
                name="G7_24"  
                value={sumG7_24}
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
                name="H7_24"  
                value={sumH7_24}
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
                name="I7_24"  
                value={sumI7_24}
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
            <h6>TOTAL LIABILITIES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B7_25"
                value={inputValues.B7_25}
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
                name="C7_25"  
                value={sumC7_25}
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
                name="D7_25"  
                value={sumD7_25}
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
                name="E7_25"  
                value={sumE7_25}
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
                name="F7_25" 
                value={sumF7_25}
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
                name="G7_25"  
                value={sumG7_25}
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
                name="H7_25"  
                value={sumH7_25}
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
                name="I7_25"  
                value={sumI7_25}
                onChange={changeData} 
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >ASSETS</h5>
          </div>
        </div>
    </div>

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Fixed Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_27"
          value={inputValues.B7_27}
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
          name="C7_27"  
          value={inputValues.C7_27}
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
          name="D7_27"  
          value={inputValues.D7_27}
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
          name="E7_27"  
          value={inputValues.E7_27}
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
          name="F7_27" 
          value={inputValues.F7_27}
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
          name="G7_27"  
          value={inputValues.G7_27}
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
          name="H7_27"  
          value={inputValues.H7_27}
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
          name="I7_27"  
          value={inputValues.I7_27}
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
      <h6>Non Current Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_28"
          value={inputValues.B7_28}
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
          name="C7_28"  
          value={sumC7_28}
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
          name="D7_28"  
          value={sumD7_28}
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
          name="E7_28"  
          value={sumE7_28}
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
          name="F7_28" 
          value={sumF7_28}
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
          name="G7_28"  
          value={sumG7_28}
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
          name="H7_28"  
          value={sumH7_28}
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
          name="I7_28"  
          value={sumI7_28}
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
      <h6>Current Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_29"
          value={inputValues.B7_29}
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
          name="C7_29"  
          value={sumC7_29}
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
          name="D7_29"  
          value={sumD7_29}
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
          name="E7_29"  
          value={sumE7_29}
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
          name="F7_29" 
          value={sumF7_29}
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
          name="G7_29"  
          value={sumG7_29}
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
          name="H7_29"  
          value={sumH7_29}
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
          name="I7_29"  
          value={sumI7_29}
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
      <h6>Intangible Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_30"
          value={inputValues.B7_30}
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
          name="C7_30"  
          value={sumC7_30}
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
          name="D7_30"  
          value={sumD7_30}
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
          name="E7_30"  
          value={sumE7_30}
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
          name="F7_30" 
          value={sumF7_30}
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
          name="G7_30"  
          value={sumG7_30}
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
          name="H7_30"  
          value={sumH7_30}
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
          name="I7_30"  
          value={sumI7_30}
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
      <h6>TOTAL ASSETS
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_31"
          value={inputValues.B7_31}
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
          name="C7_31"  
          value={inputValues.C7_31}
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
          name="D7_31"  
          value={inputValues.D7_31}
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
          name="E7_31"  
          value={inputValues.E7_31}
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
          name="F7_31" 
          value={inputValues.F7_31}
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
          name="G7_31"  
          value={inputValues.G7_31}
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
          name="H7_31"  
          value={inputValues.H7_31}
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
          name="I7_31"  
          value={inputValues.I7_31}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >II MOVEMENTS OF T N W</h5>
          </div>
        </div>
    </div>

    <div className="container-fluid border mt-3">
     <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>TNW Opening Balance
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_34"
                        value={inputValues.B7_34}
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
                        name="C7_34"
                        value={inputValues.C7_34}
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
                name="D7_34"  
                value={inputValues.D7_34}
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
                name="E7_34"  
                value={inputValues.E7_34}
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
                name="F7_34"  
                value={inputValues.F7_34}
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
                name="G7_34" 
                value={inputValues.G7_34}
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
                name="H7_34"  
                value={inputValues.H7_34}
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
                name="I7_34"  
                value={inputValues.I7_34}
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
            <h6>ADD Profit / Loss After Tax
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_35"
                        value={inputValues.B7_35}
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
                        name="C7_35"
                        value={inputValues.C7_35}
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
                name="D7_35"  
                value={inputValues.D7_35}
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
                name="E7_35"  
                value={inputValues.E7_35}
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
                name="F7_35"  
                value={inputValues.F7_35}
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
                name="G7_35" 
                value={inputValues.G7_35}
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
                name="H7_35"  
                value={inputValues.H7_35}
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
                name="I7_35"  
                value={inputValues.I7_35}
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
            <h6>Increase in Capital
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_36"
                        value={inputValues.B7_36}
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
                        name="C7_36"
                        value={inputValues.C7_36}
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
                name="D7_36"  
                value={inputValues.D7_36}
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
                name="E7_36"  
                value={inputValues.E7_36}
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
                name="F7_36"  
                value={inputValues.F7_36}
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
                name="G7_36" 
                value={inputValues.G7_36}
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
                name="H7_36"  
                value={inputValues.H7_36}
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
                name="I7_36"  
                value={inputValues.I7_36}
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
            <h6>Less Drawings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B7_37"
                value={inputValues.B7_37}
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
                name="C7_37"  
                value={inputValues.C7_37}
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
               
                name="D7_37"  
                value={inputValues.D7_37}
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
                name="E7_37"  
                value={inputValues.E7_37}
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
                name="F7_37" 
                value={inputValues.F7_37}
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
                name="G7_37"  
                value={inputValues.G7_37}
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
                name="H7_37"  
                value={inputValues.H7_37}
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
                name="I7_37"  
                value={inputValues.I7_37}
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
            <h6>Closing Balance
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B7_38"
                value={inputValues.B7_38}
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
                name="C7_38"  
                value={inputValues.C7_38}
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
               
                name="D7_38"  
                value={inputValues.D7_38}
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
                name="E7_38"  
                value={inputValues.E7_38}
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
                name="F7_38" 
                value={inputValues.F7_38}
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
                name="G7_38"  
                value={inputValues.G7_38}
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
                name="H7_38"  
                value={inputValues.H7_38}
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
                name="I7_38"  
                value={inputValues.I7_38}
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
      <h6>Increase in Other Current Liabilities
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_39"
          value={inputValues.B7_39}
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
          name="C7_39"  
          value={inputValues.C7_39}
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
          name="D7_39"  
          value={inputValues.D7_39}
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
          name="E7_39"  
          value={inputValues.E7_39}
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
          name="F7_39" 
          value={inputValues.F7_39}
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
          name="G7_39"  
          value={inputValues.G7_39}
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
          name="H7_39"  
          value={inputValues.H7_39}
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
          name="I7_39"  
          value={inputValues.I7_39}
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
      <h6>Decrease in Inventory
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_40"
          value={inputValues.B7_40}
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
          name="C7_40"  
          value={inputValues.C7_40}
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
          name="D7_40"  
          value={inputValues.D7_40}
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
          name="E7_40"  
          value={inputValues.E7_40}
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
          name="F7_40" 
          value={inputValues.F7_40}
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
          name="G7_40"  
          value={inputValues.G7_40}
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
          name="H7_40"  
          value={inputValues.H7_40}
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
          name="I7_40"  
          value={inputValues.I7_40}
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
      <h6>Decrease in Receivables
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_41"
          value={inputValues.B7_41}
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
          name="C7_41"  
          value={inputValues.C7_41}
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
          name="D7_41"  
          value={inputValues.D7_41}
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
          name="E7_41"  
          value={inputValues.E7_41}
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
          name="F7_41" 
          value={inputValues.F7_41}
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
          name="G7_41"  
          value={inputValues.G7_41}
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
          name="H7_41"  
          value={inputValues.H7_41}
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
          name="I7_41"  
          value={inputValues.I7_41}
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
      <h6>Decrease in Other Currebt Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_42"
          value={inputValues.B7_42}
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
          name="C7_42"  
          value={inputValues.C7_42}
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
          name="D7_42"  
          value={inputValues.D7_42}
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
          name="E7_42"  
          value={inputValues.E7_42}
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
          name="F7_42" 
          value={inputValues.F7_42}
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
          name="G7_42"  
          value={inputValues.G7_42}
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
          name="H7_42"  
          value={inputValues.H7_42}
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
          name="I7_42"  
          value={inputValues.I7_42}
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
      <h5>TOTAL SHORT TERM SOURCES
       </h5>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_43"
          value={inputValues.B7_43}
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
          name="C7_43"  
          value={inputValues.C7_43}
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
          name="D7_43"  
          value={inputValues.D7_43}
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
          name="E7_43"  
          value={inputValues.E7_43}
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
          name="F7_43" 
          value={inputValues.F7_43}
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
          name="G7_43"  
          value={inputValues.G7_43}
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
          name="H7_43"  
          value={inputValues.H7_43}
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
          name="I7_43"  
          value={inputValues.I7_43}
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
      <h6>Fixed Asset Coverage Ratio
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B7_44"
          value={inputValues.B7_44}
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
          name="C7_44"  
          value={inputValues.C7_44}
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
          name="D7_44"  
          value={inputValues.D7_44}
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
          name="E7_44"  
          value={inputValues.E7_44}
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
          name="F7_44" 
          value={inputValues.F7_44}
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
          name="G7_44"  
          value={inputValues.G7_44}
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
          name="H7_44"  
          value={inputValues.H7_44}
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
          name="I7_44"  
          value={inputValues.I7_44}
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
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 >USES</h6>
          </div>
        </div>
    </div>

    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Decrease in Bank Borrowings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_45"  
                value={inputValues.B7_45}
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
                name="C7_45"
                value={inputValues.C7_45}
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
                name="D7_45"  
                value={inputValues.D7_45}
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
                name="E7_45"  
                value={inputValues.E7_45}
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
                name="F7_45" 
                value={inputValues.F7_45}
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
                name="G7_45"  
                value={inputValues.G7_45}
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
                name="H7_45"  
                value={inputValues.H7_45}
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
                name="I7_45"  
                value={inputValues.I7_45}
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
            <h6>Decrease in Sundry Creditors
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_46"  
                value={inputValues.B7_46}
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
                name="C7_46"
                value={inputValues.C7_46}
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
                name="D7_46"  
                value={inputValues.D7_46}
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
                name="E7_46"  
                value={inputValues.E7_46}
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
                name="F7_46" 
                value={inputValues.F7_46}
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
                name="G7_46"  
                value={inputValues.G7_46}
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
                name="H7_46"  
                value={inputValues.H7_46}
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
                name="I7_46"  
                value={inputValues.I7_46}
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
            <h6>Decrease in O C L
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B7_47"
                value={inputValues.B7_47}
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
                name="C7_47"  
                value={inputValues.C7_47}
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
               
                name="D7_47"  
                value={inputValues.D7_47}
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
                name="E7_47"  
                value={inputValues.E7_47}
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
                name="F7_47" 
                value={inputValues.F7_47}
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
                name="G7_47"  
                value={inputValues.G7_47}
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
                name="H7_47"  
                value={inputValues.H7_47}
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
                name="I7_47"  
                value={inputValues.I7_47}
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
            <h6>Increase in Inventory
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B7_48"
                        value={inputValues.B7_48}
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
                        name="C7_48"
                        value={inputValues.C7_48}
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
                name="D7_48"  
                value={inputValues.D7_48}
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
                name="E7_48"  
                value={inputValues.E7_48}
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
                name="F7_48"  
                value={inputValues.F7_48}
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
                name="G7_48" 
                value={inputValues.G7_48}
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
                name="H7_48"  
                value={inputValues.H7_48}
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
                name="I7_48"  
                value={inputValues.I7_48}
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
            <h6>Increase in Receivables
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_49"  
                value={inputValues.B7_49}
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
                name="C7_49"
                value={inputValues.C7_49}
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
                name="D7_49"  
                value={inputValues.D7_49}
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
                name="E7_49"  
                value={inputValues.E7_49}
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
                name="F7_49" 
                value={inputValues.F7_49}
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
                name="G7_49"  
                value={inputValues.G7_49}
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
                name="H7_49"  
                value={inputValues.H7_49}
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
                name="I7_49"  
                value={inputValues.I7_49}
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
            <h6>Increase in O C A
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_50"
                value={inputValues.B7_50}
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
                name="C7_50"  
                value={inputValues.C7_50}
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
                name="D7_50"  
                value={inputValues.D7_50}
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
                name="E7_50"  
                value={inputValues.E7_50}
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
                name="F7_50" 
                value={inputValues.F7_50}
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
                name="G7_50"  
                value={inputValues.G7_50}
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
                name="H7_50"  
                value={inputValues.H7_50}
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
                name="I7_50"  
                value={inputValues.I7_50}
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
            <h5>TOTAL SHORT TERM USES
             </h5>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_51"
                value={inputValues.B7_51}
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
                name="C7_51"  
                value={inputValues.C7_51}
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
                name="D7_51"  
                value={inputValues.D7_51}
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
                name="E7_51"  
                value={inputValues.E7_51}
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
                name="F7_51" 
                value={inputValues.F7_51}
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
                name="G7_51"  
                value={inputValues.G7_51}
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
                name="H7_51"  
                value={inputValues.H7_51}
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
                name="I7_51"  
                value={inputValues.I7_51}
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
            <h6>NWC at the beginning of the year
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_53"
                value={inputValues.B7_53}
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
                name="C7_53"  
                value={sumC7_53}
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
                name="D7_53"  
                value={sumD7_53}
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
                name="E7_53"  
                value={sumE7_53}
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
                name="F7_53" 
                value={sumF7_53}
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
                name="G7_53"  
                value={sumG7_53}
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
                name="H7_53"  
                value={sumH7_53}
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
                name="I7_53"  
                value={sumI7_53}
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
            <h6>Increase / Decrease in NWC
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_54"
                value={inputValues.B7_54}
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
                name="C7_54"  
                value={inputValues.C7_54}
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
                name="D7_54"  
                value={inputValues.D7_54}
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
                name="E7_54"  
                value={inputValues.E7_54}
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
                name="F7_54" 
                value={inputValues.F7_54}
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
                name="G7_54"  
                value={inputValues.G7_54}
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
                name="H7_54"  
                value={inputValues.H7_54}
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
                name="I7_54"  
                value={inputValues.I7_54}
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
            <h6>NWC at the end of the year
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_55"
                value={inputValues.B7_55}
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
                name="C7_55"  
                value={inputValues.C7_55}
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
                name="D7_55"  
                value={inputValues.D7_55}
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
                name="E7_55"  
                value={inputValues.E7_55}
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
                name="F7_55" 
                value={inputValues.F7_55}
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
                name="G7_55"  
                value={inputValues.G7_55}
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
                name="H7_55"  
                value={inputValues.H7_55}
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
                name="I7_55"  
                value={inputValues.I7_55}
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
            <h6>LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_57"
                value={inputValues.B7_57}
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
                name="C7_57"  
                value={inputValues.C7_57}
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
                name="D7_57"  
                value={inputValues.D7_57}
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
                name="E7_57"  
                value={inputValues.E7_57}
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
                name="F7_57" 
                value={inputValues.F7_57}
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
                name="G7_57"  
                value={inputValues.G7_57}
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
                name="H7_57"  
                value={inputValues.H7_57}
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
                name="I7_57"  
                value={inputValues.I7_57}
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
            <h6>SHORT TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_58"
                value={inputValues.B7_58}
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
                name="C7_58"  
                value={inputValues.C7_58}
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
                name="D7_58"  
                value={inputValues.D7_58}
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
                name="E7_58"  
                value={inputValues.E7_58}
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
                name="F7_58" 
                value={inputValues.F7_58}
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
                name="G7_58"  
                value={inputValues.G7_58}
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
                name="H7_58"  
                value={inputValues.H7_58}
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
                name="I7_58"  
                value={inputValues.I7_58}
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
            <h6>TOTAL SOURCES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_59"
                value={inputValues.B7_59}
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
                name="C7_59"  
                value={inputValues.C7_59}
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
                name="D7_59"  
                value={inputValues.D7_59}
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
                name="E7_59"  
                value={inputValues.E7_59}
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
                name="F7_59" 
                value={inputValues.F7_59}
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
                name="G7_59"  
                value={inputValues.G7_59}
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
                name="H7_59"  
                value={inputValues.H7_59}
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
                name="I7_59"  
                value={inputValues.I7_59}
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
            <h6>LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_61"
                value={inputValues.B7_61}
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
                name="C7_61"  
                value={inputValues.C7_61}
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
                name="D7_61"  
                value={inputValues.D7_61}
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
                name="E7_61"  
                value={inputValues.E7_61}
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
                name="F7_61" 
                value={inputValues.F7_61}
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
                name="G7_61"  
                value={inputValues.G7_61}
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
                name="H7_61"  
                value={inputValues.H7_61}
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
                name="I7_61"  
                value={inputValues.I7_61}
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
            <h6>SHORT TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_62"
                value={inputValues.B7_62}
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
                name="C7_62"  
                value={inputValues.C7_62}
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
                name="D7_62"  
                value={inputValues.D7_62}
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
                name="E7_62"  
                value={inputValues.E7_62}
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
                name="F7_62" 
                value={inputValues.F7_62}
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
                name="G7_62"  
                value={inputValues.G7_62}
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
                name="H7_62"  
                value={inputValues.H7_62}
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
                name="I7_62"  
                value={inputValues.I7_62}
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
            <h6>TOTAL USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_63"
                value={inputValues.B7_63}
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
                name="C7_63"  
                value={inputValues.C7_63}
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
                name="D7_63"  
                value={inputValues.D7_63}
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
                name="E7_63"  
                value={inputValues.E7_63}
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
                name="F7_63" 
                value={inputValues.F7_63}
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
                name="G7_63"  
                value={inputValues.G7_63}
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
                name="H7_63"  
                value={inputValues.H7_63}
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
                name="I7_63"  
                value={inputValues.I7_63}
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
            <h6>Whether Tailed / Difference ?
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_65"
                value={inputValues.B7_65}
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
                name="C7_65"  
                value={inputValues.C7_65}
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
                name="D7_65"  
                value={inputValues.D7_65}
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
                name="E7_65"  
                value={inputValues.E7_65}
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
                name="F7_65" 
                value={inputValues.F7_65}
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
                name="G7_65"  
                value={inputValues.G7_65}
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
                name="H7_65"  
                value={inputValues.H7_65}
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
                name="I7_65"  
                value={inputValues.I7_65}
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
            <h6>TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_67"
                value={inputValues.B7_67}
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
                name="C7_67"  
                value={inputValues.C7_67}
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
                name="D7_67"  
                value={inputValues.D7_67}
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
                name="E7_67"  
                value={inputValues.E7_67}
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
                name="F7_67" 
                value={inputValues.F7_67}
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
                name="G7_67"  
                value={inputValues.G7_67}
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
                name="H7_67"  
                value={inputValues.H7_67}
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
                name="I7_67"  
                value={inputValues.I7_67}
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
            <h6>INCREASE IN TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_68"
                value={inputValues.B7_68}
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
                name="C7_68"  
                value={inputValues.C7_68}
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
                name="D7_68"  
                value={inputValues.D7_68}
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
                name="E7_68"  
                value={inputValues.E7_68}
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
                name="F7_68" 
                value={inputValues.F7_68}
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
                name="G7_68"  
                value={inputValues.G7_68}
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
                name="H7_68"  
                value={inputValues.H7_68}
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
                name="I7_68"  
                value={inputValues.I7_68}
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
            <h6>DECREASE IN TERM LOAN
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B7_69"
                value={inputValues.B7_69}
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
                name="C7_69"  
                value={inputValues.C7_69}
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
                name="D7_69"  
                value={inputValues.D7_69}
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
                name="E7_69"  
                value={inputValues.E7_69}
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
                name="F7_69" 
                value={inputValues.F7_69}
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
                name="G7_69"  
                value={inputValues.G7_69}
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
                name="H7_69"  
                value={inputValues.H7_69}
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
                name="I7_69"  
                value={inputValues.I7_69}
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

export default Opstmt;
