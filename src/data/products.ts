import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Manzanas Rojas Premium",
    price: 3.99,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "frutas",
    brand: "FreshFarms",
    description: "Manzanas rojas frescas y crujientes, perfectas para snacks saludables",
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Leche Entera Orgánica",
    price: 4.50,
    originalPrice: 5.25,
    discount: 14,
    image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "lacteos",
    brand: "Organic Valley",
    description: "Leche entera orgánica de vacas alimentadas con pasto, 1L",
    inStock: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Pan Integral Artesanal",
    price: 2.99,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "panaderia",
    brand: "Bakery Fresh",
    description: "Pan integral artesanal horneado diariamente con ingredientes naturales",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Pollo Orgánico Entero",
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "carnes",
    brand: "Premium Poultry",
    description: "Pollo orgánico entero, criado sin antibióticos ni hormonas",
    inStock: true,
    rating: 4.6
  },
  {
    id: 5,
    name: "Plátanos Ecuatorianos",
    price: 2.49,
    image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "frutas",
    brand: "Tropical Best",
    description: "Plátanos frescos y dulces directamente del Ecuador",
    inStock: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "Yogur Griego Natural",
    price: 3.75,
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "lacteos",
    brand: "Greek Gods",
    description: "Yogur griego cremoso y natural, rico en proteínas",
    inStock: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Salmón Fresco Atlántico",
    price: 18.99,
    image: "https://images.pexels.com/photos/3297882/pexels-photo-3297882.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "pescados",
    brand: "Ocean Fresh",
    description: "Salmón atlántico fresco, perfecto para preparaciones gourmet",
    inStock: true,
    rating: 4.9
  },
  {
    id: 8,
    name: "Aceite de Oliva Extra Virgen",
    price: 8.99,
    originalPrice: 10.99,
    discount: 18,
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
    category: "aceites",
    brand: "Mediterranean Gold",
    description: "Aceite de oliva extra virgen prensado en frío, 500ml",
    inStock: true,
    rating: 4.7
  },
  {
    id: 9,
    name: "Tomates Cherry Orgánicos",
    price: 4.99,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "verduras",
    brand: "Garden Fresh",
    description: "Tomates cherry orgánicos, perfectos para ensaladas",
    inStock: true,
    rating: 4.6
  },
  {
    id: 10,
    name: "Quinoa Premium",
    price: 6.99,
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "granos",
    brand: "Superfood Co",
    description: "Quinoa premium boliviana, alto en proteínas y fibra",
    inStock: true,
    rating: 4.8
  },
  {
    id: 11,
    name: "Queso Manchego Curado",
    price: 15.99,
    originalPrice: 18.99,
    discount: 16,
    image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "lacteos",
    brand: "Spanish Delights",
    description: "Queso manchego curado artesanal, sabor intenso y cremoso",
    inStock: true,
    rating: 4.9
  },
  {
    id: 12,
    name: "Aguacates Hass",
    price: 5.99,
    image: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "frutas",
    brand: "Tropical Select",
    description: "Aguacates Hass maduros, cremosos y nutritivos",
    inStock: true,
    rating: 4.7
  }
];

export const categories = [
  { id: "frutas", name: "Frutas", icon: "🍎", image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "verduras", name: "Verduras", icon: "🥕", image: "https://images.pexels.com/photos/1353368/pexels-photo-1353368.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "carnes", name: "Carnes", icon: "🥩", image: "https://images.pexels.com/photos/5945805/pexels-photo-5945805.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "lacteos", name: "Lácteos", icon: "🧀", image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "panaderia", name: "Panadería", icon: "🍞", image: "https://images.pexels.com/photos/209368/pexels-photo-209368.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "pescados", name: "Pescados", icon: "🐟", image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "granos", name: "Granos", icon: "🌾", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: "aceites", name: "Aceites", icon: "🫒", image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400" }
];