


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UsersList from "./components/UsersList";
// import UserPosts from "./components/UserPosts";

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<UsersList />} />
//       <Route path="/posts/:userId" element={<UserPosts />} />
//     </Routes>
//   </Router>
// );

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserPosts from "./components/UserPosts";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/posts/:userId" element={<UserPosts />} />
    </Routes>
  </Router>
);

export default App;
