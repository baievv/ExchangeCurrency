import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { oneExchange, onChangeSale, onChangeBuy } from "../../utils/exchange";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import {
  currencies,
  textFieldProp,
  selectFieldProp,
  mainBoxProp,
  avatarProp,
} from "../../utils/constants";

const CurrencyCalc = ({ datas }) => {
  const [currencySale, setCurrencySale] = useState({});
  const [currencyBuy, setCurrencyBuy] = useState({});

  const [saleCount, setSaleCount] = useState(0);
  const [buyCount, setBuyCount] = useState(0);

  const handleChangeBuyCurrency = (event) => {
    setCurrencyBuy(currencies[event.target.value]);
    setSaleCount(
      onChangeBuy(datas, buyCount, currencySale, currencies[event.target.value])
    );
  };

  const handleChangeSaleCurrency = (event) => {
    setCurrencySale(currencies[event.target.value]);
    setBuyCount(
      onChangeSale(
        datas,
        saleCount,
        currencies[event.target.value],
        currencyBuy
      )
    );
  };
  const handleChangeSaleCount = (e) => {
    e.target.value !== "" ? setSaleCount(+(e.target.value)) : setSaleCount(0);
  };
  const handleChangeBuyCount = (e) => {
    e.target.value !== "" ? setBuyCount(+(e.target.value)) : setBuyCount(0);
  };

  const handleSaleCountKeyUp = (e) => {
    if (e.key === "Enter")
      setBuyCount(onChangeSale(datas, saleCount, currencySale, currencyBuy));
  };

  const handleBuyCountKeyUp = (e) => {
    if (e.key === "Enter")
      setSaleCount(onChangeBuy(datas, buyCount, currencySale, currencyBuy));
  };

  useEffect(() => {
    setCurrencySale(currencies[0]);
    setCurrencyBuy(currencies[1]);
    setBuyCount(100);
    let count = datas.usdRate.buy * 100;
    setSaleCount(count);
  }, []);

  return (
    <Box sx={{ m: 1 }}>
      <Paper
        sx={{
          width: "95%",
          height: 100,
          padding: 2,
          bgcolor: "text.primary",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={mainBoxProp} className="sale-box">
          <TextField
            id="standard-helperText"
            label="Обмінюю"
            defaultValue="100"
            value={saleCount}
            sx={textFieldProp}
            onChange={handleChangeSaleCount}
            onKeyDown={handleSaleCountKeyUp}
            helperText={`1 ${currencyBuy.value}= ${oneExchange(
              currencyBuy.value,
              currencySale.value,
              datas
            )} ${currencySale.value}`}
            variant="standard"
          />
          <FormControl variant="standard" sx={selectFieldProp}>
            <InputLabel id="demo-simple-select-standard-label">
              {currencySale.label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={currencySale.value}
              onChange={handleChangeSaleCurrency}
              defaultValue={0}
            >
              {currencies.map((option) => (
                <MenuItem key={`s${option.id}`} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Avatar alt="Обмін" src="img/currency4.png" sx={avatarProp} />
        <Box sx={mainBoxProp} className="buy-box">
          <TextField
            id="standard-helperText"
            label="Отримаю"
            sx={textFieldProp}
            defaultValue="0"
            value={buyCount}
            onChange={handleChangeBuyCount}
            onKeyDown={handleBuyCountKeyUp}
            helperText={`1 ${currencySale.value}= ${oneExchange(
              currencySale.value,
              currencyBuy.value,
              datas
            )} ${currencyBuy.value}`}
            variant="standard"
          />
          <FormControl variant="standard" sx={selectFieldProp}>
            <InputLabel id="demo-simple-select-standard-label">
              {currencyBuy.label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={currencyBuy.value}
              defaultValue={1}
              onChange={handleChangeBuyCurrency}
              label={10}
            >
              {currencies.map((option) => (
                <MenuItem key={`b${option.id}`} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default CurrencyCalc;
