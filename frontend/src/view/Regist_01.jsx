// export default function Regist(props) {
//   return (
//     <>Regist 화면입니다.</>
//   )
// }

import { Image, Title, Subtitle, Input, Button, TextLink, Linebar, Select, Radio } from "./Component"

import IMG_LOGO from "../images/facebook-logo.svg"

export default function Regist(props) {
  return (
    <div className="regist-layer">
      {/* 상단 로고 이미지 */}
      <div className="logo">
        <Image src={IMG_LOGO} alt="페이스북 로고"/>
      </div>
      {/* 카드형 박스 */}
      <div className="card">
        {/* 박스 헤더 */}
        <div className="header">
          <Title text="새 계정 만들기" />
          <Subtitle text="빠르고 쉽습니다" />
        </div>
        <Linebar />
        {/* 박스 콘텐츠 */}
        <div className="body">
          
          {/* 성명 입력 폼 */}
          <div className="in-name">
            <div><Input type="text" name="lastname" placeholder="성" /></div>
            <div><Input type="text" name="firstname" placeholder="이름(성은 제외)" /></div>
          </div>
          
          {/* 휴대폰 및 비밀번호 폼 */}
          <div className="in-info">
            <Input type="text" name="reg-email" placeholder="휴대폰 번호 또는 이메일" />
            <Input type="password" name="reg-pass" placeholder="새 비밀번호" />
          </div>

          {/* 생년월일 */}
          <div className="in-age">
            <Subtitle text="생일" />
            <div>
              {/* 년도 */}
              <Select name="birth-year" title="연도" list={
                [
                  { value: "2021", text: "2021"},
                  { value: "2020", text: "2020"},
                  { value: "2019", text: "2019"}
                ]
              }/>
              {/* 월 */}
              <Select name="birth-month" title="연도" list={
                [
                  { value: "1", text: "1월"},
                  { value: "2", text: "2월"},
                  { value: "3", text: "3월"}
                ]
              }/>

              {/* 일 */}
              <Select name="birth-day" title="일" list={
                [
                  { value: "1", text: "1일"},
                  { value: "2", text: "2일"},
                  { value: "3", text: "3일"}
                ]
              }/>
            </div>
          </div>

          {/* 성별 */}
          <div className="in-type">
            <Subtitle text="성별" />
            <span className="in-type">
              <Radio id="rdo-1" name="sex" value="1" text="여성" />
              <Radio id="rdo-2" name="sex" value="2" text="남성" />
              <Radio id="rdo-3" name="sex" value="3" text="개인지정" />
            </span>
          </div>

          {/* 하단의 가이드 */}
          <div className="guide">
            가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.
          </div>
          
          {/* 가입하기 버튼 */}
          <div className="regist">
            <Button type="secondary" name="submit" text="가입하기"/>
          </div>
          
          {/* 로그인 페이지 이동 */}
          <div className="login">
            <TextLink onClick={() => window.location.href = "/"} text="이미 계정이 있으신가요?" />
          </div>
        </div>
      </div>
    </div>
  )
}