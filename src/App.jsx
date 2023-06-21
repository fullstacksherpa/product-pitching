import React from "react"
import CourseList from "./components/CourseList"


import Feedbacks from "./components/Feedbacks"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PDFViewer from "./components/PDFViewer"




function App() {

  return (
    <>
    
      <Navbar />
      <CourseList />
      <PDFViewer />
      <Feedbacks/>
      <Footer />
    </>
  )
}

export default App
