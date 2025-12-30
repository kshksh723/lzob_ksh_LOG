import React from "react";
import Windowsbox from "./components/Windowsbox";
function App() {

  function handleOnclick1() {
    alert("안녕하세요! 김승혜입니다 :)");
  }


  return (
    <div>
      {/* 왼쪽 영역: 기존 창들 */}
      <div className="flex flex-col gap-5">
        {/* User Information 창 */}
        <Windowsbox/>
        {/* Developer's Portfolio 창 */}
        <div className="w-[450px] bg-[#c0c0c0] shadow-[2px_2px_0px_rgba(0,0,0,1),inset_2px_2px_0px_rgba(255,255,255,1)] p-1 border-r-2 border-b-2 border-gray-800">
          <div className="bg-[#000080] text-white flex justify-between items-center px-2 py-1 mb-1">
            <div className="flex items-center gap-2">
              <span className="text-xs">💻</span>
              <span className="text-sm font-bold tracking-tight">Developer's Portfolio</span>
            </div>
          </div>
          <div className="bg-white border-t-2 border-l-2 border-gray-800 border-r-white border-b-white p-7">
            <h2 className="text-black text-xl font-bold mb-4">Welcome to My DEV STACK</h2>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              현재 시스템이 정상적으로 작동 중입니다. <br />
              기술 스택을 확인하려면 '확인' 버튼을 누르세요.
            </p>
            <div className="flex justify-end gap-4">
              {/* 클릭 시 상태 업데이트 */}
              <button onClick={handleOnclick1} className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-sm">
                확인
              </button>
              <button className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 text-sm">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;