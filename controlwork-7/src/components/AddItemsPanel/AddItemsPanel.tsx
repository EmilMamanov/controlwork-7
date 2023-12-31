import './AddItemsPanel.css';
import Button from '../Button/Button';

import hamburgerImage from '../../assets/hamburger.png';
import coffeeImage from '../../assets/coffee.png';
import cheeseburgerImage from '../../assets/cheeseburger.png';
import teaImage from '../../assets/tea.png';
import friesImage from '../../assets/fries.png';
import colaImage from '../../assets/cola.png';

function AddItemsPanel({ addToOrder }: { addToOrder: (item: { name: string; price: number; image: string }) => void }) {
    const menuItems: { name: string; price: number; image: string }[] = [
        { name: 'Hamburger', price: 80, image: hamburgerImage },
        { name: 'Coffee', price: 70, image: coffeeImage },
        { name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
        { name: 'Tea', price: 50, image: teaImage },
        { name: 'Fries', price: 45, image: friesImage },
        { name: 'Cola', price: 40, image: colaImage },
    ];

    return (
        <div className="AddItemsPanel">
            <h2>Add items</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt={item.name} />
                        {item.name} - {item.price} KGS
                        <Button text="+" onClick={() => addToOrder(item)} className="add-to-order-btn" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddItemsPanel;