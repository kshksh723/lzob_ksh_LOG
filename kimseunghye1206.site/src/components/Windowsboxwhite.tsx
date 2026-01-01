/* Devleoper's Portfolio 창 */

function Windowsboxwhite () {

  function handleOnclick1() {
    alert("안녕하세요! 김승혜입니다 :)");
  }
  

    return (
    <div className="w-[1000px] bg-[#c0c0c0] shadow-[2px_2px_0px_rgba(0,0,0,1),inset_2px_2px_0px_rgba(255,255,255,1)] p-1 border-r-2 border-b-2 border-gray-800">
        <div className="bg-[#000080] text-white flex justify-between items-center px-2 py-1 mb-1">
            <div className="flex items-center gap-2">   
                <span className="text-xs">💻</span>
                <span className="text-sm font-bold tracking-tight">Developer's Portfolio</span>
            </div>
            <div className="flex gap-1">
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">_</button>
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">x</button>
            </div>
        </div>
    <div className="bg-white border-t-2 border-l-2 border-gray-800 border-r-white border-b-white p-25">
        <h2 className="text-black text-3xl font-extrabold">Kim Seung Hye</h2>
                        <p className="text-gray-500/68  font-light">꾸준히 성장하는 개발자</p>
    <div>
    
    <div className="w-48 h-60 overflow-hidden rounded-lg ml-auto">
      <img 
        src="src/img/profilePhoto.jpg" className="w-full h-full object-cover select-none" alt="profile" draggable="false" 
        onContextMenu={(e) => e.preventDefault()} />
    </div>
    <div className="mt-4 bg-white border-2 border-gray-500 p-4 h-full text-black font-mono overflow-y-auto">
  <h2 className="text-lg font-bold mb-3">👋 안녕하세요!</h2>
  <p className="leading-relaxed mb-4">
    기획부터 구현까지, 프로젝트의 <span className="bg-yellow-200 px-1">A to Z를 경험하며 성장</span>해온 개발자입니다.
  </p>
  <ul className="list-disc ml-5 space-y-2 text-sm">
    <li><strong>React-Native:</strong> 교환일기 앱 기획/개발 (교내 공모전 <strong>우수상</strong> && 지역 공모전 <strong>인기상</strong>)</li>
    <li><strong>Professionalism:</strong> SI 근무 당시 산출물 작성 'A+' 등급 평가</li>
  </ul>
</div>
    <h1 className="mb-2 mt-3 font-bold">Contact.</h1>
    <p className="flex text-gray-700 text-sm mb-6 leading-relaxed">
        Email :  
        <a href="mailto:kimsh33971190@gmail.com" className="ml-3 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      kimsh33971190@gmail.com
        </a>
    </p>
    
    <div className="mt-6">
  <h3 className="font-bold mb-2 pb-1">
    Education.
  </h3>
  <ul className="mb-6 list-disc ml-8  text-gray-800">
    <li>전주비전대학교 컴퓨터정보과<small className="text-gray-600">(2018.03 ~ 2021.02)</small></li>
    <li>순천대학교 컴퓨터공학과<small className="text-gray-600">(2021.03(편입) ~ 2023.02)</small></li>
    <li>쌍용 강북 교육센터 수강 <br/>(실무 프로젝트 기반 빅데이터 서비스 솔루션 개발자 양성과정 8기)<br/> <small className="text-gray-600"> 2024.01.16 ~ 2024.08.09 (1,120시간 / 140일)</small></li>
  </ul>
</div>
   <h1 className="font-bold">Career.</h1>
    <div className="flex mt-2 pl-2">
    <p>2024.10. ~ 2025.06. <small>(8개월)</small></p> 
    <br/>
    </div>
    <h1 className="mb-2 font-bold"> Channel. </h1>
    <p className="flex text-gray-700 text-sm mb-3 leading-relaxed">
      GITHUB :  
      <a href="https://github.com/kshksh723" target="_blank" className="ml-3 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
        https://github.com/kshksh723
      </a>
    </p>
    <p className="flex text-gray-700 text-sm mb-3 leading-relaxed">
      TISTORY :  
      <a href="https://it-xxsh.tistory.com/" target="_blank" className="ml-3 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
        https://it-xxsh.tistory.com/
      </a>
    </p>
    <p className="flex text-gray-700 text-sm mb-2 leading-relaxed">
      VELOG :  
      <a href="https://velog.io/@kshksh723/posts" target="_blank" className="ml-3 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
        https://velog.io/@kshksh723/posts
      </a>
    </p>
  <div className="mt-6 mb-6 leading-relaxed text-black">
  <p className="font-bold"> Tech Stacks. </p>
  <div className="p-4 text-sm">
    <div className="mb-2">
      <span className="text-blue-700">[Front-end]</span>
      <p>React(Vite), TypeScript, WebSquare, JSP</p>
    </div>

    <div className="mb-3">
      <span className="text-green-700">[Back-end]</span>
      <p>Java(Spring Boot), JPA, Tomcat</p>
    </div>

    <div className="mb-3">
      <span className="text-purple-700">[Database]</span>
      <p>MySQL, Oracle, MariaDB</p>
    </div>

    <div>
      <span className="text-red-700">[Tools]</span>
      <p>Figma, Git, SVN</p>
    </div>
  </div>
</div>


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
     );   
}
export default Windowsboxwhite;