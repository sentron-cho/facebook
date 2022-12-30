import Header from './Header.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Board(props) {
  const [mode, setMode] = useState('list')

  const onEvent = (eventid) => {
    setMode(eventid)
  }

  return (
    <>
      <Header name="board" />

      <div>
        <button onClick={() => setMode('list')}>목록</button>
        <button onClick={() => setMode('view')}>조회</button>
        <button onClick={() => setMode('edit')}>편집</button>
      </div>

      <section className="board-layer">
        {mode === "list" && <BoardList onEvent={onEvent}/>}
        {mode === "view" && <BoardView onEvent={onEvent}/>}
        {mode === "edit" && <BoardEdit onEvent={onEvent}/>}
      </section>
    </>
  )
}

const BoardList = (props) => {
  const [list, setList] = useState([
    {boardid: 1, title: "게시판 목록 - 1", date: "2022.12.12"},
    {boardid: 2, title: "게시판 목록 - 2", date: "2022.12.12"},
    {boardid: 3, title: "게시판 목록 - 3", date: "2022.12.12"}
  ])

  useEffect(() => {
    axios.get('/api/board', {}).then((res) => {
      const { result } = res.data
      console.log(result)
    })
  }, [])

  const onRefresh = () => {
  }

  const onClickItem = (item) => {
    console.log(item)
    props.onEvent("view")
  }

  return (
    <div className='list'>
      <ul>
        <h1>게시판 목록</h1>
        {list &&
          list.map((item) => (
            <li key={item.boardid} onClick={() => onClickItem(item)}>
              <span className='title'>{item.title}</span>
              <span className='date'>{item.date}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

const BoardView = (props) => {
  const onClickEdit = () => {
    props.onEvent("edit")
  }
  
  const onClickList = () => {
    props.onEvent("list")
  }

  const onClickDelete = () => {
    axios.delete('/api/board/item', {params: {boardid: 0}} ).then((res) => {
      console.log(res)
      props.onEvent("list")
    })
  }

  return (
    <div className='view'>
      <h1>게시판 조회</h1>
      <div className='buttons'>
        <button onClick={onClickEdit}>편집</button>
        <button onClick={onClickDelete}>삭제</button>
        <button onClick={onClickList}>목록</button>
      </div>
    </div>
  )
}

const BoardEdit = (props) => {
  const onClickCancel = () => {
    props.onEvent("list")
  }

  const onClickSave = () => {
    axios.post('/api/board/item', {title: "", text: ""} ).then((res) => {
      console.log(res)
      props.onEvent("list")
    })
  }

  return (
    <div className='edit'>
      <h1>게시판 편집</h1>
      <div className='buttons'>
        <button onClick={onClickCancel}>취소</button>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  )
}
