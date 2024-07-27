import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="  bg-no-repeat bg-cover  bg-[url('https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-slate-300 h-dvh">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* content */}
      <div className="relative z-10 text-center text-gray-300">
        <Navbar />
        <header className="  p-4">
          <h1 className="text-4xl font-bold">Find Your Perfect Home</h1>
          <p className="text-xl mt-2">
            Discover apartments tailored to your needs
          </p>
        </header>

        <div className=" bg-opacity-10 h-full flex items-center justify-center text-center">
          <div className=" p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Your Next Apartment Awaits
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Search through thousands of listings to find your dream home
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row">
              <input
                type="text"
                className="w-full p-3 mb-4 sm:mb-0 sm:mr-4 rounded text-slate-500"
                placeholder="Enter city or ZIP code"
              />
              <Link to="/properties">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
