import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    B1_7: '', B1_8: '', B1_9: '', 
    C1_7: '', C1_8: '', C1_9: '', 
    B1_23: '', B1_24: '', B1_25: '',
    C1_23: '', C1_24: '', C1_25: ''
  });

  const [tot15, setTot15] = useState({ B3_15: '',C3_15: '' });
  const [tot23, setTot23] = useState({B3_23: '',});
  const [tot31, setTot31] = useState({});
  const [tot37, setTot37] = useState({});
  const [tot2020, setTot2020] = useState({B1_10: '',});
  const [Cost27, setCost27] = useState({});
  const [Cost26, setCost26] = useState({});
  const [Cost31, setCost31] = useState({});
  const [Cost37, setCost37] = useState({});
  const [Cost42, setCost42] = useState({});


  const [sumB2, setSumB2] = useState(0);
  const [sumC2, setSumC2] = useState(0);
  const [sumD2, setSumD2] = useState(0);
  const [sumE2, setSumE2] = useState(0);
  const [sumF2, setSumF2] = useState(0);
  const [sumG2, setSumG2] = useState(0);
  const [sumH2, setSumH2] = useState(0);
  const [sumI2, setSumI2] = useState(0);

  const [sumB19, setSumB19] = useState(0);
  const [sumC19, setSumC19] = useState(0);
  const [sumD19, setSumD19] = useState(0);
  const [sumE19, setSumE19] = useState(0);
  const [sumF19, setSumF19] = useState(0);
  const [sumG19, setSumG19] = useState(0);
  const [sumH19, setSumH19] = useState(0);
  const [sumI19, setSumI19] = useState(0);

  const [sumB21, setSumB21] = useState(0);
  const [sumC21, setSumC21] = useState(0);
  const [sumD21, setSumD21] = useState(0);
  const [sumE21, setSumE21] = useState(0);
  const [sumF21, setSumF21] = useState(0);
  const [sumG21, setSumG21] = useState(0);
  const [sumH21, setSumH21] = useState(0);
  const [sumI21, setSumI21] = useState(0);

  const [sumB25, setSumB25] = useState(0);
  const [sumC25, setSumC25] = useState(0);
  const [sumD25, setSumD25] = useState(0);
  const [sumE25, setSumE25] = useState(0);
  const [sumF25, setSumF25] = useState(0);
  const [sumG25, setSumG25] = useState(0);
  const [sumH25, setSumH25] = useState(0);
  const [sumI25, setSumI25] = useState(0);

  const [sumB50, setSumB50] = useState(0);
  const [sumC50, setSumC50] = useState(0);
  const [sumD50, setSumD50] = useState(0);
  const [sumE50, setSumE50] = useState(0);
  const [sumF50, setSumF50] = useState(0);
  const [sumG50, setSumG50] = useState(0);
  const [sumH50, setSumH50] = useState(0);
  const [sumI50, setSumI50] = useState(0);

  const [sumB30, setSumB30] = useState(0);
  const [sumC30, setSumC30] = useState(0);
  const [sumD30, setSumD30] = useState(0);
  const [sumE30, setSumE30] = useState(0);
  const [sumF30, setSumF30] = useState(0);
  const [sumG30, setSumG30] = useState(0);
  const [sumH30, setSumH30] = useState(0);
  const [sumI30, setSumI30] = useState(0);

  const [sumB37, setSumB37] = useState(0);
  const [sumC37, setSumC37] = useState(0);
  const [sumD37, setSumD37] = useState(0);
  const [sumE37, setSumE37] = useState(0);
  const [sumF37, setSumF37] = useState(0);
  const [sumG37, setSumG37] = useState(0);
  const [sumH37, setSumH37] = useState(0);
  const [sumI37, setSumI37] = useState(0);

  const [sumB38, setSumB38] = useState(0);
  const [sumC38, setSumC38] = useState(0);
  const [sumD38, setSumD38] = useState(0);
  const [sumE38, setSumE38] = useState(0);
  const [sumF38, setSumF38] = useState(0);
  const [sumG38, setSumG38] = useState(0);
  const [sumH38, setSumH38] = useState(0);
  const [sumI38, setSumI38] = useState(0);

  const [sumB44, setSumB44] = useState(0);
  const [sumC44, setSumC44] = useState(0);
  const [sumD44, setSumD44] = useState(0);
  const [sumE44, setSumE44] = useState(0);
  const [sumF44, setSumF44] = useState(0);
  const [sumG44, setSumG44] = useState(0);
  const [sumH44, setSumH44] = useState(0);
  const [sumI44, setSumI44] = useState(0);

  const [sumB45, setSumB45] = useState(0);
  const [sumC45, setSumC45] = useState(0);
  const [sumD45, setSumD45] = useState(0);
  const [sumE45, setSumE45] = useState(0);
  const [sumF45, setSumF45] = useState(0);
  const [sumG45, setSumG45] = useState(0);
  const [sumH45, setSumH45] = useState(0);
  const [sumI45, setSumI45] = useState(0);


  const [sumB4_25, setSumB4_25] = useState(0);
  const [sumC4_25, setSumC4_25] = useState(0);
  const [sumD4_25, setSumD4_25] = useState(0);
  const [sumE4_25, setSumE4_25] = useState(0);
  const [sumF4_25, setSumF4_25] = useState(0);
  const [sumG4_25, setSumG4_25] = useState(0);
  const [sumH4_25, setSumH4_25] = useState(0);
  const [sumI4_25, setSumI4_25] = useState(0);

  return (
    <AppContext.Provider value={{
      inputValues,
      setInputValues,
      tot15,
      setTot15,
      tot23,
      setTot23,
      tot31,
      setTot31,
      tot37,
      setTot37,
      tot2020, 
      setTot2020,
      Cost27, setCost27,
      Cost26, setCost26,
      Cost31, setCost31,
      Cost37, setCost37,
      Cost42, setCost42,
      sumB2, setSumB2,
      sumC2, setSumC2,
      sumD2, setSumD2,
      sumE2, setSumE2,
      sumF2, setSumF2,
      sumG2, setSumG2,
      sumH2, setSumH2,
      sumI2, setSumI2,
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
      sumB25, setSumB25,
      sumC25, setSumC25,
      sumD25, setSumD25,
      sumE25, setSumE25,
      sumF25, setSumF25,
      sumG25, setSumG25,
      sumH25, setSumH25,
      sumI25, setSumI25,
      sumB19, setSumB19,
      sumC19, setSumC19,
      sumD19, setSumD19,
      sumE19, setSumE19,
      sumF19, setSumF19,
      sumG19, setSumG19,
      sumH19, setSumH19,
      sumI19, setSumI19,
      sumB21, setSumB21,
      sumC21, setSumC21,
      sumD21, setSumD21,
      sumE21, setSumE21,
      sumF21, setSumF21,
      sumG21, setSumG21,
      sumH21, setSumH21,
      sumI21, setSumI21,
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
      
      
    }}>
      {children}
    </AppContext.Provider>
  );
};
