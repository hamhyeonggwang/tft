export type RegionCode =
  | "seoul"
  | "gyeonggi"
  | "incheon"
  | "busan"
  | "daegu"
  | "gwangju"
  | "daejeon"
  | "ulsan"
  | "sejong"
  | "gangwon"
  | "chungbuk"
  | "chungnam"
  | "jeonbuk"
  | "jeonnam"
  | "gyeongbuk"
  | "gyeongnam"
  | "jeju";

export type ServiceTag =
  | "sensory"
  | "hand"
  | "cognitive"
  | "school"
  | "feeding"
  | "early"
  | "developmental"
  | "rehab";

export interface Hospital {
  id: string;
  name: string;
  region: RegionCode;
  city: string;
  district: string;
  address: string;
  phone?: string;
  website?: string;
  hasPediatricOT: boolean;
  pediatricOTDescription?: string;
  tags: ServiceTag[];
  lat: number;
  lng: number;
}

