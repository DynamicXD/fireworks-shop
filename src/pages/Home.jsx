import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-[#dcc7ad] dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Welcome to Fireworks Shop
          </h1>
          <p className="text-xl mb-8 animate-fade-in delay-100">
            Your one-stop destination for the brightest and most spectacular fireworks!
          </p>
          <a
            href="/fireworks"
            className="bg-gray-800 dark:bg-gray-700 text-[#dcc7ad] dark:text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
          >
            Explore Fireworks
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">🎆</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Wide Variety</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore a vast collection of fireworks for every occasion, from small sparklers to grand displays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">🛒</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Easy Shopping</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Shop online with ease and get your fireworks delivered safely to your doorstep.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">🎇</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Expert Advice</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get expert tips and recommendations to create the perfect fireworks show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-[#dcc7ad] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Fireworks Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">🔥</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Keep a Safe Distance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always maintain a safe distance from fireworks when lighting them. Use a long lighter or fuse for added safety.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">🧯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Have Water Ready</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep a bucket of water or a fire extinguisher nearby in case of emergencies.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 text-[#dcc7ad]">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Supervise Children</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Never allow children to handle fireworks. Always supervise them during displays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-[#f5f1eb] dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">What types of fireworks do you sell?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a wide variety of fireworks, including sparklers, rockets, fountains, and aerial shells.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#f5f1eb] dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Do you offer delivery?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we provide safe and reliable delivery services to your doorstep.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#f5f1eb] dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Are fireworks safe for children?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fireworks should always be handled by adults. Children should be supervised at all times.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#f5f1eb] dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Can I return fireworks?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Due to safety regulations, we do not accept returns on fireworks. Please check your order carefully before purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-700 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Light Up the Sky?
          </h2>
          <p className="text-xl mb-8">
            Shop now and make your celebrations unforgettable!
          </p>
          <a
            href="/fireworks"
            className="bg-[#dcc7ad] dark:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-500 hover:scale-105 transition-all duration-300"
          >
            Shop Fireworks
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;