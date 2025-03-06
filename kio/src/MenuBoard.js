import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './menus.css';

const MenuBoard = () => {
  const { storeId } = useParams();  // URL에서 storeId를 받음
  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`http://localhost:8080/menus/${storeId}`);
        
        // 응답 상태가 200 OK인지 확인
        if (!response.ok) {
          throw new Error('Failed to fetch menus');
        }

        const data = await response.json();
        console.log('Fetched data:', data);  // 데이터 로그 출력
        setMenus(data);  // 데이터를 상태에 저장

        // 카테고리의 첫번째 값을 가져와서 default 값으로 설정해줌
        if (data.length > 0) {
          setSelectedCategory(data[0].category);
        }
      } catch (err) {
        console.error('Error fetching menus:', err.message);
      }
    };

    if (storeId) {
      fetchMenus();  // storeId가 있을 때 메뉴 데이터를 가져옴
    }
  }, [storeId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);  // 카테고리 클릭 시 해당 카테고리 저장
  };

  return (
    <div>
      <h1 className='head_banner'>Menu Board for Store {storeId}</h1>

      <div className="category-section">
        {menus.length > 0 && (
          [...new Set(menus.map((menu) => menu.category))]  // 카테고리 중복 제거
            .map((category) => (
              <div 
                key={category} 
                onClick={() => handleCategoryClick(category)} 
                style={{cursor: 'pointer', marginBottom: '10px'}}
              >
                <h3>{category}</h3>
              </div>
            ))
        )}
      </div>


      <ul>
        {menus.length > 0 ? (
          menus
            .filter((menu) => menu.category === selectedCategory)
            .map((menu) => (
              <li key={menu.id}>
                <div className="menu-item">
                  <span className="menu-name">{menu.menu}</span>
                  <span className="menu-description">{menu.description}</span>
                  <span className="menu-price">${menu.price}</span>
                </div>
              </li>
            ))
        ) : (
          <p>No menus available</p>
        )}
      </ul>

    </div>
  );
};

export default MenuBoard;
