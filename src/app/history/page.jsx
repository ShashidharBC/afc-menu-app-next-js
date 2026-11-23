import React from "react";

const stats = [
  { value: "2011", label: "Founded" },
  { value: "2015", label: "Menu expanded" },
  { value: "100s", label: "Happy customers daily" },
];

const page = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-10 sm:py-14">
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
        {"Amareshwara Fast Food Center"}
      </h1>
      <h2 className="mb-8 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl">
        {"(AFC)"}
      </h2>

      <div className="mb-8 grid w-full grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/70 bg-white/60 p-4 text-center shadow-lg shadow-sky-200/50 backdrop-blur-md"
          >
            <div className="text-2xl font-bold text-sky-600 sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-slate-600 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 rounded-3xl border border-white/70 bg-white/60 p-6 text-center text-base leading-relaxed text-slate-700 shadow-xl shadow-sky-200/50 backdrop-blur-md sm:p-10 sm:text-lg">
        <p>
          Founded in 2011, The Amareshwara Fast Food Center stands as a
          testament to culinary excellence in the heart of{" "}
          <span className="font-bold text-sky-700">Guledagudda</span>. What
          started as a small family venture has grown into one of the most
          beloved dining establishments in our community.
        </p>
        <p>
          Over the years, AFC has continuously evolved, introducing innovative
          dishes while preserving traditional flavors. In 2015, we expanded our
          menu to include a wider variety of regional specialties, making us a
          go-to destination for both locals and visitors seeking authentic local
          cuisine with a modern twist.
        </p>
        <p>
          Today, after more than a decade of service, AFC continues to serve the
          community with the same passion and dedication it started with. Our
          commitment to quality, cleanliness, and customer satisfaction has made
          us a cherished part of Guledagudda&apos;s culinary landscape, serving
          hundreds of happy customers daily with our signature blend of
          traditional values and contemporary service.
        </p>
      </div>
    </div>
  );
};

export default page;
