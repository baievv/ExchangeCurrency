export const currencies = [
  {
    id: 0,
    value: "UAH",
    label: "₴",
  },
  {
    id: 1,
    value: "USD",
    label: "$",
  },
  { id: 2, value: "EUR", label: "€" },
];

export const textFieldProp = {
  bgcolor: "white",
  width: "70%",
  borderRadius: "4px",
  padding: "px",
  margin: "15px 0 0 30px",
};
export const selectFieldProp = {
  bgcolor: "white",
  width: "25%",
  borderRadius: "4px",
  padding: "5px",
  margin: "10px 30px 0 0",
};
export const mainBoxProp = {
  bgcolor: "white",
  width: "48%",
  borderRadius: 1,
  display: "inline-flex",
};
export const avatarProp = {
  boxShadow: "0px 2px 5px 2px rgba(0, 0, 0, 0.25)",
  bgcolor: "white",
  border: "2px solid none",
  position: "absolute",
  zIndex: 10,
  left: "50%",
  marginLeft: "-25px",
  marginTop: "25px",
  width: 48,
  height: 48,
};

export const dateNow = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  
  month < 10 ? (month = `0${month}`) : (month = month);
  let day = date.getDate();
  console.log("day ", day);
  day < 10 ? (day = `0${day}`) : (day = day);
  let res = `${day}.${month}.${year}`;
  console.log(res);
  return res;
};
