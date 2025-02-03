// import React, { useState } from "react";
// import instance from "../services/instance";

// const RequestPasswordReset = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await instance.post("/pass/request-password-reset", {
//         email,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message ||
//           "An error occurred while requesting the password reset"
//       );
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 p-6">
//       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-orange-700 text-center">
//           Reset Your Password 🍊
//         </h2>
//         {message && (
//           <p
//             className={`mt-4 p-3 rounded ${
//               message.toLowerCase().includes("error")
//                 ? "bg-red-100 text-red-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//         <form onSubmit={handleSubmit} className="mt-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-600"
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
//           >
//             Request Password Reset
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RequestPasswordReset;
