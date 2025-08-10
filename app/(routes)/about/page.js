export const metadata = {
  title: "about 1인치",
};

const Page = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">about 1인치</h1>
      <p className="mt-3 text-gray-600">
        플랫폼의 미션과 사회적 가치에 대해 소개합니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">미션</h2>
          <p className="mt-2 text-gray-600">
            고객과 가게 모두의 이익을 추구하는 선결제 활성화.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
