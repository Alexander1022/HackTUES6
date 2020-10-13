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

button.addEventListener('click', function(name)
{
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
    debugger
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


    var today = new Date();
    var dd = String(today.getDate() - 1);
    var mm = String(today.getMonth() + 1);
    today = mm + '/' + dd + '/' + '20';

    var tomorrow_last_week = new Date();
    var pastDate = tomorrow_last_week.getDate() - 7;
    tomorrow_last_week.setDate(pastDate);
    var last_week_day = String(tomorrow_last_week.getDate() - 1);
    var mm = String(tomorrow_last_week.getMonth() + 1);
    last_week_info = 10 + '/' + last_week_day + '/' + '20';

    var next_day = new Date();
    var pastDate = next_day.getDate() - 7;
    next_day.setDate(pastDate);
    var weeky = String(next_day.getDate());
    var mm = String(next_day.getMonth() + 1);
    next_day_week_info = mm + '/' + weeky + '/' + '20';


    cases1 = data['timeline']['cases'][today];
    cases2 = data['timeline']['cases'][last_week_info];
    cases3 = data['timeline']['cases'][next_day_week_info];

    death1 = data['timeline']['deaths'][today];
    death2 = data['timeline']['deaths'][last_week_info];
    death3 = data['timeline']['deaths'][next_day_week_info];

    rec1 = data['timeline']['recovered'][today];
    rec2 = data['timeline']['recovered'][last_week_info];
    rec3 = data['timeline']['recovered'][next_day_week_info];


    document.querySelector(".predics_tom").innerHTML = 'General cases : ' + ~~(cases1 / cases2 * cases3);
    document.querySelector(".predics_deaths").innerHTML = 'Death cases : ' + ~~(death1 / death2 * death3); 
    document.querySelector(".predics_rec").innerHTML = 'Recovered cases : ' + ~~(rec1 / rec2 * rec3);

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

.catch(err => {
    document.querySelector(".country").innerHTML = "Invalid country name or problem with API";
    document.querySelector(".act_cases").innerHTML = "-";
    document.querySelector('.deaths').innerHTML = "-";
    document.querySelector('.recovered').innerHTML = "-";
    document.querySelector(".predics_tom").innerHTML = 'Wrong country or API is broken ';
    document.querySelector(".predics_deaths").innerHTML = 'Wrong country or API is broken '; 
    document.querySelector(".predics_rec").innerHTML = 'Wrong country or API is broken ';
})
})



