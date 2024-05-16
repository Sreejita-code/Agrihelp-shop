import React from 'react';
import './Shop.css';

const Shop = () => {
  const fertilizers = [
    { id: 1, name: 'Nitrogen Fertilizer', price: 100, discountPrice: 80, image: '/images/image1.jpg' },
    { id: 2, name: 'Phosphorus Fertilizer', price: 150, discountPrice: 120, image: '/images/image2.jpg' },
    { id: 3, name: 'Jobes Organic Fertilizer', price: 200, discountPrice: 160, image: '/images/image3.jpg' },
    { id: 4, name: 'Potassium Fertilizer', price: 250, discountPrice: 200, image: '/images/image4.jpg' },
    { id: 5, name: 'Micronutrient Fertilizer', price: 260, discountPrice: 160, image: '/images/image5.jpg' },
  ];

  const pesticides = [
    { id: 6, name: 'Insecticide', price: 80, discountPrice: 60, image: '/images/pest2.jpg' },
    { id: 7, name: 'Fungicide', price: 120, discountPrice: 90, image: '/images/pest6.jpg' },
    { id: 8, name: 'Herbicide', price: 160, discountPrice: 130, image: '/images/pest7.jpg' },
    { id: 9, name: 'Bactericide', price: 150, discountPrice: 110, image: '/images/pest4.jpg' },
    { id: 10, name: 'Avicide', price: 170, discountPrice: 120, image: '/images/pest5.jpg' },
  ];

  const seeds = [
    { id: 11, name: 'Flax Seeds', price: 50, discountPrice: 40, image: '/images/seed1.jpg' },
    { id: 12, name: 'Sunflower Seeds', price: 70, discountPrice: 55, image: '/images/seed2.jpg' },
    { id: 13, name: 'Wheat', price: 90, discountPrice: 70, image: '/images/seed3.jpg' },
    { id: 14, name: 'Black Sesame Seeds', price: 80, discountPrice: 50, image: '/images/seed4.jpg' },
    { id: 15, name: 'Apricot Seeds', price: 120, discountPrice: 100, image: '/images/seed5.jpg' },
  ];

  return (
    <div className="shop-page">
      <h2>SHOP BY CATEGORY!!</h2>
      <div className="top-section">
        <h3 className="bottom-heading">Our Services</h3>
        <div className="bottom-image">
          <img src="https://img.freepik.com/free-vector/purchase-online-onboarding-app-screens_23-2148400321.jpg" alt="Purchase Online Onboarding" />
        </div>
        <div className="additional-image">
          <img src="https://www.crushpixel.com/big-static18/preview4/super-sale-banner-template-design-2766425.jpg" alt="Super Sale Banner" />
        </div>
      </div>
      <h3>Fertilizers</h3>
      <div className="product-list">
        {fertilizers.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="price">
              Price: <span className="original-price">₹{product.price}</span>
            </p>
            <p className="discount-price">Discounted Price: ₹{product.discountPrice}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <h3>Pesticides</h3>
      <div className="product-list">
        {pesticides.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="price">
              Price: <span className="original-price">₹{product.price}</span>
            </p>
            <p className="discount-price">Discounted Price: ₹{product.discountPrice}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <h3>Seeds</h3>
      <div className="product-list">
        {seeds.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="price">
              Price: <span className="original-price">₹{product.price}</span>
            </p>
            <p className="discount-price">Discounted Price: ₹{product.discountPrice}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p className="app-name">AGRIHELP</p>
          <p className="contact-info">
            <span className="contact-icon">📞</span> 123456789
          </p>
          <p className="contact-info">
            <span className="contact-icon">📧</span> abc@gmail.com
          </p>
          <p className="contact-info">
            <span className="contact-icon">📱</span> WhatsApp: 2222333999
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
