//todo barchart code from chart.js
const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Sale",
        data: [50, 70, 90, 80, 60],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(153, 102, 255)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
         min:0,
         max:90,
        ticks:{
            stepSize : 10,
        }
      },
    },
  },
});


//todo animation from anime.js

//animation on heading
let heading = document.querySelector("p");
console.log(heading.innerText);
heading.innerHTML = heading.innerText.split("").map(function(char){
    return "<span>"+char+"</span>";
}).join("");

anime.timeline({loop:true})
.add({
    targets : "p span",
    translateY:["-40px",0],
    delay:function(element,i){
        return i*50
    }
})

//animation of div container which have chart
var container = document.querySelector('div');
anime({
    targets: container,
    translateX:["-1000px",0],
});