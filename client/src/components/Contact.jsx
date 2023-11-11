import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const fetchLandlord = async () => {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
        console.log(landlord);
      };
      fetchLandlord();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [listing.userRef]);
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          Contact <span>{landlord.username}</span> for
          <span> {listing.name.toLowerCase()}</span>
        </p>
        <textarea
          name="message"
          id="message"
          rows="2"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-3 rounded-lg"
        ></textarea>
        <Link
          to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
        >
          Send messsage
        </Link>
      </div>
    </>
  );
};

export default Contact;
