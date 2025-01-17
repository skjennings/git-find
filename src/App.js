import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="content">
          <div className="mx-auto px-3 pb-12">Main Content</div></main>
          <Footer />
      </div>
    </Router>
  );
}