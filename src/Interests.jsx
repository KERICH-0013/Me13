import React from 'react'
import './Interests.css'
import { Link } from 'react-router-dom'
// Import your custom images
import interestImg from './assets/interest.png'   // new image for Technology & Innovation
import teaImg from './assets/Tea.png'            // keep tea image if you have it

const Interests = () => {
  const interests = [
    {
      icon: "💻",
      title: "Technology & Innovation",
      description: "Tech Enthusiast - Exploring emerging tech, building solutions.",
      image: interestImg,                         // using interest.png
    },
    {
      icon: "🌱",
      title: "Agritech & Tea Farming",
      description: "Passionate and obsessed about the view🌱❤️ ",
      image: teaImg,                              // using Tea.png
    },
    {
      icon: "⚽",
      title: "Football",
      description: "COYG❤️...Come On You Gunners💪",
      image: "https://via.placeholder.com/400x200?text=Football",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Creating intuitive mobile experiences with Flutter and React Native.",
      image: "https://via.placeholder.com/400x200?text=Mobile+App+Development",
    },
    {
      icon: "🌍",
      title: "Community Impact",
      description: "Driving change through tech education and sustainable projects.",
      image: "https://via.placeholder.com/400x200?text=Community+Impact",
    },
    {
      icon: "🧠",
      title: "Continuous Learning",
      description: "Always learning new tools esp. Tech",
      image: "https://via.placeholder.com/400x200?text=Continuous+Learning",
    },
  ]

  return (
    <div className="interests-container">
      <div className="interests-header">
        <h1>Passions & Interests ❤️</h1>
        <p className="subtitle">A glimpse into what drives me</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>

      <div className="interests-grid">
        {interests.map((item, idx) => (
          <div key={idx} className="interest-card">
            <div className="interest-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="interest-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interests