import React from "react";
import { IoMdAlert } from "react-icons/io";
import { useEffect, useState } from "react";

function RegForm({ setSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  // If both the fields are filled, then the button will be enabled
  useEffect(() => {
    if (name && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email]);

  // Function to handle the form submission
  const handleSubmit = () => {
    // Regex to validate the email
    console.log("Name: ", name);
    console.log("Email: ", email);
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="font-cov text-2xl text-center text-cgreen mb-4 ">
        Registration Form
      </div>
      <div className="text-4xl text-center font-semibold text-pblack mb-4 font-manrope">
        Start your success <br /> Journey here!
      </div>

      <div className="flex flex-col mt-4 w-1/4">
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-gray-100 p-6 mt-10 rounded-full "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-gray-100 p-6 mt-5 rounded-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* If the email is not valid, then show an error */}
        {error && (
          <div className="text-[#FF0808] mt-3 mx-2 flex items-center ">
            <IoMdAlert className="inline-block mx-2 text-[#FF0808]" />
            {error}
          </div>
        )}

        {/* If both the fields are filled, then the button will be enabled */}
        <button
          className={`bg-pblack p-6 mt-12 rounded-full text-white font-semibold ${
            disabled ? "opacity-50" : ""
          }`}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RegForm;
