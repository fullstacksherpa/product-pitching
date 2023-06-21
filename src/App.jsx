import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PDFViewer from "./components/PDFViewer"
import Home from "./components/Home";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="exam" element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
