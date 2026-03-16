// One-off script to convert survey CSV into Hospital[] data.
// Usage: node scripts/generate-hospitals.js

const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");

const CSV_PATH =
  "/Users/ham1234/Downloads/문서/의료기반 소아작업치료 현황 조사(응답) - 설문지 응답 시트1.csv";

const REGION_MAP = {
  서울특별시: "seoul",
  경기도: "gyeonggi",
  인천광역시: "incheon",
  부산광역시: "busan",
  대구광역시: "daegu",
  광주광역시: "gwangju",
  대전광역시: "daejeon",
  울산광역시: "ulsan",
  세종특별자치시: "sejong",
  강원특별자치도: "gangwon",
  충청북도: "chungbuk",
  충청남도: "chungnam",
  전라북도: "jeonbuk",
  전라남도: "jeonnam",
  경상북도: "gyeongbuk",
  경상남도: "gyeongnam",
  제주특별자치도: "jeju",
};

function main() {
  const csvRaw = fs.readFileSync(CSV_PATH, "utf8");
  const records = parse(csvRaw, {
    columns: true,
    skip_empty_lines: true,
  });

  const hospitalsByKey = new Map();

  for (const row of records) {
    // 개인정보 동의 "네" 인 경우만 사용
    if (String(row["개인정보 수집에 동의하십니까?"]).trim() !== "네") continue;

    const name = String(row["현재 직장명은?"] || "").trim();
    const city = String(row["직장 주소지?"] || "").trim();
    if (!name || !city) continue;

    const region = REGION_MAP[city];
    if (!region) continue;

    const key = `${name}__${city}`;
    if (hospitalsByKey.has(key)) continue;

    const descriptionSource = String(
      row["현재 치료하고 있는 대상아동의 진단은? (복수 응답 가능)"] || ""
    ).trim();

    hospitalsByKey.set(key, {
      id: `csv-${hospitalsByKey.size + 1}`,
      name,
      region,
      city,
      district: "",
      address: city,
      phone: "",
      website: undefined,
      hasPediatricOT: true,
      pediatricOTDescription:
        descriptionSource ||
        "설문 응답을 기반으로 한 소아작업치료 제공 의료기관입니다.",
      tags: ["developmental"],
      lat: 0,
      lng: 0,
    });
  }

  const hospitals = Array.from(hospitalsByKey.values());

  const outPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "hospitals.ts"
  );

  const fileContent = `import type { Hospital } from "@/types/hospital";

export const hospitals: Hospital[] = ${JSON.stringify(hospitals, null, 2)};
`;

  fs.writeFileSync(outPath, fileContent, "utf8");
  console.log(`Wrote ${hospitals.length} hospitals to ${outPath}`);
}

main();

