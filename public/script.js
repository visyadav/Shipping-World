// document.addEventListener('DOMContentLoaded', function () {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('.main'),
//       smooth: true,
// //       Add more options as needed
//     });
//   });


// var options = {
//   chart: {
//     type: 'bar'
//   },
//   series: [{
//     name: 'sales',
//     data: [30,40,45,50,160,60,70,91,125,25]
//   }],
//   xaxis: {
//     categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999,2000]
//   }
// }

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();



