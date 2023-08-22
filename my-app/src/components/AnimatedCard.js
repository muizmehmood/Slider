import React from 'react';
import './AnimatedCard.css';
import image1 from "../components/img/1.jpg";
import image2 from "../components/img/2.jpg";
import image3 from "../components/img/3.jpg";

const Card = ({ color, title, imageSrc, description }) => {
  return (
    <div className="card" style={{ '--clr': color }}>
      <div className="img-box">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container">
      <Card
        color="#023020"
        title="Forest"
        imageSrc={image1}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
      <Card
        color="#0096FF"
        title="Blue Carbon"
        imageSrc={image2}
        description= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
      <Card
        color="#00A36C"
        title="Agriculture"
        imageSrc={image3}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
    </div>
  );
};

export default Cards;
