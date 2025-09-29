// ClickEarnChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ClickEarnChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Example data
    datasets: [
      {
        label: 'Clicks',
        data: [80, 60, 45, 40, 30], // Example data
        borderColor: '#4FD1C5', // Teal color
        backgroundColor: 'rgba(79, 209, 197, 0.2)', // Light teal
        fill: true,
        tension: 0.3,
        borderWidth: 4,
        pointRadius: 5,
        pointBackgroundColor: '#4FD1C5',
        pointHoverRadius: 7,
      },
      {
        label: 'Earn Amount',
        data: [10, 7, 6, 4, 3], // Example data
        borderColor: '#F6AD55', // Orange color
        backgroundColor: 'rgba(246, 173, 85, 0.2)', // Light orange
        fill: true,
        tension: 0.3,
        borderWidth: 4,
        pointRadius: 5,
        pointBackgroundColor: '#F6AD55',
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16,
            weight: '600',
          },
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#1a202c',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#2d3748',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          font: {
            size: 14,
            weight: '500',
          },
          color: '#4A5568', // Subtle text color
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines
        },
        ticks: {
          font: {
            size: 14,
            weight: '500',
          },
          color: '#4A5568', // Subtle text color
        },
      },
    },
  };

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-2xl w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-white text-3xl font-extrabold mb-6">Click & Earn Report</h2>
      <div className="h-80 bg-white rounded-xl shadow-lg p-6">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ClickEarnChart;

// // ClickEarnChart.jsx
// import React from 'react';
// import { Bar } from 'react-chartjs-2';  // Import Bar chart component from chart.js
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,  // Import BarElement for bar chart rendering
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,  // Register the BarElement for bar charts
//   Title,
//   Tooltip,
//   Legend
// );

// const ClickEarnChart = () => {
//   const data = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Example data
//     datasets: [
//       {
//         label: 'Clicks',
//         data: [80, 60, 45, 40, 30], // Example data
//         backgroundColor: '#4FD1C5', // Teal color for bars
//         borderColor: '#4FD1C5', // Border color for the bars
//         borderWidth: 2,
//       },
//       {
//         label: 'Earn Amount',
//         data: [10, 7, 6, 4, 3], // Example data
//         backgroundColor: '#F6AD55', // Orange color for bars
//         borderColor: '#F6AD55', // Border color for the bars
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           font: {
//             size: 16,
//             weight: '600',
//           },
//           padding: 20,
//         },
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//         backgroundColor: '#1a202c',
//         titleColor: '#fff',
//         bodyColor: '#fff',
//         borderColor: '#2d3748',
//         borderWidth: 1,
//         padding: 10,
//         callbacks: {
//           label: (context) => {
//             return `${context.dataset.label}: $${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Remove grid lines
//         },
//         ticks: {
//           font: {
//             size: 14,
//             weight: '500',
//           },
//           color: '#4A5568', // Subtle text color
//         },
//       },
//       y: {
//         grid: {
//           display: false, // Remove grid lines
//         },
//         ticks: {
//           font: {
//             size: 14,
//             weight: '500',
//           },
//           color: '#4A5568', // Subtle text color
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-2xl w-full max-w-4xl mx-auto mt-10">
//       <h2 className="text-white text-3xl font-extrabold mb-6">Click & Earn Report</h2>
//       <div className="h-80 bg-white rounded-xl shadow-lg p-6">
//         <Bar data={data} options={options} /> {/* Use Bar chart component */}
//       </div>
//     </div>
//   );
// };

// export default ClickEarnChart;

