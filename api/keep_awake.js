import fetch from 'node-fetch';

export default async function handler(req, res) {
    const url = "https://product-recommendation-rsfm.onrender.com";
    try {
        const response = await fetch(url);
        if (response.ok) {
            res.status(200).json({ message: 'Ping successful!' });
        } else {
            res.status(response.status).json({ message: 'Ping failed' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ping failed', error: error.message });
    }
}
