import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <div className="absolute inset-0">
          <picture>
            <img
              src="/heroImage.png"
              alt="하이드미플리즈"
              className="h-full w-full object-cover hidden sm:block"
            />
            <img
              src="/heroImageMobile-fixed.webp"
              alt="하이드미플리즈"
              className="h-full w-full object-cover block sm:hidden"
            />
          </picture>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[95vh] md:h-[80vh] flex items-start md:items-center pt-30 md:pt-0">
          <div className="max-w-3xl text-white">
            <p className="text-base sm:text-lg text-white/90">
              숨는 순간, 혜택이 열린다
            </p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
              리뷰, 쿠폰 없이
              <br className="block" />
              가장 간편하게 받는
              <br className="block" />
              맛집 혜택
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://apps.apple.com/nz/app/%ED%95%98%EC%9D%B4%EB%93%9C%EB%AF%B8%ED%94%8C%EB%A6%AC%EC%A6%88/id1663171012"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="앱스토어로 이동"
              >
                 앱스토어
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kr.hideme&hl=ko&pli=1"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="플레이스토어로 이동"
              >
                ▶ 플레이스토어
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="w-14 h-14 flex items-center justify-center mx-auto"
            aria-hidden
          >
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14"
            />
          </div>
          <h2 className="mt-6 mb-16 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight block text-center">
            하이드미플리즈 앱의 차별점
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-16 items-center place-items-center">
            <div className="relative">
              <img
                src="/assets/hmpEuljiro.png"
                alt="을지로 매장 화면"
                className="w-full rounded-2xl shadow ring-1 ring-black/5"
              />
              <p className="mt-4 text-xl sm:text-2xl font-extrabold text-gray-900 text-center">
                제휴 매장에서 <span className="text-red-500">매일 </span>
                혜택을 <br className="hidden sm:block" />
                받을 수 있어요
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/hmpEasy.png"
                alt="을지로 매장 화면"
                className="w-full rounded-2xl shadow ring-1 ring-black/5"
              />
              <p className="mt-4 text-xl sm:text-2xl font-extrabold text-gray-900 text-center">
                선결제, 리뷰, 쿠폰 <span className="text-red-500">없이</span>{" "}
                <br className="hidden sm:block" />
                NFC 태그 한 번이면 돼요
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/hmpMap.png"
                alt="을지로 매장 화면"
                className="w-full rounded-2xl shadow ring-1 ring-black/5"
              />
              <p className="text-xl mt-4 sm:text-2xl font-extrabold text-gray-900 text-center">
                <span className="text-red-500">앱 내 지도</span>를 보고 내 주변
                매장을 찾아가기만 하면 돼요
              </p>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-14 text-center"></div>
        </div>
      </section>

      {/* Preceding heading outside of background video */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            프랜차이즈 대신 ‘
            <span className="text-red-500">로컬 핫플레이스</span>’만
            큐레이션해요
          </h3>
        </div>
      </section>

      {/* Ecosystem ring diagram on dark background */}
      <section className="relative w-full min-h-[60vh]">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/hmpAffiliateStores.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-15">
          <div className="text-white mb-20 max-w-xl">
            <h3 className="text-xl md:text-2xl font-extrabold leading-tight">
              운영진이 직접 발굴·선정한 <br /> 개성 있는 맛집과 카페만 소개해요
            </h3>
          </div>
        </div>
      </section>

      {/* Download CTA (red) */}
      <section className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-32">
          <div className="text-center text-white">
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              다운로드하고 <br className="block sm:hidden" /> 바로 혜택을
              누리세요!
            </h3>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/nz/app/%ED%95%98%EC%9D%B4%EB%93%9C%EB%AF%B8%ED%94%8C%EB%A6%AC%EC%A6%88/id1663171012"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="앱스토어로 이동"
              >
                 앱스토어
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kr.hideme&hl=ko&pli=1"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="플레이스토어로 이동"
              >
                ▶ 플레이스토어
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
