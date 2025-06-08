import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { FaTag, FaGlobe } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopupBox from '../components/PopupBox';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [redirectPath, setRedirectPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(course => course.id.toString() === id);
        if (found) setCourse(found);
        else navigate('/courses');
      });
  }, [id, navigate]);

  const handleEnroll = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Case 1: Not logged in
    if (!user) {
      setPopupMessage("Please log in to continue.");
      setRedirectPath('/login');
      setShowPopup(true);
      return;
    }

    // Case 2: Free course
    if (course.price.toLowerCase() === 'free') {
      const updatedUser = {
        ...user,
        enrolledCourses: [...(user.enrolledCourses || []), course.id],
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setPopupMessage('You are successfully enrolled in this course!');
      setShowPopup(true);
      return;
    }

    // Case 3: Premium course without membership
    if (user.plan !== "premium") {
      setPopupMessage("This is a premium course. Please upgrade your plan.");
      setRedirectPath('/pricing');
      setShowPopup(true);
      return;
    }

    // Case 4: Premium course with membership
    const updatedUser = {
      ...user,
      enrolledCourses: [...(user.enrolledCourses || []), course.id],
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setPopupMessage('You are successfully enrolled in this premium course!');
    setShowPopup(true);
  };

  if (!course) return <p className='loading'>Loading course...</p>;

  return (
    <div className="course-detail-page">
      <Navbar />

      <div className="course-detail-container">
        <div className="left-content">
          <div className="video">
            {course.videoUrl && (
              <video width="600" height="340" controls>
                <source src={course.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="content">
            <h3>Course Content</h3>
            {course.content?.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </div>

        <div className="right-content">
          <h2>{course.name}</h2>
          <h5>{course.shortDescription}</h5>
          <p className="course-desc">{course.description}</p>
          <p className="course-inst">Instructor: <span>{course.instructor}</span></p>
          <p className="course-price">
            <FaTag style={{ marginRight: '8px', color: '#416e94' }} /> {course.price}
          </p>
          <p className="course-dur">
            <FiClock style={{ marginRight: '8px', color: '#416e94' }} /> {course.duration}
          </p>
          <p className='course-lang'>
            <FaGlobe style={{ marginRight: '8px', color: '#416e94' }} /> {course.language}
          </p>

          <div className="topics">
            <h3>What you'll learn</h3>
            <ul>
              {course.topics?.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <button className="enroll-button" onClick={handleEnroll}>Enroll Now</button>
        </div>
      </div>

      {showPopup && (
        <PopupBox
          message={popupMessage}
          onCancel={() => {
            setShowPopup(false);
            setRedirectPath(null); // no redirect on cancel
          }}
          onConfirm={() => {
            if (redirectPath) {
              navigate(redirectPath);
              setRedirectPath(null);
            }
            setShowPopup(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default CourseDetail;
