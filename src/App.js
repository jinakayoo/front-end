import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ApplicantListPage from "./pages/ApplicantListPage";
import StudyDetailPage0 from "./pages/StudyDetailPage0";
import StudyRecruitPage from "./pages/StudyRecruitPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/applicantlist" element={<ApplicantListPage />} />
      <Route path="/detail/0" element={<StudyDetailPage0 />} />
      <Route path="/studyrecruit" element={<StudyRecruitPage />} />
    </Routes>
  );
}

export default App;
