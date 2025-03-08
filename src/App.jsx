import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fireworks from "./pages/Fireworks";
import Bundles from "./pages/Bundles";
import Planner from "./pages/Planner";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Events from "./pages/Events"; // Import the Events page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from './pages/Success';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [bookedEvents, setBookedEvents] = useState([]); // State for booked events
  const navigate = useNavigate(); // Hook for navigation

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartCount((prevCount) => prevCount + 1);
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );

    // Update the cart count
    setCartCount((prevCount) => {
      const item = cartItems.find((item) => item.id === itemId);
      if (item) {
        return prevCount + (newQuantity - item.quantity);
      }
      return prevCount;
    });
  };

  // Function to handle booking confirmation
  const handleConfirmBooking = (newEvent) => {
    setBookedEvents([...bookedEvents, newEvent]); // Add the event to booked events
    navigate("/events"); // Redirect to the Events page
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart items
    setCartCount(0); // Reset the cart count
  };

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} />
      <main className="pt-18 bg-[#f5f1eb] dark:bg-[#101828]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/fireworks"
            element={<Fireworks addToCart={addToCart} />}
          />
          <Route path="/bundles" element={<Bundles addToCart={addToCart} />} />
          <Route
            path="/planner"
            element={<Planner onConfirmBooking={handleConfirmBooking} />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} clearCart={clearCart} />}
          />
          <Route
            path="/events"
            element={<Events bookedEvents={bookedEvents} />}
          />
          <Route path='/success' element={<Success />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;