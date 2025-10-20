const About = () => {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-base-300 shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-accent text-center mb-6">
          About BOOKSTO
        </h1>

        {/* Website Information */}
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-accent">BOOKSTO</span>, 
          your one-stop destination for premium beauty and makeup products. 
          We aim to provide high-quality skincare, perfumes, lipsticks, and brushes 
          that make you feel confident and beautiful.  
          <br />
          Our mission is to bring the best makeup essentials right at your fingertips 
          with an easy shopping experience.
        </p>

        {/* Company Address */}
        <div className="dark:bg-gray-600 bg-base-100 border border-accent rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-accent mb-3">
            Our Company Address
          </h2>
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-medium">BOOKSTO </span> <br />
            House #12, Road #5 <br />
            Dhanmondi, Dhaka – 1209 <br />
            Bangladesh
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Belasea. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
