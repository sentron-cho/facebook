// export default function Regist(props) {
//   return (
//     <>Regist 화면입니다.</>
//   )
// }

import { useState } from "react"
import { Image, Title, Subtitle, Input, Button, TextLink, Linebar, Select, Radio } from "./Component"
import IMG_LOGO from "../images/facebook-logo.svg"
import axios from 'axios'

export default function Regist(props) {
  const [email, setEmail] = useState("")
  const [userid, setUserid] = useState("")
  const [password, setPassword] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")
  const [gender, setGender] = useState("")

  const onClickRegist = () => {
    console.log("onClickRegit")

    console.log(email, userid, password, year, month, day, gender)

    if(!userid) return alert("사용자아이디는 필수 입력사항 입니다.")
    if(!email) return alert("이름은 필수 입력사항 입니다.")
    if(!password) return alert("비밀번호는 필수 입력사항 입니다.")
    if(!year) return alert("출생년도 필수 입력사항 입니다.")
    if(!month) return alert("출생월은 필수 입력사항 입니다.")
    if(!day) return alert("출생일은 필수 입력사항 입니다.")
    if(!gender) return alert("성별은 필수 입력사항 입니다.")

    const params = {
      email: email, 
      userid: userid, 
      password: password, 
      year: year, 
      month: month, 
      day: day, 
      gender: gender
    }
    axios.post('/api/regist', params ).then((res) => {
      const {result} = res.data
      if(result === "success") {
        alert("회원가입에 성공하였습니다. 로그인 화면으로 이동합니다.")
        window.location.href = "/"
      } else if(result === "dup-userid") {
        alert("입력한 계정ID는 중복되었습니다. 아이디를 다시 입력하세요.")
      }
      else {
        alert("회원가입에 실패하였습니다. 정보를 확인하세요")
      }
    })
  }

  const onChangeEmail = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const onChangeUserid = (event) => {
    console.log(event.target.value)
    setUserid(event.target.value)
  }

  const onChangePassword = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  const onChangeYear = (event) => {
    console.log(event.target.value)
    setYear(event.target.value)
  }

  const onChangeMonth = (event) => {
    console.log(event.target.value)
    setMonth(event.target.value)
  }

  const onChangeDay = (event) => {
    console.log(event.target.value)
    setDay(event.target.value)
  }


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
          
            <Input type="text" name="reg-email" placeholder="계정" onChange={onChangeUserid} />
          
          {/* 휴대폰 및 비밀번호 폼 */}
          <div className="in-info">
            <Input type="text" name="lastname" placeholder="이메일" onChange={onChangeEmail} />
            <Input type="password" name="reg-pass" placeholder="새 비밀번호" onChange={onChangePassword} />
          </div>

          {/* 생년월일 */}
          <div className="in-age">
            <Subtitle text="생일" />
            <div>
              {/* 년도 */}
              <Select name="birth-year" title="연도" list={
                [
                  { value: "", text: "출생년"},
                  { value: "2021", text: "2021"},
                  { value: "2020", text: "2020"},
                  { value: "2019", text: "2019"}
                ]
              } onChange={onChangeYear}/>
              {/* 월 */}
              <Select name="birth-month" title="연도" list={
                [
                  { value: "", text: "출생월"},
                  { value: "1", text: "1월"},
                  { value: "2", text: "2월"},
                  { value: "3", text: "3월"}
                ]
              } onChange={onChangeMonth}/>

              {/* 일 */}
              <Select name="birth-day" title="일" list={
                [
                  { value: "", text: "출생일"},
                  { value: "1", text: "1일"},
                  { value: "2", text: "2일"},
                  { value: "3", text: "3일"}
                ]
              } onChange={onChangeDay}/>
            </div>
          </div>

          {/* 성별 */}
          <div className="in-type">
            <Subtitle text="성별" />
            <span className="in-type">
              <Radio id="rdo-1" name="sex" value="1" text="여성" onClick={() => setGender("여성")} />
              <Radio id="rdo-2" name="sex" value="2" text="남성" onClick={() => setGender("남성")} />
              <Radio id="rdo-3" name="sex" value="3" text="개인지정" onClick={() => setGender("개인지정")} />
            </span>
          </div>

          {/* 하단의 가이드 */}
          <div className="guide">
            가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.
          </div>
          
          {/* 가입하기 버튼 */}
          <div className="regist">
            <Button type="secondary" name="submit" text="가입하기" onClick={onClickRegist}/>
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