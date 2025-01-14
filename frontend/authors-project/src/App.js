import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router";
import BasicExample from "./component/navbar/Navbar";

import Authors from "./views/Authors.view.jsx";
import AuthorsDetails from "./views/AuthorsDetails.jsx";
import NewAuthor from "./views/NewAuthor.jsx";
import BlogList from "./views/BlogList.view.jsx";
import BlogDetail from "./views/BlogDetail.view.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route path="/"  element={<BlogList/>} />
          <Route path="/:page"  element={<BlogList/>} />
          <Route path="/authors" element={<Authors/>} />
          <Route path="/authors/:id" element={<AuthorsDetails/>} />
          <Route path="/new-aurhors" element={<NewAuthor/>} />
          <Route path="/blogpost/:id" element={<BlogDetail/>} />
          <Route path="*" element={<div>404</div>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
