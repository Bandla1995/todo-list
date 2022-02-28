import { useState } from 'react'

function ItemsPage() {
    const [items, setItems] = useState([])
    const [item, setItem] = useState('')

    const fetchItems = async () => {
        const response = await fetch('/api/items')
        const data = await response.json()
        setItems(data)
    }

    const submitItem = async () => {
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ item }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    }


    

    return (
        <>
        <input
        type='text'
        value={item}
        onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={submitItem}>Submit item</button>
        <button onClick={fetchItems}>Load items</button>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        {item.id} {item.text}
                    </div>
                )
        })}
        </>
    )
}

export default ItemsPage