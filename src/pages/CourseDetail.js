import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PopupBox from '../components/PopupBox'; // Ensure this path is correct

// Mock courses (replace later with API or shared data)
const mockCourses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the basics of React.js with hands-on examples.",
    instructor: "Jane Doe",
    thumbnail: "https://source.unsplash.com/400x250/?react",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
    price: "Free"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into closures, scopes, and the JS engine.",
    instructor: "John Smith",
    thumbnail: "https://source.unsplash.com/400x250/?javascript",
    videoUrl: "https://www.youtube.com/embed/PoRJizFvM7s",
    price: "$29"
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const [course, setCourse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const selected = mockCourses.find(c => c.id === Number(id));
    setCourse(selected);
  }, [id]);

  const handleEnroll = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setPopupMessage("Please log in to enroll in this course.");
      setShowPopup(true);
      return;
    }

    const enrolled = user.enrolledCourses || [];
    if (enrolled.includes(course.id)) {
      setPopupMessage("You are already enrolled in this course.");
      setShowPopup(true);
    } else {
      enrolled.push(course.id);
      const updatedUser = { ...user, enrolledCourses: enrolled };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setPopupMessage(`Successfully enrolled in "${course.title}"`);
      setShowPopup(true);
    }
  };

  if (!course) return <p>Loading course...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>

      <div style={{ margin: '1em 0' }}>
        <iframe
          width="560"
          height="315"
          src={course.videoUrl}
          title="Course Preview"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <button onClick={handleEnroll}>Enroll</button>

      {/* Custom Popup */}
      {showPopup && (
        <PopupBox
          message="Please log in to enroll in this course."
          onClose={() => setShowPopup(false)}
          redirectTo={location.pathname}
        />
      )}
    </div>
  );
};

export default CourseDetail;
