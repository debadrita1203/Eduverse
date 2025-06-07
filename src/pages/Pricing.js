import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import EnrollModal from '../components/EnrollModal';
import PopupBox from '../components/PopupBox';
import FAQSection from '../components/FAQ';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Pricing.css';

const plans = [
  {
    id: 'free',
    name: 'Free Plan',
    price: '$0',
    features: ['Access to free courses', 'Basic support', 'No certificate'],
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '$49',
    features: ['All free features', 'Premium courses', 'Certificate', 'Priority support'],
  }
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const location = useLocation();

  // ✅ Track current plan from localStorage
  const [currentPlan, setCurrentPlan] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser).plan || "free" : "free";
  });

  const handleSelectPlan = (plan) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setPopupMessage("Please log in to upgrade.");
      setShowPopup(true);
      return;
    }

    const user = JSON.parse(storedUser);
    const current = user.plan || "free";

    if (current === plan.id) {
      setPopupMessage(`You're already on the ${plan.name}.`);
      setShowPopup(true);
      return;
    }

    if (plan.id === "free") {
      user.plan = "free";
      localStorage.setItem("user", JSON.stringify(user));
      setPopupMessage("You're now on the Free Plan.");
      setShowPopup(true);
      setCurrentPlan("free");
      return;
    }

    setSelectedPlan(plan); // open payment modal
  };

  return (
    <div className='pricing'>
      <Navbar />
      <h1>Choose Your Plan</h1>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.id} className="pricing-card" onClick={() => handleSelectPlan(plan)}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
            {currentPlan === plan.id ? (
              <button className="current-plan-btn" disabled>✔ Current Plan</button>
            ) : (
              <button>Select Plan</button>
            )}
          </div>
        ))}
      </div>

      <section className="feature-table">
        <h2>Features</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access to all free courses</td>
              <td><FaCheck color="green" /></td>
              <td><FaCheck color="green" /></td>
            </tr>
            <tr>
              <td>Progress Tracking</td>
              <td><FaCheck color="green" /></td>
              <td><FaCheck color="green" /></td>
            </tr>
            <tr>
              <td>Certificate of Completion</td>
              <td><FaTimes color="red" /></td>
              <td><FaCheck color="green" /></td>
            </tr>
            <tr>
              <td>Premium Courses</td>
              <td><FaTimes color="red" /></td>
              <td><FaCheck color="green" /></td>
            </tr>
            <tr>
              <td>Priority Support</td>
              <td><FaTimes color="red" /></td>
              <td><FaCheck color="green" /></td>
            </tr>
          </tbody>
        </table>
      </section>

      <FAQSection />
      <Footer />

      {selectedPlan && (
        <EnrollModal
          course={selectedPlan}
          onClose={() => {
            setSelectedPlan(null);
            const updatedUser = JSON.parse(localStorage.getItem("user"));
            setCurrentPlan(updatedUser?.plan || "free");
          }}
        />
      )}

      {showPopup && (
        <PopupBox
          message={popupMessage}
          onClose={() => setShowPopup(false)}
          redirectTo={location.pathname}
        />
      )}
    </div>
  );
};

export default Pricing;
