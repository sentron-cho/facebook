import {InputBox} from "./Component"

import IMG_LOGO from "../images/facebook-logo.svg"

export default function Login(props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-indigo-50">
      <div className="w-[1000px]">
        <div className="w-1/2 inline-block">
          <img className="w-80 h-28" src={IMG_LOGO} alt="페이스북 로고"/>
          <h2>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</h2>
        </div>
        <div className="w-1/2 inline-block">
          <div>
            <InputBox type="text" placeholder="이메일 또는 전화번호" name="email" />
            <InputBox type="password" placeholder="비밀번호" name="pass" />
            <div>
              <button className="login-button" value="1" name="login" onClick={() => window.location.href = "/"} >로그인</button>
            </div>
            <div>
              <a href="./03_facebook_identify.html">비밀번호를 잊으셨나요?</a>
            </div>
            <div className="div-line"></div>
            <div>
              <span className="regist" onClick={() => window.location.href = "/regist"}>새 계정 만들기</span>
            </div>
          </div>
          <div className="new-page">유명인, 브랜드 또는 비즈니스를 위한
            <a href="./05_facebook_create.html">페이지 만들기</a>
          </div>
          <div><span>Meta © 2022</span></div>
        </div>
      </div>
    </div>
  )
}
