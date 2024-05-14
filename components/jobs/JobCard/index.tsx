import { formatCurrency } from "@/utils";
import Link from "next/link";

import { TbBuildingBank, TbMapPin } from "react-icons/tb";
interface JobCardProps {
  data: Job;
}

export default function JobCard({ data }: JobCardProps) {
  return (
    <Link href={`/jobs/${data.id}`}>
      <div className="w-full p-4 border bg-white border-gray-300 flex flex-col gap-4 rounded-md shadow-md cursor-pointer ">
        <div className="w-full flex justify-between font-semibold">
          <div className="text-lg">{data.name}</div>
          <div className="text-md text-green-600">
            {formatCurrency(data.minHourlyPay)} ~{" "}
            {formatCurrency(data.maxHourlyPay)}
          </div>
        </div>
        <div className="w-full flex gap-1 sm:gap-5 text-sm text-gray-600 items-start sm:items-center flex-col sm:flex-row">
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <TbBuildingBank />
              {data.business.name}
            </div>
            <div className="flex items-center gap-1">
              <TbMapPin />
              {data.business.businessCity}, {data.business.businessState}
            </div>
          </div>
          <div className="flex gap-3 text-xs">
            {data.employmentTypes.map((type, idx) => (
              <span
                key={idx}
                className="px-3 py-0.5 bg-gray-100 text-blue-400 rounded-2xl"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
