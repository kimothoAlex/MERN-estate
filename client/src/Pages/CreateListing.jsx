import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold text-center py-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4 flex-1">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            className="p-3 border "
            placeholder="name"
            required
            maxLength="62"
            minLength="10"
          />
          <textarea
            id="description"
            placeholder="description"
            className="border p-3"
            required
          ></textarea>
          <input
            type="text"
            placeholder="address"
            className="p-3 p-3 border"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="number"
                className="border p-3 border-gray-300 rounded-lg"
                min="1"
                max="10"
                id="bedrooms"
                required
              />
              <p>Beds</p>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className="border p-3 border-gray-300 rounded-lg"
                min="1"
                max="10"
                id="bathrooms"
                required
              />
              <p>Baths</p>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className="border p-3 border-gray-300 rounded-lg"
                min="1"
                max="10"
                id="regularPrice"
                required
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                className="border p-3 border-gray-300 rounded-lg"
                min="1"
                max="10"
                id="discountPrice"
                required
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The firt image will be the cover (max 6)
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button className="p-3 text-green-700 border border-green-900 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
