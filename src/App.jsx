import React, { useState } from 'react'
import { FiUser, FiSearch, FiMic, FiHeart, FiHome, FiShoppingBag, FiClock, FiCreditCard, FiGrid } from 'react-icons/fi'
import { IoLocationOutline, IoFastFoodOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import image from './assets/Santaaa.png'
import delivery from './assets/delivery-vector.png'
import QuickLink from './components/QuickLink'
import useTypewriter from './hooks/useTypewriter'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const placeholderText = useTypewriter([
    'Search for "Sweets"',
    'Search for "Pizza"',
    'Search for "Biryani"',
    'Search for "Burgers"',
  ], 150, 100, 2000)

  const promotionalBanners = [
    {
      id: 1,
      discount: "FLAT ₹125 OFF*",
      code: "WELCOMEBACK125",
      gradient: "from-orange-400 to-orange-500",
      mainImage: "https://biryani-image-url.jpg",
      secondaryImage: "https://drink-image-url.jpg",
      buttonColor: "text-orange-500"
    },
    {
      id: 2,
      discount: "FLAT ₹200 OFF*",
      code: "PIZZALOVER200",
      gradient: "from-red-500 to-red-600",
      mainImage: "https://pizza-image-url.jpg",
      secondaryImage: "https://coke-image-url.jpg",
      buttonColor: "text-red-500"
    },
    {
      id: 3,
      discount: "FLAT ₹150 OFF*",
      code: "DESSERT150",
      gradient: "from-purple-500 to-purple-600",
      mainImage: "https://cake-image-url.jpg",
      secondaryImage: "https://icecream-image-url.jpg",
      buttonColor: "text-purple-500"
    }
  ]

  const restaurants = [
    {
      id: 1,
      name: "Domino's Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
      rating: 4.2,
      reviews: "4.6K",
      time: "25-30 mins",
      cuisines: ["Pizzas", "Italian", "Pastas"],
      location: "Shyamal",
      distance: "0.8 km",
      offers: ["FREE DELIVERY"],
      isVeg: true,
      adBadge: true,
      isLite: true
    },
    {
      id: 2,
      name: "McDonald's",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
      rating: 4.4,
      reviews: "10K+",
      time: "15-20 mins",
      cuisines: ["Burgers", "Fast Food", "Beverages"],
      location: "CG Road",
      distance: "0.5 km",
      offers: ["Buy 1 Get 1 Free"],
      isBolt: true,
      adBadge: true,
      isLite: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Red Background Section */}
      <div className="bg-gradient-to-b from-red-700 to-red-900 rounded-b-xl">
        {/* Header */}
        <header className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-white text-xl sm:text-2xl" />
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-white text-base sm:text-lg">Roshan</h2>
                <span className="text-white">▼</span>
              </div>
              <p className="text-gray-300 text-[10px] sm:text-xs max-w-[200px] sm:max-w-none truncate">garuda apartment near rathi hospital,...</p>
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
          <div className="bg-white rounded-xl flex items-center px-4 py-2.5 shadow-md">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={placeholderText}
                  className="w-full text-gray-600 text-sm placeholder-gray-400 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="text-gray-400 text-lg" />
              </div>
            </div>
            <div className="w-px h-5 bg-gray-200 mx-3"></div>
            <button className="text-orange-500">
              <FiMic className="text-xl" />
            </button>
          </div>
        </div>

        {/* Christmas Banner */}
        <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-4 sm:p-6 relative overflow-hidden">
            {/* Light Bulbs */}
            <div className="absolute top-2 left-0 right-0 flex justify-center">
              <div className="relative">
                {/* Wire */}
                <div className="absolute -top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

                <div className="flex items-start gap-4">
                  {[...Array(6)].map((_, i) => {
                    // Alternating wire and bulb positions
                    const wireHeight = i % 2 === 0 ? 'h-6' : i % 3 === 0 ? 'h-4' : 'h-3';
                    const marginTop = i % 2 === 0 ? 'mt-6' : i % 3 === 0 ? 'mt-4' : 'mt-3';

                    return (
                      <div key={i} className="relative">
                        {/* Vertical Wire */}
                        <div className={`absolute -top-1 left-1/2 w-0.5 ${wireHeight} bg-yellow-400/30 -translate-x-1/2`}></div>
                        {/* Bulb */}
                        <div
                          className={`w-2.5 h-2.5 rounded-full bg-yellow-400 twinkle ${marginTop} ${i % 3 === 0 ? 'twinkle-delay-1' : i % 3 === 1 ? 'twinkle-delay-2' : 'twinkle-delay-3'}`}
                          style={{
                            boxShadow: '0 0 8px 2px rgba(250, 204, 21, 0.4)'
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex flex-col">
                <span className="text-white text-3xl sm:text-4xl font-dancing font-bold tracking-wide">Merry</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-3xl sm:text-4xl font-dancing font-bold tracking-wide">Christmas</span>
                </div>
              </div>
              <button className="group relative text-yellow-400 px-3 py-1 rounded-full text-xs font-medium mt-2 w-fit hover:text-white transition-all duration-300 ease-out">
                <span className="relative z-10">Order Now <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                <span className="absolute inset-0 border border-yellow-400 rounded-full"></span>
                <span className="absolute inset-0 bg-yellow-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 sm:w-40">
              <img
                src={image}
                alt="Santa Claus"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-1 px-3 sm:px-4 lg:px-6 pb-3">
          <div className="h-[1px] flex-1 bg-gray-600"></div>
          <span className="text-gray-300 text-xs">Get Flat ₹200 OFF</span>
          <div className="h-[1px] flex-1 bg-gray-600"></div>
        </div>

        {/* Quick Links */}
        <div className="px-3 sm:px-4 lg:px-6 py-2">
          <div className="overflow-x-auto hide-scrollbar -mx-3 px-3">
            <div className="flex gap-6 min-w-max">
              <QuickLink
                title="FLASH SALE"
                subtitle="Flat 50% OFF"
                icon="🔥"
                badge="LIVE NOW"
              />
              <QuickLink
                title="Cakes"
                subtitle="& More"
                icon="🎂"
              />
              <QuickLink
                title="Party"
                subtitle="Delights"
                icon="🍽️"
              />
              <QuickLink
                title="Bolt"
                subtitle="Food In 10 Mins"
                icon="⚡"
              />
            </div>
          </div>
        </div>
      </div>

      {/* White Background Section */}
      <div className="bg-white">
        {/* Offer Cards */}
        <div className="px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <span className="text-gray-500 text-xs">Get Flat ₹200 OFF</span>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="promotional-swiper">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={12}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="w-full"
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                    <div className="flex flex-col h-full">
                      <h3 className="text-lg font-bold mb-1">Special Offer {index + 1}</h3>
                      <p className="text-sm mb-2">Get up to 60% OFF</p>
                      <div className="mt-auto">
                        <button className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="px-3 sm:px-4 lg:px-6 py-2">
          <div className="bg-indigo-600 rounded-xl overflow-hidden relative">
           
            <div className="p-4 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-yellow-400 font-bold text-lg">Want Free Delivery?</h3>
                <p className="text-white text-sm">Try Pocket Hero!</p>
                <button className="mt-1 text-white text-sm flex items-center">
                  Explore now <span className="ml-1">›</span>
                </button>
              </div>
              <div className="w-24 h-24 relative">
                <img
                  src={delivery}
                  alt="Delivery Victor"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
           {/*  Bottom wave effect 
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 text-white/10">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
              </svg>
            </div>*/}
          </div>
        </div> 

        {/* Restaurant Cards */}
        <div className="px-2 sm:px-4 lg:px-6 py-2 pb-24">
          <div className="flex flex-col gap-3">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 sm:gap-4">
                  {/* Left side - Image */}
                  <div className="relative w-24 h-32 sm:w-28 sm:h-28">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <button className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <FiHeart className="text-gray-400 hover:text-red-500 transition-colors text-xs" />
                    </button>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 p-2 sm:p-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-800 text-sm sm:text-base">{restaurant.name}</h3>
                        {restaurant.isVeg && (
                          <span className="bg-green-100 text-green-800 text-[8px] sm:text-xs px-1.5 py-0.5 rounded">
                            Best In Veg
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="bg-green-600 text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <span>{restaurant.rating}</span>
                          <span>★</span>
                        </div>
                        <span className="text-gray-600 text-[10px] sm:text-xs">•</span>
                        <span className="text-gray-600 text-[10px] sm:text-xs">{restaurant.time}</span>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-gray-600 text-[10px] sm:text-xs">{restaurant.cuisines.join(", ")}</p>
                        <p className="text-gray-600 text-[10px] sm:text-xs">{restaurant.location} • {restaurant.distance}</p>
                      </div>
                    </div>
                    {restaurant.adBadge && (
                      <div className="mt-2">
                        <span className="bg-red-50 font-bold text-red-500 text-[8px] sm:text-xs px-1.5 py-0.5 rounded">
                          FREE DELIVERY
                        </span>
                        <span className="ml-1.5 bg-orange-50 text-orange-500 text-[8px] sm:text-xs px-1.5 py-0.5 rounded">
                          one LITE
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <div className="flex justify-between items-center px-4 py-2">
            <button className="flex flex-col items-center gap-1">
              <FiHome className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-500">Swiggy</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <IoFastFoodOutline className="w-6 h-6 text-orange-500" />
              <span className="text-xs text-orange-500">Food</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FiShoppingBag className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-500">Instamart</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FiGrid className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-500">Dineout</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FiCreditCard className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-500">Card</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <FiClock className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-500">Reorder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
