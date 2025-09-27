import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Announcement from "./components/Announcement";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

import   '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import   '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Announcement />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;
