const calculatorContainer = document.querySelector(".calculator-wrapper");
const labels = calculatorContainer.querySelectorAll(".cal-label");
const requireds = calculatorContainer.querySelectorAll(".required");
const monthlyPaymentField = calculatorContainer.querySelector(".amount");
const debtAmountField = calculatorContainer.querySelector(".debt-amount");
const interestAmountField = calculatorContainer.querySelector(".vig-amount");
const costsField = calculatorContainer.querySelector(".costs");
const hitCalculatePayments = calculatorContainer.querySelector(".hit-calculate");
const hitReset = calculatorContainer.querySelector(".hit-reset");
const resultsContainer = document.querySelector(".results-container");
const originalDebt = calculatorContainer.querySelector(".original-debt");
const monthsOFRepayment = calculatorContainer.querySelector(".months-of-repayment");
const costsOFExecution = calculatorContainer.querySelector(".costs-of-execution");
const vigs = calculatorContainer.querySelector(".vigs");
const totalOFPaid = calculatorContainer.querySelector(".total-of-paid");
const isITWorthToRepay = calculatorContainer.querySelector(".is-worth");

function calculatePayments() {
    let monthlyPayment = parseFloat(monthlyPaymentField.value);
    let debtAmount = parseFloat(debtAmountField.value);
    let vigAmount = parseFloat(interestAmountField.value) / 100;
    let costsAmount = parseFloat(costsField.value);

    let wholeDebt = debtAmount + costsAmount;
    let remainingDebt = wholeDebt;
    let totalInterests = 0;
    let months = 0;

    while (remainingDebt > 0) {
        let monthlyInterest = (remainingDebt * vigAmount) / 12;

        if (monthlyPayment <= monthlyInterest) {
            const calculatorResultMessage = calculatorContainer.querySelector(".calculator-result-msg");
            resultsContainer.style.display = "block";
            calculatorResultMessage.innerHTML = "Splátka je příliš nízka";
            isITWorthToRepay.innerHTML = "";
            // return;
        };

        totalInterests += monthlyInterest;
        remainingDebt -= (monthlyPayment - monthlyInterest);
        months++;
    };

    requireds.forEach((requiredField) => {
        requiredField.textContent = "";
        requiredField.style.color = "";
    });

    monthlyPaymentField.style.border = "";
    debtAmountField.style.border = "";
    interestAmountField.style.border = "";
    costsField.style.border = "";

    if (monthlyPaymentField.value) {
        requireds[0].textContent = `"${labels[0].textContent}" Správně.`;
        monthlyPaymentField.style.border = "1.5px solid #28a745";
        requireds[0].style.color = "#28a745";
    };

    if (debtAmountField.value) {
        requireds[1].textContent = `"${labels[1].textContent}" Správně.`;
        debtAmountField.style.border = "1.5px solid #28a745";
        requireds[1].style.color = "#28a745";
    };

    if (interestAmountField.value) {
        requireds[2].textContent = `"${labels[2].textContent}" Správně.`;
        interestAmountField.style.border = "1.5px solid #28a745";
        requireds[2].style.color = "#28a745";
    };

    if (costsField.value) {
        requireds[3].textContent = `"${labels[3].textContent}" Správně.`;
        costsField.style.border = "1.5px solid #28a745";
        requireds[3].style.color = "#28a745";
    };

    if (!monthlyPaymentField.value) {
        requireds[0].textContent = `"${labels[0].textContent}" Správně.`;
        monthlyPaymentField.style.border = "1.5px solid #ff0000";
        requireds[0].style.color = "#ff0000";
    };

    if (!debtAmountField.value) {
        requireds[1].textContent = `"${labels[1].textContent}" musí být vyplněná.`;
        debtAmountField.style.border = "1.5px solid #ff0000";
        requireds[1].style.color = "#ff0000";
    };

    if (!interestAmountField.value) {
        requireds[2].textContent = `"${labels[2].textContent}" musí být vyplněná.`;
        interestAmountField.style.border = "1.5px solid #ff0000";
        requireds[2].style.color = "#ff0000";
    };

    if (!costsField.value) {
        requireds[3].textContent = `"${labels[3].textContent}" musí být vyplněná.`;
        costsField.style.border = "1.5px solid #ff0000";
        requireds[3].style.color = "#ff0000";
    };

    if (
        monthlyPaymentField.value
        &&
        debtAmountField.value
        &&
        interestAmountField.value
        &&
        costsField.value
    ) {
        resultsContainer.style.display = "block";

        // monthlyPaymentField.value = "";
        // debtAmountField.value = "";
        // interestAmountField.value = "";
        // costsField.value = "";

        monthlyPaymentField.style.border = "";
        debtAmountField.style.border = "";
        interestAmountField.style.border = "";
        costsField.style.border = "";

        requireds[0].textContent = "";
        requireds[0].style.color = "";

        requireds[1].textContent = "";
        requireds[1].style.color = "";

        requireds[2].textContent = "";
        requireds[2].style.color = "";

        requireds[3].textContent = "";
        requireds[3].style.color = "";
    };

    let totalPaid = wholeDebt + totalInterests;

    originalDebt.innerHTML =
    `Původní Dluh <span>${formatNumber(debtAmountField.value)}</span> Kč`;
    monthsOFRepayment.innerHTML = 
    `Doba splácení: <span>${formatNumber(months)} měsíců</span>, (${formatNumber((months / 12).toFixed(1))} let)`;
    costsOFExecution.innerHTML =
    `Z toho náklady exekutora: <span>${formatNumber(costsField.value)}</span> Kč`;
    vigs.innerHTML =
    `Z toho úroky: <span>${formatNumber(totalInterests.toFixed(2))}</span> Kč`;
    totalOFPaid.innerHTML =
    `Celkem zaplatím: <span>${formatNumber(totalPaid.toFixed(2))}</span> Kč`;

    if (totalPaid.toFixed(2) <= 50000) {
        isITWorthToRepay.innerHTML = "✅ 100% možnost schválení splátkového kalendáře, nejsou potřeba další úkony k umoření Vašich dluhů.";
    } else if (totalPaid.toFixed(2) >= 100000) {
        isITWorthToRepay.innerHTML = "✅ 100% možnost schválení splátkového kalendáře, nejsou potřeba další úkony k umoření Vašich dluhů.";
    } else if (totalPaid.toFixed(2) >= 500000) {
        isITWorthToRepay.innerHTML = "❌ Nevyplatí se splácet, nízká šance o požádání o splátkový kalendář, zvažte dražbu Vašeho majetku.";
    } else if (totalPaid.toFixed(2) >= 750000) {
        isITWorthToRepay.innerHTML = "❌ Nevyplatí se splácet, nízká šance o požádání o splátkový kalendář, zvažte dražbu Vašeho majetku.";
    } else if (totalPaid.toFixed(2) >= 1000000) {
        isITWorthToRepay.innerHTML = "❌ Nelze požádat o splátkový kalendář, zvažte dražbu vašeho majetku, ale nejprve kontaktujte Soudního Exekutora.";
    };
};

function formatNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function resetFields() {
    const originalDebt = calculatorContainer.querySelector(".original-debt");
    const monthsOFRepayment = calculatorContainer.querySelector(".months-of-repayment");
    const costsOFExecution = calculatorContainer.querySelector(".costs-of-execution");
    const vigs = calculatorContainer.querySelector(".vigs");
    const totalOFPaid = calculatorContainer.querySelector(".total-of-paid");
    const isITWorthToRepay = calculatorContainer.querySelector(".is-worth");
    const calculatorResultMessage = calculatorContainer.querySelector(".calculator-result-msg");

    requireds.forEach((requiredField) => {
        requiredField.textContent = "";
        requiredField.style.color = "";
    });

    if (monthlyPaymentField.value && debtAmountField.value && interestAmountField.value && costsField.value) {
        monthlyPaymentField.value = "";
        debtAmountField.value = "";
        interestAmountField.value = "";
        costsField.value = "";

        resultsContainer.style.display = "none";

        originalDebt.innerHTML = "";
        monthsOFRepayment.innerHTML = "";
        costsOFExecution.innerHTML = "";
        vigs.innerHTML = "";
        totalOFPaid.innerHTML = "";
        isITWorthToRepay.innerHTML = "";
        calculatorResultMessage.innerHTML = "";
    } else {
        requireds.forEach((requiredField) => {
            requiredField.textContent = "Nesmí být prázdné.";
            requiredField.style.color = "#ff0000";
        });
    };
};

hitCalculatePayments.addEventListener("click", function() {
    calculatePayments();
    // resetFields();
});

hitReset.addEventListener("click", resetFields);