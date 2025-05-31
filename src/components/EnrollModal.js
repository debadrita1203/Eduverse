import React from 'react';

const EnrollModal = ({ course, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Subscribe to {course.title}</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Subscribe</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EnrollModal;
