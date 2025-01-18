import React, { useEffect, useState } from "react";
import { Search, Menu, X, Heart } from "lucide-react";
import Navbar from "./Navbar";


const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    setLoading(true);
    // Option 1: Client-side search (current implementation)
    fetch("http://localhost:5000/api/dish/get_dish")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data.dishdata || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dishes:", error);
        setError("Failed to fetch dishes. Please try again later.");
        setLoading(false);
      });

    // Option 2: Server-side search implementation
    // if (searchTerm) {
    //   fetch(`http://localhost:5000/api/dish/search?q=${searchTerm}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setDishes(data.dishdata || []);
    //       setLoading(false);
    //     });
    // }
  }, [/* searchTerm */]); // Uncomment searchTerm dependency for server-side search

  // Filter dishes based on search term (client-side search)
  const filteredDishes = dishes.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-lg font-semibold text-gray-600">
          Loading dishes...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 font-medium">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-[50px]">
            Discover Healthy Dishes
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Track your calories and maintain a healthy lifestyle
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish, index) => (
              <div
                key={dish._id || index}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src='https://t3.ftcdn.net/jpg/01/61/13/66/240_F_161136674_NgVFcPtWfwLPY03NpJUrSiH9oDvma9Rn.jpg'
                    alt={dish.dishName}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {dish.dishName}
                  </h2>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 px-3 py-1 rounded-full">
                      <span className="text-blue-600 font-medium">
                        {dish.calories} calories
                      </span>
                    </div>
                  </div>
                 
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 text-lg">No dishes found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;