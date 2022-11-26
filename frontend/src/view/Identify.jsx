import { Image, Title, Subtitle, Button, Input } from "./Component"
import IMG_LOGO from "../images/facebook-logo.svg"
import { useState } from "react"
import axios from 'axios'

// export default function Identify(props) {
//   return (
//     <div className="identify-layer">
//       <div class="logo-box">
//         <img src={IMG_LOGO} alt="로고"/>
//       </div>
//       <div class="card-box">
//         <div class="head">
//           <h2>내 계정 찾기</h2>
//         </div>
//         <div class="body">
//           <table>
//             <tbody>
//               <tr>
//                 <td></td>
//                 <td>
//                   <div>계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요.</div>
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td>
//                   <input class="in-box" type="text" name="email" placeholder="이메일 또는 휴대폰 번호" />
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div class="foot">
//           <a class="cancel" role="button" href="./01_facebook_index.html">취소</a>
//           <button class="find" value="1" type="submit" name="did_submit">검색</button>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Identify(props) {
  const [value, setValue] = useState("")

  const onChangeValue = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const onClickCancel = (event) => {
    window.location.href = "/login"
  }

  const onClickSearch = (event) => {

    // validation 체크
    let check = value.indexOf("@")
    if(check < 0) return alert("이메일 형식에는 @ 이 들어가야 합니다.")

    check = value.indexOf(".")
    if(check < 0) return alert("이메일 형식에는 . 이 들어가야 합니다.")


    axios.get('/api/identify', { params: {value: value} } ).then((res) => {
      console.log(res);
      console.log(res.data) 

      // alert("계정은 " + res.data.result + " 입니다.")

      const {result, text} = res.data

      if(result === "fail" && text) {
        alert(text)
      } else {
        alert("계정은 " + result + " 입니다.")
      }
    })
  }

  return (
    <div className="identify-layer">
      <div className="logo-box">
        <Image src={IMG_LOGO} alt="로고"/>
      </div>
      <div className="card-box">
        <div className="head">
          <Title text="내 계정 찾기" />
        </div>
        <div className="body">
          <Subtitle text="계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요." />
          <Input type="text" name="email" placeholder="이메일 또는 휴대폰 번호" onChange={onChangeValue} />
        </div>
        <div className="foot">
          <Button type="secondary" text="취소" onClick={onClickCancel} />
          <Button type="primary" text="검색" onClick={onClickSearch} />
        </div>
      </div>
    </div>
  )
}
