export const GOLD_PRICE_PER_GRAM_USD = 124.91;



export const fetchProducts = async () => {
    const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";

    const response = await fetch(`${API_URL}/api/products`)
        
    if (!response.ok) {
        throw new Error(`API hatası: ${response.status}`);
    }
    
    const products = await response.json();
    
    return products; 
};



export const getColorInfo = (key) => {
  switch (key.toLowerCase()) {
    case 'yellow': return { hex: '#E6CA97', displayName: 'Yellow Gold' };
    case 'white': return { hex: '#D9D9D9', displayName: 'White Gold' };
    case 'rose': return { hex: '#E1A4A9', displayName: 'Rose Gold' };
    default: return { hex: '#D9D9D9', displayName: 'Unknown Gold' };
  }
};
