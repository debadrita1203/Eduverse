import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // ✅ Load local courses.json file on page load
  useEffect(() => {
    fetch('/courses.json')
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Loaded courses:", data);
        setAllCourses(data);
        setDisplayedCourses(data.slice(0, 20));
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
    <div>
      <Navbar />
      <h1>All Courses</h1>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p>Loading courses...</p>
      ) : displayedCourses.length > 0 ? (
        <div className="course-grid">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
