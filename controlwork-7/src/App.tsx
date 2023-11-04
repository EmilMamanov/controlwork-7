import { useState } from 'react';
import './App.css';

import hamburgerImage from './assets/hamburger.png';
import coffeeImage from './assets/coffee.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import teaImage from './assets/tea.png';
import friesImage from './assets/fries.png';
import colaImage from './assets/cola.png';

function App() {
    const [order, setOrder] = useState<{ [itemName: string]: number }>({});

    const addToOrder = (item: { name: string; price: number; image: string }) => {
        const newOrder = { ...order };

        if (newOrder[item.name] !== undefined) {
            newOrder[item.name]++;
        } else {
            newOrder[item.name] = 1;
        }

        setOrder(newOrder);
    };

    const removeFromOrder = (itemName: string) => {
        const newOrder = { ...order };

        if (newOrder[itemName] !== undefined) {
            if (newOrder[itemName] > 1) {
                newOrder[itemName]--;
            } else {
                delete newOrder[itemName];
            }

            setOrder(newOrder);
        }
    };

    const menuItems = [
        { name: 'Hamburger', price: 80, image: hamburgerImage },
        { name: 'Coffee', price: 70, image: coffeeImage },
        { name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
        { name: 'Tea', price: 50, image: teaImage },
        { name: 'Fries', price: 45, image: friesImage },
        { name: 'Cola', price: 40, image: colaImage },
    ];

    const totalOrderPrice = () => {
        return Object.keys(order).reduce((total, itemName) => {
            const item = menuItems.find((menuitem) => menuitem.name === itemName);
            if (item) {
                return total + item.price * order[itemName];
            }
            return total;
        }, 0);
    };

    return (
        <div className="App">
            <div className="OrderPanel">
                <h2>Order</h2>
                {Object.keys(order).length === 0 ? (
                    <p>Order is empty! Please add some items!</p>
                ) : (
                    <div>
                        <ul>
                            {Object.keys(order).map((itemName, index) => (
                                <li key={index}>
                                    <img src={menuItems.find((item) => item.name === itemName)?.image} alt={itemName} />
                                    {itemName} - {menuItems.find((item) => item.name === itemName)?.price} KGS ({order[itemName]})
                                    <button onClick={() => removeFromOrder(itemName)} className="remove-btn">х</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total price: {totalOrderPrice()} KGS</p>
                    </div>
                )}
            </div>
            <div className="AddItemsPanel">
                <h2>Add items</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} />
                            {item.name} - {item.price} KGS
                            <button onClick={() => addToOrder(item)} className="add-to-order-btn">+</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
