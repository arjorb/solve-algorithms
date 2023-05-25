const numberFormat = function (number) {
  return new Intl.NumberFormat("en-US").format(number);
};
