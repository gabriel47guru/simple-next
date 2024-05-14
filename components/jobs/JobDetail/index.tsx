"use client";
import BackgroundVideo from "next-video/background-video";

import { formatCurrency } from "@/utils";
import { useEffect, useRef } from "react";
import { TbMapPin, TbDeviceSpeakerOff } from "react-icons/tb";
interface JobDetailProps {
  data: Job;
}

export default function JobDetail({ data }: JobDetailProps) {
  const tags = [
    `${formatCurrency(data.minHourlyPay)} ~ ${formatCurrency(
      data.maxHourlyPay
    )}`,
    ...data.employmentTypes,
  ];

  return (
    <div className="w-3/5 h-screen">
      <BackgroundVideo>
        <div className="h-full z-100 fixed w-screen left-0 top-0 flex justify-center">
          <div className="w-3/5 flex flex-col justify-between p-5 bg-transparent text-white">
            <div className="w-full flex justify-end">
              <div className="p-2 rounded-md bg-gray-900/40">
                <TbDeviceSpeakerOff />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>{data.business.name}</div>
              <div className="text-xl font-extrabold">{data.name}</div>
              <div className="text-xs flex items-center gap-1 font-semibold">
                <TbMapPin />
                {data.business.businessCity}, {data.business.businessState}
              </div>
              <div className="flex gap-2">
                {tags.map((item, index) => (
                  <span
                    key={index}
                    className="py-1 px-2 bg-gray-600 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between gap-3 font-semibold text-sm mt-7">
                <button className="flex-grow bg-pink-600 py-2 rounded-full text-white">
                  Apply on Jobreel
                </button>
                <button className="bg-white text-black py-2 px-6 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundVideo>
    </div>
  );
}
