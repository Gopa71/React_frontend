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
    sumC4_26,
    sumD4_26,
    sumE4_26,
    sumF4_26,
    sumG4_26,
    sumH4_26,
    sumI4_26,
   } = useContext(AppContext);

  const [sumC6_6, setSumC6_6] = useState(0);
  const [sumD6_6, setSumD6_6] = useState(0);
  const [sumE6_6, setSumE6_6] = useState(0);
  const [sumF6_6, setSumF6_6] = useState(0);
  const [sumG6_6, setSumG6_6] = useState(0);
  const [sumH6_6, setSumH6_6] = useState(0);
  const [sumI6_6, setSumI6_6] = useState(0);

  const [sumB6_7, setSumB6_7] = useState(0);
  const [sumC6_7, setSumC6_7] = useState(0);
  const [sumD6_7, setSumD6_7] = useState(0);
  const [sumE6_7, setSumE6_7] = useState(0);
  const [sumF6_7, setSumF6_7] = useState(0);
  const [sumG6_7, setSumG6_7] = useState(0);
  const [sumH6_7, setSumH6_7] = useState(0);
  const [sumI6_7, setSumI6_7] = useState(0);

  const [sumB6_8, setSumB46_8] = useState(0);
  const [sumC6_8, setSumC46_8] = useState(0);
  const [sumD6_8, setSumD46_8] = useState(0);
  const [sumE6_8, setSumE46_8] = useState(0);
  const [sumF6_8, setSumF46_8] = useState(0);
  const [sumG6_8, setSumG46_8] = useState(0);
  const [sumH6_8, setSumH46_8] = useState(0);
  const [sumI6_8, setSumI46_8] = useState(0);

  const [sumB6_9, setSumB46_9] = useState(0);
  const [sumC6_9, setSumC46_9] = useState(0);
  const [sumD6_9, setSumD46_9] = useState(0);
  const [sumE6_9, setSumE46_9] = useState(0);
  const [sumF6_9, setSumF46_9] = useState(0);
  const [sumG6_9, setSumG46_9] = useState(0);
  const [sumH6_9, setSumH46_9] = useState(0);
  const [sumI6_9, setSumI46_9] = useState(0);

  const [sumB6_10, setSumB6_10] = useState(0);
  const [sumC6_10, setSumC6_10] = useState(0);
  const [sumD6_10, setSumD6_10] = useState(0);
  const [sumE6_10, setSumE6_10] = useState(0);
  const [sumF6_10, setSumF6_10] = useState(0);
  const [sumG6_10, setSumG6_10] = useState(0);
  const [sumH6_10, setSumH6_10] = useState(0);
  const [sumI6_10, setSumI6_10] = useState(0);

  const [sumB6_11, setSumB6_11] = useState(0);
  const [sumC6_11, setSumC6_11] = useState(0);
  const [sumD6_11, setSumD6_11] = useState(0);
  const [sumE6_11, setSumE6_11] = useState(0);
  const [sumF6_11, setSumF6_11] = useState(0);
  const [sumG6_11, setSumG6_11] = useState(0);
  const [sumH6_11, setSumH6_11] = useState(0);
  const [sumI6_11, setSumI6_11] = useState(0);

  const [sumB6_12, setSumB6_12] = useState(0);
  const [sumC6_12, setSumC6_12] = useState(0);
  const [sumD6_12, setSumD6_12] = useState(0);
  const [sumE6_12, setSumE6_12] = useState(0);
  const [sumF6_12, setSumF6_12] = useState(0);
  const [sumG6_12, setSumG6_12] = useState(0);
  const [sumH6_12, setSumH6_12] = useState(0);
  const [sumI6_12, setSumI6_12] = useState(0);

  const [sumB6_13, setSumB6_13] = useState(0);
  const [sumC6_13, setSumC6_13] = useState(0);
  const [sumD6_13, setSumD6_13] = useState(0);
  const [sumE6_13, setSumE6_13] = useState(0);
  const [sumF6_13, setSumF6_13] = useState(0);
  const [sumG6_13, setSumG6_13] = useState(0);
  const [sumH6_13, setSumH6_13] = useState(0);
  const [sumI6_13, setSumI6_13] = useState(0);

  const [sumB6_14, setSumB6_14] = useState(0);
  const [sumC6_14, setSumC6_14] = useState(0);
  const [sumD6_14, setSumD6_14] = useState(0);
  const [sumE6_14, setSumE6_14] = useState(0);
  const [sumF6_14, setSumF6_14] = useState(0);
  const [sumG6_14, setSumG6_14] = useState(0);
  const [sumH6_14, setSumH6_14] = useState(0);
  const [sumI6_14, setSumI6_14] = useState(0);

  const [sumB6_15, setSumB6_15] = useState(0);
  const [sumC6_15, setSumC6_15] = useState(0);
  const [sumD6_15, setSumD6_15] = useState(0);
  const [sumE6_15, setSumE6_15] = useState(0);
  const [sumF6_15, setSumF6_15] = useState(0);
  const [sumG6_15, setSumG6_15] = useState(0);
  const [sumH6_15, setSumH6_15] = useState(0);
  const [sumI6_15, setSumI6_15] = useState(0);

  const [sumB6_16, setSumB6_16] = useState(0);
  const [sumC6_16, setSumC6_16] = useState(0);
  const [sumD6_16, setSumD6_16] = useState(0);
  const [sumE6_16, setSumE6_16] = useState(0);
  const [sumF6_16, setSumF6_16] = useState(0);
  const [sumG6_16, setSumG6_16] = useState(0);
  const [sumH6_16, setSumH6_16] = useState(0);
  const [sumI6_16, setSumI6_16] = useState(0);

  const [sumB6_17, setSumB6_17] = useState(0);
  const [sumC6_17, setSumC6_17] = useState(0);
  const [sumD6_17, setSumD6_17] = useState(0);
  const [sumE6_17, setSumE6_17] = useState(0);
  const [sumF6_17, setSumF6_17] = useState(0);
  const [sumG6_17, setSumG6_17] = useState(0);
  const [sumH6_17, setSumH6_17] = useState(0);
  const [sumI6_17, setSumI6_17] = useState(0);

  const [sumB6_18, setSumB6_18] = useState(0);
  const [sumC6_18, setSumC6_18] = useState(0);
  const [sumD6_18, setSumD6_18] = useState(0);
  const [sumE6_18, setSumE6_18] = useState(0);
  const [sumF6_18, setSumF6_18] = useState(0);
  const [sumG6_18, setSumG6_18] = useState(0);
  const [sumH6_18, setSumH6_18] = useState(0);
  const [sumI6_18, setSumI6_18] = useState(0);

  const [sumB6_21, setSumB6_21] = useState(0);
  const [sumC6_21, setSumC6_21] = useState(0);
  const [sumD6_21, setSumD6_21] = useState(0);
  const [sumE6_21, setSumE6_21] = useState(0);
  const [sumF6_21, setSumF6_21] = useState(0);
  const [sumG6_21, setSumG6_21] = useState(0);
  const [sumH6_21, setSumH6_21] = useState(0);
  const [sumI6_21, setSumI6_21] = useState(0);

  const [sumC6_22, setSumC6_22] = useState(0);
  const [sumD6_22, setSumD6_22] = useState(0);
  const [sumE6_22, setSumE6_22] = useState(0);
  const [sumF6_22, setSumF6_22] = useState(0);
  const [sumG6_22, setSumG6_22] = useState(0);
  const [sumH6_22, setSumH6_22] = useState(0);
  const [sumI6_22, setSumI6_22] = useState(0);

  const [sumB6_23, setSumB6_23] = useState(0);
  const [sumC6_23, setSumC6_23] = useState(0);
  const [sumD6_23, setSumD6_23] = useState(0);
  const [sumE6_23, setSumE6_23] = useState(0);
  const [sumF6_23, setSumF6_23] = useState(0);
  const [sumG6_23, setSumG6_23] = useState(0);
  const [sumH6_23, setSumH6_23] = useState(0);
  const [sumI6_23, setSumI6_23] = useState(0); 

  const [sumB6_24, setSumB6_24] = useState(0);
  const [sumC6_24, setSumC6_24] = useState(0);
  const [sumD6_24, setSumD6_24] = useState(0);
  const [sumE6_24, setSumE6_24] = useState(0);
  const [sumF6_24, setSumF6_24] = useState(0);
  const [sumG6_24, setSumG6_24] = useState(0);
  const [sumH6_24, setSumH6_24] = useState(0);
  const [sumI6_24, setSumI6_24] = useState(0);

  const [sumB6_25, setSumB6_25] = useState(0);
  const [sumC6_25, setSumC6_25] = useState(0);
  const [sumD6_25, setSumD6_25] = useState(0);
  const [sumE6_25, setSumE6_25] = useState(0);
  const [sumF6_25, setSumF6_25] = useState(0);
  const [sumG6_25, setSumG6_25] = useState(0);
  const [sumH6_25, setSumH6_25] = useState(0);
  const [sumI6_25, setSumI6_25] = useState(0);

  const [sumC6_26, setSumC6_26] = useState(0);
  const [sumD6_26, setSumD6_26] = useState(0);
  const [sumE6_26, setSumE6_26] = useState(0);
  const [sumF6_26, setSumF6_26] = useState(0);
  const [sumG6_26, setSumG6_26] = useState(0);
  const [sumH6_26, setSumH6_26] = useState(0);
  const [sumI6_26, setSumI6_26] = useState(0);

  const [sumB6_27, setSumB6_27] = useState(0);
  const [sumC6_27, setSumC6_27] = useState(0);
  const [sumD6_27, setSumD6_27] = useState(0);
  const [sumE6_27, setSumE6_27] = useState(0);
  const [sumF6_27, setSumF6_27] = useState(0);
  const [sumG6_27, setSumG6_27] = useState(0);
  const [sumH6_27, setSumH6_27] = useState(0);
  const [sumI6_27, setSumI6_27] = useState(0);

  const [sumB6_28, setSumB6_28] = useState(0);
  const [sumC6_28, setSumC6_28] = useState(0);
  const [sumD6_28, setSumD6_28] = useState(0);
  const [sumE6_28, setSumE6_28] = useState(0);
  const [sumF6_28, setSumF6_28] = useState(0);
  const [sumG6_28, setSumG6_28] = useState(0);
  const [sumH6_28, setSumH6_28] = useState(0);
  const [sumI6_28, setSumI6_28] = useState(0);

  const [sumB6_29, setSumB6_29] = useState(0);
  const [sumC6_29, setSumC6_29] = useState(0);
  const [sumD6_29, setSumD6_29] = useState(0);
  const [sumE6_29, setSumE6_29] = useState(0);
  const [sumF6_29, setSumF6_29] = useState(0);
  const [sumG6_29, setSumG6_29] = useState(0);
  const [sumH6_29, setSumH6_29] = useState(0);
  const [sumI6_29, setSumI6_29] = useState(0);

  const [sumB6_30, setSumB6_30] = useState(0);
  const [sumC6_30, setSumC6_30] = useState(0);
  const [sumD6_30, setSumD6_30] = useState(0);
  const [sumE6_30, setSumE6_30] = useState(0);
  const [sumF6_30, setSumF6_30] = useState(0);
  const [sumG6_30, setSumG6_30] = useState(0);
  const [sumH6_30, setSumH6_30] = useState(0);
  const [sumI6_30, setSumI6_30] = useState(0);

  const [sumB6_53, setSumB6_53] = useState(0);
  const [sumC6_53, setSumC6_53] = useState(0);
  const [sumD6_53, setSumD6_53] = useState(0);
  const [sumE6_53, setSumE6_53] = useState(0);
  const [sumF6_53, setSumF6_53] = useState(0);
  const [sumG6_53, setSumG6_53] = useState(0);
  const [sumH6_53, setSumH6_53] = useState(0);
  const [sumI6_53, setSumI6_53] = useState(0);

  const [sumB6_54, setSumB6_54] = useState(0);
  const [sumC6_54, setSumC6_54] = useState(0);
  const [sumD6_54, setSumD6_54] = useState(0);
  const [sumE6_54, setSumE6_54] = useState(0);
  const [sumF6_54, setSumF6_54] = useState(0);
  const [sumG6_54, setSumG6_54] = useState(0);
  const [sumH6_54, setSumH6_54] = useState(0);
  const [sumI6_54, setSumI6_54] = useState(0);


  const [sumB6_67, setSumB6_67] = useState(0);
  const [sumC6_67, setSumC6_67] = useState(0);
  const [sumD6_67, setSumD6_67] = useState(0);
  const [sumE6_67, setSumE6_67] = useState(0);
  const [sumF6_67, setSumF6_67] = useState(0);
  const [sumG6_67, setSumG6_67] = useState(0);
  const [sumH6_67, setSumH6_67] = useState(0);
  const [sumI6_67, setSumI6_67] = useState(0);











  

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


const uploadSumB6_6 = () => {
  setSumC6_6(  parseFloat(inputValues["C2_20"] || 0) - parseFloat(inputValues["B2_20"] || 0));
  setSumD6_6(  parseFloat(inputValues["D2_20"] || 0) - parseFloat(inputValues["C2_20"] || 0));
  setSumE6_6(  parseFloat(inputValues["E2_20"] || 0) - parseFloat(inputValues["D2_20"] || 0));
  setSumF6_6(  parseFloat(inputValues["F2_20"] || 0) - parseFloat(inputValues["E2_20"] || 0)); 
  setSumG6_6(  parseFloat(inputValues["G2_20"] || 0) - parseFloat(inputValues["F2_20"] || 0));
  setSumH6_6(  parseFloat(inputValues["H2_20"] || 0) - parseFloat(inputValues["G2_20"] || 0));
  setSumI6_6(  parseFloat(inputValues["I2_20"] || 0) - parseFloat(inputValues["H2_20"] || 0));
};

useEffect(() => {
  uploadSumB6_6();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_6 = async () => {
    await uploadData("C6_6", sumC6_6.toString());
    await uploadData("D6_6", sumD6_6.toString());
    await uploadData("E6_6", sumE6_6.toString());
    await uploadData("F6_6", sumF6_6.toString());
    await uploadData("G6_6", sumG6_6.toString());
    await uploadData("H6_6", sumH6_6.toString());
    await uploadData("I6_6", sumI6_6.toString());
  };
  if ( sumC6_6 || sumD6_6 || sumE6_6 || sumF6_6 || sumG6_6 || sumH6_6 || sumI6_6) {
    uploadSumB6_6();
  }
}, [ sumC6_6, sumD6_6, sumE6_6, sumF6_6, sumG6_6, sumH6_6, sumI6_6]);



  //------------------------------------------------- TOTAL OF 7 -------------------------------------------------------


  const uploadSumB6_7 = () => {
    setSumC6_7( ( parseFloat(inputValues["C2_47"] || 0) + parseFloat(inputValues["C2_48"] || 0 )) - ( parseFloat(inputValues["B2_47"] || 0) +  parseFloat(inputValues["B2_48"] || 0)));
    setSumD6_7( ( parseFloat(inputValues["D2_47"] || 0) + parseFloat(inputValues["D2_48"] || 0 )) - ( parseFloat(inputValues["C2_47"] || 0) +  parseFloat(inputValues["C2_48"] || 0)));
    setSumE6_7( ( parseFloat(inputValues["E2_47"] || 0) + parseFloat(inputValues["E2_48"] || 0 )) - ( parseFloat(inputValues["D2_47"] || 0) +  parseFloat(inputValues["D2_48"] || 0)));
    setSumF6_7( ( parseFloat(inputValues["F2_47"] || 0) + parseFloat(inputValues["F2_48"] || 0 )) - ( parseFloat(inputValues["E2_47"] || 0) +  parseFloat(inputValues["E2_48"] || 0))); 
    setSumG6_7( ( parseFloat(inputValues["G2_47"] || 0) + parseFloat(inputValues["G2_48"] || 0 )) - ( parseFloat(inputValues["F2_47"] || 0) +  parseFloat(inputValues["F2_48"] || 0)));
    setSumH6_7( ( parseFloat(inputValues["H2_47"] || 0) + parseFloat(inputValues["H2_48"] || 0 )) - ( parseFloat(inputValues["G2_47"] || 0) +  parseFloat(inputValues["G2_48"] || 0)));
    setSumI6_7( ( parseFloat(inputValues["I2_47"] || 0) + parseFloat(inputValues["I2_48"] || 0 )) - ( parseFloat(inputValues["H2_47"] || 0) +  parseFloat(inputValues["H2_48"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_7();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_7 = async () => {
      await uploadData("C6_7", sumC6_7.toString());
      await uploadData("D6_7", sumD6_7.toString());
      await uploadData("E6_7", sumE6_7.toString());
      await uploadData("F6_7", sumF6_7.toString());
      await uploadData("G6_7", sumG6_7.toString());
      await uploadData("H6_7", sumH6_7.toString());
      await uploadData("I6_7", sumI6_7.toString());
    };
    if ( sumC6_7 || sumD6_7 || sumE6_7 || sumF6_7 || sumG6_7 || sumH6_7 || sumI6_7) {
      uploadSumB6_7();
    }
  }, [ sumC6_7, sumD6_7, sumE6_7, sumF6_7, sumG6_7, sumH6_7, sumI6_7]);
  
  
//------------------------------------------------- TOTAL OF 21 -------------------------------------------------------


const uploadSumB6_21 = () => {
  setSumC6_21( parseFloat(inputValues["C1_40"] || 0) );
  setSumD6_21( parseFloat(inputValues["D1_40"] || 0) );
  setSumE6_21( parseFloat(inputValues["E1_40"] || 0) );
  setSumF6_21( parseFloat(inputValues["F1_40"] || 0) ); 
  setSumG6_21( parseFloat(inputValues["G1_40"] || 0) );
  setSumH6_21( parseFloat(inputValues["H1_40"] || 0) );
  setSumI6_21( parseFloat(inputValues["I1_40"] || 0) );
};

useEffect(() => {
  uploadSumB6_21();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_21 = async () => {
    await uploadData("C6_21", sumC6_21.toString());
    await uploadData("D6_21", sumD6_21.toString());
    await uploadData("E6_21", sumE6_21.toString());
    await uploadData("F6_21", sumF6_21.toString());
    await uploadData("G6_21", sumG6_21.toString());
    await uploadData("H6_21", sumH6_21.toString());
    await uploadData("I6_21", sumI6_21.toString());
  };
  if ( sumC6_21 || sumD6_21 || sumE6_21 || sumF6_21 || sumG6_21 || sumH6_21 || sumI6_21) {
    uploadSumB6_21();
  }
}, [ sumC6_21, sumD6_21, sumE6_21, sumF6_21, sumG6_21, sumH6_21, sumI6_21]);



 //------------------------------------------------- TOTAL OF 24 -------------------------------------------------------


 const uploadSumB6_24 = () => {
  setSumC6_24(  parseFloat(sumC2 || 0) - parseFloat(sumB2 || 0));
  setSumD6_24(  parseFloat(sumD2 || 0) - parseFloat(sumC2 || 0));
  setSumE6_24(  parseFloat(sumE2 || 0) - parseFloat(sumD2 || 0));
  setSumF6_24(  parseFloat(sumF2 || 0) - parseFloat(sumE2 || 0)); 
  setSumG6_24(  parseFloat(sumG2 || 0) - parseFloat(sumF2 || 0));
  setSumH6_24(  parseFloat(sumH2 || 0) - parseFloat(sumG2 || 0));
  setSumI6_24(  parseFloat(sumI2 || 0) - parseFloat(sumH2 || 0));
};

useEffect(() => {
  uploadSumB6_24();
}, [inputValues]);

useEffect(() => {
  const uploadSumB6_24 = async () => {
    await uploadData("C6_24", sumC6_24.toString());
    await uploadData("D6_24", sumD6_24.toString());
    await uploadData("E6_24", sumE6_24.toString());
    await uploadData("F6_24", sumF6_24.toString());
    await uploadData("G6_24", sumG6_24.toString());
    await uploadData("H6_24", sumH6_24.toString());
    await uploadData("I6_24", sumI6_24.toString());
  };
  if ( sumC6_24 || sumD6_24 || sumE6_24 || sumF6_24 || sumG6_24 || sumH6_24 || sumI6_24) {
    uploadSumB6_24();
  }
}, [ sumC6_24, sumD6_24, sumE6_24, sumF6_24, sumG6_24, sumH6_24, sumI6_24]);






  //------------------------------------------------- TOTAL OF 25 -------------------------------------------------------


  const uploadSumB6_25 = () => {
    setSumC6_25( ( parseFloat(inputValues["C2_36"] || 0) + parseFloat(sumC37 || 0 )) - ( parseFloat(inputValues["B2_36"] || 0) +  parseFloat(sumB37 || 0)));
    setSumD6_25( ( parseFloat(inputValues["D2_36"] || 0) + parseFloat(sumD37 || 0 )) - ( parseFloat(inputValues["C2_36"] || 0) +  parseFloat(sumC37 || 0)));
    setSumE6_25( ( parseFloat(inputValues["E2_36"] || 0) + parseFloat(sumE37 || 0 )) - ( parseFloat(inputValues["D2_36"] || 0) +  parseFloat(sumD37 || 0)));
    setSumF6_25( ( parseFloat(inputValues["F2_36"] || 0) + parseFloat(sumF37 || 0 )) - ( parseFloat(inputValues["E2_36"] || 0) +  parseFloat(sumE37 || 0))); 
    setSumG6_25( ( parseFloat(inputValues["G2_36"] || 0) + parseFloat(sumG37 || 0 )) - ( parseFloat(inputValues["F2_36"] || 0) +  parseFloat(sumF37 || 0)));
    setSumH6_25( ( parseFloat(inputValues["H2_36"] || 0) + parseFloat(sumH37 || 0 )) - ( parseFloat(inputValues["G2_36"] || 0) +  parseFloat(sumG37 || 0)));
    setSumI6_25( ( parseFloat(inputValues["I2_36"] || 0) + parseFloat(sumI37 || 0 )) - ( parseFloat(inputValues["H2_36"] || 0) +  parseFloat(sumH37 || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_25();
  }, [inputValues,sumB37, sumC37, sumD37, sumE37, sumF37, sumG37, sumH37, sumI37]);
  
  useEffect(() => {
    const uploadSumB6_25 = async () => {
      await uploadData("C6_25", sumC6_25.toString());
      await uploadData("D6_25", sumD6_25.toString());
      await uploadData("E6_25", sumE6_25.toString());
      await uploadData("F6_25", sumF6_25.toString());
      await uploadData("G6_25", sumG6_25.toString());
      await uploadData("H6_25", sumH6_25.toString());
      await uploadData("I6_25", sumI6_25.toString());
    };
    if ( sumC6_25 || sumD6_25 || sumE6_25 || sumF6_25 || sumG6_25 || sumH6_25 || sumI6_25) {
      uploadSumB6_25();
    }
  }, [ sumC6_25, sumD6_25, sumE6_25, sumF6_25, sumG6_25, sumH6_25, sumI6_25]);
  

  //------------------------------------------------- TOTAL OF 28 -------------------------------------------------------


  const uploadSumB6_28 = () => {
    setSumC6_28( ( parseFloat(inputValues["C2_34"] || 0) + parseFloat(inputValues["C2_35"] || 0 )) - ( parseFloat(inputValues["B2_34"] || 0) +  parseFloat(inputValues["B2_35"] || 0)));
    setSumD6_28( ( parseFloat(inputValues["D2_34"] || 0) + parseFloat(inputValues["D2_35"] || 0 )) - ( parseFloat(inputValues["C2_34"] || 0) +  parseFloat(inputValues["C2_35"] || 0)));
    setSumE6_28( ( parseFloat(inputValues["E2_34"] || 0) + parseFloat(inputValues["E2_35"] || 0 )) - ( parseFloat(inputValues["D2_34"] || 0) +  parseFloat(inputValues["D2_35"] || 0)));
    setSumF6_28( ( parseFloat(inputValues["F2_34"] || 0) + parseFloat(inputValues["F2_35"] || 0 )) - ( parseFloat(inputValues["E2_34"] || 0) +  parseFloat(inputValues["E2_35"] || 0))); 
    setSumG6_28( ( parseFloat(inputValues["G2_34"] || 0) + parseFloat(inputValues["G2_35"] || 0 )) - ( parseFloat(inputValues["F2_34"] || 0) +  parseFloat(inputValues["F2_35"] || 0)));
    setSumH6_28( ( parseFloat(inputValues["H2_34"] || 0) + parseFloat(inputValues["H2_35"] || 0 )) - ( parseFloat(inputValues["G2_34"] || 0) +  parseFloat(inputValues["G2_35"] || 0)));
    setSumI6_28( ( parseFloat(inputValues["I2_34"] || 0) + parseFloat(inputValues["I2_35"] || 0 )) - ( parseFloat(inputValues["H2_34"] || 0) +  parseFloat(inputValues["H2_35"] || 0)));
  };
  
  useEffect(() => {
    uploadSumB6_28();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_28 = async () => {
      await uploadData("C6_28", sumC6_28.toString());
      await uploadData("D6_28", sumD6_28.toString());
      await uploadData("E6_28", sumE6_28.toString());
      await uploadData("F6_28", sumF6_28.toString());
      await uploadData("G6_28", sumG6_28.toString());
      await uploadData("H6_28", sumH6_28.toString());
      await uploadData("I6_28", sumI6_28.toString());
    };
    if ( sumC6_28 || sumD6_28 || sumE6_28 || sumF6_28 || sumG6_28 || sumH6_28 || sumI6_28) {
      uploadSumB6_28();
    }
  }, [ sumC6_28, sumD6_28, sumE6_28, sumF6_28, sumG6_28, sumH6_28, sumI6_28]);
  



//------------------------------------------------- TOTAL OF 53 -------------------------------------------------------


const uploadSumB6_53 = () => {
  setSumC6_53( parseFloat(sumB4_25 || 0) );
  setSumD6_53( parseFloat(sumC4_25 || 0) );
  setSumE6_53( parseFloat(sumD4_25 || 0) );
  setSumF6_53( parseFloat(sumE4_25 || 0) ); 
  setSumG6_53( parseFloat(sumF4_25 || 0) );
  setSumH6_53( parseFloat(sumG4_25 || 0) );
  setSumI6_53( parseFloat(sumH4_25 || 0) );
};

useEffect(() => {
  uploadSumB6_53();
}, [inputValues,sumC4_25, sumD4_25, sumE4_25, sumF4_25, sumG4_25, sumH4_25, sumI4_25]);

useEffect(() => {
  const uploadSumB6_53 = async () => {
    await uploadData("C6_53", sumC6_53.toString());
    await uploadData("D6_53", sumD6_53.toString());
    await uploadData("E6_53", sumE6_53.toString());
    await uploadData("F6_53", sumF6_53.toString());
    await uploadData("G6_53", sumG6_53.toString());
    await uploadData("H6_53", sumH6_53.toString());
    await uploadData("I6_53", sumI6_53.toString());
  };
  if ( sumC6_53 || sumD6_53 || sumE6_53 || sumF6_53 || sumG6_53 || sumH6_53 || sumI6_53) {
    uploadSumB6_53();
  }
}, [ sumC6_53, sumD6_53, sumE6_53, sumF6_53, sumG6_53, sumH6_53, sumI6_53]);


//------------------------------------------------- TOTAL OF 54 -------------------------------------------------------


const uploadSumB6_54 = () => {
  setSumC6_54( parseFloat(sumC4_26 || 0) );
  setSumD6_54( parseFloat(sumD4_26 || 0) );
  setSumE6_54( parseFloat(sumE4_26 || 0) );
  setSumF6_54( parseFloat(sumF4_26 || 0) ); 
  setSumG6_54( parseFloat(sumG4_26 || 0) );
  setSumH6_54( parseFloat(sumH4_26 || 0) );
  setSumI6_54( parseFloat(sumI4_26 || 0) );
};

useEffect(() => {
  uploadSumB6_54();
}, [inputValues,sumC4_26, sumD4_26, sumE4_26, sumF4_26, sumG4_26, sumH4_26, sumI4_26]);

useEffect(() => {
  const uploadSumB6_54 = async () => {
    await uploadData("C6_54", sumC6_54.toString());
    await uploadData("D6_54", sumD6_54.toString());
    await uploadData("E6_54", sumE6_54.toString());
    await uploadData("F6_54", sumF6_54.toString());
    await uploadData("G6_54", sumG6_54.toString());
    await uploadData("H6_54", sumH6_54.toString());
    await uploadData("I6_54", sumI6_54.toString());
  };
  if ( sumC6_54 || sumD6_54 || sumE6_54 || sumF6_54 || sumG6_54 || sumH6_54 || sumI6_54) {
    uploadSumB6_54();
  }
}, [ sumC6_54, sumD6_54, sumE6_54, sumF6_54, sumG6_54, sumH6_54, sumI6_54]);






  //------------------------------------------------- TOTAL OF 67 -------------------------------------------------------


  const uploadSumB6_67 = () => {
    setSumC6_67 ( parseFloat(inputValues["C2_40"] || 0) + parseFloat(inputValues["C2_41"] || 0 ) +  parseFloat(inputValues["B2_42"] || 0));
    setSumD6_67 ( parseFloat(inputValues["D2_40"] || 0) + parseFloat(inputValues["D2_41"] || 0 ) +  parseFloat(inputValues["C2_42"] || 0));
    setSumE6_67 ( parseFloat(inputValues["E2_40"] || 0) + parseFloat(inputValues["E2_41"] || 0 ) +  parseFloat(inputValues["D2_42"] || 0));
    setSumF6_67 ( parseFloat(inputValues["F2_40"] || 0) + parseFloat(inputValues["F2_41"] || 0 ) +  parseFloat(inputValues["E2_42"] || 0)); 
    setSumG6_67 ( parseFloat(inputValues["G2_40"] || 0) + parseFloat(inputValues["G2_41"] || 0 ) +  parseFloat(inputValues["F2_42"] || 0));
    setSumH6_67 ( parseFloat(inputValues["H2_40"] || 0) + parseFloat(inputValues["H2_41"] || 0 ) +  parseFloat(inputValues["G2_42"] || 0));
    setSumI6_67 ( parseFloat(inputValues["I2_40"] || 0) + parseFloat(inputValues["I2_41"] || 0 ) +  parseFloat(inputValues["H2_42"] || 0));
  };
  
  useEffect(() => {
    uploadSumB6_67();
  }, [inputValues]);
  
  useEffect(() => {
    const uploadSumB6_67 = async () => {
      await uploadData("C6_67", sumC6_67.toString());
      await uploadData("D6_67", sumD6_67.toString());
      await uploadData("E6_67", sumE6_67.toString());
      await uploadData("F6_67", sumF6_67.toString());
      await uploadData("G6_67", sumG6_67.toString());
      await uploadData("H6_67", sumH6_67.toString());
      await uploadData("I6_67", sumI6_67.toString());
    };
    if ( sumC6_67 || sumD6_67 || sumE6_67 || sumF6_67 || sumG6_67 || sumH6_67 || sumI6_67) {
      uploadSumB6_67();
    }
  }, [ sumC6_67, sumD6_67, sumE6_67, sumF6_67, sumG6_67, sumH6_67, sumI6_67]);
  












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
            <h5 >SOURCES: </h5>
          </div>
        </div>
    </div>
    
<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Net Profit after tax
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_5"
          value={inputValues.B6_5}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_5"  
          value={inputValues.C6_5}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_5"  
          value={inputValues.D6_5}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_5"  
          value={inputValues.E6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_5" 
          value={inputValues.F6_5}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_5"  
          value={inputValues.G6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_5"  
          value={inputValues.H6_5}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_5"  
          value={inputValues.I6_5}
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
      <h6>Depreciation
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_6"
          value={inputValues.B6_6}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_6"  
          value={sumC6_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_6"  
          value={sumD6_6}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_6"  
          value={sumE6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_6" 
          value={sumF6_6}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_6"  
          value={sumG6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_6"  
          value={sumH6_6}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_6"  
          value={sumI6_6}
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
      <h6>Increase in capital & Reserves
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_7"
          value={inputValues.B6_7}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_7"  
          value={sumC6_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_7"  
          value={sumD6_7}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_7"  
          value={sumE6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_7" 
          value={sumF6_7}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_7"  
          value={sumG6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_7"  
          value={sumH6_7}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_7"  
          value={sumI6_7}
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
            <h6>Increase in Term Loan
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_8"
                        value={inputValues.B6_8}
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
                        name="C6_8"
                        value={inputValues.C6_8}
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
                name="D6_8"  
                value={inputValues.D6_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_8"  
                value={inputValues.E6_8}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_8"  
                value={inputValues.F6_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_8" 
                value={inputValues.G6_8}
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
                name="H6_8"  
                value={inputValues.H6_8}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_8"  
                value={inputValues.I6_8}
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
            <h6>Increase in Other Term Liabilities
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_9"  
                value={inputValues.B6_9}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_9"
                value={inputValues.C6_9}
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
                name="D6_9"  
                value={inputValues.D6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_9"  
                value={inputValues.E6_9}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_9" 
                value={inputValues.F6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_9"  
                value={inputValues.G6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_9"  
                value={inputValues.H6_9}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_9"  
                value={inputValues.I6_9}
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
            <h6>Decreases In Fixed Assets
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_10"
                value={inputValues.B6_10}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_10"  
                value={inputValues.C6_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_10"  
                value={inputValues.D6_10}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_10"  
                value={inputValues.E6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_10" 
                value={inputValues.F6_10}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_10"  
                value={inputValues.G6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_10"  
                value={inputValues.H6_10}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_10"  
                value={inputValues.I6_10}
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
            <h6>Decrease in Other Non current Assets 
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_11"
                        value={inputValues.B6_11}
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
                        name="C6_11"
                        value={inputValues.C6_11}
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
                name="D6_11"  
                value={inputValues.D6_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_11"  
                value={inputValues.E6_11}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_11"  
                value={inputValues.F6_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_11" 
                value={inputValues.G6_11}
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
                name="H6_11"  
                value={inputValues.H6_11}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_11"  
                value={inputValues.I6_11}
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
            <h6>Decrease in intangible Assets
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_12"  
                value={inputValues.B6_12}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_12"
                value={inputValues.C6_12}
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
                name="D6_12"  
                value={inputValues.D6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_12"  
                value={inputValues.E6_12}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_12" 
                value={inputValues.F6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_12"  
                value={inputValues.G6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_12"  
                value={inputValues.H6_12}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_12"  
                value={inputValues.I6_12}
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
            <h6>TOTAL LONG TERM SOURCES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_13"  
                value={inputValues.B6_13}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_13"
                value={inputValues.C6_13}
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
                name="D6_13"  
                value={inputValues.D6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_13"  
                value={inputValues.E6_13}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_13" 
                value={inputValues.F6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_13"  
                value={inputValues.G6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_13"  
                value={inputValues.H6_13}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_13"  
                value={inputValues.I6_13}
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
            <h6 > USES:</h6>
          </div>
        </div>
    </div>

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Net Loss
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_15"
          value={inputValues.B6_15}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_15"  
          value={inputValues.C6_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_15"  
          value={inputValues.D6_15}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_15"  
          value={inputValues.E6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_15" 
          value={inputValues.F6_15}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_15"  
          value={inputValues.G6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_15"  
          value={inputValues.H6_15}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_15"  
          value={inputValues.I6_15}
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
      <h6>Increase in fixed assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_16"
          value={inputValues.B6_16}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_16"  
          value={inputValues.C6_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_16"  
          value={inputValues.D6_16}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_16"  
          value={inputValues.E6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_16" 
          value={inputValues.F6_16}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_16"  
          value={inputValues.G6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_16"  
          value={inputValues.H6_16}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_16"  
          value={inputValues.I6_16}
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
      <h6>Increase in Non Current Assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_17"
          value={inputValues.B6_17}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_17"  
          value={inputValues.C6_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_17"  
          value={inputValues.D6_17}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_17"  
          value={inputValues.E6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_17" 
          value={inputValues.F6_17}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_17"  
          value={inputValues.G6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_17"  
          value={inputValues.H6_17}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_17"  
          value={inputValues.I6_17}
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
      <h6>Increase in intangible assets
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_18"
          value={inputValues.B6_18}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_18"  
          value={inputValues.C6_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_18"  
          value={inputValues.D6_18}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_18"  
          value={inputValues.E6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_18" 
          value={inputValues.F6_18}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_18"  
          value={inputValues.G6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_18"  
          value={inputValues.H6_18}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_18"  
          value={inputValues.I6_18}
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
      <h6>Decrease in Term Loan
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_19"
          value={inputValues.B6_19}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_19"  
          value={inputValues.C6_19}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_19"  
          value={inputValues.D6_19}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_19"  
          value={inputValues.E6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_19" 
          value={inputValues.F6_19}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_19"  
          value={inputValues.G6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_19"  
          value={inputValues.H6_19}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_19"  
          value={inputValues.I6_19}
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
      <h6>Decrease in O T L
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_20"
          value={inputValues.B6_20}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_20"  
          value={inputValues.C6_20}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_20"  
          value={inputValues.D6_20}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_20"  
          value={inputValues.E6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_20" 
          value={inputValues.F6_20}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_20"  
          value={inputValues.G6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_20"  
          value={inputValues.H6_20}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_20"  
          value={inputValues.I6_20}
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
            <h6>Divided Payments
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_21"
                        value={inputValues.B6_21}
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
                        name="C6_21"
                        value={sumC6_21}
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
                name="D6_21"  
                value={sumD6_21}
                onChange={changeData}  
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
                name="E6_21"  
                value={sumE6_21}
                onChange={changeData}  
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
                name="F6_21"  
                value={sumF6_21}
                onChange={changeData} 
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
                name="G6_21" 
                value={sumG6_21}
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
                name="H6_21"  
                value={sumH6_21}
                onChange={changeData} 
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
                name="I6_21"  
                value={sumI6_21}
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
            <h6>TOTAL LONG TERM USES
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="B6_22"  
                value={inputValues.B6_22}
                onChange={changeData}
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
                name="C6_22"
                value={inputValues.C6_22}
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
                name="D6_22"  
                value={inputValues.D6_22}
                onChange={changeData} 
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
                name="E6_22"  
                value={inputValues.E6_22}
                onChange={changeData}  
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
                name="F6_22" 
                value={inputValues.F6_22}
                onChange={changeData} 
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
                name="G6_22"  
                value={inputValues.G6_22}
                onChange={changeData} 
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
                name="H6_22"  
                value={inputValues.H6_22}
                onChange={changeData} 
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
                name="I6_22"  
                value={inputValues.I6_22}
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
      <h6>LONG TERM SURPLUS/DEFICIT
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_23"
          value={inputValues.B6_23}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_23"  
          value={inputValues.C6_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_23"  
          value={inputValues.D6_23}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_23"  
          value={inputValues.E6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_23" 
          value={inputValues.F6_23}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_23"  
          value={inputValues.G6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_23"  
          value={inputValues.H6_23}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_23"  
          value={inputValues.I6_23}
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
            <h6>Increase/decrese C A
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_24"
                value={inputValues.B6_24}
                onChange={changeData}  
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
                name="C6_24"  
                value={sumC6_24}
                onChange={changeData}
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
                name="D6_24"  
                value={sumD6_24}
                onChange={changeData}
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
                name="E6_24"  
                value={sumE6_24}
                onChange={changeData} 
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
                name="F6_24" 
                value={sumF6_24}
                onChange={changeData}

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
                name="G6_24"  
                value={sumG6_24}
                onChange={changeData} 
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
                name="H6_24"  
                value={sumH6_24}
                onChange={changeData} 
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
                name="I6_24"  
                value={sumI6_24}
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
            <h6>Increase/decrese in C L excel Bank borrowing
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_25"
                value={inputValues.B6_25}
                onChange={changeData}  
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
                name="C6_25"  
                value={sumC6_25}
                onChange={changeData}
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
                name="D6_25"  
                value={sumD6_25}
                onChange={changeData}
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
                name="E6_25"  
                value={sumE6_25}
                onChange={changeData} 
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
                name="F6_25" 
                value={sumF6_25}
                onChange={changeData}

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
                name="G6_25"  
                value={sumG6_25}
                onChange={changeData} 
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
                name="H6_25"  
                value={sumH6_25}
                onChange={changeData} 
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
                name="I6_25"  
                value={sumI6_25}
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
      <h6>Increase/decrease W C gap
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_26"
          value={inputValues.B6_26}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_26"  
          value={inputValues.C6_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_26"  
          value={inputValues.D6_26}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_26"  
          value={inputValues.E6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_26" 
          value={inputValues.F6_26}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_26"  
          value={inputValues.G6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_26"  
          value={inputValues.H6_26}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_26"  
          value={inputValues.I6_26}
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
      <h6>Net Surplus/Deficit
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_27"
          value={inputValues.B6_27}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_27"  
          value={inputValues.C6_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_27"  
          value={inputValues.D6_27}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_27"  
          value={inputValues.E6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_27" 
          value={inputValues.F6_27}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_27"  
          value={inputValues.G6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_27"  
          value={inputValues.H6_27}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_27"  
          value={inputValues.I6_27}
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
      <h6>Inc./dec.in Bank Borrowing
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_28"
          value={inputValues.B6_28}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_28"  
          value={sumC6_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_28"  
          value={sumD6_28}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_28"  
          value={sumE6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_28" 
          value={sumF6_28}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_28"  
          value={sumG6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_28"  
          value={sumH6_28}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_28"  
          value={sumI6_28}
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
            <h5 >FUNDD FLOW STATEMENT</h5>
          </div>
        </div>
    </div>

<div className="container-fluid border mt-3">
<div className="row">
    <div className="col-lg-4 border-end d-flex justify-content-center">
      <h6>Long Term Sources
       </h6>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="B6_31"
          value={inputValues.B6_31}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_31"  
          value={inputValues.C6_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_31"  
          value={inputValues.D6_31}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_31"  
          value={inputValues.E6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_31" 
          value={inputValues.F6_31}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_31"  
          value={inputValues.G6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_31"  
          value={inputValues.H6_31}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_31"  
          value={inputValues.I6_31}
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
            <h6>Long Term Uses
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_32"
                        value={inputValues.B6_32}
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
                        name="C6_32"
                        value={inputValues.C6_32}
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
                name="D6_32"  
                value={inputValues.D6_32}
                onChange={changeData}  
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
                name="E6_32"  
                value={inputValues.E6_32}
                onChange={changeData}  
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
                name="F6_32"  
                value={inputValues.F6_32}
                onChange={changeData} 
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
                name="G6_32" 
                value={inputValues.G6_32}
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
                name="H6_32"  
                value={inputValues.H6_32}
                onChange={changeData} 
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
                name="I6_32"  
                value={inputValues.I6_32}
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
            <h6>Surplus/Deficit
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_33"
                        value={inputValues.B6_33}
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
                        name="C6_33"
                        value={inputValues.C6_33}
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
                name="D6_33"  
                value={inputValues.D6_33}
                onChange={changeData}  
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
                name="E6_33"  
                value={inputValues.E6_33}
                onChange={changeData}  
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
                name="F6_33"  
                value={inputValues.F6_33}
                onChange={changeData} 
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
                name="G6_33" 
                value={inputValues.G6_33}
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
                name="H6_33"  
                value={inputValues.H6_33}
                onChange={changeData} 
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
                name="I6_33"  
                value={inputValues.I6_33}
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
            <h6>Long Term Uses/Long Term Sources
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
              <input
                        type="text"
                        className="form-control"
                        
                        aria-label="First name"
                        name="B6_34"
                        value={inputValues.B6_34}
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
                        name="C6_34"
                        value={inputValues.C6_34}
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
                name="D6_34"  
                value={inputValues.D6_34}
                onChange={changeData}  
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
                name="E6_34"  
                value={inputValues.E6_34}
                onChange={changeData}  
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
                name="F6_34"  
                value={inputValues.F6_34}
                onChange={changeData} 
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
                name="G6_34" 
                value={inputValues.G6_34}
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
                name="H6_34"  
                value={inputValues.H6_34}
                onChange={changeData} 
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
                name="I6_34"  
                value={inputValues.I6_34}
                onChange={changeData} 
                />

              </div>
            </div>
          </div>
          {/* Add similar input fields for other years here */}
      </div>
    </div>

    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h5 >II BUILDING UP OF N W C</h5>
          </div>
        </div>
    </div>
    

    {/*--------------------------------------------------- FIXED ASSETS--------------------------------------- */}
    <div className="container-fluid border mt-3">
        <div className="row" style={{backgroundColor:"rgb(224, 231, 231)"}}>
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6 >SOURCES</h6>
          </div>
        </div>
    </div>
    <div className="container-fluid border mt-3">
      <div className="row">
          <div className="col-lg-4 border-end d-flex justify-content-center">
            <h6>Increase in Bank Borrowings
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_37"
                value={inputValues.B6_37}
                onChange={changeData}  
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
                name="C6_37"  
                value={inputValues.C6_37}
                onChange={changeData}
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
               
                name="D6_37"  
                value={inputValues.D6_37}
                onChange={changeData}
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
                name="E6_37"  
                value={inputValues.E6_37}
                onChange={changeData} 
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
                name="F6_37" 
                value={inputValues.F6_37}
                onChange={changeData}

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
                name="G6_37"  
                value={inputValues.G6_37}
                onChange={changeData} 
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
                name="H6_37"  
                value={inputValues.H6_37}
                onChange={changeData} 
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
                name="I6_37"  
                value={inputValues.I6_37}
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
            <h6>Increase in Sundry Creditors
             </h6>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                
                aria-label="First name" 
                name="B6_38"
                value={inputValues.B6_38}
                onChange={changeData}  
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
                name="C6_38"  
                value={inputValues.C6_38}
                onChange={changeData}
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
               
                name="D6_38"  
                value={inputValues.D6_38}
                onChange={changeData}
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
                name="E6_38"  
                value={inputValues.E6_38}
                onChange={changeData} 
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
                name="F6_38" 
                value={inputValues.F6_38}
                onChange={changeData}

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
                name="G6_38"  
                value={inputValues.G6_38}
                onChange={changeData} 
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
                name="H6_38"  
                value={inputValues.H6_38}
                onChange={changeData} 
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
                name="I6_38"  
                value={inputValues.I6_38}
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
          name="B6_39"
          value={inputValues.B6_39}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_39"  
          value={inputValues.C6_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_39"  
          value={inputValues.D6_39}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_39"  
          value={inputValues.E6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_39" 
          value={inputValues.F6_39}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_39"  
          value={inputValues.G6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_39"  
          value={inputValues.H6_39}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_39"  
          value={inputValues.I6_39}
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
          name="B6_40"
          value={inputValues.B6_40}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_40"  
          value={inputValues.C6_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_40"  
          value={inputValues.D6_40}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_40"  
          value={inputValues.E6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_40" 
          value={inputValues.F6_40}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_40"  
          value={inputValues.G6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_40"  
          value={inputValues.H6_40}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_40"  
          value={inputValues.I6_40}
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
          name="B6_41"
          value={inputValues.B6_41}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_41"  
          value={inputValues.C6_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_41"  
          value={inputValues.D6_41}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_41"  
          value={inputValues.E6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_41" 
          value={inputValues.F6_41}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_41"  
          value={inputValues.G6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_41"  
          value={inputValues.H6_41}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_41"  
          value={inputValues.I6_41}
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
          name="B6_42"
          value={inputValues.B6_42}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_42"  
          value={inputValues.C6_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_42"  
          value={inputValues.D6_42}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_42"  
          value={inputValues.E6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_42" 
          value={inputValues.F6_42}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_42"  
          value={inputValues.G6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_42"  
          value={inputValues.H6_42}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_42"  
          value={inputValues.I6_42}
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
          name="B6_43"
          value={inputValues.B6_43}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_43"  
          value={inputValues.C6_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_43"  
          value={inputValues.D6_43}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_43"  
          value={inputValues.E6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_43" 
          value={inputValues.F6_43}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_43"  
          value={inputValues.G6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_43"  
          value={inputValues.H6_43}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_43"  
          value={inputValues.I6_43}
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
          name="B6_44"
          value={inputValues.B6_44}
          onChange={changeData}  
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="C6_44"  
          value={inputValues.C6_44}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           aria-label="First name" 
          name="D6_44"  
          value={inputValues.D6_44}
          onChange={changeData}
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="E6_44"  
          value={inputValues.E6_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="F6_44" 
          value={inputValues.F6_44}
          onChange={changeData}

          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="G6_44"  
          value={inputValues.G6_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="H6_44"  
          value={inputValues.H6_44}
          onChange={changeData} 
          />
          {/* <!--//AAAAAAAA --> */}
        </div>
      </div>
    </div>
    <div className="col-lg-1 border-start d-flex justify-content-center">
      <div className="row g-3">
        <div className="col">
          <input type="text" 
          className="form-control" 
           
          aria-label="First name" 
          name="I6_44"  
          value={inputValues.I6_44}
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
                name="B6_45"  
                value={inputValues.B6_45}
                onChange={changeData}
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
                name="C6_45"
                value={inputValues.C6_45}
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
                name="D6_45"  
                value={inputValues.D6_45}
                onChange={changeData} 
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
                name="E6_45"  
                value={inputValues.E6_45}
                onChange={changeData}  
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
                name="F6_45" 
                value={inputValues.F6_45}
                onChange={changeData} 
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
                name="G6_45"  
                value={inputValues.G6_45}
                onChange={changeData} 
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
                name="H6_45"  
                value={inputValues.H6_45}
                onChange={changeData} 
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
                name="I6_45"  
                value={inputValues.I6_45}
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
                name="B6_46"  
                value={inputValues.B6_46}
                onChange={changeData}
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
                name="C6_46"
                value={inputValues.C6_46}
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
                name="D6_46"  
                value={inputValues.D6_46}
                onChange={changeData} 
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
                name="E6_46"  
                value={inputValues.E6_46}
                onChange={changeData}  
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
                name="F6_46" 
                value={inputValues.F6_46}
                onChange={changeData} 
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
                name="G6_46"  
                value={inputValues.G6_46}
                onChange={changeData} 
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
                name="H6_46"  
                value={inputValues.H6_46}
                onChange={changeData} 
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
                name="I6_46"  
                value={inputValues.I6_46}
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
                name="B6_47"
                value={inputValues.B6_47}
                onChange={changeData}  
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
                name="C6_47"  
                value={inputValues.C6_47}
                onChange={changeData}
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
               
                name="D6_47"  
                value={inputValues.D6_47}
                onChange={changeData}
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
                name="E6_47"  
                value={inputValues.E6_47}
                onChange={changeData} 
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
                name="F6_47" 
                value={inputValues.F6_47}
                onChange={changeData}

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
                name="G6_47"  
                value={inputValues.G6_47}
                onChange={changeData} 
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
                name="H6_47"  
                value={inputValues.H6_47}
                onChange={changeData} 
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
                name="I6_47"  
                value={inputValues.I6_47}
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
                        name="B6_48"
                        value={inputValues.B6_48}
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
                        name="C6_48"
                        value={inputValues.C6_48}
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
                name="D6_48"  
                value={inputValues.D6_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_48"  
                value={inputValues.E6_48}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_48"  
                value={inputValues.F6_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_48" 
                value={inputValues.G6_48}
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
                name="H6_48"  
                value={inputValues.H6_48}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_48"  
                value={inputValues.I6_48}
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
                name="B6_49"  
                value={inputValues.B6_49}
                onChange={changeData}
                />
                
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_49"
                value={inputValues.C6_49}
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
                name="D6_49"  
                value={inputValues.D6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_49"  
                value={inputValues.E6_49}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_49" 
                value={inputValues.F6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_49"  
                value={inputValues.G6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_49"  
                value={inputValues.H6_49}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_49"  
                value={inputValues.I6_49}
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
                name="B6_50"
                value={inputValues.B6_50}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_50"  
                value={inputValues.C6_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_50"  
                value={inputValues.D6_50}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_50"  
                value={inputValues.E6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_50" 
                value={inputValues.F6_50}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_50"  
                value={inputValues.G6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_50"  
                value={inputValues.H6_50}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_50"  
                value={inputValues.I6_50}
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
                name="B6_51"
                value={inputValues.B6_51}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_51"  
                value={inputValues.C6_51}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_51"  
                value={inputValues.D6_51}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_51"  
                value={inputValues.E6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_51" 
                value={inputValues.F6_51}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_51"  
                value={inputValues.G6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_51"  
                value={inputValues.H6_51}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_51"  
                value={inputValues.I6_51}
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
                name="B6_53"
                value={inputValues.B6_53}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_53"  
                value={sumC6_53}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_53"  
                value={sumD6_53}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_53"  
                value={sumE6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_53" 
                value={sumF6_53}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_53"  
                value={sumG6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_53"  
                value={sumH6_53}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_53"  
                value={sumI6_53}
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
                name="B6_54"
                value={inputValues.B6_54}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_54"  
                value={sumC6_54}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_54"  
                value={sumD6_54}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_54"  
                value={sumE6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_54" 
                value={sumF6_54}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_54"  
                value={sumG6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_54"  
                value={sumH6_54}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_54"  
                value={sumI6_54}
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
                name="B6_55"
                value={inputValues.B6_55}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_55"  
                value={inputValues.C6_55}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_55"  
                value={inputValues.D6_55}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_55"  
                value={inputValues.E6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_55" 
                value={inputValues.F6_55}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_55"  
                value={inputValues.G6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_55"  
                value={inputValues.H6_55}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_55"  
                value={inputValues.I6_55}
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
                name="B6_57"
                value={inputValues.B6_57}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_57"  
                value={inputValues.C6_57}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_57"  
                value={inputValues.D6_57}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_57"  
                value={inputValues.E6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_57" 
                value={inputValues.F6_57}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_57"  
                value={inputValues.G6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_57"  
                value={inputValues.H6_57}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_57"  
                value={inputValues.I6_57}
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
                name="B6_58"
                value={inputValues.B6_58}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_58"  
                value={inputValues.C6_58}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_58"  
                value={inputValues.D6_58}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_58"  
                value={inputValues.E6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_58" 
                value={inputValues.F6_58}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_58"  
                value={inputValues.G6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_58"  
                value={inputValues.H6_58}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_58"  
                value={inputValues.I6_58}
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
                name="B6_59"
                value={inputValues.B6_59}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_59"  
                value={inputValues.C6_59}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_59"  
                value={inputValues.D6_59}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_59"  
                value={inputValues.E6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_59" 
                value={inputValues.F6_59}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_59"  
                value={inputValues.G6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_59"  
                value={inputValues.H6_59}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_59"  
                value={inputValues.I6_59}
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
                name="B6_61"
                value={inputValues.B6_61}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_61"  
                value={inputValues.C6_61}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_61"  
                value={inputValues.D6_61}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_61"  
                value={inputValues.E6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_61" 
                value={inputValues.F6_61}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_61"  
                value={inputValues.G6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_61"  
                value={inputValues.H6_61}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_61"  
                value={inputValues.I6_61}
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
                name="B6_62"
                value={inputValues.B6_62}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_62"  
                value={inputValues.C6_62}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_62"  
                value={inputValues.D6_62}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_62"  
                value={inputValues.E6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_62" 
                value={inputValues.F6_62}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_62"  
                value={inputValues.G6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_62"  
                value={inputValues.H6_62}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_62"  
                value={inputValues.I6_62}
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
                name="B6_63"
                value={inputValues.B6_63}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_63"  
                value={inputValues.C6_63}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_63"  
                value={inputValues.D6_63}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_63"  
                value={inputValues.E6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_63" 
                value={inputValues.F6_63}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_63"  
                value={inputValues.G6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_63"  
                value={inputValues.H6_63}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_63"  
                value={inputValues.I6_63}
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
                name="B6_65"
                value={inputValues.B6_65}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_65"  
                value={inputValues.C6_65}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_65"  
                value={inputValues.D6_65}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_65"  
                value={inputValues.E6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_65" 
                value={inputValues.F6_65}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_65"  
                value={inputValues.G6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_65"  
                value={inputValues.H6_65}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_65"  
                value={inputValues.I6_65}
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
                name="B6_67"
                value={inputValues.B6_67}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_67"  
                value={sumC6_67}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_67"  
                value={sumD6_67}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_67"  
                value={sumE6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_67" 
                value={sumF6_67}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_67"  
                value={sumG6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_67"  
                value={sumH6_67}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_67"  
                value={sumI6_67}
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
                name="B6_68"
                value={inputValues.B6_68}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_68"  
                value={inputValues.C6_68}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_68"  
                value={inputValues.D6_68}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_68"  
                value={inputValues.E6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_68" 
                value={inputValues.F6_68}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_68"  
                value={inputValues.G6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_68"  
                value={inputValues.H6_68}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_68"  
                value={inputValues.I6_68}
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
                name="B6_69"
                value={inputValues.B6_69}
                onChange={changeData}  
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="C6_69"  
                value={inputValues.C6_69}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 aria-label="First name" 
                name="D6_69"  
                value={inputValues.D6_69}
                onChange={changeData}
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="E6_69"  
                value={inputValues.E6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="F6_69" 
                value={inputValues.F6_69}
                onChange={changeData}

                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="G6_69"  
                value={inputValues.G6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="H6_69"  
                value={inputValues.H6_69}
                onChange={changeData} 
                />
                {/* <!--//AAAAAAAA --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-1 border-start d-flex justify-content-center">
            <div className="row g-3">
              <div className="col">
                <input type="text" 
                className="form-control" 
                 
                aria-label="First name" 
                name="I6_69"  
                value={inputValues.I6_69}
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
