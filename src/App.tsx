<<<<<<< HEAD



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


=======
>>>>>>> ff32d3c0819626b763703b1876e8ef25da6b1e5e
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
