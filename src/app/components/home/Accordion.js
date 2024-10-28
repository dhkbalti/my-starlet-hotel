import React, { useState } from "react";
import './Accordion.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronLeft:faChevronDown  } 
        className="dropdown-icon" 
        />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionGrid = () => {
  
  return (
  <>
  <h1 className="faq-head">Frequently Asked Questions</h1>
  <div className="accordion-container">
      <Accordion 
        title="Is breakfast included in the room rate?"
        content="Breakfast may be included in some room rates. Please check the
                terms of your booking or contact our reservation team for more
                details." 
      />
      <Accordion 
        title="Are pets allowed at the hotel?" 
        content=" Yes, Pets are allowed at Al Noor Starlet Hotel, but upon request" 
      />
      <Accordion 
        title="Is there free Wi-Fi available at the hotel?" 
        content=" Yes, we offer complimentary high-speed Wi-Fi throughtout the
                  hotel, including in all quest rooms and public areas." 
      />
      <Accordion 
        title="Are the rooms air-conditioned?" 
        content=" Yes, most of our quest rooms are equipped with air conditioning to
                  ensure your comfort.For a complete list of amenities available in
                  each room type, please refer to the room section on our website." 
      />
    </div>
  </>
    
  );
};

export default AccordionGrid;
