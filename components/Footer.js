const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">(주) 하이드미플리즈</div>
            <div className="mt-2 text-sm text-gray-600">
              대표자 : 유현 | 사업자번호 : 777-86-02664
            </div>
            <div className="text-sm text-gray-600">
              정보통신업 | 주소 : 서울특별시 중구 을지로11길 33, 2층 (수표동)
            </div>
            <div className="mt-2 text-sm text-gray-600">
              대표번호 : 0507-1356-3665 | 메일 : help@hidemeplease.xyz
            </div>
          </div>
          {/* <div className="flex items-start sm:justify-end gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-black" aria-label="이용약관">이용약관</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black" aria-label="개인정보처리방침">개인정보처리방침</a>
          </div> */}
        </div>
        <div className="mt-6 text-xs text-gray-500">
          {`Copyright ⓒ ${new Date().getFullYear()} 하이드미플리즈 All rights reserved.`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
