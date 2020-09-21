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
  return a.value - b.value || b.installment_number - a.installment_number;
});
console.log(orderIstallment);

console.log(orderIstallment);
