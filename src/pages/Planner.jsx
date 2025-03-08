import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Planner = ({ onConfirmBooking }) => {
  // State for form inputs
  const [firework, setFirework] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // List of fireworks for the dropdown
  const fireworks = [
    { id: 1, name: "Color Matches" },
    { id: 2, name: "Electric Sparkler" },
    { id: 3, name: "Green Sparkler" },
    { id: 4, name: "Pencil Sparkler" },
    { id: 5, name: "Twinkling Star" },
    { id: 6, name: "Flower Pot" },
    { id: 7, name: "Ground Chakkar" },
    { id: 8, name: "Multicolor Peacock" },
    { id: 9, name: "Hydro Bomb" },
    { id: 10, name: "Baby Rocket" },
    { id: 11, name: "Whistling Rocket" },
    { id: 12, name: "Sky Shots" },
  ];

  // List of places for the dropdown
  const places = [
    { id: 1, name: "Outdoor Garden" },
    { id: 2, name: "Beach" },
    { id: 3, name: "Rooftop" },
    { id: 4, name: "Event Hall" },
  ];

  // Function to convert 24-hour time to 12-hour format with AM/PM
  const formatTimeTo12Hour = (time) => {
    const [hour, minute] = time.split(":");
    const parsedHour = parseInt(hour, 10);
    const ampm = parsedHour >= 12 ? "PM" : "AM";
    const formattedHour = parsedHour % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${formattedHour}:${minute} ${ampm}`;
  };

  // Handle form submission
  const handleBookEvent = (e) => {
    e.preventDefault();
    if (!firework || !place || !date || !time) {
      toast.error("Please fill all the fields!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    setShowPopup(true); // Show the confirmation popup
  };

  // Handle confirmation
  const handleConfirm = () => {
    const newEvent = {
      id: Date.now(), // Use a unique ID (timestamp)
      firework,
      place,
      date,
      time: formatTimeTo12Hour(time), // Convert time to 12-hour format
    };
    onConfirmBooking(newEvent); // Pass the new event to App.js
    setShowPopup(false); // Close the popup
    toast.success("Event booked successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
    // Reset form fields
    setFirework("");
    setPlace("");
    setDate("");
    setTime("");
  };

  // Handle popup close
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900 py-10">
      <div className={`container mx-auto px-4 ${showPopup ? "blur-sm" : ""}`}>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Event Planner
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Plan your perfect event by selecting a firework, choosing a place, and setting a date and time.
          Once confirmed, your event will be booked and displayed in the "Events" section.
        </p>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Plan Your Event
          </h2>
          <form onSubmit={handleBookEvent}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Select a Firework
              </label>
              <select
                value={firework}
                onChange={(e) => setFirework(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              >
                <option value="" disabled>
                  Choose a firework
                </option>
                {fireworks.map((fw) => (
                  <option key={fw.id} value={fw.name}>
                    {fw.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Select a Place
              </label>
              <select
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              >
                <option value="" disabled>
                  Choose a place
                </option>
                {places.map((pl) => (
                  <option key={pl.id} value={pl.name}>
                    {pl.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Select Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300"
            >
              Book Event
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full z-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Confirm Your Booking
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Firework:</span> {firework}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Place:</span> {place}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold">Time:</span> {formatTimeTo12Hour(time)}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planner;