import React from 'react';

interface Props {
  fileUrl: string;
  fileName: string; // 구글 드라이브 링크 사용 시 이 이름은 무시될 수 있습니다.
  title: string;
}

const PdfDownload: React.FC<Props> = ({ fileUrl, title }) => {
  const handleDownload = () => {
    // 굳이 fetch를 쓰지 않고 새 창에서 링크를 열어 다운로드를 유도합니다.
    window.open(fileUrl, '_blank');
  };

  return (
    <button 
      onClick={handleDownload}
      className="px-2 py-1 underline text-xs text-gray-500 rounded hover:text-blue-700 transition"
    >
      {title}
    </button>
  );
};

export default PdfDownload;