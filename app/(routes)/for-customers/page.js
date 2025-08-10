export const metadata = {
  title: "for 고객",
};

const Page = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">for 고객</h1>
      <p className="mt-3 text-gray-600">고객을 위한 혜택과 사용 방법 소개</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">선결제 할인</h2>
          <p className="mt-2 text-gray-600">
            원하는 가게를 선택하고 할인된 가격으로 선결제하세요.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">단골머니</h2>
          <p className="mt-2 text-gray-600">
            충전한 머니를 차감하며 손쉽게 이용할 수 있어요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
