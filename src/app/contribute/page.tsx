import Link from "next/link";

export default function ContributePage() {
  const mailAddress = "pediatric-ot@kaot.or.kr";

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-sky-600">
          데이터 등록 · 제보
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          소아작업치료 의료기관 정보를 함께 만들어 주세요.
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600">
          병원 기반 소아작업치료에 대한 현장의 목소리를 최대한 반영하기 위해,
          의료기관 정보 등록·수정 요청을 메일 또는 상담 채널을 통해 받고
          있습니다.
        </p>
      </header>

      <section className="space-y-6 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-sm">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900">1. 메일 문의</h2>
          <p className="text-xs text-zinc-600">
            아래 주소로 메일을 보내주시면, TF에서 검토 후 순차적으로 반영합니다.
          </p>
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-sky-50 px-3 py-2 text-xs text-sky-800 ring-1 ring-sky-100">
            <span className="font-semibold">이메일</span>
            <button
              type="button"
              className="rounded-full bg-white px-2 py-1 text-[11px] font-mono text-sky-800 ring-1 ring-sky-200"
            >
              {mailAddress}
            </button>
            <span className="text-[11px] text-sky-700">
              (의료기관명/주소/소아작업치료 세부 내용 등을 포함해 주세요)
            </span>
          </div>
          <ul className="list-disc space-y-1 pl-4 text-[11px] text-zinc-600">
            <li>의료기관 정식 명칭, 주소, 대표 전화번호</li>
            <li>소아작업치료 제공 여부 및 세부 프로그램(감각통합, 학령기, 수지 등)</li>
            <li>외래/입원, 야간·주말 진료 여부 등 참고가 되는 정보</li>
            <li>제보자 성함과 연락 가능한 이메일(선택)</li>
          </ul>
        </div>

        <div className="h-px bg-zinc-100" />

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-zinc-900">
            2. 챗봇 상담 (준비 중)
          </h2>
          <p className="text-xs text-zinc-600">
            웹사이트 내 챗봇을 통해 간단하게 의료기관 정보를 남길 수 있는 기능을
            준비 중입니다. 아래 버튼은 실제 서비스 오픈 시 활성화됩니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center rounded-full bg-zinc-200 px-4 py-2 text-xs font-medium text-zinc-600"
            >
              챗봇으로 정보 제보하기 (준비 중)
            </button>
            <span className="text-[11px] text-zinc-400">
              * 오픈 전까지는 메일 문의를 이용해 주세요.
            </span>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/60 p-4 text-[11px] text-zinc-500">
        <h3 className="mb-1 text-xs font-semibold text-zinc-700">
          데이터 검증 및 반영 원칙
        </h3>
        <ul className="list-disc space-y-1 pl-4">
          <li>
            모든 제보는 대한작업치료사협회 병원기반아동작업치료TF에서 최소 1회
            이상 검증 후 반영합니다.
          </li>
          <li>
            공신력 있는 공공 데이터(예: 건강보험심사평가원 건강지도 등)와
            상충되는 경우, 관련 기관 확인을 거칠 수 있습니다.
          </li>
          <li>
            반영까지는 일정 시간이 소요될 수 있으며, 반영 여부는 개별 회신 없이
            사이트를 통해 안내될 수 있습니다.
          </li>
        </ul>

        <p className="mt-3 text-[11px]">
          공공 데이터 참고:
          <Link
            href="https://www.hira.or.kr/ra/hosp/getHealthMap.do?pgmid=HIRAA030002010000#a"
            target="_blank"
            rel="noreferrer"
            className="ml-1 underline underline-offset-2"
          >
            건강보험심사평가원 건강지도
          </Link>
        </p>
      </section>
    </div>
  );
}

