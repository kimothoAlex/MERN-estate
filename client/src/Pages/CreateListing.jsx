import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadErrror] = useState(false);
  const [uploading, setUploading] = useState(false);
  console.log(formData);
  const handleImageUpload = () => {
    setUploading(true);
    setImageUploadErrror(false);
    const promises = [];

    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadErrror(false);
          setUploading(false);
        })
        .catch((error) => {
          setImageUploadErrror("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadErrror("You can only upload six images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getDate() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };
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
            className="p-3 border"
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
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="p-3 text-green-700 border border-green-900 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {uploading ? "uploading..." : "upload"}
            </button>
          </div>
          <p className="text-red-700">{imageUploadError && imageUploadError}</p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex p-3 justify-between items-center border"
              >
                <img
                  src={url}
                  alt="listing"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg hover:opacity-75 uppercase"
                >
                  Delete
                </button>
              </div>
            ))}
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
