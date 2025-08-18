"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNfcImageIndex, setCurrentNfcImageIndex] = useState(0);
  const [currentCurationImageIndex, setCurrentCurationImageIndex] = useState(0);

  const heroImages = ["/assets/noReview2.mp4", "/assets/noReview.mp4"];
  const nfcImages = ["/assets/hmpEasy.png", "/assets/hmpNFCTag.png"];
  const curationImages = [
    "/assets/curation1.png",
    "/assets/curation2.png",
    "/assets/curation3.png",
    "/assets/curation4.png",
    "/assets/curation5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNfcImageIndex((prevIndex) =>
        prevIndex === nfcImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCurationImageIndex((prevIndex) =>
        prevIndex === curationImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
              <span className="text-blue-400">NFC 태그 한 번</span>으로
              <br className="block" />
              매일 받는 맛집 혜택
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
      <section className="relative w-full bg-white">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[80vh] md:h-[80vh] flex flex-col md:flex-row items-start md:items-center pt-30 md:pt-0 gap-8 md:gap-30">
          {/* 텍스트 컬럼 */}
          <div className="max-w-7xl text-black order-1 md:order-1">
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              아직도 <span className="text-green-500">영수증 리뷰</span>하고
              <br className="block" />
              혜택 받으시나요?{" "}
            </h1>

            {/* <div className="mt-8 flex items-center gap-4">
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
            </div> */}
          </div>

          {/* 이미지 컬럼 */}
          <div className="order-2 md:order-2 flex justify-center rounded-2xl overflow-hidden">
            {heroImages[currentImageIndex].endsWith(".mp4") ? (
              <video
                src={heroImages[currentImageIndex]}
                className="h-full w-full object-cover md:h-128 md:w-128 transition-opacity duration-500"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={heroImages[currentImageIndex]}
                alt="하이드미플리즈"
                className="h-full w-full object-cover md:h-128 md:w-128 transition-opacity duration-500"
              />
            )}
          </div>
        </div>
      </section>

      {/* NFC Tag Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30">
            {/* 이미지 컬럼 (왼쪽) */}
            <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center">
              <img
                src={nfcImages[currentNfcImageIndex]}
                alt="하이드미플리즈"
                className="h-full w-full object-cover md:h-128 md:w-128 rounded-3xl transition-opacity duration-500"
              />
            </div>

            {/* 텍스트 컬럼 (오른쪽) */}
            <div className="order-1 md:order-2 w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                하이드미플리즈에서는 <br className="hidden sm:block" />
                영수증 리뷰 없이 <br className="hidden sm:block" />
                <span className="text-red-600">NFC 태그 한 번</span>이면{" "}
                <br className="hidden sm:block" />
                혜택을 받을 수 있어요
              </h2>
              <div className="mt-5 mb-5 sm:mt-20 flex items-center gap-4">
                <a
                  href="https://apps.apple.com/nz/app/%ED%95%98%EC%9D%B4%EB%93%9C%EB%AF%B8%ED%94%8C%EB%A6%AC%EC%A6%88/id1663171012"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="앱스토어로 이동"
                >
                   앱스토어
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kr.hideme&hl=ko&pli=1"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="플레이스토어로 이동"
                >
                  ▶ 플레이스토어
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30">
            {/* 텍스트 컬럼 (왼쪽) */}
            <div className="order-1 md:order-1 w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                기존 포인트 시스템은 프랜차이즈{" "}
                <br className="hidden sm:block" />
                매장에서만 쓸 수 있지 않나요?
              </h2>
            </div>

            {/* 이미지 컬럼 (오른쪽) */}
            <div className="order-2 md:order-2 w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/franchise.png"
                alt="하이드미플리즈"
                className="h-full w-full object-cover md:h-128 md:w-128 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Hotplaces Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30">
            {/* 이미지 컬럼 (왼쪽) */}
            <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center">
              <img
                src={curationImages[currentCurationImageIndex]}
                alt="하이드미플리즈"
                className="h-full w-full object-cover md:h-128 md:w-128 rounded-3xl transition-opacity duration-500"
              />
            </div>

            {/* 텍스트 컬럼 (오른쪽) */}
            <div className="order-1 md:order-2 w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                하이드미플리즈에서는 <br className="hidden sm:block" />
                <span className="text-red-500">
                  운영진이 직접 큐레이션한
                </span>{" "}
                <br className="hidden sm:block" />
                로컬 핫플레이스에서 <br className="hidden sm:block" />
                혜택을 받을 수 있어요
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* App Map Section */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30">
            {/* 텍스트 컬럼 (왼쪽) */}
            <div className="order-1 md:order-1 w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                하이드미플리즈 앱 하나면 고민 끝! 지도에서 주변 제휴 매장을 찾아
                혜택을 받으세요
              </h2>
            </div>

            {/* 이미지 컬럼 (오른쪽) */}
            <div className="order-2 md:order-2 w-full md:w-1/2 flex justify-center mb-12">
              <img
                src="/assets/hmpMap.png"
                alt="하이드미플리즈"
                className="h-full w-full object-cover md:h-128 md:w-128 rounded-3xl"
              />
            </div>
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
