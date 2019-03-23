<<<<<<< HEAD
console.log("test");
console.log("Like");

// x-axis
var days = [1,2,3,4,5,6,7];
// plot data
var sleepHours = [6, 8, 5, 7, 8 ,5, 10];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      { 
        data: sleepHours,
        label: "Hours Slept"
      }
    ]
  }
});
=======
//testing script for javascript
console.log("test");
console.log("Like");
>>>>>>> 1ab7e187d39952c891c3d87852ec831eec6278dd
