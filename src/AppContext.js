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
      sumI30, setSumI30
      
    }}>
      {children}
    </AppContext.Provider>
  );
};
