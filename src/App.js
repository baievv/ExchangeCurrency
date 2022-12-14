import "./App.css";
import React, { useState, useEffect } from "react";
import CurrencyCalc from "./components/currency-calc";
import Header from "./components/header";
import LoadError from "./components/load-error";
import currencyLoader from "./utils/currency-loader";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const App = () => {
  const [datas, setData] = useState({});

  useEffect(() => {
    (async function () {
      let response = await currencyLoader();
      setData(response);
    })();
  }, []);

  if (datas.error !== "") {
    return <LoadError />;
  } else
    return (
      <Box className="container">
        <Paper>
          <Header datas={datas} />
          <CurrencyCalc datas={datas} />
        </Paper>
      </Box>
    );
};

export default App;
