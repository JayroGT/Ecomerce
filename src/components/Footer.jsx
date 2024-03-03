const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12 bottom-0 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
            <div>
              <h6 className="text-xl font-bold mb-4">About</h6>
              <p className="text-justify">Scanfcode.com <span className="italic">CODE WANTS TO BE SIMPLE</span> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithm.</p>
            </div>
  
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-xl font-bold mb-4">Quick Links</h6>
              <ul className="items-end">
                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contribute</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr className="border-t border-gray-700 my-8" />
          <div className="flex justify-between items-center">
            <div className="md:w-8/12">
              <p className="text-sm">&copy; 2024 All Rights Reserved by <a href="#" className="text-blue-500">StoreOnline</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  