import { Image, Title, Input, Button, TextLink, Linebar } from "./Component"

import IMG_LOGO from "../images/facebook-logo.svg"

export default function Login(props) {
  return (
    <div className="login-layer">
      <div className="logo-box">
        <Image src={IMG_LOGO} alt="페이스북 로고"/>
        <Title text="Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요."/>
      </div>
      <div className="login-box">
        <div>
          <Input type="text" placeholder="이메일 또는 전화번호" name="email" />
          <div className="login-pass">
            <Input type="password" placeholder="비밀번호" name="pass" />
          </div>
          <div className="login-button">
            <Button type="primary" onClick={() => window.location.href = "/"} text="로그인" />
          </div>
          <TextLink url="./03_facebook_identify.html" text="비밀번호를 잊으셨나요?" />
          <Linebar />
          <div className="regist-button">
            <Button type="secondary" onClick={() => window.location.href = "/regist"} text="새 계정 만들기"></Button>
          </div>
        </div>
        <div className="new-page">
          <span className="text">유명인, 브랜드 또는 비즈니스를 위한</span>
          <TextLink url="./05_facebook_create.html" text="페이지 만들기" />
        </div>
        <div className="mata-cop">Meta © 2022</div>
      </div>
    </div>
  )
}
