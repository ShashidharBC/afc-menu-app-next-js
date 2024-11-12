import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        {"Amareshwara Fast Food Center"}
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {"(AFC)"}
      </h2>

      <div className="prose text-gray-600 text-lg leading-relaxed text-center">
        <p className="mb-6">
          Founded in 2011, The Amareshwara Fast Food Center stands as a
          testament to culinary excellence in the heart of{" "}
          <span className="font-bold">Guledagudda</span>. What started as a
          small family venture has grown into one of the most beloved dining
          establishments in our community.
        </p>
        <p className="mb-6">
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
