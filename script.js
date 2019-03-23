var canvas = document.getElementById('myChart');
var data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
        {
            label: "Hours You've Slept",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [5, 8, 4, 9, 8, 7, 9, 10],
        }
    ]
};

function addData(newData){
	myLineChart.data.datasets[0].data[data.labels.length] = Number(newData);
	myLineChart.data.labels[data.labels.length] = "Day " + Number(data.labels.length + 1);
	myLineChart.update();
}

var option = {
	showLines: true,
	responsive:true,
	maintainAspectRatio: false
};
var myLineChart = Chart.Line(canvas,{
	data:data,
  options:option
});

var sleepInput = 0;
function getUserInput() {
    sleepInput = Number(document.getElementById("sleep-input").value);
    console.log("sleepInput = " + sleepInput);
    if (sleepInput == 0) {
    	console.log("please enter the amount of hours you slept");
    } else {
    	if (isNaN(sleepInput)) {
    		console.log("enter a number");
    	} else {
    		addData(sleepInput);
    	}
    }
}
