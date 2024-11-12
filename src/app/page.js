import { Heart } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const menuItems = [
    {
      name: "AFC Vada Pav",
      price: "15",
      image: "/vada-pav.jpg",
    },
    {
      name: "AFC Kachori",
      price: "20",
      image: "/kachori.jpg",
    },
    {
      name: "AFC Samosa",
      price: "20",
      image: "/samosa.jpg",
    },
    {
      name: "AFC Patties",
      price: "15",
      image: "/patties.jpeg",
    },
    {
      name: "AFC Cabbage Gobi",
      price: "50",
      image: "/gobi.jpeg",
    },
    {
      name: "AFC Califlower Gobi",
      price: "60",
      image: "/flower-gobi.jpg",
    },
    {
      name: "AFC Finger Chips",
      price: "35",
      image: "/chips.jpg",
    },
    {
      name: "AFC Noodles",
      price: "35",
      image: "/noodles.jpeg",
    },
    {
      name: "AFC Alu Twister",
      price: "35",
      image: "/twister.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden border border-[#FAFAFA]"
        >
          <div className="absolute right-2 top-2 z-10">
            <button className="rounded-full p-2 bg-white/80 hover:bg-white transition-colors">
              <Heart className="w-5 h-5 text-orange-500" />
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
  );
}
