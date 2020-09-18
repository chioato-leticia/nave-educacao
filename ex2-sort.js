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
  if (a.value < b.value) {
    return 1;
  }
  if (a.value > b.value) {
    return -1;
  }
  return 0;
});

// console.log(installmentDesc);

const orderIstallment = installments.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  if (a.installment_number < b.installment_number) {
    return 1;
  }
  if (a.installment_number > b.installment_number) {
    return -1;
  }
  return 0;
});

console.log(orderIstallment);
