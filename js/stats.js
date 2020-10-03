var button = document.querySelector('.btn')
var input = document.querySelector('.in_value')

var ctx = document.getElementById('rightChart');
var ctx2 = document.getElementById('leftChart');

fetch('https://disease.sh/v3/covid-19/all')
.then(response => response.json())
.then(data => {
    document.querySelector(".country").innerHTML = "Global";
    document.querySelector(".act_cases").innerHTML = "General cases : +" + data['todayCases'];
    document.querySelector('.deaths').innerHTML = "Death cases : +" + data['todayDeaths'];
    document.querySelector('.recovered').innerHTML = "Recovered cases : +" + data['todayRecovered'];
})
.catch(err => {
        document.querySelector(".country").innerHTML = "-";
        document.querySelector(".act_cases").innerHTML = "-";
        document.querySelector('.deaths').innerHTML = "-";
        document.querySelector('.recovered').innerHTML = "-";
})

button.addEventListener('click', function(name){
    console.log('The location is ' + input.value);
    fetch('https://disease.sh/v3/covid-19/countries/' + input.value)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".country").innerHTML = data['country'];
        document.querySelector(".act_cases").innerHTML = "General cases : +" + data['todayCases'];
        document.querySelector('.deaths').innerHTML = "Death cases : +" + data['todayDeaths'];
        document.querySelector('.recovered').innerHTML = "Recovered cases : +" + data['todayRecovered'];
    })
    
    .catch(err => {
        document.querySelector(".country").innerHTML = "-";
        document.querySelector(".act_cases").innerHTML = "-";
        document.querySelector('.deaths').innerHTML = "-";
        document.querySelector('.recovered').innerHTML = "-";
    })
    })

fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
.then(response => response.json())
.then(data => {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10th June', '10th July', '10th August', '10th September'],
            datasets: [{
                label: 'Global COVID-19 Cases in last 120 days',
                data: [data['cases']['6/10/20'], data['cases']['6/15/20'], data['cases']['7/10/20'], data['cases']['7/15/20'], data['cases']['8/10/20'], data['cases']['8/15/20'], data['cases']['9/10/20'], data['cases'['9/15/20']]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['10th June', '10th July', '10th August', '10th September'],
            datasets: [{
                label: 'Global COVID-19 Cases in last 120 days',
                data: [data['cases']['6/10/20'], data['cases']['6/15/20'], data['cases']['7/10/20'], data['cases']['7/15/20'], data['cases']['8/10/20'], data['cases']['8/15/20'], data['cases']['9/10/20'], data['cases'['9/15/20']]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
})

