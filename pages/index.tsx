import type { NextPage } from "next";
import React from "react";
const Home: NextPage = () => {
  return (
    <>
      <div className="h-16 bg-slate-900/80 absolute w-full">
        <div className="flex justify-start items-center w-[1220px] py-3 m-auto space-x-4">
          <div className="space-x-4 flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-gray-300 text-sm font-medium">
              Search by Vin Code
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="px-2 bg-transparent border-b-gray-400 placeholder-gray-300 font-medium text-sm py-2 border border-t-transparent border-l-transparent border-r-transparent focus:outline-none text-gray-300"
              placeholder="Enter Vin Code"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-60 flex flex-col h-screen bg-slate-900 z-50 px-3 py-3 space-y-2">
          <h1 className="text-2xl font-medium text-sky-400 pb-5">
            Hello there
          </h1>
          <div className="inline-flex items-center space-x-2">
            <img
              src="https://robohash.org/natusvoluptatemex.png?size=300x300&set=set1"
              className="h-10 w-10 bg-lime-500 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-50">
                Amine zebi
              </span>
              <span className="text-xs font-medium text-gray-50">Amine 2</span>
              <a className="text-xs font-medium text-neutral-500">Sign out</a>
            </div>
          </div>
          <button className="flex flew-row space-x-2 px-2 py-2 text-gray-400 hover:text-gray-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
            <span className="text-sm">lol</span>
          </button>
          <button className="flex flew-row space-x-2 px-2 py-2 text-gray-400 hover:text-gray-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
            <span className="text-sm">lol</span>
          </button>
        </div>

        <div className="container m-auto">
          <p className="animate-pulse text-center text-7xl text-indigo-600">
            Hello
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
