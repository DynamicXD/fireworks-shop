import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Fireworks = ({ addToCart }) => {
  // List of fireworks with names, prices, and image paths
  const fireworks = [
    { id: 1, name: "Color Matches", price: 100, image: "color-matches.png" },
    { id: 2, name: "Electric Sparkler", price: 200, image: "electric-sparkler.png" },
    { id: 3, name: "Green Sparkler", price: 300, image: "green-sparkler.png" },
    { id: 4, name: "Pencil Sparkler", price: 350, image: "pencil-sparkler.png" },
    { id: 5, name: "Twinkling Star", price: 150, image: "twinkling-star.png" },
    { id: 6, name: "Flower Pot", price: 400, image: "flower-pot.png" },
    { id: 7, name: "Ground Chakkar", price: 400, image: "ground-chakkar.png" },
    { id: 8, name: "Multicolor Peacock", price: 1500, image: "multicolor-peacock.png" },
    { id: 9, name: "Hydro Bomb", price: 500, image: "hydro-bomb.png" },
    { id: 10, name: "Baby Rocket", price: 650, image: "baby-rocket.png" },
    { id: 11, name: "Whistling Rocket", price: 800, image: "whistling-rocket.png" },
    { id: 12, name: "Sky Shots", price: 5000, image: "sky-shots.png" },
  ];

  // Function to handle adding to cart and showing toast
  const handleAddToCart = (firework) => {
    addToCart(firework); // Add the item to the cart
    toast.success(`${firework.name} has been added to the cart!`, {
      position: "bottom-right", // Position of the toast
      autoClose: 3000, // Auto-close after 3 seconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Fireworks</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Explore our wide range of high-quality fireworks to light up your celebrations.
          From sparklers to rockets, we have everything you need to make your event unforgettable.
          Add your favorites to the cart and get ready for a dazzling experience!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fireworks.map((firework) => (
            <div
              key={firework.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Firework Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={`/assets/${firework.image}`} // Dynamically reference the image
                  alt={firework.name}
                  className="w-full h-full object-contain" // Use object-contain instead of object-cover
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {firework.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">₹ {firework.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(firework)} // Add to cart on button click
                className="w-full bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fireworks;