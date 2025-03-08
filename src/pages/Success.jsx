import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { purchasedItems, totalAmount } = location.state || { purchasedItems: [], totalAmount: 0 };

  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        {/* Thank You Message (Outside the Box) */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Thank You for Your Purchase!
        </h1>

        {/* Centered and Small-Sized Box */}
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Purchased Items
            </h2>
            <ul>
              {purchasedItems.map((item) => (
                <li key={item.id} className="border-b border-gray-200 dark:border-gray-700 py-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                    <span className="text-gray-800 dark:text-gray-300">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">Total Amount</span>
                <span className="text-gray-800 dark:text-gray-300 font-bold">
                  ₹ {totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;