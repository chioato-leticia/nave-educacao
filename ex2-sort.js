const installments = [
  {
    installment_number: 1,
    value: 123.45,
    status: "Pago",
  },
  {
    installment_number: 2,
    value: 139.88,
    status: "Pago",
  },
  {
    installment_number: 3,
    value: 123.45,
    status: "Pago",
  },
  {
    installment_number: 4,
    value: 182.37,
    status: "Aberto",
  },
  {
    installment_number: 5,
    value: 133.93,
    status: "Aberto",
  },
];

const installmentDesc = installments.sort((a, b) => {
  return b.value - a.value;
});

// console.log(installmentDesc);

const orderIstallment = installments.sort((a, b) => {
  if (a.value - b.value !== 0) return a.value - b.value;
  if (b.value - a.value !== 0) return b.value - a.value;
  if (b.installment_number - a.installment_number !== 0)
    return b.installment_number - a.installment_number;
});

console.log(orderIstallment);
