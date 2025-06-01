import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Static placeholder course data for now
const mockCourses = [
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

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter courses based on search
  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <h1>All Courses</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
