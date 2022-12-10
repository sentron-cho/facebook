import { Image, Title, Subtitle, Button, Input } from "./Component"
import Header from './Header.jsx'

import EDU_ICON from '../images/edu_icon.png'
import MORE_ICON from '../images/more.png'
import MAIN_IMAGE from '../images/sample-image-1.jpg'
import HOME_ICON from '../images/home.png'
import YOUTUBE_ICON from '../images/youtube.png'
import PEOPLE_ICON from '../images/people.png'
import { useState } from "react"
import { useEffect } from "react"


// export default function Home(props) {
//   return (
//     <>
//       <Header />
//       <section className="home-layer">
//         <ul className="list">
//           <li>
//             <div className="card">
//               <div className="head">
//                 <div>
//                   <img className="logo" src={EDU_ICON} alt="광고 아이콘" />
//                   <span className="title">에듀윌</span>
//                   <img className="more" src={MORE_ICON} alt="더보기 메뉴" />
//                 </div>
//                 <div className="text">
//                   <p>🚨기간한정 특별 이벤트🚨</p>
//                   <p>초시생 필수템, 만화입문서 무료배포!</p>
//                   <p className="blue">#합격자수1위 #에듀윌 #공인중개사</p>
//                 </div>
//               </div>
//               <div className="body">
//                 <div className="image">
//                   <img src={MAIN_IMAGE} alt="광고 메인 이미지" />
//                 </div>
//                 <div className="text">
//                   <div>
//                     <p className="grey sm">EDUWILL.NET</p>
//                     <p className="bold">입문교재 선착순 무료신청☞</p>
//                     <p className="grey">합격자 수 1위 에듀윌 공인중개사</p>
//                   </div>
//                   <button>더 알아보기</button>
//                 </div>
//               </div>
//               <div className="foot">
//                 <div className="btn-box active">
//                   <div>
//                     <img src={HOME_ICON} alt="홈 바로가기" />
//                     <span className="btn-text">좋아요</span>
//                   </div>
//                 </div>
//                 <div className="btn-box">
//                   <div>
//                     <img src={YOUTUBE_ICON} alt="동영상 바로가기" />
//                     <span className="btn-text">댓글 달기</span>
//                   </div>
//                 </div>
//                 <div className="btn-box">
//                   <div>
//                     <img src={PEOPLE_ICON} alt="사용자 바로가기" />
//                     <span className="btn-text">공유 하기</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </section>
//     </>
//   )
// }

// const array = [
//   {
//     no: 1,
//     title: "에듀윌",
//     subtitle: "🚨기간한정 특별 이벤트🚨 초시생 필수템, 만화입문서 무료배포!",
//     tags: "#합격자수1위 #에듀윌 #공인중개사",
//     url: "EDUWILL.NET",
//     text: "입문교재 선착순 무료신청☞",
//     image: "../images/game-1.jpg"
//   },
//   {
//     no: 2,
//     title: "코리아아이티",
//     subtitle: "🚨기간한정 특별 이벤트🚨 우리 모두 화이팅합시!!!!",
//     tags: "#대한민국 #강남구 #역삼동",
//     url: "KOREAIT.NET",
//     text: "동영상 무로 제공☞",
//     image: "../images/game-2.jpg"
//   }
// ]

import axios from 'axios'

export default function Home(props) {
  // const [list, setList] = useState(array)
  const [list, setList] = useState(null)

  useEffect(() => {
    axios.get('/api/home', {} ).then((res) => {
      const {result} = res.data
      console.log(result)

      setList(result)
    })

    
  }, [])
  
  const onClickLogout = () => {
    window.location.href = "/"
    alert("로그아웃 되었습니다.")
  }

  const onRefresh = () => {
    axios.get('/api/home', {} ).then((res) => {
      const {result} = res.data
      console.log(result)

      setList(result)
    })
  }
  
  return (
    <>
      <Header name="home" onClick={onClickLogout}/>

      <section className="home-layer">
        <ul className="list">
          {list && list.map(item => <li key={item.homeid}><CardBox value={item} onRefresh={onRefresh}/></li>)}
        </ul>
      </section>
    </>
  )
}

const CardBox = (props) => {
  const {homeid, title, subtitle, tags, url, text, image, likecount, comment} = props.value
  const [commentShow, setCommentShow] = useState(false)

  const onClickLike = () => {
    console.log({homeid: homeid, like: 1})
    axios.put('/api/home/like', {homeid: homeid, like: likecount + 1} ).then((res) => {
      props.onRefresh && props.onRefresh()
    })
  }

  const onClickComment = () => {
    setCommentShow(!commentShow)
  }

  const onClickCommentSave = (value) => {
    console.log(value)

    axios.post('/api/home/comment', {homeid: homeid, text: value} ).then((res) => {
      props.onRefresh && props.onRefresh()
    })
  }
  
  const onClickCommentRemove = (cmtid) => {
    console.log(cmtid)

    axios.delete('/api/home/comment', {params: {cmtid: cmtid}} ).then((res) => {
      props.onRefresh && props.onRefresh()
    })
  }

  const onClickCommentUpdate = (item) => {
    console.log(item)

    axios.put('/api/home/comment', {...item} ).then((res) => {
      props.onRefresh && props.onRefresh()
    })
  }

  const onClickLink = () => {
    
  }

  return <div className="card">
  <div className="head">
    <div>
      <Image src={EDU_ICON} alt="광고 아이콘" />
      <span className="title">{title}</span>
      <Image className="more" src={MORE_ICON} alt="더보기 메뉴" />
    </div>
    <div className="text">
      {subtitle}
      <p className="blue">{tags}</p>
    </div>
  </div>
  <div className="body">
    <div className="image">
      {/* <Image src={MAIN_IMAGE} alt="광고 메인 이미지" /> */}
      <Image className="more" src={image} alt="더보기 메뉴" />
    </div>
    <div className="text">
      <div>
        <p className="grey sm">{url}</p>
        <p className="bold">{text}</p>
      </div>
      <button>더 알아보기</button>
    </div>
  </div>
  <div className="foot">
    <div className="btn-box active">
      <div>
        <Image src={HOME_ICON} />
        <span className="btn-text" onClick={onClickLike}>좋아요<span>{`(${likecount})`}</span></span>
      </div>
    </div>
    <div className="btn-box">
      <div>
        <Image src={YOUTUBE_ICON} />
        <span className="btn-text" onClick={onClickComment}>댓글 달기</span>
      </div>
    </div>
    <div className="btn-box">
      <div>
        <Image src={PEOPLE_ICON} />
        <span className="btn-text" onClick={onClickLink}>공유 하기</span>
      </div>
    </div>
  </div>
  <div>
    <CommentBox show={commentShow} comment={comment} onClick={onClickCommentSave} 
      onClickRemove={onClickCommentRemove} onClickUpdate={onClickCommentUpdate}
    />
  </div>
</div>
}

const CommentBox = (props) => {
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(null)

  const onChangeInput = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const onClickSave = () => {
    console.log(value)
    props.onClick(value)
    setValue("")
  }

  const onClickRemove = (cmtid) => {
    console.log(cmtid)
    props.onClickRemove(cmtid)
  }

  const onClickEdit = (cmtid) => {
    const item = props.comment.find(a => a.cmtid === cmtid)
    console.log(item)
    setEdit(item)
  }

  const onChangeEdit = (event) => {
    console.log(event.target.value)
    const item = {...edit, text: event.target.value}
    setEdit(item)
  }

  const onClickUpdate = () => {
    props.onClickUpdate(edit)
    setEdit(null)
  }

  if(props.show) {
    return <div className="comment-box">
    <ul>
      {props.comment && props.comment.map((item) => {
        return <li key={item.cmtid}>{item.text}
          <div className="buttons">
            <Button type="primary" onClick={() => onClickEdit(item.cmtid)} text="편집" />
            <Button type="secondary" onClick={() => onClickRemove(item.cmtid)} text="삭제" />
          </div>
        </li>
      })}
    </ul>
    {edit ? <div className="input-box">
      <textarea value={edit.text} onChange={onChangeEdit} />
      <Button type="secondary" onClick={onClickUpdate} text="저장" />
    </div>
    : <div className="input-box">
    <textarea value={value} onChange={onChangeInput} placeholder={"여기에 댓글을 입력하세요"} />
    <Button type="primary" onClick={onClickSave} text="저장" />
  </div>}
  </div>
  } else {
    return <div></div>
  }
}