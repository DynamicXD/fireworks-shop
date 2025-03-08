import React from "react";
import { Link } from "react-router-dom";

const Events = ({ bookedEvents }) => {
  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-[#101828] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Your Booked Events
        </h1>
        {bookedEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {event.firework}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Place: {event.place}</p>
                <p className="text-gray-600 dark:text-gray-400">Date: {event.date}</p>
                <p className="text-gray-600 dark:text-gray-400">Time: {event.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No events booked yet.
          </p>
        )}
        <div className="text-center mt-8">
          <Link
            to="/planner"
            className="bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300"
          >
            {bookedEvents.length > 0 ? "Book Another Event" : "Book Event"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;