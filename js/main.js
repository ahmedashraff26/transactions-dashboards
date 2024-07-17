
$('#graphBtn').on('click', function () {
    $('#transactions').addClass('d-none');
    $('#transactions').removeClass('d-block');

    $('#graphBtn').addClass('active');
    $('#transactionsBtn').removeClass('active');
    $('#homeBtn').removeClass('active');

    $('#transaction-graph').addClass('d-block');
    $('#transaction-graph').removeClass('d-none');

    $('#home').addClass('d-none');
    $('#home').removeClass('d-block');
})

$('#viewTransactionsBtn').on('click', function () {
    $('#transactions').removeClass('d-none');
    $('#transactions').addClass('d-block');

    $('#graphBtn').removeClass('active');
    $('#homeBtn').removeClass('active');
    $('#transactionsBtn').addClass('active');

    $('#transaction-graph').removeClass('d-block');
    $('#transaction-graph').addClass('d-none');

    $('#home').addClass('d-none');
    $('#home').removeClass('d-block');
})

$('#viewGrapgBtn').on('click', function () {
    $('#transactions').addClass('d-none');
    $('#transactions').removeClass('d-block');

    $('#graphBtn').addClass('active');
    $('#transactionsBtn').removeClass('active');
    $('#homeBtn').removeClass('active');

    $('#transaction-graph').addClass('d-block');
    $('#transaction-graph').removeClass('d-none');

    $('#home').addClass('d-none');
    $('#home').removeClass('d-block');
})

$('#transactionsBtn').on('click', function () {
    $('#transactions').removeClass('d-none');
    $('#transactions').addClass('d-block');

    $('#graphBtn').removeClass('active');
    $('#homeBtn').removeClass('active');
    $('#transactionsBtn').addClass('active');

    $('#transaction-graph').removeClass('d-block');
    $('#transaction-graph').addClass('d-none');

    $('#home').addClass('d-none');
    $('#home').removeClass('d-block');
})

$('#homeBtn').on('click', function () {
    $('#home').removeClass('d-none');
    $('#home').addClass('d-block');

    $('#graphBtn').removeClass('active');
    $('#homeBtn').addClass('active');
    $('#transactionsBtn').removeClass('active');

    $('#transactions').removeClass('d-block');
    $('#transactions').addClass('d-none');

    $('#transaction-graph').removeClass('d-block');
    $('#transaction-graph').addClass('d-none');
})

const data = {
    customers: [
        { id: 1, name: "Ahmed Ali" },
        { id: 2, name: "Aya Elsayed" },
        { id: 3, name: "Mina Adel" },
        { id: 4, name: "Sarah Reda" },
        { id: 5, name: "Mohamed Sayed" },
        { id: 6, name: "Marwan Ayman" },
        { id: 7, name: "Malak Salah" },
    ],
    transactions: [
        { id: 1, customer_id: 1, date: "2022-01-01", amount: 1000 },
        { id: 2, customer_id: 1, date: "2022-01-02", amount: 2000 },
        { id: 3, customer_id: 2, date: "2022-01-01", amount: 550 },
        { id: 4, customer_id: 3, date: "2022-01-01", amount: 500 },
        { id: 5, customer_id: 2, date: "2022-01-02", amount: 1300 },
        { id: 6, customer_id: 4, date: "2022-01-01", amount: 750 },
        { id: 7, customer_id: 3, date: "2022-01-02", amount: 1250 },
        { id: 8, customer_id: 5, date: "2022-01-01", amount: 2500 },
        { id: 9, customer_id: 5, date: "2022-01-02", amount: 875 },
        { id: 11, customer_id: 6, date: "2022-01-02", amount: 875 },
        { id: 12, customer_id: 5, date: "2022-01-03", amount: 875 },
        { id: 14, customer_id: 6, date: "2022-01-03", amount: 600 },
        { id: 15, customer_id: 5, date: "2022-01-03", amount: 850 },
        { id: 16, customer_id: 6, date: "2022-01-03", amount: 1500 },
        { id: 18, customer_id: 3, date: "2022-01-03", amount: 350 },
        { id: 19, customer_id: 1, date: "2022-01-03", amount: 700 },
        { id: 20, customer_id: 4, date: "2022-01-03", amount: 550 },
        { id: 21, customer_id: 1, date: "2022-01-03", amount: 600 },
        { id: 22, customer_id: 5, date: "2022-01-03", amount: 250 },
        { id: 23, customer_id: 5, date: "2022-01-03", amount: 875 },
        { id: 24, customer_id: 7, date: "2022-01-04", amount: 950 },
        { id: 25, customer_id: 6, date: "2022-01-04", amount: 600 },
        { id: 26, customer_id: 5, date: "2022-01-04", amount: 850 },
        { id: 27, customer_id: 1, date: "2022-01-04", amount: 1500 },
        { id: 28, customer_id: 2, date: "2022-01-04", amount: 1300 },
        { id: 29, customer_id: 3, date: "2022-01-04", amount: 350 },
        { id: 30, customer_id: 3, date: "2022-01-04", amount: 700 },
        { id: 31, customer_id: 1, date: "2022-01-04", amount: 550 },
        { id: 32, customer_id: 4, date: "2022-01-04", amount: 600 },
    ]
};



function displayTable(data) {
    let displayedData = []
    for (let i = 0; i < data.transactions.length; i++) {
        let name;
        let amountRow;
        let newData;
        for (let j = 0; j < data.customers.length; j++) {
            if (data.transactions[i].customer_id == data.customers[j].id) {
                name = data.customers[j].name;
            }
        }
        amountRow = `<td class="amount income">$${data.transactions[i].amount}</td>`
        newData = { name: name, date: data.transactions[i].date, amountRow: amountRow };
        displayedData.push(newData);
    }
    displayData(displayedData);
}

function displayData(data) {
    let textContainer = "";
    for (let i = 0; i < data.length; i++) {
        textContainer += `
        <tr>
                        <td>${data[i].date}</td>
                        <td>${data[i].name}</td>
                        ${data[i].amountRow}
                    </tr>
        `
    }
    $('#tableBody').html(textContainer);
}

displayTable(data);

$('#nameFilterBtn').on('click', function () {
    if ($('#nameInput').val() != "") {
        nameSearch($('#nameInput').val());

    } else {
        displayTable(data);
    }
    $('#nameInput').val("");
})

$('#amountFilterBtn').on('click', function () {
    if ($('#minAmount').val() == "" && $('#maxAmount').val() == "") {
        displayTable(data);
    }
    else {
        filterByAmount($('#minAmount').val(), $('#maxAmount').val())
    }
    $('#minAmount').val("");
    $('#maxAmount').val("");
})

function nameSearch(nameInput) {
    let filteredData = [];
    let name;
    for (let i = 0; i < data.transactions.length; i++) {
        let newData;
        let amountRow;
        for (let j = 0; j < data.customers.length; j++) {
            if (data.transactions[i].customer_id == data.customers[j].id) {
                name = data.customers[j].name;
            }
        }
        amountRow = `<td class="amount income">$${data.transactions[i].amount}</td>`
        let smName = name.toLocaleLowerCase();
        let smNameInput = nameInput.toLocaleLowerCase();
        if (smName.includes(smNameInput)) {
            newData = { name: name, date: data.transactions[i].date, amountRow: amountRow };
            filteredData.push(newData);
        }
    }
    displayData(filteredData);
}

function filterByAmount(min, max) {
    let filteredData = [];
    let name;
    for (let i = 0; i < data.transactions.length; i++) {
        let newData;
        let amountRow;
        for (let j = 0; j < data.customers.length; j++) {
            if (data.transactions[i].customer_id == data.customers[j].id) {
                name = data.customers[j].name;
            }
        }
        amountRow = `<td class="amount income">+$${data.transactions[i].amount}</td>`

        if (min == "" && data.transactions[i].amount <= max) {
            newData = { name: name, date: data.transactions[i].date, amountRow: amountRow };
            filteredData.push(newData);
        }
        else if (max == "" && data.transactions[i].amount >= min) {
            newData = { name: name, date: data.transactions[i].date, amountRow: amountRow };
            filteredData.push(newData);
        }
        else if (data.transactions[i].amount >= min && data.transactions[i].amount <= max) {
            newData = { name: name, date: data.transactions[i].date, amountRow: amountRow };
            filteredData.push(newData);
        }
    }
    displayData(filteredData);
}





const ctx = document.getElementById('transactionsChart').getContext('2d');
const transactionsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: `Total Transactions Amount`,
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Total Amount'
                }
            }
        }
    }
});

let selectedCustomerId = data.customers[0].id;
updateChartData(selectedCustomerId);

$('#customerDropdown').on('change', function () {
    selectedCustomerId = Number($('#customerDropdown').val());
    updateChartData(selectedCustomerId);
})



function updateChartData(customerId) {
    const selectedCustomerTransactions = data.transactions.filter(transaction => transaction.customer_id === customerId);

    const dailyTotals = {};
    selectedCustomerTransactions.forEach(transaction => {
        const date = transaction.date;
        const amount = transaction.amount;
        if (dailyTotals[date]) {
            dailyTotals[date] += amount;
        } else {
            dailyTotals[date] = amount;
        }
    });

    const dates = Object.keys(dailyTotals);
    const totals = dates.map(date => dailyTotals[date]);

    transactionsChart.data.labels = dates;
    transactionsChart.data.datasets[0].data = totals;
    transactionsChart.update();
}






function populateDropdown() {
    const dropdown = document.getElementById('customerDropdown');
    dropdown.innerHTML = '';

    data.customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = customer.name;
        dropdown.appendChild(option);
    });
}
populateDropdown();