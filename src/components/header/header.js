import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import "./header.css";
import { dateNow } from "../../utils/constants";

const Header = ({ datas }) => {
  const date = dateNow();

  const currency = (
    <Box sx={{ p: 2 }}>
      <h4>Курс валют на сьогодні - {date}</h4>
      {datas.map((item)=>{
        return (
          <TextField
            id="standard-read-only-input"
            key={item.name}
            label="Купівля/продаж"
            value={`1 ${item.name} = ${item.buy} / ${item.sale}`}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        );
      })}
    </Box>
  );

  return <header>{currency}</header>;
};

export default Header;
