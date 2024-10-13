import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-8 shadow-md">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* services */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Our services</h3>
            <ul className="space-y-2">
              {[
                "Industry advertisement",
                "Location discovery",
                "Service listings",
                "Interactive maps",
                "Business profiles",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="hover:text-cyan-500 text-gray-600 duration-500"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick Links */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Quick links</h3>
            <ul className="space-y-2">
              {["About us", "Contact us", "Categories", "Create profile"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-cyan-500 text-gray-600 duration-500"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "Food and beverages",
                "Repair and maintenance",
                "Hotels",
                "clinics",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href="#"
                    className="hover:text-cyan-500 text-gray-600 duration-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Contact us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>phone: +250 729 550 551</li>
              <li>email: localoom.rw@gmail.com</li>
              <li>location: Musanze, Rwanda</li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 text-gray-600"></div>

          <p className="text-gray-500 text-center mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} LocaLoom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
