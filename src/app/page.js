"use client";

import { Heart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("Favorite Items:", favoriteItems);
    console.log("Item Quantities:", itemQuantities);
    console.log("Selected Items:", selectedItems);
  }, [favoriteItems, itemQuantities, selectedItems]);

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

  const handleIncrement = (e, itemId) => {
    e.stopPropagation();
    setItemQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (e, itemId) => {
    e.stopPropagation();
    setItemQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const calculateItemPrice = (basePrice, itemId) => {
    const quantity = itemQuantities[itemId] || 0;
    return (parseFloat(basePrice) * Math.max(quantity, 1)).toFixed(2);
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      }
      return [...prev, itemId];
    });
  };

  const calculateTotalPrice = () => {
    return selectedItems
      .reduce((total, itemId) => {
        const item = menuItems.find((menuItem) => menuItem.id === itemId);
        if (item) {
          return total + parseFloat(calculateItemPrice(item.price, itemId));
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  const handlePayment = () => {
    const selectedItemsDetails = selectedItems.map((itemId) => {
      const item = menuItems.find((menuItem) => menuItem.id === itemId);
      return {
        ...item,
        quantity: itemQuantities[itemId] || 1,
        totalPrice: calculateItemPrice(item.price, itemId),
      };
    });

    console.log("Processing payment for:", selectedItemsDetails);
    console.log("Total amount:", calculateTotalPrice());
  };

  return (
    <div className="flex flex-col mt-6 min-h-screen relative pb-24">
      <span className="text-2xl text-gray-800 font-semibold px-4">
        Our Menu
      </span>
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col rounded-3xl shadow-lg overflow-hidden border cursor-pointer transition-all duration-200 ${
              selectedItems.includes(item.id)
                ? "bg-orange-50 border-orange-500"
                : "bg-white border-[#FAFAFA] hover:scale-[1.02]"
            }`}
            onClick={() => toggleItemSelection(item.id)}
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
              <h3 className="text-sm font-medium text-gray-900 py-1">
                {item.name}
              </h3>
              <div className="flex gap-2 items-center justify-start py-1">
                <button
                  className="flex h-5 w-5 items-center justify-center rounded-md border border-black hover:bg-gray-100"
                  onClick={(e) => handleIncrement(e, item.id)}
                >
                  <Plus className="w-4 h-4 text-gray-900" />
                </button>
                <div className="flex h-6 w-6 items-center justify-center rounded-md border border-black">
                  <span className="text-md font-bold">
                    {itemQuantities[item.id] || 1}
                  </span>
                </div>
                <button
                  className="flex h-5 w-5 items-center justify-center rounded-md border border-black hover:bg-gray-100"
                  onClick={(e) => handleDecrement(e, item.id)}
                >
                  <Minus className="w-4 h-4 text-gray-900" />
                </button>
              </div>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {`₹ ${calculateItemPrice(item.price, item.id)}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold">
              Selected Items: {selectedItems.length}
              <span className="ml-4 text-orange-500">
                Total: ₹ {calculateTotalPrice()}
              </span>
            </div>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
              onClick={handlePayment}
            >
              Make Payment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
