export const oneExchange = (cur1, cur2, datas) => {
  let res = 0;
  if ((cur1 === "UAH") & (cur2 === "USD")) {
    return (res = 1 / datas.usdRate.sale).toFixed(4);
  }
  if ((cur1 === "UAH") & (cur2 === "EUR")) {
    return (res = 1 / datas.eurRate.sale).toFixed(4);
  }
  if ((cur1 === "EUR") & (cur2 === "UAH")) {
    return (res = datas.eurRate.buy);
  }
  if ((cur1 === "USD") & (cur2 === "UAH")) {
    return (res = datas.usdRate.buy);
  }
  if ((cur1 === "USD") & (cur2 === "EUR")) {
    return (res = datas.crossRate.sale);
  }
  if ((cur1 === "EUR") & (cur2 === "USD")) {
    return (res = datas.crossRate.buy);
  }
  if (cur1 === cur2) return (res = 1);
  return res;
};

export const onChangeSale = (datas, saleCount, saleCurrency, buyCurrency) => {
  let res = 0;
  
  if (saleCurrency.value === buyCurrency.value) return (res = saleCount);
  if ((saleCurrency.value === "UAH") & (buyCurrency.value === "USD")) {
    return (res = +(saleCount * (1 / datas.usdRate.sale)).toFixed(3));
  }
  if ((saleCurrency.value === "UAH") & (buyCurrency.value === "EUR")) {
    return (res = +(saleCount * (1 / datas.eurRate.sale)).toFixed(3));
  }
  if ((saleCurrency.value === "EUR") & (buyCurrency.value === "USD")) {
    return (res = +(saleCount * (1 / datas.crossRate.buy)).toFixed(3));
  }
  if ((saleCurrency.value === "EUR") & (buyCurrency.value === "UAH")) {
    return (res = +(saleCount * datas.eurRate.buy).toFixed(3));
  }
  if ((saleCurrency.value === "USD") & (buyCurrency.value === "EUR")) {
    return (res = +(saleCount * (1 / datas.crossRate.buy)).toFixed(3));
  }
  if ((saleCurrency.value === "USD") & (buyCurrency.value === "UAH")) {
    return (res = +(saleCount * datas.usdRate.buy).toFixed(3));
  }

  return res;
};

export const onChangeBuy = (datas, buyCount, saleCurrency, buyCurrency) => {
  let res = 0;
  
  if (saleCurrency.value === buyCurrency.value) return (res = buyCount);
  if ((saleCurrency.value === "UAH") & (buyCurrency.value === "USD")) {
    return (res = +(buyCount * datas.usdRate.sale).toFixed(3));
  }
  if ((saleCurrency.value === "UAH") & (buyCurrency.value === "EUR")) {
    return (res = +(buyCount * datas.eurRate.sale).toFixed(3));
  }
  if ((saleCurrency.value === "EUR") & (buyCurrency.value === "USD")) {
    return (res = +(buyCount * datas.crossRate.buy).toFixed(3));
  }
  if ((saleCurrency.value === "EUR") & (buyCurrency.value === "UAH")) {
    return (res = +(buyCount * (1 / datas.eurRate.buy)).toFixed(3));
  }
  if ((saleCurrency.value === "USD") & (buyCurrency.value === "EUR")) {
    return (res = +(buyCount * (1 / datas.crossRate.sale)).toFixed(3));
  }
  if ((saleCurrency.value === "USD") & (buyCurrency.value === "UAH")) {
    return (res = +(buyCount * (1 / datas.usdRate.buy)).toFixed(3));
  }

  return res;
};
