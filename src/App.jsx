import { useState } from "react";
import { FiSearch, FiMic, FiUser, FiHeart, FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiHandbagLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const promotionalBanners = [
    {
      id: 1,
      discount: "FLAT ₹125 OFF*",
      code: "WELCOMEBACK125",
      gradient: "from-orange-400 to-orange-500",
      mainImage: "https://biryani-image-url.jpg",
      secondaryImage: "https://drink-image-url.jpg",
      buttonColor: "text-orange-500",
    },
    {
      id: 2,
      discount: "FLAT ₹200 OFF*",
      code: "PIZZALOVER200",
      gradient: "from-red-500 to-red-600",
      mainImage: "https://pizza-image-url.jpg",
      secondaryImage: "https://coke-image-url.jpg",
      buttonColor: "text-red-500",
    },
    {
      id: 3,
      discount: "FLAT ₹150 OFF*",
      code: "DESSERT150",
      gradient: "from-purple-500 to-purple-600",
      mainImage: "https://cake-image-url.jpg",
      secondaryImage: "https://icecream-image-url.jpg",
      buttonColor: "text-purple-500",
    },
    {
      id: 4,
      discount: "FLAT ₹175 OFF*",
      code: "CHINESE175",
      gradient: "from-blue-500 to-blue-600",
      mainImage: "https://noodles-image-url.jpg",
      secondaryImage: "https://momos-image-url.jpg",
      buttonColor: "text-blue-500",
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Domino's Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
      rating: 4.2,
      reviews: "4.6K",
      time: "25-30 mins",
      cuisines: ["Pizzas", "Italian", "Pastas"],
      location: "Shyamal",
      distance: "0.8 km",
      offers: ["FREE DELIVERY"],
      isVeg: true,
      adBadge: true,
      isLite: true,
    },
    {
      id: 2,
      name: "Chow Chow Asian Kitchen",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop",
      rating: 4.0,
      reviews: "2.1K",
      time: "15-20 mins",
      cuisines: ["Chinese"],
      location: "Satellite",
      distance: "0.3 km",
      offers: ["EXTRA 10% OFF", "AND FREE DELIVERY"],
      isBolt: true,
      isLite: true,
    },
    {
      id: 3,
      name: "La Pino'z Pizza",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
      rating: 4.3,
      reviews: "3.8K",
      time: "20-25 mins",
      cuisines: ["Pizzas", "Italian", "Pastas", "Fast Food"],
      location: "Navrangpura",
      distance: "1.2 km",
      offers: ["50% OFF up to ₹100"],
      isVeg: true,
      isLite: true,
    },
    {
      id: 4,
      name: "McDonald's",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
      rating: 4.4,
      reviews: "10K+",
      time: "15-20 mins",
      cuisines: ["Burgers", "Fast Food", "Beverages"],
      location: "CG Road",
      distance: "0.5 km",
      offers: ["Buy 1 Get 1 Free"],
      isBolt: true,
      adBadge: true,
      isLite: true,
    },
  ];

  const topRestaurants = [
    {
      id: 1,
      rating: 4.4,
      time: "15-20 mins",
      text: "Burgers, Beverages, Cafe",
    },
    {
      id: 2,
      rating: 4.3,
      time: "20-25 mins",
      text: "Mexican, Fast Food, Snacks",
    },
    {
      id: 3,
      rating: 4.3,
      time: "25-30 mins",
      text: "Burgers, Fast Food",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 pb-20">
      {/* Header */}
      <header className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-white text-xl sm:text-2xl" />
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-white text-base sm:text-lg">Roshan</h2>
              <span className="text-white">▼</span>
            </div>
            <p className="text-gray-300 text-[10px] sm:text-xs max-w-[200px] sm:max-w-none truncate">
              garuda apartment near rathi hospital,...
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white font-medium flex items-center gap-1">
            <span className="text-xs sm:text-sm">BUY</span>
            <span className="font-bold text-xs sm:text-sm">one</span>
          </button>
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FiUser className="text-white text-lg sm:text-xl" />
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-3 sm:px-4 lg:px-6 py-2">
        <div className="bg-white rounded-full flex items-center px-3 sm:px-4 py-2 sm:py-3 shadow-lg">
          <FiSearch className="text-gray-400 text-lg sm:text-xl" />
          <div className="flex-1 ml-2">
            <div className="text-gray-400 text-xs sm:text-sm">'Sweets'</div>
            <div className="text-gray-600 text-sm sm:text-base">
              Search for 'Pizza'
            </div>
          </div>
          <FiMic className="text-orange-500 text-lg sm:text-xl" />
        </div>
      </div>

      {/* Christmas Banner */}
      <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="bg-gradient-to-r from-red-800 to-red-700 rounded-xl p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="flex space-x-1.5 sm:space-x-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full opacity-70"
                ></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              Christmas Eve
            </h2>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              Greetings
            </h2>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mt-3 sm:mt-4 font-medium text-sm sm:text-base flex items-center gap-2">
              Order Now <span>→</span>
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-32 sm:w-40 h-32 sm:h-40">
            <img
              src="https://cdn.pixabay.com/photo/2024/11/25/17/47/ai-generated-9223788_1280.jpg"
              alt="Santa Claus"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-3 sm:px-4 lg:px-6 py-2">
        <div className="bg-indigo-600 rounded-xl overflow-hidden relative">
          <div className="p-4 sm:p-6">
            <h2 className="text-yellow-300 text-xl sm:text-2xl font-bold">
              Want Free Delivery?
            </h2>
            <p className="text-white text-lg sm:text-xl mt-1">
              Try Pocket Hero!
            </p>
            <button className="mt-2 text-white flex items-center gap-1">
              Explore now <span>→</span>
            </button>
          </div>
          <img
            src="https://hero-image.jpg"
            alt=""
            className="absolute right-0 bottom-0 h-32 sm:h-40"
          />
          <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10"></div>
        </div>
      </div>

      {/* Restaurant Heading */}
      <div className="px-3 sm:px-4 lg:px-6 py-2">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Top 1990 restaurants to explore
        </h2>
      </div>

      {/* Promotional Banners Swiper */}
      <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1.1}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 24,
            },
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-gray-400 !opacity-50 !mx-1",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-gray-700 !opacity-100",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="promotional-swiper"
        >
          {promotionalBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className={`bg-gradient-to-r ${banner.gradient} rounded-xl p-3 sm:p-4 md:p-6 flex items-center h-full`}
              >
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                    {banner.discount}
                  </h3>
                  <p className="text-white mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base">
                    Use code:
                  </p>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg">
                    {banner.code}
                  </p>
                  <button
                    className={`bg-white ${banner.buttonColor} px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mt-2 sm:mt-3 font-medium text-xs sm:text-sm md:text-base`}
                  >
                    ORDER NOW
                  </button>
                </div>
                <div className="w-1/3 relative">
                  <img
                    src={banner.mainImage}
                    alt=""
                    className="w-full rounded-lg shadow-lg"
                  />
                  <img
                    src={banner.secondaryImage}
                    alt=""
                    className="absolute -top-4 sm:-top-6 md:-top-8 right-0 w-1/2 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Quick Links */}
      <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <QuickLink
          title="FLASH SALE"
          subtitle="Flat 50% OFF"
          icon="🔥"
          badge="LIVE NOW"
          gradient="from-red-600 to-red-500"
        />
        <QuickLink
          title="Cakes"
          subtitle="& More"
          icon="🎂"
          gradient="from-pink-600 to-pink-500"
        />
        <QuickLink
          title="Party"
          subtitle="Delights"
          icon="🍽️"
          gradient="from-purple-600 to-purple-500"
        />
        <QuickLink
          title="Bolt"
          subtitle="Food In 10 Mins"
          icon="⚡"
          gradient="from-blue-600 to-blue-500"
        />
      </div>

      {/* Filter Bar */}
      <div className=" top-0 z-40 py-2 sm:py-3">
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
              <span className="text-gray-700">Filter</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
            <button className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
              <span className="text-gray-700">Sort By</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              <span className="bg-orange-500 text-white text-[10px] sm:text-xs px-1.5 rounded">
                NEW
              </span>
              <span className="text-gray-700">10 Mins Delivery</span>
            </div>
            <button className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
              <span className="text-gray-700">Cuisines</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
              <span className="text-gray-700">New on Swiggy</span>
            </button>
            <button className="flex-shrink-0 flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
              <span className="text-gray-700">Ratings 4.0+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Restaurant Cards */}
        <div className="px-2 sm:px-4 lg:px-6 py-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-32 sm:h-44 lg:h-48 object-cover"
                    loading="lazy"
                  />
                  <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <FiHeart className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base" />
                  </button>
                  {restaurant.adBadge && (
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-gray-900/80 text-white text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded backdrop-blur-sm">
                      AD
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-3">
                  <div className="flex items-start justify-between gap-1 sm:gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                        {restaurant.isVeg && (
                          <span className="bg-green-100 text-green-800 text-[8px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded inline-flex items-center">
                            Best In Veg
                          </span>
                        )}
                        {restaurant.isBolt && (
                          <span className="flex items-center gap-0.5 text-[8px] sm:text-xs">
                            <span className="font-medium">Bolt</span>
                            <span className="text-yellow-500">⚡</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-800 mt-0.5 sm:mt-1 text-xs sm:text-base truncate">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center flex-wrap gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                        <div className="bg-green-600 text-white text-[8px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <span>{restaurant.rating}</span>
                          <span>★</span>
                        </div>
                        <span className="text-gray-600 text-[8px] sm:text-xs">
                          ({restaurant.reviews})
                        </span>
                        <span className="text-gray-600 text-[8px] sm:text-xs">
                          •
                        </span>
                        <span className="text-gray-600 text-[8px] sm:text-xs">
                          {restaurant.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-[9px] sm:text-sm mt-0.5 sm:mt-1 truncate">
                        {restaurant.cuisines.join(", ")}
                      </p>
                      <p className="text-gray-600 text-[9px] sm:text-sm truncate">
                        {restaurant.location} • {restaurant.distance}
                      </p>
                    </div>
                    {restaurant.isLite && (
                      <div className="bg-white shadow rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-xs font-medium flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                        <span className="text-orange-500">one</span>
                        <span className="text-gray-700">LITE</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                    {restaurant.offers.map((offer, index) => (
                      <p
                        key={index}
                        className="text-orange-500 text-[9px] sm:text-sm font-medium truncate"
                      >
                        {offer}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-between items-center px-4 py-2">
          <button className="flex flex-col items-center gap-1">
            <img src="/swiggy.png" alt="Swiggy" className="w-6 h-6" />
            <span className="text-xs text-gray-500">Swiggy</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <img src="/food.png" alt="Food" className="w-6 h-6" />
            <span className="text-xs text-orange-500">Food</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <img src="/instamart.png" alt="Instamart" className="w-6 h-6" />
            <span className="text-xs text-gray-500">Instamart</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <img src="/dineout.png" alt="Dineout" className="w-6 h-6" />
            <span className="text-xs text-gray-500">Dineout</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <img src="/card.png" alt="Card" className="w-6 h-6" />
            <span className="text-xs text-gray-500">Card</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <img src="/reorder.png" alt="Reorder" className="w-6 h-6" />
            <span className="text-xs text-gray-500">Reorder</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const QuickLink = ({ title, subtitle, icon, badge, gradient }) => (
  <div
    className={`bg-gradient-to-br ${gradient} rounded-xl p-2 sm:p-3 text-center relative`}
  >
    {badge && (
      <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
        {badge}
      </div>
    )}
    <span className="text-xl sm:text-2xl">{icon}</span>
    <p className="text-white text-xs sm:text-sm font-medium mt-1">{title}</p>
    <p className="text-white text-[10px] sm:text-xs">{subtitle}</p>
  </div>
);

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex flex-col items-center ${
      active ? "text-orange-500" : "text-gray-500"
    }`}
  >
    <div className="mb-0.5 sm:mb-1">{icon}</div>
    <span className="text-[8px] sm:text-[10px]">{label}</span>
  </div>
);

const FoodCard = ({ image, title, isLite }) => (
  <div className="relative rounded-xl overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-28 sm:h-32 lg:h-40 object-cover"
    />
    <div className="absolute top-2 left-2">
      {isLite && (
        <div className="bg-white rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium flex items-center gap-1">
          <span className="text-orange-500">one</span>
          <span className="text-gray-700">LITE</span>
        </div>
      )}
    </div>
    <button className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
      <FiHeart className="text-gray-400 text-sm sm:text-base" />
    </button>
  </div>
);

export default App;
