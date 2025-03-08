import React from "react";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Bundles = ({ addToCart }) => {
  // List of bundles with names, descriptions, prices, and image paths
  const bundles = [
    {
      id: 1,
      name: "Family Fun Pack",
      description: "Includes: Color Matches, Electric Sparkler, and Twinkling Star.",
      price: 450,
      image: "family-fun-pack.png",
    },
    {
      id: 2,
      name: "Party Starter Kit",
      description: "Includes: Green Sparkler, Pencil Sparkler, and Flower Pot.",
      price: 850,
      image: "party-starter-kit.png",
    },
    {
      id: 3,
      name: "Sky Spectacle Bundle",
      description: "Includes: Baby Rocket, Whistling Rocket, and Sky Shots.",
      price: 6450,
      image: "sky-spectacle-bundle.png",
    },
    {
      id: 4,
      name: "Ultimate Celebration Pack",
      description: "Includes: Multicolor Peacock, Hydro Bomb, and Ground Chakkar.",
      price: 2400,
      image: "ultimate-celebration-pack.png",
    },
  ];

  // Function to handle adding to cart and showing toast
  const handleAddToCart = (bundle) => {
    addToCart(bundle); // Add the bundle to the cart
    toast.success(`${bundle.name} has been added to the cart!`, {
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
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Bundles
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Explore our exclusive bundles designed to make your celebrations unforgettable.
          Each bundle includes a curated selection of fireworks, offering great value and convenience.
          Add your favorite bundle to the cart and light up your event!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Bundle Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={`/assets/${bundle.image}`} // Dynamically reference the image
                  alt={bundle.name}
                  className="w-full h-full object-contain" // Use object-contain instead of object-cover
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {bundle.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {bundle.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                ₹ {bundle.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(bundle)} // Add to cart on button click
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

export default Bundles;