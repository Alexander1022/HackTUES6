var button = document.querySelector('.btn')
var input = document.querySelector('.in_value')

//var ctx = document.getElementById('rightChart');
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';

fetch('https://disease.sh/v3/covid-19/all')
.then(response => response.json())
.then(data => {
    document.querySelector(".country").innerHTML = "Global - today";
    document.querySelector(".act_cases").innerHTML = "New cases : +" + data['todayCases'];
    document.querySelector('.deaths').innerHTML = "Death cases : +" + data['todayDeaths'];
    document.querySelector('.recovered').innerHTML = "Recovered cases : +" + data['todayRecovered'];
})
.catch(err => {
        document.querySelector(".country").innerHTML = "-";
        document.querySelector(".act_cases").innerHTML = "-";
        document.querySelector('.deaths').innerHTML = "-";
        document.querySelector('.recovered').innerHTML = "-";
})

fetch('https://disease.sh/v3/covid-19/historical/')
.then(response => response.json())
.then(data => { 
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            label: 'Graph',
            datasets: [
                {
                label: 'General cases',
                data: [0, 0],
                borderColor: 'red',
				backgroundColor: 'red',
				fill: false,
                backgroundColor: [
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)'
                ],
                borderColor: [
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)'
                ],
                borderWidth: 1
                
            }, 
            {
                label: 'Death cases',
                data: [0, 0],
                borderColor: 'blue',
				backgroundColor: 'blue',
				fill: false,
                backgroundColor: [
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)'
                ],
                borderColor: [
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)'
                ],
                borderWidth: 1
                 
            },
            {
                label: 'Recovered cases',
                data: [0, 0],
                borderColor: 'blue',
				backgroundColor: 'blue',
				fill: false,
                backgroundColor: [
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)'
                ],
                borderColor: [
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)'
                ],
                borderWidth: 1
                 
            }
        ] 
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

button.addEventListener('click', function(name){
    console.log('The location is ' + input.value);
    fetch('https://disease.sh/v3/covid-19/countries/' + input.value)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".country").innerHTML = data['country'] + ' - today';
        document.querySelector(".act_cases").innerHTML = "New cases : +" + data['todayCases'];
        document.querySelector('.deaths').innerHTML = "Death cases : +" + data['todayDeaths'];
        document.querySelector('.recovered').innerHTML = "Recovered cases : +" + data['todayRecovered'];
    })
    
    .catch(err => {
        document.querySelector(".country").innerHTML = "-";
        document.querySelector(".act_cases").innerHTML = "-";
        document.querySelector('.deaths').innerHTML = "-";
        document.querySelector('.recovered').innerHTML = "-";
    })

    fetch('https://disease.sh/v3/covid-19/historical/' +  input.value)
.then(response => response.json())
.then(data => { 
    var keys = Object.keys(data['timeline']['cases']);
    var general_first = keys[0];
    
    var general_last = keys[keys.length-1];
    

    var keys = Object.keys(data['timeline']['deaths']);
    var death_first = keys[0];
    var death_last = keys[keys.length-1];
    

    var keys = Object.keys(data['timeline']['recovered']);
    var rec_first = keys[0];
    var rec_last = keys[keys.length-1];
    
    //
    console.log(data['timeline']['cases'][death_first]);
    console.log(data['timeline']['cases'][general_last]);
    console.log(data['timeline']['deaths'][death_first]);
    console.log(data['timeline']['deaths'][death_last]);
    console.log(data['timeline']['recovered'][rec_first]);
    console.log(data['timeline']['recovered'][rec_last]);

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            label: 'Graph',
            datasets: [
                {
                label: 'General cases',
                data: [data['timeline']['cases'][death_first], data['timeline']['cases'][general_last]],
                borderColor: 'red',
				backgroundColor: 'red',
				fill: false,
                backgroundColor: [
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)',
                    'rgba(4,139,168, 0.2)'
                ],
                borderColor: [
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)',
                    'rgba(4,139,168, 1)'
                ],
                borderWidth: 1
                
            }, 
            {
                label: 'Death cases',
                data: [data['timeline']['deaths'][death_first], data['timeline']['deaths'][death_last]],
                borderColor: 'blue',
				backgroundColor: 'blue',
				fill: false,
                backgroundColor: [
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)',
                    'rgba(230,57,70, 0.2)'
                ],
                borderColor: [
                    'rgba(230,57,70, 1)',
                    'rgba(230,57,70, 1)',
                    'rgba(230,57,70, 1)',
                    'rgba(230,57,70, 1)',
                    'rgba(230,57,70, 1)',
                    'rgba(230,57,70, 1)'
                ],
                borderWidth: 1
                 
            },
            {
                label: 'Recovered cases',
                data: [data['timeline']['recovered'][rec_first], data['timeline']['recovered'][rec_last]],
                borderColor: 'blue',
				backgroundColor: 'blue',
				fill: false,
                backgroundColor: [
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)',
                    'rgba(42,157,143, 0.2)'
                ],
                borderColor: [
                    'rgba(42,157,143, 1)',
                    'rgba(42,157,143, 1)',
                    'rgba(42,157,143, 1)',
                    'rgba(42,157,143, 1)',
                    'rgba(42,157,143, 1)',
                    'rgba(42,157,143, 1)'
                ],
                borderWidth: 1
                 
            }
        ] 
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


    })



