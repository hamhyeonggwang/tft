"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { hospitals } from "@/data/hospitals";
import type { RegionCode } from "@/types/hospital";

const regions: { code: RegionCode; label: string }[] = [
  { code: "seoul", label: "서울" },
  { code: "gyeonggi", label: "경기" },
  { code: "incheon", label: "인천" },
  { code: "busan", label: "부산" },
  { code: "daegu", label: "대구" },
];

const diagnosisFilters = [
  "뇌병변장애",
  "자폐스펙트럼장애",
  "지적장애",
  "유전적 질환",
  "척수손상아동",
  "기타 (발달지연, DCD, ADHD 등)",
] as const;

export default function SearchPage() {
  const [activeDiagnoses, setActiveDiagnoses] = useState<string[]>([]);

  const filteredHospitals = useMemo(() => {
    if (activeDiagnoses.length === 0) return hospitals;
    return hospitals.filter((h) => {
      if (!h.pediatricOTDescription) return false;
      return activeDiagnoses.every((keyword) =>
        h.pediatricOTDescription?.includes(keyword)
      );
    });
  }, [activeDiagnoses]);

  const toggleDiagnosis = (label: string) => {
    setActiveDiagnoses((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            의료기관 찾기
          </h1>
          <p className="mt-1 text-xs text-zinc-500">
            지역과 세부 조건을 선택하여 소아작업치료를 제공하는 의료기관을
            찾아보세요. (지역별 목록과 통합 예정)
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[260px,1fr]">
        <aside className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-4 text-xs shadow-sm">
          <div>
            <h2 className="text-xs font-semibold text-zinc-900">지역 선택</h2>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {regions.map((region) => (
                <button
                  key={region.code}
                  type="button"
                  className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-700 hover:border-sky-300 hover:bg-sky-50"
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-zinc-100" />

          <div>
            <h2 className="text-xs font-semibold text-zinc-900">
              진단 기준 필터
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {diagnosisFilters.map((label) => {
                const active = activeDiagnoses.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleDiagnosis(label)}
                    className={`rounded-full px-2 py-1 text-[11px] ring-1 ${
                      active
                        ? "bg-sky-600 text-white ring-sky-600"
                        : "bg-white text-zinc-700 ring-zinc-200 hover:bg-sky-50 hover:text-sky-700 hover:ring-sky-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-zinc-100" />

          <div>
            <h2 className="text-xs font-semibold text-zinc-900">
              소아작업치료 세부 분야 (예정)
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                "감각통합",
                "학령기/학교",
                "수지/상지",
                "섭식/급식",
                "조기중재",
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-full bg-white px-2 py-1 text-[11px] text-zinc-700 ring-1 ring-zinc-200 hover:bg-sky-50 hover:text-sky-700 hover:ring-sky-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 기타 조건 섹션은 추후 실제 데이터 구조 확정 후 추가 예정 */}
        </aside>

        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-600">
            <p>
              검색결과{" "}
              <span className="font-semibold">
                {filteredHospitals.length.toLocaleString()}
              </span>
              건
            </p>
            <div className="flex items-center gap-2">
              <span>정렬기준</span>
              <select className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[11px]">
                <option>거리순 (예정)</option>
                <option>가나다순</option>
              </select>
            </div>
          </div>

          {filteredHospitals.length === 0 ? (
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-zinc-200 bg-white text-center text-[11px] text-zinc-600">
              <p className="font-medium text-zinc-700">
                아직 등록된 의료기관 데이터가 없습니다.
              </p>
              <p>
                대한작업치료사협회 병원기반아동작업치료TF에서 검증한 정보를
                순차적으로 반영할 예정입니다.
              </p>
              <Link
                href="/contribute"
                className="mt-1 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200 hover:bg-sky-100"
              >
                의료기관 정보 제보·수정 요청하기
              </Link>
            </div>
          ) : (
            <div className="grid gap-3">
              {filteredHospitals.map((hospital) => (
                <Link
                  key={hospital.id}
                  href={`/hospitals/${hospital.id}`}
                  className="group rounded-2xl border border-zinc-200 bg-white p-4 hover:border-sky-200 hover:bg-sky-50/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {hospital.name}
                      </h3>
                      <p className="text-xs text-zinc-500">
                        {hospital.city} {hospital.district} · {hospital.address}
                      </p>
                      {hospital.pediatricOTDescription && (
                        <p className="mt-1 text-xs text-zinc-600">
                          {hospital.pediatricOTDescription}
                        </p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {hospital.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700 ring-1 ring-sky-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right text-[11px] text-zinc-500">
                      {hospital.phone && <span>{hospital.phone}</span>}
                      {hospital.website && (
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-600">
                          병원 홈페이지 정보 있음
                        </span>
                      )}
                      <span className="rounded-full bg-sky-600 px-3 py-1 text-[11px] font-medium text-white group-hover:bg-sky-700">
                        홈페이지
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

