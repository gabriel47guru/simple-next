export const formatCurrency = (_amount: string | number) => {
  const amount = `${_amount}`;
  if (isNaN(parseFloat(`${amount}`))) return "";

  var formattedNumber = parseFloat(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formattedNumber;
};
