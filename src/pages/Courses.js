import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchUdemyCategoryCourses } from '../utils/api';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('react'); // default term
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUdemyCategoryCourses('development')
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <h1>All Courses</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="course-grid">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                course={{
                  id: course.id,
                  title: course.title,
                  instructor: course.visible_instructors?.[0]?.name || 'Instructor',
                  thumbnail: course.image_100x100 || 'https://source.unsplash.com/300x200/?course',
                  price: course.price || 'Free',
                }}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
