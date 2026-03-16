import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6 space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-sky-600">
          협력 학회
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          병원기반 아동작업치료TF와 함께하는 협력 학회
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600">
          소아작업치료의 전문성과 현장성을 높이기 위해 관련 학회와의 협력을
          기반으로 정보를 구축하고 있습니다.
        </p>
      </header>

      <section className="space-y-4">
        <article className="space-y-2 rounded-2xl border border-zinc-200 bg-white/80 p-4 text-sm">
          <h2 className="text-base font-semibold text-zinc-900">
            대한감각통합치료학회
          </h2>
          <p className="text-xs text-zinc-600">
            감각처리 및 감각통합치료 영역의 이론과 임상 경험을 바탕으로, 감각
            문제를 가진 아동의 평가와 중재에 대한 전문성을 공유합니다.
          </p>
        </article>

        <article className="space-y-2 rounded-2xl border border-zinc-200 bg-white/80 p-4 text-sm">
          <h2 className="text-base font-semibold text-zinc-900">
            대한아동학교작업치료학회
          </h2>
          <p className="text-xs text-zinc-600">
            학령기 아동과 학교 환경에서의 작업 수행(필기, 수업 참여, 학교 생활
            적응 등)을 중심으로, 학교 기반 작업치료의 관점과 근거를 제공합니다.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/60 p-4 text-[11px] text-zinc-500">
        <h3 className="mb-1 text-xs font-semibold text-zinc-700">
          협력 학회 안내
        </h3>
        <p>
          위 학회와의 공식적인 협력 관계 및 로고 사용, 상세한 참여 방식은
          TF·학회 간 별도 합의를 통해 조정되며, 본 페이지는 협력 방향성을
          알리기 위한 안내용입니다.
        </p>

        <p className="mt-3">
          협력 제안이나 문의는{" "}
          <Link
            href="/contribute"
            className="font-medium text-sky-700 underline underline-offset-2"
          >
            데이터 등록·제보 페이지
          </Link>
          를 통해 남겨주세요.
        </p>
      </section>
    </div>
  );
}

