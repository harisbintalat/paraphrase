import React from "react";
import footerItems from "@data/footerItems.json";
import popularCities from "@data/popularCities.json";
import topStates from "@data/topStates.json";

const TopStates = ({ values }: any) => {
  return (
    <div className="mt-12 text-gray-800">
      {values.map((element: string) => (
        <div className="mb-4">
          <a href="#" className="hover:underline">
            {element}
          </a>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-50 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="grid grid-cols-2 gap-8 md:gap-16 md:grid-cols-6">
          <div>
            <h2 className="mb-12  text-base font-bold text-gray-900 uppercase">
              WE BUY HOUSES
            </h2>
            <ul className="text-black">
              {footerItems.map((value) => (
                <li className="mb-4 text-gray-800" id={value.item}>
                  <a href={value.href} className="hover:underline">
                    {value.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-12 text-base font-bold text-gray-900 uppercase">
              POPULAR CITITES
            </h2>
            <ul className="text-black">
              {popularCities.map((value) => (
                <li className="mb-4 text-gray-800" key={value.id}>
                  <a href={value.href} className="hover:underline ">
                    {value.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-60">
            <div>
              <h2 className="text-base font-bold text-gray-90 w-60 uppercase">
                TOP STATES
              </h2>
              <TopStates
                values={[
                  "Georgia",
                  "Idaho",
                  "Illinois",
                  "Kansas",
                  "Massachusetts",
                  "Maryland",
                  "Michigan",
                  "Minnesota",
                ]}
              />
            </div>
            <div className="mt-6">
              <TopStates
                values={[
                  "Missouri",
                  "North Carolina",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Oklahoma",
                ]}
              />
            </div>
            <div className="mt-6">
              <TopStates
                values={[
                  "Oklahoma",
                  "Oregon",
                  "Hawall",
                  "South Carolina",
                  "Tennessee",
                  "Utah",
                  "Virginia",
                  "Washington",
                ]}
              />
            </div>
            <div className="mt-6">
              <TopStates
                values={[
                  "Georgia",
                  "Idaho",
                  "Illinois",
                  "Kansas",
                  "Massachusetts",
                  "Maryland",
                  "Michigan",
                  "Minnesota",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="flex flex-col">
        <span className="text-md text-gray-500">
          © 2023{" "}
          <a href="/" className="hover:underline">
            WeBuyHouses.com
          </a>
          . All Rights Reserved.
        </span>
        <span className="text-md text-gray-500 py-2">
          All Offices are Independently Owned &amp; Operated
        </span>
      </div>
    </footer>
  );
};

export default Footer;
