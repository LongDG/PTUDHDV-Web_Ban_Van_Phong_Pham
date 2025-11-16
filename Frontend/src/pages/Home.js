import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test API connection
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/test');
        setData(response.data);
      } catch (error) {
        console.error('Lỗi kết nối API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <h1>Trang chủ</h1>
      <p>Chào mừng đến với ứng dụng HDV!</p>
      
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="Home-api-test">
          <h2>Kết nối API:</h2>
          {data ? (
            <div>
              <p>✓ {data.message}</p>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ) : (
            <p>✗ Không thể kết nối với API</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

