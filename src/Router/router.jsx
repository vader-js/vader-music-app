import { Routes, Route } from "react-router-dom";
import App from "../App";
import Playmusic from "../Playmusic";
// import ErrorPage from "../Error/Errorpage";
// import Repo from "../Repos/repo.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info/:id" element={<Playmusic/>}/>
    </Routes>
  );
};

export default AppRouter;
