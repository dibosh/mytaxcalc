const app = angular.module('myTaxCalcApp', []);

app.controller(MainCtrl.name, MainCtrl);

function MainCtrl() {
  let vm = this;

  vm.state = {
    monthlySal: 0,
    isMarried: false,
    isPayingForParents: false,
    bonus: 0,
    taxPerMonth: 0.00
  };

  vm.calculate = () => {
    const { monthlySal, bonus, isMarried, isPayingForParents } = vm.state;
    const totalAnnualIncome = monthlySal * 12 + bonus;
    const annualTax = calculateAnnualTax(totalAnnualIncome, isMarried, isPayingForParents);
    vm.state.taxPerMonth = (annualTax / 12).toFixed(2);
  };
}