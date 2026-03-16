import Link from "next/link";
import { hospitals } from "@/data/hospitals";

export default function Home() {
  const highlightedHospitals = hospitals.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-zinc-50">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-md bg-sky-500 px-2 py-1 text-xs font-semibold tracking-tight text-white">
              Pediatric OT
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900">
                대한작업치료사협회
              </span>
              <span className="text-xs text-zinc-500">
                병원기반 아동작업치료 TF
              </span>
            </div>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-700 md:flex">
            <Link href="/search" className="hover:text-sky-600">
              의료기관 찾기
            </Link>
            <Link href="/regions" className="hover:text-sky-600">
              지역별 목록
            </Link>
            <Link href="/partners" className="hover:text-sky-600">
              협력 학회
            </Link>
            <Link href="/contribute" className="hover:text-sky-600">
              데이터 등록/제보
            </Link>
            <Link href="/about" className="hover:text-sky-600">
              About
            </Link>
          </nav>
          <Link
            href="/admin"
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100"
          >
            관리자
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-14 pt-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-10 shadow-[0_18px_60px_rgba(15,23,42,0.14)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-[1.6fr,1.4fr] md:items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-100">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                실무 작업치료사들이 직접 만드는
                <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] text-sky-800">
                  베타 서비스
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                  우리 아이를 위한
                  <br />
                  <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                    소아작업치료 병원
                  </span>
                  을
                  <br />
                  한 번에 찾는 방법.
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                  산만함, 서툰 손 사용, 글씨 쓰기 어려움, 발달지연까지.{" "}
                  <span className="font-medium text-zinc-900">
                    소아작업치료가 꼭 필요한 아이들
                  </span>
                  을 위해, 대한작업치료사협회 병원기반아동작업치료TF가
                  검토·정리한 의료기관 정보를 한 곳에 모았습니다.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href="/search"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300/50 transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  내 아이에게 맞는 병원 찾기
                </Link>
                <Link
                  href="/regions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-5 py-2 text-sm font-medium text-sky-700 backdrop-blur hover:bg-sky-50"
                >
                  지역별로 한눈에 보기
                </Link>
              </div>

              <dl className="grid gap-4 text-xs text-zinc-600 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-zinc-100">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                    데이터 기반
                  </dt>
                  <dd className="mt-1 text-[11px] text-zinc-600">
                    초기에는 검증된 JSON 데이터로 시작해, 이후 Supabase를 통한
                    실시간 업데이트로 확장합니다.
                  </dd>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-zinc-100">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                    소아작업치료 특화
                  </dt>
                  <dd className="mt-1 text-[11px] text-zinc-600">
                    감각통합, 발달지연, 학령기, 수지기능, 섭식 등 세부 전문 분야
                    태그로 더 정확하게 검색합니다.
                  </dd>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-zinc-100">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                    열린 제보
                  </dt>
                  <dd className="mt-1 text-[11px] text-zinc-600">
                    보호자·치료사 누구나 제보하고 수정 의견을 남길 수 있는
                    구조로 설계되어 있습니다.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl bg-white/90 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.18)] ring-1 ring-sky-100">
                <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-zinc-700">
                      지도 기반 병원 탐색
                    </span>
                  </div>
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                    베타 미리보기
                  </span>
                </div>
                <div className="h-60 rounded-xl bg-gradient-to-br from-sky-100 via-sky-50 to-emerald-50 p-3 text-[11px] text-zinc-500">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-zinc-700">
                      서울 · 경기 인근 소아작업치료 병원
                    </span>
                    <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] text-zinc-500">
                      실제 서비스에서는 실시간 지도 표시
                    </span>
                  </div>
                  <div className="flex h-[150px] items-center justify-center rounded-lg border border-dashed border-sky-200 bg-white/70 text-[11px] text-zinc-400">
                    Kakao Map API / Mapbox 지도 영역
                  </div>
                  <p className="mt-2 text-[10px] text-zinc-500">
                    위치, 거리, 소아작업치료 제공 여부를 한 번에 확인할 수 있도록
                    설계됩니다.
                  </p>
                </div>
              </div>

              <div className="grid gap-2 text-xs text-zinc-600 sm:grid-cols-2">
                {highlightedHospitals.length === 0 ? (
                  <div className="col-span-2 rounded-2xl bg-white/90 p-3 text-[11px] text-zinc-500 ring-1 ring-dashed ring-zinc-200">
                    검증된 의료기관 데이터가 준비되는 대로 이 영역에서 주요 소아작업치료
                    병원을 하이라이트해서 보여드릴 예정입니다.
                  </div>
                ) : (
                  highlightedHospitals.map((hospital) => (
                    <Link
                      key={hospital.id}
                      href={`/hospitals/${hospital.id}`}
                      className="group flex items-center justify-between rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-0.5 hover:ring-sky-200"
                    >
                      <div className="space-y-0.5">
                        <p className="text-[13px] font-semibold text-zinc-900">
                          {hospital.name}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          {hospital.city} {hospital.district} ·{" "}
                          {hospital.hasPediatricOT
                            ? "소아작업치료 운영"
                            : "소아작업치료 미확인"}
                        </p>
                      </div>
                      <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700 group-hover:bg-sky-600 group-hover:text-white">
                        상세보기
                      </span>
                    </Link>
                  ))
                )}
              </div>

              <p className="text-[10px] text-zinc-400">
                실제 데이터는 협회 검토를 거쳐 순차적으로 반영되며, 서비스 초기에는
                일부 지역부터 제공됩니다.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl border border-zinc-200 bg-white/80 p-6 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-900">
              검색 중심 설계
            </h2>
            <p className="text-xs text-zinc-600">
              HIRA 건강지도와 유사한 구조로, 종류별/지도 기반/지역별로 의료기관을
              탐색할 수 있도록 설계했습니다.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-900">
              소아작업치료 특화 정보
            </h2>
            <p className="text-xs text-zinc-600">
              단순 진료과 목록이 아니라, 소아작업치료 제공 여부와 세부 전문
              분야(감각통합, 수지, 학령기 등)를 태그로 제공합니다.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-900">
              열린 데이터 생태계
            </h2>
            <p className="text-xs text-zinc-600">
              초기에는 JSON 기반 정적 데이터로 시작하여, 향후 Supabase 기반
              확장과 관리자 페이지를 통해 지속적으로 갱신할 수 있도록
              계획했습니다.
            </p>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-sm">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">
                Pediatric OT Issue Brief
              </p>
              <h2 className="text-base font-semibold text-zinc-900">
                소아작업치료, 지금 주목해야 할 이슈
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200">
              헤드라인 브리핑 (요약)
            </span>
          </header>

          <div className="grid gap-3 md:grid-cols-3">
            <article className="space-y-1 rounded-2xl bg-white/90 p-3 text-xs text-zinc-700 ring-1 ring-sky-100">
              <p className="text-[11px] font-semibold text-sky-700">
                HEADLINE 01 · 진단 앞당기기
              </p>
              <h3 className="text-[13px] font-semibold text-zinc-900">
                “조기 개입” 시기를 놓치지 않는 것이 중요합니다.
              </h3>
              <p className="text-[11px] text-zinc-600">
                서툰 손 사용, 옷 입기 어려움, 글씨 쓰기 문제 등은 성격 문제가 아니라
                작업 수행의 어려움일 수 있습니다. 소아작업치료는 이른 시기일수록
                효과가 큽니다.
              </p>
            </article>

            <article className="space-y-1 rounded-2xl bg-white/90 p-3 text-xs text-zinc-700 ring-1 ring-sky-100">
              <p className="text-[11px] font-semibold text-sky-700">
                HEADLINE 02 · 학교 생활
              </p>
              <h3 className="text-[13px] font-semibold text-zinc-900">
                교실에서 보이는 어려움은 “학습 의지 부족”이 아닐 수 있습니다.
              </h3>
              <p className="text-[11px] text-zinc-600">
                집중 유지, 필기, 교실 규칙 지키기 어려움 등은 감각·주의·실행기능
                문제와 연결됩니다. 작업치료는 실제 교실 활동에 맞춘 개입을
                제공합니다.
              </p>
            </article>

            <article className="space-y-1 rounded-2xl bg-white/90 p-3 text-xs text-zinc-700 ring-1 ring-sky-100">
              <p className="text-[11px] font-semibold text-sky-700">
                HEADLINE 03 · 일상과 참여
              </p>
              <h3 className="text-[13px] font-semibold text-zinc-900">
                치료실을 넘어, 아이의 하루 전체를 바라봅니다.
              </h3>
              <p className="text-[11px] text-zinc-600">
                소아작업치료는 놀이, 자기관리, 학교, 또래 관계까지 아이가
                “참여하는 삶”을 목표로 합니다. 병원 선택 시, 이런 관점을 가진 팀인지
                확인하는 것이 중요합니다.
              </p>
            </article>
          </div>

          <p className="text-[11px] text-zinc-500">
            위 내용은 보호자와 현장 작업치료사 의견을 바탕으로 작성된 요약
            안내입니다. 보다 전문적인 판단과 진단은 반드시 의료 전문가와 상의해
            주세요.
          </p>
        </section>
      </main>

      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-4 text-xs text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} 대한작업치료사협회 병원기반아동작업치료TF
          </p>
          <p>
            이 사이트는 안내용이며, 최신 정보는 각 의료기관 및{" "}
            <a
              href="https://www.hira.or.kr/ra/hosp/getHealthMap.do?pgmid=HIRAA030002010000#a"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              건강보험심사평가원 건강지도
            </a>
            를 함께 참고해 주세요.
          </p>
        </div>
      </footer>
    </div>
  );
}
