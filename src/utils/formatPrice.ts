export const formatPrice = (valueInCents: number) => {
  const ValueInReais = valueInCents / 100;
  return ValueInReais.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};