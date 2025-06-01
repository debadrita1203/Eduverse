import React from 'react';

const EnrollModal = ({ course, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Subscribe to {course.name}</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Subscribe Now</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EnrollModal;
