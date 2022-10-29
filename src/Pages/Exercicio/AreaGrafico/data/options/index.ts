export const options = {
  responsive: true,

  scales: {
    y: {
      ticks: {
        color: "#fff",
      },
      beginAtZero: true,
    },
    x: {
      ticks: {
        color: "#fff",
      },
      beginAtZero: true,
    },
  },
  plugins: {
    
    legend: {
      display:false,
      text:'Ola',
      labels: {
        color: '#ffff'
    },
      position: "left" as const,
      font: {
        size: 15
    }
    },
    title: {
      color:'#fff',
      display: true,
      text: "Historico de evolução",
    },
  },
};
