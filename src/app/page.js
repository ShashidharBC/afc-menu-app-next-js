"use client";

import { Heart, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CarouselPlugin } from "@/components/carousel";
import Copyright from "@/components/copy-right";

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
    { id: 1, name: "AFC Vada Pav", price: "20", image: "/vada-pav.jpg" },
    { id: 2, name: "AFC Kachori", price: "20", image: "/kachori.jpg" },
    { id: 3, name: "AFC Samosa", price: "20", image: "/samosa.jpg" },
    { id: 4, name: "AFC Patties", price: "15", image: "/patties_2.jpg" },
    { id: 5, name: "AFC Cabbage Gobi", price: "40", image: "/gobi.jpeg" },
    {
      id: 6,
      name: "AFC Califlower Gobi",
      price: "60",
      image: "/flower-gobi.jpg",
    },
    { id: 7, name: "AFC French Fries", price: "40", image: "/chips.jpg" },
    { id: 8, name: "AFC Noodles", price: "40", image: "/noodles.jpeg" },
    { id: 9, name: "AFC Alu Twister", price: "30", image: "/twister.jpg" },
    {
      id: 10,
      name: "AFC Gobi Noodles",
      price: "60",
      image: "/gobi_noodles_2.png",
    },
    {
      id: 11,
      name: "AFC Sangam Vada",
      price: "30",
      image: "/sangamVada.jpeg",
    },
    { id: 12, name: "AFC Gobi 65", price: "70", image: "/gobi_65.jpeg" },
    { id: 13, name: "AFC Alu Chilli", price: "60", image: "/alu-chilli.jpg" },
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
    <div className="relative flex min-h-screen flex-col pb-32 pt-6">
      {/* Today's special */}
      <section className="flex flex-col items-center justify-center">
        <div className="mb-3 self-start px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-lg font-semibold text-sky-800 shadow-sm backdrop-blur">
            Todays Special🤤
          </span>
        </div>
        <CarouselPlugin />
      </section>

      {/* Menu */}
      <section>
        <h2 className="px-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:px-6">
          Our{" "}
          <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Menu
          </span>
        </h2>
        <p className="px-4 pt-1 text-sm text-slate-500 sm:px-6">
          Tap a card to add it to your order.
        </p>

        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 sm:p-6 md:grid-cols-4 lg:grid-cols-5">
          {menuItems.map((item) => {
            const isSelected = selectedItems.includes(item.id);
            const isFav = favoriteItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItemSelection(item.id)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300 ${
                  isSelected
                    ? "border-sky-400 bg-white/90 shadow-xl shadow-sky-300/60 ring-2 ring-sky-400"
                    : "border-white/70 bg-white/60 shadow-lg shadow-sky-200/50 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl"
                }`}
              >
                <div className="absolute right-2 top-2 z-10">
                  <button
                    className="rounded-full bg-white/80 p-2 shadow-sm backdrop-blur transition-all hover:scale-110 hover:bg-white"
                    onClick={(e) => toggleFavorite(e, item.id)}
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      className={`h-5 w-5 text-rose-500 transition-opacity duration-200 ${
                        isFav ? "opacity-100" : "opacity-40"
                      }`}
                      fill={isFav ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                <div className="overflow-hidden">
                  <Image
                    width={100}
                    height={50}
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-3">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-colors hover:bg-sky-200"
                      onClick={(e) => handleDecrement(e, item.id)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-6 text-center text-base font-bold text-slate-800">
                      {itemQuantities[item.id] || 1}
                    </span>
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow transition-transform hover:scale-110"
                      onClick={(e) => handleIncrement(e, item.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-auto text-lg font-bold text-sky-700">
                    {`₹ ${calculateItemPrice(item.price, item.id)}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <Copyright />
      </footer>

      {/* Floating checkout bar */}
      {selectedItems.length > 0 && (
        <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:pl-[16rem]">
          <div className="flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-white/80 bg-white/80 px-5 py-3 shadow-2xl shadow-sky-300/60 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm text-slate-500">
                  {selectedItems.length} item
                  {selectedItems.length > 1 ? "s" : ""} selected
                </span>
                <span className="text-lg font-bold text-sky-700">
                  Total: ₹ {calculateTotalPrice()}
                </span>
              </div>
            </div>
            <Button
              className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2 font-semibold text-white shadow-lg shadow-sky-300/60 transition-all hover:-translate-y-0.5 hover:from-sky-600 hover:to-blue-700"
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
