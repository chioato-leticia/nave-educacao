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

// const totalInstallments = installments.reduce((acc, obj) => {
//   return acc + obj.value;
// }, 0);
// console.log(totalInstallments.toFixed(2));

const totalInstallments = installments.reduce(
  (acc, obj) => {
    if (obj.status == "Pago") {
      return { ...acc, total_paid: acc.total_paid + obj.value };
    }
    if (obj.status == "Aberto") {
      return { ...acc, total_open: acc.total_open + obj.value };
    }
  },
  { total_paid: 0, total_open: 0 }
);

console.log(totalInstallments);
