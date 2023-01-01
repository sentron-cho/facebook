import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'

import Login from './view/Login.jsx'
import Home from './view/Home.jsx'
import Video from './view/Video.jsx'
import Game from './view/Game.jsx'
import People from './view/People.jsx'
import Regist from './view/Regist.jsx'
import Identify from './view/Identify.jsx'
import DeleteUser from './view/DeleteUser.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">로그인</Link>
        <Link to="/home">홈</Link>
        <Link to="/regist">사용자 등록</Link>
        <Link to="/identify">사용자 찾기</Link>
        <Link to="/deleteuser">회원 탈퇴</Link>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/people" element={<People />} />
          <Route path="/game" element={<Game />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
