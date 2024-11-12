"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("Favorite Items:", favoriteItems);
  }, [favoriteItems]);

  const menuItems = [
    {
      id: 1,
      name: "AFC Vada Pav",
      price: "15",
      image: "/vada-pav.jpg",
    },
    {
      id: 2,
      name: "AFC Kachori",
      price: "20",
      image: "/kachori.jpg",
    },
    {
      id: 3,
      name: "AFC Samosa",
      price: "20",
      image: "/samosa.jpg",
    },
    {
      id: 4,
      name: "AFC Patties",
      price: "15",
      image: "/patties.jpeg",
    },
    {
      id: 5,
      name: "AFC Cabbage Gobi",
      price: "50",
      image: "/gobi.jpeg",
    },
    {
      id: 6,
      name: "AFC Califlower Gobi",
      price: "60",
      image: "/flower-gobi.jpg",
    },
    {
      id: 7,
      name: "AFC Finger Chips",
      price: "35",
      image: "/chips.jpg",
    },
    {
      id: 8,
      name: "AFC Noodles",
      price: "35",
      image: "/noodles.jpeg",
    },
    {
      id: 9,
      name: "AFC Alu Twister",
      price: "35",
      image: "/twister.jpg",
    },
  ];

  const toggleFavorite = (e, itemId) => {
    e.stopPropagation();
    setFavoriteItems((prev) => {
      const isCurrentlyFavorite = prev.includes(itemId);
      const newFavorites = isCurrentlyFavorite
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId];

      console.log("Toggling item:", itemId);
      console.log("New favorites state:", newFavorites);
      return newFavorites;
    });
  };

  const navigateToProduct = (item) => {
    // const itemData = encodeURIComponent(JSON.stringify(item));
    // router.push(`/product/${item.id}?data=${itemData}`);
    console.log("Clicked on the Item>>>>", item);
  };

  return (
    <div className="flex flex-col mt-6">
      <span className="text-2xl text-gray-800 font-semibold px-4">
        Our Menu
      </span>
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden border border-[#FAFAFA] cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => navigateToProduct(item)}
          >
            <div className="absolute right-2 top-2 z-10">
              <button
                className="rounded-full p-2 bg-white/80 hover:bg-white transition-colors"
                onClick={(e) => toggleFavorite(e, item.id)}
              >
                <Heart
                  className={`w-5 h-5 text-orange-500 transition-opacity duration-200 ${
                    favoriteItems.includes(item.id)
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                  fill={
                    favoriteItems.includes(item.id) ? "currentColor" : "none"
                  }
                />
              </button>
            </div>
            <Image
              width={100}
              height={50}
              src={item.image}
              alt={item.name}
              className="aspect-square w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm font-semibold text-gray-900 mt-1">
                {`₹ ${item.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
