import React from 'react';

const Orders = ({ onBack }) => {
  // Example dummy orders
  const orderHistory = [
    {
      id: 'ORD-1001',
      item: 'Wireless Headphones',
      status: 'Delivered',
      date: 'July 10, 2025',
    },
    {
      id: 'ORD-1002',
      item: 'Smart Watch',
      status: 'Shipped',
      date: 'July 18, 2025',
    },
    {
      id: 'ORD-1003',
      item: 'Phone Case',
      status: 'Processing',
      date: 'July 20, 2025',
    },
  ];

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Here’s your recent order history.
      </p>

      <ul className="space-y-4">
        {orderHistory.map(order => (
          <li
            key={order.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4"
          >
            <div className="flex justify-between mb-1">
              <span className="font-semibold">{order.item}</span>
              <span
                className={`text-sm font-medium ${
                  order.status === 'Delivered'
                    ? 'text-green-600'
                    : order.status === 'Shipped'
                    ? 'text-blue-500'
                    : 'text-yellow-500'
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Order ID: {order.id}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Date: {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
