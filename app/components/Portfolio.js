"use client";
import React, { useState } from "react";
import WebSec from "./WebSec";
import AppSec from "./AppSec";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("webTab");

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex items-center w-full">
        <div className="flex-grow h-0.5 bg-[#1E1812]"></div>
        <span className="px-4 text-[#DCA54C] font-bold text-2xl md:text-4xl">
          Our Portfolio
        </span>
        <div className="flex-grow h-0.5 bg-[#1E1812]"></div>
      </div>

      <div className="py-8">
        {/* Tabs */}
        <div className="flex mb-5 text-base md:text-xl font-bold justify-around">
          <button
            onClick={() => setActiveTab("webTab")}
            className={`p-3 border-b-2 cursor-pointer ${
              activeTab === "webTab" ? "text-[#DCA54C]" : "border-transparent"
            }`}
          >
            WEB Development
          </button>
          <button
            onClick={() => setActiveTab("appTab")}
            className={`p-3 border-b-2 cursor-pointer ${
              activeTab === "appTab" ? "text-[#DCA54C]" : "border-transparent"
            }`}
          >
            APP Development
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "webTab" && (
            <WebSec></WebSec>
          )}
          {activeTab === "appTab" && (
            <AppSec></AppSec>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
