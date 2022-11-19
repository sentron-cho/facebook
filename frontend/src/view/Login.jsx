import IMG_LOGO from "../images/facebook-logo.svg"

export default function Login(props) {
  return (
    <div className="login-layer">
      <div className="logo-box">
        <img src={IMG_LOGO} alt="페이스북 로고"/>
        <h2>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</h2>
      </div>
      <div className="login-box">
        <div>
          <div>
            <input className="input-email" type="text" name="email" id="email" placeholder="이메일 또는 전화번호" 
              autofocus="1" aria-label="이메일 및 연락처" />
          </div>
          <div>
            <input className="input-pass" type="password" name="pass" id="pass" placeholder="비밀번호" 
              aria-label="비밀번호" />
          </div>
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
  )
}
