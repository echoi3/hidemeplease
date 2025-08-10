export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742521-b5a63c0f0e95?q=80&w=2070&auto=format&fit=crop"
            alt="단골가게 앱을 사용하는 장면 배경"
            className="h-[80vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[80vh] flex items-center">
          <div className="max-w-3xl text-white">
            <p className="text-base sm:text-lg text-white/90">
              새로운 선결제 할인 플랫폼, 단골가게
            </p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
              결제에는 언제나
              <br className="hidden sm:block" />
              할인이 따른다
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="앱스토어로 이동"
              >
                 앱스토어
              </a>
              <a
                href="#"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: heading */}
            <div className="flex flex-col items-start">
              <div
                className="w-14 h-14 rounded-md bg-red-500 flex items-center justify-center text-white text-2xl"
                aria-hidden
              >
                🏪
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                단골가게는
                <br className="hidden sm:block" /> 이런 서비스예요
              </h2>
            </div>

            {/* Right: card mockups */}
            <div className="relative">
              <div className="rounded-[32px] bg-gray-50 ring-1 ring-black/5 p-6 sm:p-8 lg:p-10 overflow-hidden">
                <div className="flex gap-4 sm:gap-6">
                  {[
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1542826438-30c0b3c65b9b?q=80&w=1200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
                  ].map((src, idx) => (
                    <div
                      key={src}
                      className="w-[240px] shrink-0 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={src}
                          alt="콘텐츠 이미지"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-gray-500">
                          ~{idx === 0 ? "20%" : "10%"} 할인
                        </div>
                        <div className="mt-1 font-semibold truncate">
                          예시 상점 {idx + 1}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          서울시 어딘가 · {idx + 0.7}km
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-14 text-center">
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
              원하는 가게를 골라서{" "}
              <span className="text-red-500">할인된 가격</span>으로 선결제하고
            </p>
          </div>
        </div>
      </section>

      {/* Benefit: 고객/가게 가치 */}
      <section className="w-full bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              고객은 할인받고, 가게는 손님받고
            </h3>
            <p className="mt-3 text-gray-600">
              단골가게는 고객의 이익과 가게의 이익 모두를 추구하는 사회적 가치
              창출을 위해 달려가고 있어요
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white ring-1 ring-black/5 p-8 sm:p-12">
            <div className="flex flex-col items-center">
              <div className="flex h-40 w-28 items-center justify-center rounded-2xl bg-red-500 text-white text-4xl font-extrabold shadow-lg">
                30%
              </div>
              <p className="mt-8 text-xl sm:text-2xl text-gray-900">
                고객은 <span className="font-extrabold">단골 혜택</span>받는
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem ring diagram on dark background */}
      <section className="relative w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
            alt="배경 이미지"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white max-w-xl">
              <h3 className="text-3xl font-extrabold leading-tight">
                모두에게
                <br />
                직접적인 이득을 주는
                <br />
                선결제 활성화
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative size-72 sm:size-80">
                <div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  aria-hidden
                />
                <div
                  className="absolute inset-8 rounded-full border-2 border-white/20"
                  aria-hidden
                />
                <div
                  className="absolute inset-16 rounded-full border-2 border-white/20"
                  aria-hidden
                />
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-gray-900 w-20 h-20 flex items-center justify-center font-bold">
                  단골가게
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/10 backdrop-blur text-white w-20 h-20 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  고객
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/10 backdrop-blur text-white w-20 h-20 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  가게
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/10 backdrop-blur text-white w-20 h-20 rounded-full flex items-center justify-center ring-1 ring-white/30">
                  할인 혜택
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anywhere benefits cards */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            언제 어디서든 <span className="text-red-500">단골혜택</span>{" "}
            받으세요
          </h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <figure className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
                alt="내 주변 모든 업종의 가게"
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute left-4 top-4 text-left">
                <div className="text-white text-xl font-extrabold drop-shadow">
                  내 주변
                </div>
                <div className="text-white text-xl font-extrabold drop-shadow">
                  모든 업종의 가게
                </div>
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop"
                alt="결제할 때마다 5~30% 할인"
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute left-4 top-4 text-left">
                <div className="text-white text-xl font-extrabold drop-shadow">
                  결제할 때마다
                </div>
                <div className="text-white text-xl font-extrabold drop-shadow">
                  5~30% 할인
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Download CTA (red) */}
      <section className="w-full bg-red-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center text-white">
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              다운로드하고 바로 혜택을 누리세요!
            </h3>
            <p className="mt-4 text-white/90 text-base sm:text-lg">
              내가 이용할 가게만 쭈~~~욱 할인 받을 수 있어요
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#"
                aria-label="App Store로 이동"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-gray-900 shadow-sm ring-1 ring-white/40 hover:bg-gray-50"
              >
                <span className="text-2xl"></span>
                <span className="text-sm font-semibold">
                  Download on the App Store
                </span>
              </a>
              <a
                href="#"
                aria-label="Google Play로 이동"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-gray-900 shadow-sm ring-1 ring-white/40 hover:bg-gray-50"
              >
                <span className="text-xl">▶</span>
                <span className="text-sm font-semibold">
                  Get it on Google Play
                </span>
              </a>
            </div>
          </div>

          <div className="mt-14 sm:mt-16">
            <ul className="flex flex-wrap items-center justify-between gap-6 text-5xl sm:text-6xl md:text-7xl text-white/95">
              {["🍜", "🍦", "🎁", "🍩", "🍲", "🏷️"].map((icon) => (
                <li key={icon} className="shrink-0 drop-shadow-sm" aria-hidden>
                  {icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
