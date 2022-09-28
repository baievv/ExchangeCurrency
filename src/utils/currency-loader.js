async function currencyLoader() {
  const currItem = { eurRate: {}, usdRate: {}, crossRate: {}, error: "" };
  const url =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      currItem.usdRate = {
        buy: +data[0].buy,
        sale: +data[0].sale,
      };
      currItem.eurRate = {
        buy: +data[1].buy,
        sale: +data[1].sale,
      };
      currItem.crossRate = {
        buy: +(data[0].buy / data[1].buy).toFixed(3),
        sale: +(data[0].sale / data[1].sale).toFixed(3),
      };
    })
    .catch(() => {
      currItem.error =
        "Sorry, may be Privatbank dwarfs dont want to sharing their data";
    });
  return currItem;
}

export default currencyLoader;
