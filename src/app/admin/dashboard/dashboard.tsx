'use client';

import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function NewDashboard() {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [300, 500, 800, 650, 900],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Tickets', 'Gifts'],
    datasets: [
      {
        label: 'Order Types',
        data: [120, 80],
        backgroundColor: ['#4CAF50', '#FF9800'],
      },
    ],
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-black mb-6">📊 CHARTS (May) </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-bold text-black">Total Revenue</h2>
          <p className="text-2xl text-blue-700">$3,150</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-bold text-black">Tickets + Orders</h2>
          <p className="text-2xl text-green-700">212</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-lg font-bold text-black">Gift Orders</h2>
          <p className="text-2xl text-orange-600">80</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-black mb-4">Monthly Revenue</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-black mb-4">Order Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </main>
  );
}
