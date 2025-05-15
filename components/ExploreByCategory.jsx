"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

export default function ExploreByCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Bedroom")
  const [searchQuery, setSearchQuery] = useState("")

  const allCategories = [
    { name: "Bedroom", image: "/bedroom.jpg?height=800&width=1200" },
    { name: "Dinning Room", image: "/dinning room.jpg?height=400&width=600" },
    { name: "Meeting Room", image: "/meetingroom.jpg?height=400&width=600" },
    { name: "Workspace", image: "/workspace.jpg?height=400&width=600" },
  ]

  // Filter categories based on search query
  const filteredCategories =
    searchQuery.trim() === ""
      ? allCategories
      : allCategories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Update selected category when filtering
  useEffect(() => {
    if (searchQuery.trim() !== "" && filteredCategories.length > 0) {
      // If current selection is not in filtered results, select the first filtered item
      if (!filteredCategories.some((cat) => cat.name === selectedCategory)) {
        setSelectedCategory(filteredCategories[0].name)
      }
    } else if (filteredCategories.length === 0 && searchQuery.trim() !== "") {
      // If no results, don't change selection
    } else if (searchQuery.trim() === "") {
      // If search is cleared and selected category is not in view, reset to first category
      if (!allCategories.some((cat) => cat.name === selectedCategory)) {
        setSelectedCategory(allCategories[0].name)
      }
    }
  }, [searchQuery, filteredCategories, selectedCategory])

  // Find the selected category object
  const activeCategory = allCategories.find((cat) => cat.name === selectedCategory) || allCategories[0]

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Clear search and reset to all categories
  const handleClearSearch = () => {
    setSearchQuery("")
    if (!allCategories.some((cat) => cat.name === selectedCategory)) {
      setSelectedCategory(allCategories[0].name)
    }
  }

  // Handle category selection
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName)
  }

  return (
    <div className="min-h-screen px-16">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl md:text-5xl font-serif font-bold text-teal-800 mb-12">
          Explore by Category
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0 ">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Scrollable Categories */}
            <div className="relative">
              <div className="h-[720px] overflow-y-auto pr-4 border-r border-gray-200 scrollbar-thin">
                <div className="space-y-4">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => handleCategorySelect(category.name)}
                        className={`block w-full text-left py-6 border-l-4 pl-4 transition-colors ${
                          selectedCategory === category.name
                            ? "border-teal-700 text-teal-700 font-medium"
                            : "border-transparent hover:border-teal-200 hover:text-teal-700"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))
                  ) : (
                    <div className="py-2 pl-4 text-gray-500">No categories found</div>
                  )}
                </div>
              </div>

              {/* Scroll indicators */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
                <div className="w-4 h-4 rounded-full bg-blue-100"></div>
                <div className="w-4 h-4 rounded-full bg-pink-100"></div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClearSearch}
                className="flex items-center justify-between w-full bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors mt-4"
              >
                <span>All Categories</span>
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Featured Category */}
              {activeCategory && (
                <div className="md:col-span-2 relative rounded-lg overflow-hidden h-64 md:h-80">
                  <Image
                    src={activeCategory.image || "/placeholder.svg"}
                    alt={`${activeCategory.name} interior`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center">
                    <h2 className="text-white text-4xl md:text-5xl font-serif mb-4">{activeCategory.name}</h2>
                    <button className="bg-white/90 hover:bg-white text-teal-800 px-6 py-2 rounded-md transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              )}

              {/* Grid of room images - only show filtered categories */}
              {filteredCategories.length > 0 ? (
                filteredCategories.slice(0, 6).map((category, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden h-64 cursor-pointer transition-all duration-300 hover:shadow-lg"
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    <Image
                      src={category.image || "/bedroom.jpg"}
                      alt={`${category.name} interior`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0  bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white font-medium text-lg">{category.name}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                  <p className="text-gray-500">No matching categories found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
