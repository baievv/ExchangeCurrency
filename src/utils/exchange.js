export const oneExchange = (cur1 = "UAH", cur2 = "USD", datas) => {
  let c1, c2;
  if (cur1 === cur2) return 1;
  if (cur1 === "UAH") {
    c1 = datas.find((item) => item.name === cur2);
    let res = (1 / c1.sale).toFixed(3);
    return +res;
  }
  if (cur2 === "UAH") {
    c2 = datas.find((item) => item.name === cur1);
    let res = (c2.buy).toFixed(3);
    return +(res);
  } else {
    c1 = datas.find((item) => item.name === cur2);
    c2 = datas.find((item) => item.name === cur1);
    if (cur1==="USD"){
    let res = (c2.buy / c1.buy).toFixed(3);
    return +(res);}
    else {
      let res = (c2.buy / c1.buy).toFixed(3);
      return +res;
    }
  }
};

export const onChangeSale = (datas, saleCount, saleCurrency, buyCurrency) => {
  if (saleCurrency.value === buyCurrency.value) return saleCount;
  let c1, c2;
  if (saleCurrency.value === "UAH") {
    c1 = datas.find((item) => item.name === buyCurrency.value);
    let res = (saleCount * (1 / c1.sale)).toFixed(2);
    return res;
  }

  if (buyCurrency.value === "UAH") {
    c1 = datas.find((item) => item.name === saleCurrency.value);
    let res = saleCount * c1.buy;
    return res;
  } else {
    c1 = datas.find((item) => item.name === saleCurrency.value);
    c2 = datas.find((item) => item.name === buyCurrency.value);
    if (saleCurrency.value === "USD") {
      let res = (saleCount * (1 / (c2.buy / c1.buy))).toFixed(2);
      return res;
    } else {
      let res=(saleCount * (1 / (c1.buy / c2.buy))).toFixed(2);
      return res;
    }
  }
};

export const onChangeBuy = (datas, buyCount, saleCurrency, buyCurrency) => {
  if (saleCurrency.value === buyCurrency.value) return buyCount;

  if (saleCurrency.value === "UAH") {
    let c1 = datas.find((item) => item.name === buyCurrency.value);
    return buyCount * c1.buy;
  }

  if (buyCurrency.value === "UAH") {
    let c1 = datas.find((item) => item.name === saleCurrency.value);
    return +(buyCount * (1 / c1.sale)).toFixed(2);
  } else {
    let c1 = datas.find((item) => item.name === saleCurrency.value);
    let c2 = datas.find((item) => item.name === buyCurrency.value);
    if (saleCurrency.value === "USD") {
      return +(buyCount * (1 / (c1.sale / c2.sale))).toFixed(2);
    } else return +(buyCount * (c2.buy / c1.buy)).toFixed(2);
  }
};
