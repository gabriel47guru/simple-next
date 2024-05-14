enum EmploymentType {
  FULLTIME = "FULL_TIME",
  PARTTIME = "PART_TIME",
  SEASONAL = "SEASONAL",
}
interface Business {
  id: number;
  name: string;
  phoneNumber: string;
  businessCity: string;
  businessState: string;
  isPublic: boolean;
}

interface Job {
  id: number;
  business: Business;
  name: string;
  minHourlyPay: number;
  maxHourlyPay: number;
  employmentTypes: EmploymentType[];
  videoUrl: string;
}
