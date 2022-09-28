async function currencyLoader() {
  let currItem;
  const url =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let idx = 0;
      currItem = data.map((item) => {
        let cItem = { id: idx, name: item.ccy, buy: +(item.buy), sale: +(item.sale) };
        return cItem;
      });
    });

  currItem.pop();
  
  return currItem;
}

export default currencyLoader;
