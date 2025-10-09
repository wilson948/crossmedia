import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: "fruits",
    name: "Frutas",
    icon: "🍎",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "vegetables",
    name: "Verduras",
    icon: "🥕",
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "meat",
    name: "Carnes",
    icon: "🥩",
    image: "https://images.pexels.com/photos/1539684/pexels-photo-1539684.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "seafood",
    name: "Pescados",
    icon: "🐟",
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "dairy",
    name: "Lácteos",
    icon: "🥛",
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "bakery",
    name: "Panadería",
    icon: "🍞",
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "organic",
    name: "Orgánicos",
    icon: "🌱",
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "beverages",
    name: "Bebidas",
    icon: "🥤",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const products: Product[] = [
  // Frutas y Verduras
  {
    id: 1,
    name: "Manzanas Rojas Premium",
    price: 27.77,
    originalPrice: 34.73,
    image: "https://th.bing.com/th/id/OIP.223_gHI1bMdQx5Ac6Jn2UwHaGI?w=232&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    category: "fruits",
    brand: "FreshFarm",
    description: "Manzanas rojas crujientes y dulces, perfectas para snacks saludables",
    inStock: true,
    rating: 4.5,
    discount: 20
  },
  {
    id: 2,
    name: "Plátanos Orgánicos",
    price: 17.33,
    image: "data:image/webp;base64,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",
    category: "fruits",
    brand: "EcoBio",
    description: "Plátanos orgánicos maduros, ricos en potasio y fibra",
    inStock: true,
    rating: 4.3
  },
  {
    id: 3,
    name: "Zanahorias Baby",
    price: 13.85,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "GreenFields",
    description: "Zanahorias baby tiernas y dulces, ideales para ensaladas",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Espinacas Frescas",
    price: 20.82,
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "LeafyGreens",
    description: "Espinacas frescas ricas en hierro y vitaminas",
    inStock: true,
    rating: 4.4
  },
  {
    id: 5,
    name: "Tomates Cherry",
    price: 24.29,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "SunnyVeggies",
    description: "Tomates cherry dulces y jugosos, perfectos para ensaladas",
    inStock: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Aguacates Hass",
    price: 34.73,
    image: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    brand: "TropicalFresh",
    description: "Aguacates Hass cremosos, ricos en grasas saludables",
    inStock: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Brócoli Fresco",
    price: 19.42,
    image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "GreenCrown",
    description: "Brócoli fresco rico en vitaminas y antioxidantes",
    inStock: true,
    rating: 4.2
  },
  {
    id: 8,
    name: "Naranjas Valencia",
    price: 22.90,
    image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    brand: "CitrusFresh",
    description: "Naranjas Valencia jugosas, perfectas para zumo natural",
    inStock: true,
    rating: 4.5
  },
  {
    id: 9,
    name: "Lechuga Romana",
    price: 13.15,
    image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "CrispyGreens",
    description: "Lechuga romana crujiente, base perfecta para ensaladas César",
    inStock: true,
    rating: 4.3
  },
  {
    id: 10,
    name: "Fresas Orgánicas",
    price: 41.69,
    originalPrice: 55.62,
    image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    brand: "BerryBest",
    description: "Fresas orgánicas dulces y aromáticas, cultivadas sin pesticidas",
    inStock: true,
    rating: 4.9,
    discount: 25
  },
  {
    id: 11,
    name: "Cebollas Rojas",
    price: 13.85,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "FreshVeggies",
    description: "Cebollas rojas frescas, perfectas para ensaladas y guisos",
    inStock: true,
    rating: 4.1
  },
  {
    id: 12,
    name: "Limones Frescos",
    price: 17.33,
    image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    brand: "CitrusFresh",
    description: "Limones frescos jugosos, ricos en vitamina C",
    inStock: true,
    rating: 4.4
  },
  {
    id: 13,
    name: "Apio Fresco",
    price: 15.64,
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "CrispyGreens",
    description: "Apio fresco crujiente, ideal para jugos y ensaladas",
    inStock: true,
    rating: 4.2
  },
  {
    id: 14,
    name: "Peras Anjou",
    price: 27.77,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    brand: "OrchardFresh",
    description: "Peras Anjou dulces y jugosas, perfectas para postres",
    inStock: true,
    rating: 4.6
  },
  {
    id: 15,
    name: "Pepinos Orgánicos",
    price: 20.82,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    brand: "EcoBio",
    description: "Pepinos orgánicos frescos, ideales para ensaladas",
    inStock: true,
    rating: 4.3
  },

  // Carnes y Pescados
  {
    id: 16,
    name: "Pechuga de Pollo Sin Piel",
    price: 62.58,
    image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "meat",
    brand: "FarmFresh",
    description: "Pechuga de pollo fresca sin piel, alta en proteínas",
    inStock: true,
    rating: 4.6
  },
  {
    id: 17,
    name: "Carne de Res Premium",
    price: 111.29,
    image: "https://images.pexels.com/photos/1539684/pexels-photo-1539684.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "meat",
    brand: "PrimeCuts",
    description: "Carne de res premium, perfecta para asados y parrillas",
    inStock: true,
    rating: 4.8
  },
  {
    id: 18,
    name: "Salmón Atlántico",
    price: 173.95,
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "seafood",
    brand: "OceanFresh",
    description: "Salmón atlántico fresco, rico en omega-3",
    inStock: true,
    rating: 4.7
  },
  {
    id: 19,
    name: "Camarones Jumbo",
    price: 132.17,
    image: "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "seafood",
    brand: "SeaDelights",
    description: "Camarones jumbo frescos, ideales para platos gourmet",
    inStock: true,
    rating: 4.5
  },
  {
    id: 20,
    name: "Chuletas de Cerdo",
    price: 90.42,
    image: "https://images.pexels.com/photos/3688/food-dinner-lunch-unhealthy.jpg?auto=compress&cs=tinysrgb&w=600",
    category: "meat",
    brand: "PorkPrime",
    description: "Chuletas de cerdo tiernas y jugosas",
    inStock: true,
    rating: 4.4
  },
  {
    id: 21,
    name: "Atún Fresco",
    price: 160.02,
    image: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "seafood",
    brand: "TunaSelect",
    description: "Atún fresco de calidad sashimi",
    inStock: true,
    rating: 4.6
  },
  {
    id: 22,
    name: "Pavo Molido",
    price: 69.54,
    image: "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "meat",
    brand: "LeanMeat",
    description: "Pavo molido magro, opción saludable alta en proteínas",
    inStock: true,
    rating: 4.3
  },
  {
    id: 23,
    name: "Bacalao Fresco",
    price: 139.16,
    image: "https://images.pexels.com/photos/725993/pexels-photo-725993.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "seafood",
    brand: "NordicFish",
    description: "Bacalao fresco del Atlántico Norte",
    inStock: true,
    rating: 4.5
  },
  {
    id: 24,
    name: "Costillas de Res",
    price: 118.25,
    image: "https://images.pexels.com/photos/1539685/pexels-photo-1539685.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "meat",
    brand: "BBQMaster",
    description: "Costillas de res perfectas para barbacoa",
    inStock: true,
    rating: 4.7
  },
  {
    id: 25,
    name: "Cangrejo Real",
    price: 320.09,
    originalPrice: 389.69,
    image: "https://images.pexels.com/photos/725994/pexels-photo-725994.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "seafood",
    brand: "RoyalSea",
    description: "Cangrejo real de Alaska, delicadeza marina premium",
    inStock: true,
    rating: 4.9,
    discount: 18
  },

  // Lácteos
  {
    id: 26,
    name: "Leche Entera Orgánica",
    price: 31.25,
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    brand: "PureDairy",
    description: "Leche entera orgánica de vacas alimentadas con pasto",
    inStock: true,
    rating: 4.6
  },
  {
    id: 27,
    name: "Queso Cheddar Añejo",
    price: 55.62,
    image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    brand: "CheeseWorks",
    description: "Queso cheddar añejo con sabor intenso y textura cremosa",
    inStock: true,
    rating: 4.7
  },
  {
    id: 28,
    name: "Yogur Griego Natural",
    price: 41.69,
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    brand: "GreekGold",
    description: "Yogur griego natural cremoso, alto en proteínas",
    inStock: true,
    rating: 4.5
  },
  {
    id: 29,
    name: "Mantequilla Artesanal",
    price: 45.18,
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    brand: "CreamyCraft",
    description: "Mantequilla artesanal hecha con crema fresca",
    inStock: true,
    rating: 4.8
  },
  {
    id: 30,
    name: "Queso Mozzarella Fresca",
    price: 62.58,
    image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    brand: "ItalianStyle",
    description: "Mozzarella fresca italiana, perfecta para caprese",
    inStock: true,
    rating: 4.6
  },

  // Panadería
  {
    id: 31,
    name: "Pan Integral Artesanal",
    price: 27.77,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "bakery",
    brand: "ArtisanBread",
    description: "Pan integral artesanal horneado diariamente",
    inStock: true,
    rating: 4.6
  },
  {
    id: 32,
    name: "Croissants Franceses",
    price: 20.82,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "bakery",
    brand: "FrenchBake",
    description: "Croissants franceses mantecosos y hojaldrados",
    inStock: true,
    rating: 4.8
  },
  {
    id: 33,
    name: "Muffins de Arándanos",
    price: 31.25,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "bakery",
    brand: "BerryBake",
    description: "Muffins esponjosos con arándanos frescos",
    inStock: true,
    rating: 4.5
  },
  {
    id: 34,
    name: "Baguette Tradicional",
    price: 17.33,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "bakery",
    brand: "ClassicBread",
    description: "Baguette francesa tradicional con corteza crujiente",
    inStock: true,
    rating: 4.7
  },
  {
    id: 35,
    name: "Donuts Glaseados",
    price: 41.69,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "bakery",
    brand: "SweetTreats",
    description: "Donuts glaseados frescos, perfectos para el desayuno",
    inStock: true,
    rating: 4.4
  },

  // Productos Orgánicos
  {
    id: 36,
    name: "Quinoa Orgánica",
    price: 62.58,
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "organic",
    brand: "SuperGrain",
    description: "Quinoa orgánica boliviana, superalimento completo",
    inStock: true,
    rating: 4.8
  },
  {
    id: 37,
    name: "Aceite de Oliva Extra Virgen",
    price: 90.42,
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600",
    category: "organic",
    brand: "MediterraneanGold",
    description: "Aceite de oliva extra virgen prensado en frío",
    inStock: true,
    rating: 4.9
  },
  {
    id: 38,
    name: "Miel de Abeja Pura",
    price: 69.54,
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600",
    category: "organic",
    brand: "BeeNatural",
    description: "Miel de abeja pura sin procesar",
    inStock: true,
    rating: 4.7
  },
  {
    id: 39,
    name: "Arroz Integral Orgánico",
    price: 41.69,
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "organic",
    brand: "GrainPure",
    description: "Arroz integral orgánico de grano largo",
    inStock: true,
    rating: 4.5
  },
  {
    id: 40,
    name: "Semillas de Chía",
    price: 55.62,
    image: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "organic",
    brand: "SuperSeeds",
    description: "Semillas de chía orgánicas ricas en omega-3",
    inStock: true,
    rating: 4.6
  },

  // Bebidas
  {
    id: 41,
    name: "Agua Mineral Natural",
    price: 13.85,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "beverages",
    brand: "PureSpring",
    description: "Agua mineral natural de manantial",
    inStock: true,
    rating: 4.3
  },
  {
    id: 42,
    name: "Jugo de Naranja Natural",
    price: 34.73,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "beverages",
    brand: "FreshSqueeze",
    description: "Jugo de naranja 100% natural sin azúcar añadido",
    inStock: true,
    rating: 4.6
  },
  {
    id: 43,
    name: "Café Orgánico en Grano",
    price: 90.42,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "beverages",
    brand: "MountainRoast",
    description: "Café orgánico en grano tostado medio",
    inStock: true,
    rating: 4.8
  },
  {
    id: 44,
    name: "Kombucha de Jengibre",
    price: 38.21,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "beverages",
    brand: "FermentedLife",
    description: "Kombucha probiótica con jengibre fresco",
    inStock: true,
    rating: 4.4
  },
  {
    id: 45,
    name: "Smoothie Verde",
    price: 48.67,
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "beverages",
    brand: "GreenBlend",
    description: "Smoothie verde con espinaca, manzana y jengibre",
    inStock: true,
    rating: 4.5
  }
];