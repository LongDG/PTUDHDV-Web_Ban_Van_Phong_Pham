import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <h1>Giới thiệu</h1>
      <p>Đây là trang giới thiệu về ứng dụng HDV.</p>
      <div className="About-info">
        <h2>Thông tin dự án</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Node.js với Express</li>
          <li>Cấu trúc: MVC</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

