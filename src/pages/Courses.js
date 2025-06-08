import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import '../styles/Courses.css';

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // ✅ Load local courses.json file on page load
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/courses.json`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Loaded courses:", data);
        setAllCourses(data);
        setDisplayedCourses(data.slice(0, 16));
        setLoading(false);
      });
  }, []);
  

  // ✅ Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = allCourses.filter((course) =>
      (course.name || '').toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedCourses(filtered);
  };

  return (
    <div className='course-page'>
      <Navbar />
      <h1>All Courses</h1>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className='loading'>Loading courses...</p>
      ) : displayedCourses.length > 0 ? (
        <div className="course-grid">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className='loading'>No courses found.</p>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
