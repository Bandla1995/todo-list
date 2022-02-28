import { items } from '../../../data/items';

export default function handler(req, res) {
    if (req.method === 'GET') {
    res.status(200).json(items)
} else if(req.method === 'POST') {
    const item = req.body.item
    const newItem = {
        id: Date.now(),
        text: item
    }
    items.push(newItem)
    res.status(201).json(newItem)
}
}
