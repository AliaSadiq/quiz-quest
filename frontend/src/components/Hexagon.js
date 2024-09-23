import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the hexagon styles

const Hexagon = ({ category }) => {
  return (
    <Link to={`/quiz/${category.id}`} className="hexagon">
      {category.name}
    </Link>
  );
};

export default Hexagon;
