import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

const Cart = ({ cartItems, updateQuantity, clearCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle the checkout confirmation
  const handleCheckout = () => {
    setShowConfirmation(true);
  };

  // Function to handle the payment confirmation
  const handleConfirmPayment = () => {
    setIsLoading(true);
    setShowConfirmation(false);

    // Simulate a payment processing delay
    setTimeout(() => {
      setIsLoading(false);
      navigate("/success", {
        state: {
          purchasedItems: cartItems,
          totalAmount: calculateTotal(),
        },
      });
      clearCart()
    }, 2000); // 2 seconds delay for simulation
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3 pb-15">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Cart Items
                </h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="border-b border-gray-200 dark:border-gray-700 py-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            ₹ {item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-800 dark:text-gray-300">Quantity:</span>
                          {/* Minus Button */}
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                            disabled={item.quantity <= 1} // Disable if quantity is 1
                          >
                            -
                          </button>
                          <span className="text-gray-800 dark:text-gray-300">{item.quantity}</span>
                          {/* Plus Button */}
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                          >
                            +
                          </button>
                          <span className="text-gray-800 dark:text-gray-300 font-bold">
                            ₹ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Clear Cart Button (only shown if cart is not empty) */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={clearCart}
                    className="w-fit bg-red-500 text-white px-3 py-1 rounded-md font-semibold hover:bg-red-600 transition duration-300 text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Checkout Section (only shown if cart is not empty) */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Checkout
                </h2>
                <div className="space-y-4">
                  {/* Display each item's name and total price */}
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                      <span className="text-gray-800 dark:text-gray-300">
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  {/* Subtotal */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400 font-semibold">
                        Subtotal
                      </span>
                      <span className="text-gray-800 dark:text-gray-300 font-bold">
                        ₹ {calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {/* Proceed to Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300 mt-4"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Popup */}
        {showConfirmation && (
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Confirm Payment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Are you sure you want to proceed with the payment?
              </p>
              <ul className="mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                    <span className="text-gray-800 dark:text-gray-300">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Subtotal in Popup */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">
                    Subtotal
                  </span>
                  <span className="text-gray-800 dark:text-gray-300 font-bold">
                    ₹ {calculateTotal().toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPayment}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Animation */}
        {isLoading && (
          <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
              </div>
              <p className="text-gray-800 dark:text-white mt-4">Processing payment...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;