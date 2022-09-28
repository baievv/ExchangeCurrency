import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import "./header.css";
import { dateNow } from "../../utils/constants";

const Header = ({ datas }) => {
  const date=dateNow();
  const currency = (
    <Box sx={{ p: 2 }}>
      <h4>Курс валют на сьогодні - {date}</h4>
      <TextField
        id="standard-read-only-input"
        label="Купівля/продаж"
        value={`1 USD = ${datas.usdRate.buy} / ${datas.usdRate.sale}`}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label=" "
        value={`1 EUR = ${datas.eurRate.buy} / ${datas.eurRate.sale}`}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
    </Box>
  );

  return <header>{currency}</header>;
};

export default Header;
