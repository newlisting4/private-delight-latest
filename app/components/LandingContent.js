"use client";

import React, { useState } from "react";
import { 
  MdLocationOn, 
  MdKeyboard, 
  MdPerson, 
  MdPhone, 
  MdEmail 
} from "react-icons/md";

// Simple state lists
const US_STATES = [
  { code: "", name: "Select State" },
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" }
];

export default function LandingContent({ onLoginClick }) {
  const [activeTab, setActiveTab] = useState("location");
  
  // Location Search State
  const [providerType, setProviderType] = useState("All Providers");
  const [serviceType, setServiceType] = useState("Any Service");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("0 miles");
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Other Search States
  const [keyword, setKeyword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching with tab "${activeTab}"...`);
  };

  const tabs = [
    { id: "location", label: "LOCATION", icon: <MdLocationOn className="text-xl" /> },
    { id: "keyword", label: "KEYWORD", icon: <MdKeyboard className="text-xl" /> },
    { id: "username", label: "USERNAME", icon: <MdPerson className="text-xl" /> },
    { id: "phone", label: "PHONE", icon: <MdPhone className="text-xl" /> },
    { id: "email", label: "EMAIL", icon: <MdEmail className="text-xl" /> }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative">
      

      {/* Main Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-[38px] font-semibold text-gray-900 tracking-tight leading-tight mb-2">
          Read Reviews And Meet Escorts / Providers
        </h2>
        <p className="text-custom-rose text-lg md:text-xl italic font-medium">
          (Sign up / Search listings below)
        </p>
      </div>

      {/* Grid of Clients and Providers (Side by side on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        
        {/* Clients Box */}
        <div className="flex flex-col">
          <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-6 md:p-8 flex-grow">
            <h3 className="text-center text-[#4f6df5] text-[23px] font-semibold mb-6">
              Clients
            </h3>
            <div className="space-y-6 text-gray-800">
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Read Reviews</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  There are lots of factors to weigh before hiring a Provider. We think checking out their reviews should be one of them. PrivateDelights is the best place for Provider reviews.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Verified Providers</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Every single provider on PrivateDelights is age verified (ID, P411 etc). No verification = no posting.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Quick Screening</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Safe providers will only see you after you're screened. With PrivateDelights, providers can quickly screen you by seeing the reviews you've left.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">One Stop</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Location-specific searches, detailed listings, saving favorites and more. PrivateDelights is the only provider site you'll ever need.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Based in Europe</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Our domain is registered in Switzerland, our team is based in the Netherlands and our site is hosted on servers across Europe.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button 
              onClick={onLoginClick}
              className="bg-[#4f6df5] hover:bg-blue-600 text-white font-medium px-8 py-[10px] rounded-[3px] shadow transition duration-200 w-full max-w-[280px]"
            >
              Client Sign Up
            </button>
          </div>
        </div>

        {/* Providers Box */}
        <div className="flex flex-col">
          <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-6 md:p-8 flex-grow">
            <h3 className="text-center text-[#4f6df5] text-[23px] font-semibold mb-6">
              Providers
            </h3>
            <div className="space-y-6 text-gray-800">
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Collect Reviews</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  PrivateDelights makes it really simple to quickly collect reviews from your clients, and publicly respond to them. More reviews = more clients.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Join A Community</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  PrivateDelights provides a safe, moderated space where Verified Providers can gather to chat and help each other.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Screen Clients</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Quickly screen a potential client by checking out their verified reviews for other providers. Use PrivateDelights to protect yourself from bad experiences.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Beautiful Listings</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Dedicated, full-page listings with gorgeous images and plenty of room for details and contact info.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[17.5px] mb-1">Based in Europe</h4>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  Our domain is registered in Switzerland, our team is based in the Netherlands and our site is hosted on servers across Europe.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button 
              onClick={onLoginClick}
              className="bg-[#4f6df5] hover:bg-blue-600 text-white font-medium px-8 py-[10px] rounded-[3px] shadow transition duration-200 w-full max-w-[280px]"
            >
              Provider Sign Up
            </button>
          </div>
        </div>

      </div>

      {/* Search Section */}
      <div className="mt-14 md:mt-20">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-8">
          Search
        </h2>

        {/* Search Card Container */}
        <div className="bg-white border border-slate-200 rounded shadow-sm max-w-4xl mx-auto overflow-hidden">
          
          {/* Tabs header */}
          <div className="flex border-b border-gray-200 bg-[#f9f9f9] overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col md:flex-row items-center justify-center gap-1.5 py-4 px-4 text-xs font-bold tracking-wider transition-all border-b-2 min-w-[90px] ${
                    isActive 
                      ? "border-[#4f6df5] text-[#4f6df5] bg-white font-black" 
                      : "border-transparent text-gray-400 hover:text-gray-600 bg-gray-50/50"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSearchSubmit} className="space-y-5">
              
              {/* Active Tab: Location */}
              {activeTab === "location" && (
                <div className="space-y-4">
                  {/* Row 1: Dropdown 1 & Dropdown 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    <div className="flex flex-col">
                      <select 
                        value={providerType} 
                        onChange={(e) => setProviderType(e.target.value)}
                        className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent cursor-pointer text-[15px]"
                      >
                        <option>All Providers</option>
                        <option>Escorts</option>
                        <option>Massages</option>
                        <option>Male Escorts</option>
                        <option>Transsexuals</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <select 
                        value={serviceType} 
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent cursor-pointer text-[15px]"
                      >
                        <option>Any Service</option>
                        <option>Outcall</option>
                        <option>Incall</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Country / State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    <div className="flex flex-col">
                      <input 
                        type="text"
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                        className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent text-[15px]"
                      />
                    </div>

                    <div className="flex flex-col">
                      <select 
                        value={state} 
                        onChange={(e) => setState(e.target.value)}
                        className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent cursor-pointer text-[15px]"
                      >
                        {US_STATES.map((st) => (
                          <option key={st.code} value={st.code}>
                            {st.name || "State"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: City / Distance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    <div className="flex flex-col">
                      <input 
                        type="text"
                        value={city}
                        disabled={!state}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className={`w-full border-b py-2 focus:border-[#4f6df5] outline-none bg-transparent text-[15px] ${
                          !state 
                            ? "border-custom-rose text-gray-400 placeholder-gray-400" 
                            : "border-gray-300 text-gray-800 placeholder-gray-400"
                        }`}
                      />
                      {!state && (
                        <span className="text-[11px] text-custom-rose mt-1 font-medium text-left">
                          Select State First
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <select 
                        value={distance} 
                        onChange={(e) => setDistance(e.target.value)}
                        className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent cursor-pointer text-[15px]"
                      >
                        <option>0 miles</option>
                        <option>5 miles</option>
                        <option>10 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                        <option>100 miles</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Active Tab: Keyword */}
              {activeTab === "keyword" && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent text-[15px]"
                  />
                </div>
              )}

              {/* Active Tab: Username */}
              {activeTab === "username" && (
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent text-[15px]"
                  />
                </div>
              )}

              {/* Active Tab: Phone */}
              {activeTab === "phone" && (
                <div className="flex flex-col">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent text-[15px]"
                  />
                </div>
              )}

              {/* Active Tab: Email */}
              {activeTab === "email" && (
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:border-[#4f6df5] outline-none text-gray-800 bg-transparent text-[15px]"
                  />
                </div>
              )}

              {/* Search Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#4f6df5] hover:bg-blue-600 text-white font-medium px-14 py-2.5 rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition duration-200 text-[15px]"
                >
                  Search
                </button>
              </div>

              {/* Yellow Saved Notice */}
              <div className="bg-[#ffd24c] rounded-sm py-3 px-4 text-center text-sm text-gray-800 max-w-2xl mx-auto shadow-sm italic font-medium">
                Search settings will be saved after{" "}
                <button 
                  type="button" 
                  onClick={onLoginClick} 
                  className="text-[#4f6df5] font-semibold hover:text-blue-700 transition-colors"
                >
                  Login
                </button>
              </div>

              {/* Show More Filters Link */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                  className="text-[#4f6df5] text-sm font-semibold hover:underline"
                >
                  {showMoreFilters ? "Hide Extra Filters" : "Show More Filters"}
                </button>
              </div>

              {showMoreFilters && (
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm mt-4 text-center text-sm text-gray-500">
                  Additional filters are currently empty.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
