import React from "react";

const Contract = () => {
  return (
    // <div>
    //   <div className="bg-pink- min-h-screen flex items-center justify-center p-6 ">
    //     <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
    //       <h2 className="text-3xl font-bold text-center text-pink-900 mb-6">
    //         Contact Us
    //       </h2>

    //       <form className="space-y-4">
    //         {/* Name */}
    //         <div>
    //           <label className="block text-sm font-medium text-pink-900">
    //             Your Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your name"
    //             className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-900 focus:ring focus:ring-pink-200 p-2"
    //           />
    //         </div>

    //         {/* Email */}
    //         <div>
    //           <label className="block text-sm font-medium text-pink-900">
    //             Email Address
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-900 focus:ring focus:ring-pink-200 p-2"
    //           />
    //         </div>

    //         {/* Message */}
    //         <div>
    //           <label className="block text-sm font-medium text-pink-900">
    //             Message
    //           </label>
    //           <textarea
    //             rows="4"
    //             placeholder="Write your message..."
    //             className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-900 focus:ring focus:ring-pink-200 p-2"
    //           ></textarea>
    //         </div>

    //         {/* Button */}
    //         <button
    //           type="submit"
    //           className="w-full bg-pink-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300"
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>z
    //   </div>
    // </div>

     <section className="px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>

        <form className="grid gap-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full border border-accent focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full border border-accent focus:outline-none"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full border border-accent focus:outline-none"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-fit px-6 py-3 bg-accent text-white rounded transition"
          >
            Send Message
          </button>
        </form>

        {/* Company Address */}
        <div className="bg-base-300 p-6 rounded shadow-md text-left">
          <h3 className="text-2xl font-semibold text-accent mb-4">Our Address</h3>
          <p>
            ELEPHANT ROAD<br />
            SHOP-31, 3RD FLOOR, TROPICAL COMPLEX<br />
            SHOPPING MALL, 28, NEW ELEPHANT ROAD<br />
            DHAKA
          </p>
          <p className="mt-4">
            <span className="font-semibold">Email:</span> belasea@gmail.com<br />
            <span className="font-semibold">Phone:</span> +88 01919 797399
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contract;
