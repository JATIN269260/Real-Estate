import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 text-gray-200 p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 ">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">
                <span>Citylights</span>
                <span className="text-gray-500">Estate</span>
              </h4>
              <p className="text-gray-500">
                Al23 Lost Street
                <br />
                Chandigarh, PB 243233 <br />
                India <br />
                <br />
                <strong>Phone:</strong>+1 232 2321 4532
                <br />
                <strong>Email:</strong>info@gmail.com
              </p>
            </div>
            <div className="mb-5">
              <h4 className="mx- pb-3">Useful Links</h4>
              <ul className="text-gray-500">
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Home
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  About Us
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Services
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Terms of Services
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="md-5">
              <h4 className="mx-1 pb-3">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Residential Sales and Purchases
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Commercial Sales and Leasing
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Property Management
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Home Inspection Services
                </li>
                <li className="pb-3 flex hover:text-yellow-500">
                  <FaChevronRight className="my-1 text-yellow-500" />
                  Land Surveying
                </li>
              </ul>
            </div>

            <div className="md-5">
              <h4 className="pb-3">Join Our Newsletter</h4>
              <p className="text-gray-500 pb-2">
                Join 25,000+ others ans never miss out on new offers,tips and
                more
              </p>
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500 "
                  placeholder="email@example.com"
                ></input>
                <button className="w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div>
          <div className="text-center">
            <div>
              Copyright
              <strong>
                <span>CitylightsEstate</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>
              Designed By{" "}
              <strong className="text-yellow-500">Jatin Garg</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
