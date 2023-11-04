import { useState } from 'react';
import './App.css';
import OrderPanel from './components/OrderPanel/OrderPanel.tsx';
import AddItemsPanel from './components/AddItemsPanel/AddItemsPanel.tsx';

function App() {
    const [order, setOrder] = useState<{ [itemName: string]: number }>({});

    const addToOrder = (item: { name: string; price: number }) => {
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

    return (
        <div className="App">
            <OrderPanel order={order} removeFromOrder={removeFromOrder} />
            <AddItemsPanel addToOrder={addToOrder} />
        </div>
    );
}

export default App;
