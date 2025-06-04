import React from 'react';
import '../styles/EnrollModal.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RVyBdGfkSaQASLu0fHyp9tloc9bY6YDnPBpd425My8Lpsdu6YJ9BUU3zxTIzAHDTKBl1t8hk5hYidvWnoNCpXh000pY333lzf');

const CheckoutForm = ({ course, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      alert(result.error.message);
    } else {
      alert(`Subscribed to ${course.name} (${course.price})`);
      onClose(); // Close modal after success
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="modal-content">
        <div className="card-details">
          <h3>Card Details</h3>
          <CardElement className="card-element" />
          <button type="submit">Pay Now</button>
        </div>
        <div className="plan-details">
          <h3>Subscription</h3>
          <p><strong>{course.name}</strong></p>
          <p>{course.price}</p>
        </div>
      </div>
    </form>
  );
};

const EnrollModal = ({ course, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <Elements stripe={stripePromise}>
          <CheckoutForm course={course} onClose={onClose} />
        </Elements>
      </div>
    </div>
  );
};

export default EnrollModal;
