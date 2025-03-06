import React, { useState } from 'react';
import Coffee from './Coffee';
import Dessert from './Dessert';
import Cart from './Cart';
import './menu.css';
import { useLocation } from 'react-router-dom';

export default function Menu() {
<<<<<<< HEAD
    const [selectedMenu, setSelectedMenu] = useState('coffee');
    const [cart, setCart] = useState(new Map()); // 초기 상태를 Map으로 설정 새로운 map 설정을 하지않으면 충돌오 오류 발생
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { username } = location.state || {};
=======
    const [selectedMenu, setSelectedMenu] = useState('coffee'); // 기본값 설정
    const [cart, setCart] = useState([]); // 장바구니 설정
      //파라미터 값 받아옴
    const location = useLocation();
    const {tableNumber} = location.state || {};
>>>>>>> 6a8db427 (first commit)

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

<<<<<<< HEAD
    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = new Map(prevCart); // 상태 복사
            const productName = product.menu;
    
            if (newCart.has(productName)) {
                const existingProduct = newCart.get(productName);
                existingProduct.quantity += 1;
            } else {
                newCart.set(productName, { ...product, quantity: 1 });
            }
            return newCart; // 새로운 Map 반환
        });
    };
    

    const toggleCart = () => {
        setIsCartOpen((prevState) => !prevState);
    };

    return (
        <div className="main">
            <div className="menus">
                <div className="username">{username}님 환영합니다!</div>
=======
    // Cart에 아이템 추가 함수
    const addToCart = (coffee) => {
        setCart((prevCart) => {
            const newCart = new Map(prevCart); // 기존 장바구니 복사
            const coffeeId = coffee.id; // 상품 고유 ID

            if (newCart.has(coffeeId)) {
                // 상품이 이미 장바구니에 있으면 수량 증가
                const existingCoffee = newCart.get(coffeeId);
                existingCoffee.quantity += 1; // 수량 증가
            } else {
                // 상품이 장바구니에 없으면 새로 추가
                newCart.set(coffeeId, { ...coffee, quantity: 1 });
            }
            return newCart;
        });
    };


    return (
        <div className="main">            
            {/* 메뉴 보이는 창 */}
            <div className="menus">
            <div className="tableNumber">{tableNumber}번 테이블</div>
>>>>>>> 6a8db427 (first commit)
                <div className="menus-click">
                    <p onClick={() => handleMenuClick('coffee')}>커피</p>
                    <p onClick={() => handleMenuClick('dessert')}>디저트</p>
                </div>
                <div className="menu-list">
<<<<<<< HEAD
                    {selectedMenu === 'coffee' && <Coffee addToCart={addToCart} />}
                    {selectedMenu === 'dessert' && <Dessert addToCart={addToCart} />}
                </div>
            </div>

            {/* 슬라이드 가능한 장바구니 */}
            <div className={`cart ${isCartOpen ? 'open' : ''}`}>
                <Cart cart={cart} setCart={setCart} />
            </div>

            {/* 장바구니 토글 버튼 */}
            <div className="cart-toggle" onClick={toggleCart}>
                {isCartOpen ? '장바구니 닫기' : '장바구니 열기'}
=======
                    {selectedMenu === 'coffee' && <Coffee addToCart={addToCart} />}  {/*selectedMenu === 'coffee'가 true일 경우 <Coffee /> 컴포넌트를 렌더링*/}
                    {selectedMenu === 'dessert' && <Dessert addToCart={addToCart}/>}
                </div>
            </div>

            {/* 주문 내역 보이는 칸 */}
            <div className="cart">
                <Cart cart={cart} setCart={setCart}/>
>>>>>>> 6a8db427 (first commit)
            </div>
        </div>
    );
}
