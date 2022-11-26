import { useState } from "react"
import { Image, Title, Subtitle, Button } from "./Component"
import axios from 'axios'
import IMG_LOGO from "../images/facebook-logo.svg"

export default function Identify(props) {
  return (
    <div className="identify-layer">
      <div class="logo-box">
        <img src={IMG_LOGO} alt="로고"/>
      </div>
      <div class="card-box">
        <div class="head">
          <h2>내 계정 찾기</h2>
        </div>
        <div class="body">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div>계정을 검색하려면 이메일 주소 또는 휴대폰 번호를 입력하세요.</div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input class="in-box" type="text" name="email" placeholder="이메일 또는 휴대폰 번호" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="foot">
          <a class="cancel" role="button" href="./01_facebook_index.html">취소</a>
          <button class="find" value="1" type="submit" name="did_submit">검색</button>
        </div>
      </div>
    </div>
  )
}
