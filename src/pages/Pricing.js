import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EnrollModal from '../components/EnrollModal';
import PopupBox from '../components/PopupBox';

const plans = [
  {
    id: 'free',
    name: 'Free Plan',
    price: '$0',
    features: ['Access to free courses', 'Basic support', 'No certificate'],
  },
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '$29',
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

    if (plan.id === 'premium' || plan.id === 'basic') {
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
    <div>
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
