export const metadata = {
  title: "for 가게",
};

const Page = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">for 가게</h1>
      <p className="mt-3 text-gray-600">
        가게를 위한 고객 유치와 운영 지원 소개
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">선결제 고객 확보</h2>
          <p className="mt-2 text-gray-600">
            선결제로 안정적인 매출과 단골을 확보하세요.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">운영 툴</h2>
          <p className="mt-2 text-gray-600">
            간편한 관리 도구로 효율적인 운영이 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
