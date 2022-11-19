import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './view/Login.jsx'
import Home from './view/Home.jsx'
import Regist from './view/Regist.jsx'
import Identify from './view/Identify.jsx'

import Video from './view/Video.jsx'
import People from './view/People.jsx'
import Game from './view/Game.jsx'

// import './css/default.scss'
// import './css/react.scss'

function App() {
  return (
    <BrowserRouter>
      {/* 헤더에서 클릭된 URL을 찾아 매칭되는 화면을 그리기 위한 라우터를 설정한다. */}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/video" element={<Video />} />
          <Route path="/people" element={<People />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
