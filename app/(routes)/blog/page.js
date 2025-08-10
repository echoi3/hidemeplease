export const metadata = {
  title: "블로그",
};

const Page = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">블로그</h1>
      <p className="mt-3 text-gray-600">소식과 업데이트를 전하는 공간</p>
      <ul className="mt-8 space-y-4">
        <li className="rounded-lg border p-4">
          <div className="text-sm text-gray-500">2025-01-01</div>
          <div className="mt-1 font-semibold">플랫폼 오픈 안내</div>
          <p className="mt-1 text-gray-600">새로운 시작을 함께하세요.</p>
        </li>
      </ul>
    </section>
  );
};

export default Page;
