import React from 'react';
import { Link } from 'react-router-dom';

// import './CourseCard.css';  optional styling

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="info">
        <img src={course.thumbnail} alt={course.name} />
        <h3>{course.name}</h3>
      </div>
      <div className="info">
        <p><strong>Code:</strong> {course.code}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>{course.price}</strong></p>
        <Link to={`/courses/${course.id}`} className='details-btn'>View Details</Link>
      </div>
    </div>
  );
};

export default CourseCard;
