import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold text-lg">About Us</h4>
          <p>We are a leading provider of luxury accommodations worldwide, offering a curated selection of properties to meet your travel needs.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold text-lg">Explore</h4>
          <a href="#" className="hover:underline">Listings</a>
          <a href="#" className="hover:underline">Destinations</a>
          <a href="#" className="hover:underline">Offers</a>
          <a href="#" className="hover:underline">Blog</a>
        </div>

        {/* Support */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold text-lg">Support</h4>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-white font-semibold text-lg">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              {/* Facebook Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.996c0-1.002.066-2.004 2-2.004h2v-3h-3.473c-4.108 0-4.527 2.487-4.527 4.545v2.455z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              {/* Twitter Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.721-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.568 0-6.47 2.902-6.47 6.47 0 .505.056.994.162 1.465-5.385-.262-10.154-2.859-13.35-6.793-.556.958-.876 2.07-.876 3.255 0 2.247 1.146 4.234 2.883 5.394-.847-.024-1.642-.26-2.34-.647v.08c0 3.167 2.254 5.823 5.242 6.425-.547.149-1.127.234-1.729.234-.424 0-.834-.041-1.234-.117.834 2.593 3.253 4.49 6.136 4.542-2.23 1.751-5.04 2.809-8.093 2.809-.526 0-1.04-.031-1.549-.091 2.905 1.861 6.353 2.949 10.061 2.949 12.073 0 18.661-9.945 18.661-18.661 0-.301-.01-.599-.03-.898.81-.585 1.517-1.32 2.074-2.164z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;