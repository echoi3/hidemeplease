const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">(주) 1인치</div>
            <div className="mt-2 text-sm text-gray-600">
              대표자 : 김율, 주형익 | 사업자번호 : 683-88-02043
            </div>
            <div className="text-sm text-gray-600">
              통신판매업 : 제2022-서울강남-05994호 | 주소 : 서울시 강남구 학동로
              331, 3층
            </div>
            <div className="mt-2 text-sm text-gray-600">
              대표번호 : 1670-6202 | 메일 : support@danngol.com
            </div>
          </div>
          <div className="flex items-start sm:justify-end gap-6">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black"
              aria-label="이용약관"
            >
              이용약관
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black"
              aria-label="개인정보처리방침"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500">
          Copyright ⓒ 2025 선결제 할인 플랫폼, 단골가게 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
