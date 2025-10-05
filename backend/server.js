const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const productsPath = path.join(__dirname, 'data', 'products.json');
const rawData = fs.readFileSync(productsPath);
const products = JSON.parse(rawData);

const FIXED_PRICE = 101.00;

app.get('/api/products', async (req, res) => {
    try {


        const productsWithPrice = products.map(product => ({
            ...product,
            price: FIXED_PRICE, 
        }));

        res.json(productsWithPrice);
        
    } catch (error) {
        console.error("Ürünler alınırken hata oluştu", error);
        res.status(500).json({ message: "Ürün verileri işlenemeid." });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} adresinde çalışıyor`);
    console.log(`Ürün APIsi http://localhost:${PORT}/api/products`);
});