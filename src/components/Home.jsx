import React from 'react'
import CourseList from './CourseList'
import Feedbacks from './Feedbacks'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CourseList />
      <Feedbacks />
      <Footer />
    </div>
  )
}

export default Home
