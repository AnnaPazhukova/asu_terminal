import PageGroups from "../../pages/sheduleByGroups";
import MainPage from "../../pages/mainPage";

import { Route, Routes } from "react-router";

function App() {
  return (
            <>
            <Routes>
              <Route path="/" element={<MainPage/>}></Route>
              {/* <Route path="/teachers" element={<PageTeachers/>}></Route> */}
              <Route path="/groups" element={<PageGroups/>}></Route>
            </Routes> 
            </>
        )
}

export default App;