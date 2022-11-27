import { useState } from 'react'
import Header from './Header'
import Menu from './Menu'

import IMAGE_A from '../images/game-a.jpg'
import IMAGE_B from '../images/game-b.jpg'
import IMAGE_C from '../images/game-c.jpg'
import RIGHT from '../images/right.png'
import LEFT from '../images/left.png'
import IMAGE_1 from '../images/game-1.jpg'
import IMAGE_2 from '../images/game-2.jpg'
import IMAGE_3 from '../images/game-3.jpg'

export default function Game(props) {
  const [menu, setMenu] = useState(false);

  const onClickMenu = (isshow) => {
    setMenu(isshow)
  }

  return (
    <>
      <Header onClick={() => onClickMenu(true)}/>
      <Menu show={menu} onClick={() => onClickMenu(false)}/>
      <section className="home-layer game-layer">
        <ul className="list">
          <li className="img-box left">
            <ImageBox type="large" src={IMAGE_A} />
          </li>
          <li className="img-box center">
            <button className="btn-prev"><img src={LEFT} alt="왼쪽"/></button>
            <ImageBox type="large" src={IMAGE_B} />
            <button className="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </li>
          <li className="img-box right">
            <ImageBox type="large" src={IMAGE_C} />
          </li>
        </ul>

        <div className="card">
          <h3 className="title">추천게임</h3>
          <ul>
            <ImageBox src={IMAGE_1} />
            <ImageBox src={IMAGE_2} />
            <ImageBox src={IMAGE_3} />
            <ImageBox src={IMAGE_1} />
            <ImageBox src={IMAGE_2} />
            <ImageBox src={IMAGE_3} />
            <button className="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </ul>
        </div>
      </section>
    </>
  )
}

const ImageBox = (props) => {
  if(props.type === "large") {
    return (<img src={props.src} alt="이미지"/>)
  } else {
    return (<li className="c-li"><img src={props.src} alt="이미지" /></li>)
  }
}