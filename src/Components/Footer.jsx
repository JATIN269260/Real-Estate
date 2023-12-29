import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 text-gray-200 p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 ">
            <div className="mb-5">
              <h4>CitylightsEstate</h4>
              Al23 Lost Street
              <br />
              Chandigarh, PB 243233 <br />
              India <br />
              <br />
              <strong>Phone:</strong>+1 232 2321 4532
              <br />
              <strong>Email:</strong>info@gmail.com
            </div>
            <div className="mb-5">
              <h4>Useful Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="md-5">
              <h4>Our Services</h4>
              <ul>
                <li>Residential Sales and Purchases</li>
                <li>Commercial Sales and Leasing</li>
                <li>Property Management</li>
                <li>Home Inspection Services</li>
                <li>Land Surveying</li>
              </ul>
            </div>

            <div className="md-5">
              <h4>Join Our Newsletter</h4>
              <p>
                Join 25,000+ others ans never miss out on new offers,tips and
                more
              </p>
              <form>
                <input type="text"></input>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
