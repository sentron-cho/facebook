import { Title, Subtitle, Button, Input } from "./Component"
import Header from './Header.jsx'
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

export default function Board(props) {
  const [list, setList] = useState(null)

  useEffect(() => {
    axios.get('/api/board', {} ).then((res) => {
      const {result} = res.data
      console.log(result)

      setList(result)
    })

    
  }, [])
  
  const onRefresh = () => {
    axios.get('/api/home', {} ).then((res) => {
      const {result} = res.data
      console.log(result)

      setList(result)
    })
  }

  const onClickItem = (item) => {
    console.log(item)
  }
  
  return (
    <>
      <Header name="board" />

      <section className="board-layer">
        <ul className="list">
          {list && list.map(item => <li key={item.boardid} onClick={() => onClickItem(item)}><span>{item.title}</span><span>{item.date}</span></li>)}
        </ul>
      </section>
    </>
  )
}