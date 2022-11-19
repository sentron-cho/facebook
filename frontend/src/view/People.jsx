import { useState } from 'react'

import Header from './Header'
import REACT_NATIVE from '../images/react_native.jpg'
import PEOPLE_ICON from '../images/people.png'
import MENU_ICON from '../images/menu.png'
import HOME_ICON from '../images/home.png'

export default function People(props) {
  const [active, setActive] = useState(1)

  return (
    <>
      <Header />
      <section className="home-layer people-layer">
        <div className="bg-image"></div>
        <div className="t-layer">
          <div className="t-img">
            <img src={REACT_NATIVE} alt="이미지" />
            <div className="label">React Native blog 페이지의 그룹</div>
          </div>
          <div className="t-title">
            <div className="tr">
              <h1>React Native Community</h1>
              <span>공개그룹. 멤버 5.4천명</span>
            </div>
            <div className="tl">
              <button className="g-btn"><img src={PEOPLE_ICON} alt="사람"/><span>그룹가입</span></button>
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
          <div className="t-navi">
            <div className="tr">
              <LabelBox id={1} title="정보" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={2} title="토론" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={3} title="주제" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={4} title="사람" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={5} title="이벤트" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={6} title="미디어" active={active} onClick={(id) => setActive(id)}/>
              <LabelBox id={7} title="파일" active={active} onClick={(id) => setActive(id)}/>
            </div>
            <div className="tl">
              <img src={HOME_ICON} alt="홈" />
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
        </div>
        <div className="b-layer">
        </div>
      </section>
    </>
  )
}

const LabelBox = (props) => {
  const onClick = () => {
    console.log(props.id)
    props.onClick && props.onClick(props.id)
  }

  const active = props.active === props.id ? 'active' : ""
  console.log(props.id, active)
  return (
    <span className={`box ${active}`} onClick={onClick}>
      <span className="title">{props.title}</span>
      <span className="line"></span>
    </span>
  )
}