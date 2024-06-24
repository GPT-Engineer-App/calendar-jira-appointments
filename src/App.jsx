import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Calendar from "./pages/Calendar.jsx";
import Jira from "./pages/Jira.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/jira" element={<Jira />} />
      </Routes>
    </Router>
  );
}

export default App;