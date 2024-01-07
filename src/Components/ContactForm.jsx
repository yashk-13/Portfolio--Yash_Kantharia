import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
      };
  return (
    <div>
      <div className="flex flex-wrap items-center py-4 ">
        <div className=" h-full w-full ">
          <iframe
            src="https://maps.google.com/maps?q=vikhroli&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className=" h-full w-full rounded-lg "
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        {/* map ends here  */}

        <div className="flex items-center justify-center py p-2-4 ">
        <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-md font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-200"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-200"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-md font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-200"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-fuchsia-500 text-center text-white py-2 px-4 rounded-md hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline-blue active:bg-fuchsia-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
