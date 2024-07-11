"use client";

import { useFormStatus } from "react-dom";

export default function UpdateButton() {
  const { pending, data, method, action } = useFormStatus();

  console.log("Data**********", data);

  return (
    <button
      type="submit"
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      Update reservation
    </button>
  );
}
