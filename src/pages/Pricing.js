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

  const handleSelectPlan = (plan) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (plan.id === 'premium') {
      if (!user) {
        setPopupMessage("Please log in to Upgrade.");
        setShowPopup(true);
        return;
      }

      setSelectedPlan(plan); // show subscription form/modal
    } else {
      setPopupMessage("You're already on the Free Plan.");
      setShowPopup(true);
    }
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
            <button>Select Plan</button>
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
        <EnrollModal course={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}

      {showPopup && (
        <PopupBox
          message="Please log in to upgrade."
          onClose={() => setShowPopup(false)}
          redirectTo={location.pathname}
        />
      )}
    </div>
  );
};

export default Pricing;
