import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Placeholder course list (same as used in Course page/detail)
const allCourses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Jane Doe",
    thumbnail: "https://source.unsplash.com/300x200/?react",
    price: "Free"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "John Smith",
    thumbnail: "https://source.unsplash.com/300x200/?javascript",
    price: "$29"
  }
];

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    const enrolledIds = userData.enrolledCourses || [];

    const enrolled = allCourses.filter(course => enrolledIds.includes(course.id));
    setEnrolledCourses(enrolled);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Your Dashboard</h1>
      <p>Welcome back! Here's what you're learning:</p>

      {enrolledCourses.length > 0 ? (
        <div className="course-grid">
          {enrolledCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p>You haven't enrolled in any courses yet.</p>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
