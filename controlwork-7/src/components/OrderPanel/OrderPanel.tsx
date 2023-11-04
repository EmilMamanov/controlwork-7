import './OrderPanel.css';
import Button from '../Button/Button';

function OrderPanel({ order, removeFromOrder }: { order: { [itemName: string]: number }; removeFromOrder: (itemName: string) => void }) {
    const menuItems = [
        { name: 'Hamburger', price: 80 },
        { name: 'Coffee', price: 70 },
        { name: 'Cheeseburger', price: 90 },
        { name: 'Tea', price: 50 },
        { name: 'Fries', price: 45 },
        { name: 'Cola', price: 40 },
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
        <div className="OrderPanel">
            <h2>Order</h2>
            {Object.keys(order).length === 0 ? (
                <p>Order is empty! <br /> Please add some items!</p>
            ) : (
                <div>
                    <ul>
                        {Object.keys(order).map((itemName, index) => {
                            const item = menuItems.find((menuitem) => menuitem.name === itemName);
                            const itemPrice = item ? item.price : 0;
                            return (
                                <li key={index}>
                                    {itemName} - {itemPrice * order[itemName]} KGS (x{order[itemName]})
                                    <Button text="x" onClick={() => removeFromOrder(itemName)} className="remove-btn" />
                                </li>
                            );
                        })}
                    </ul>
                    <p>Total price: {totalOrderPrice()} KGS</p>
                </div>
            )}
        </div>
    );
}

export default OrderPanel;
