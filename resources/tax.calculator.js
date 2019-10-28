/**
 * Formula based on malaysian tax
 */
const rates = [
  {
    amount: 5000,
    percent: 0
  },
  {
    amount: 15000,
    percent: 1
  },
  {
    amount: 15000,
    percent: 3
  },
  {
    amount: 15000,
    percent: 8
  },
  {
    amount: 20000,
    percent: 14
  },
  {
    amount: 30000,
    percent: 21
  },
  {
    amount: 150000,
    percent: 24
  },
  {
    amount: 150000,
    percent: 24.5
  },
  {
    amount: 200000,
    percent: 25
  },
  {
    amount: 400000,
    percent: 26
  }
];

function calculateAnnualTax(totalAnnualIncome, isMarried, isPayingForParents) {
  let taxAmount = 0;
  if (isMarried) {
    totalAnnualIncome -= 4000;
  }

  if (isPayingForParents) {
    totalAnnualIncome -= 9000;
  }

  for (let i = 0; i < rates.length; i++) {
    const { amount, percent } = rates[i];
    if (totalAnnualIncome > amount) {
      totalAnnualIncome -= amount;
      taxAmount += amount * (percent / 100)
    } else {
      taxAmount += totalAnnualIncome * (percent / 100);
      totalAnnualIncome -= totalAnnualIncome;
      break;
    }
  }

  return taxAmount;
}