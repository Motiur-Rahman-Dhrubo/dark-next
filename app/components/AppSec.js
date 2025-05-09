import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const AppSec = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("/json/app.json")
      .then((res) => res.json())
      .then((data) => setAppData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="flex gap-4 flex-col">
      {appData.map((item, index) => (
        <div
          key={index}
          className={`p-5 md:p-10 rounded-lg bg-[#171618] flex flex-col-reverse gap-4 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div
            className={`w-full md:w-1/2 flex flex-col justify-center gap-3 md:gap-5 ${
              index % 2 === 0 ? "md:pr-5" : "md:pl-5"
            }`}
          >
            <div className="flex gap-3 text-xs text-center flex-wrap">
              {item.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#09090B] p-3  text-gray-400"
                >
                  {feature}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-[#DCA54C]">{item.name}</h3>
            <p className="text-justify text-gray-400 text-base">
              {item.details}
            </p>
            <a
              href={item.liveLink}
              className="flex gap-3 font-bold uppercase text-[#DCA54C] text-base"
              target="_blank"
            >
              <FaExternalLinkAlt />
              Visit Site
            </a>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={100}
              className="rounded-lg w-full aspect-[9/5]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppSec;
