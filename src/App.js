import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogIn } from "./pages/LogIn";
import { Main } from "./pages/Main";
import { NotLoggedIn } from "./pages/NotLoggedIn";
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "./firebase/firebase";

function App() {
  
  const [user] = useAuthState(auth)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/chat" element={user ? <Main firebase={firebase} /> : <NotLoggedIn />} />
      </Routes>
    </Router>
  );
}

export default App;