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
image:"https://tse1.mm.bing.net/th/id/OIP.q_nZp-rRxUfnj1GxZmNKwQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "data:image/webp;base64,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",
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
    image: "https://www.soldelevante.com/wp-content/uploads/2022/07/Espinacas-frescas.jpg",
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