import React from 'react';
import { Link } from 'react-router-dom';
// import './CourseCard.css';  optional styling

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
       <img src={course.thumbnail} alt={course.name} />
      <h3>{course.name}</h3>
      <p><strong>Code:</strong> {course.code}</p>
      <p>{course.instructor}</p>
      <p><strong>{course.price}</strong></p>
      <Link to={`/courses/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
