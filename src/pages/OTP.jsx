import React, { useState } from "react";

export default function OTP() {
  const [emailOTP, setEmailOTP] = useState("");
  const [phoneOTP, setPhoneOTP] = useState("");

  return (
    <form className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Enter OTP</h1>
        <p className="text-gray-600 mb-4">
          We have sent an OTP to your registered email and Phone number.
        </p>
        <input
          type="text"
          placeholder="Email OTP"
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          onChange={(e) => setEmailOTP(e.target.value)}
          value={emailOTP}
          required
        />
        <input
          type="text"
          placeholder="Phone Number OTP"
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          onChange={(e) => setPhoneOTP(e.target.value)}
          value={phoneOTP}
          required
        />
        <button className="bg-blue-500 text-white py-2 rounded-lg w-full">
          Verify
        </button>
      </div>
    </form>
  );
}
