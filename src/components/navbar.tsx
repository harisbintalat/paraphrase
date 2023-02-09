import Image from "next/image";
import logo from "@assets/imgs/logo.webp";
import Link from "next/link";
import navItems from "@data/navItems.json";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState('');

  const router = useRouter()

  useEffect(() => {
    const activeItem = router.pathname;
    setActive(activeItem);
    console.log(active)
  }, [router]);

  return (
    <div className="md:fixed left-0 top-0 right-0">
      <nav className="w-full bg-black shadow">
        <div className="justify-end px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="py-2">
            <ul className="md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <span className="text-md">
                  Need to Sell Your House Fast? Call Us Today!
                </span>
              </li>
              <li className="text-white">
                <Link href="/contact">
                  <span> 1-877-932-8946</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-2 lg:block">
              <span className="lg:flex text-white">
                <Image src={logo} alt="" />{" "}
                <span className="hidden lg:block pt-0.5 pl-2 font-semibold text-2xl">
                  |
                </span>{" "}
                <span className="hidden lg:block pt-1.5 pl-2 font-semibold text-lg">
                  Sell your House for Cash!
                </span>
              </span>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-14 lg:space-y-0">
                {navItems.map((value) => (
                  <li className="text-white" key={value.id}>
                    <Link href={value.href}>
                      <span className={`${active===value.href ? "border-b-2 py-1 border-yellow-400":""}`}>{value.item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
