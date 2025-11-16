import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Kiểm tra user đã đăng nhập
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="Header">
      <nav className="Header-nav">
        <div className="Header-logo">
          <Link to="/">HDV</Link>
        </div>
        <ul className="Header-menu">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
          {user ? (
            <>
              <li className="Header-user">
                <span>Xin chào, {user.name}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="Header-logout">
                  Đăng xuất
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth" className="Header-auth">
                Đăng nhập / Đăng ký
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

