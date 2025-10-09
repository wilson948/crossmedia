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
    image: "https://images.pexels.com/photos/34192360/pexels-photo-34192360.jpeg",
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
    image: "https://images.pexels.com/photos/10112876/pexels-photo-10112876.jpeg",
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
    image: "https://images.pexels.com/photos/18834577/pexels-photo-18834577.jpeg",
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
    image: "https://images.pexels.com/photos/8852027/pexels-photo-8852027.jpeg",
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
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
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
    image: "https://images.pexels.com/photos/19808822/pexels-photo-19808822.jpeg",
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
    price: 12.15,
    image: "https://images.pexels.com/photos/5589058/pexels-photo-5589058.jpeg",
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
    image: "https://images.pexels.com/photos/7456550/pexels-photo-7456550.jpeg",
    category: "vegetables",
    brand: "FreshVeggies",
    description: "Cebollas rojas frescas, perfectas para ensaladas y guisos",
    inStock: true,
    rating: 4.1
  },
  {
    id: 12,
    name: "Limones Frescos",
    price: 2.33,
    image: "https://images.pexels.com/photos/6249228/pexels-photo-6249228.jpeg",
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
    image: "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=qaT457ZMEfdTxjdXRgphndsQ_hdXTnruOavDYIBj3KI=",
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
    image: "https://media.istockphoto.com/id/610032764/photo/anjou-pears.jpg?s=1024x1024&w=is&k=20&c=P7Ya-iZNFnmtpm4qPY2V-S909pUdK4ZmDwUwIlS1Eys=",
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
   image:"https://tse2.mm.bing.net/th/id/OIP.6tBiJ11LrErkQanwid_QzQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    price: 50.30,
    image: "https://th.bing.com/th/id/OIP.5oY0wQgv2xo1Uf4estk5sAHaHa?w=190&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    category: "meat",
    brand: "FarmFresh",
    description: "Pechuga de pollo fresca sin piel, alta en proteínas",
    inStock: true,
    rating: 4.6
  },
  {
    id: 17,
    name: "Carne de Res Premium",
    price: 90.29,  image:"https://progcarne.com/storage/app/uploads/public/60b/e39/e76/60be39e761e53554131032.jpg",
    category: "meat",
    brand: "PrimeCuts",
    description: "Carne de res premium, perfecta para asados y parrillas",
    inStock: true,
    rating: 4.8
  },
  {
    id: 18,
    name: "Salmón Atlántico",
    price: 88.95,
    image: "https://metroio.vtexassets.com/arquivos/ids/451217/Filete-de-Salm-n-Atl-ntico-Aqua-500g-1-312828457.jpg?v=638285098405930000",
    category: "seafood",
    brand: "OceanFresh",
    description: "Salmón atlántico fresco, rico en omega-3",
    inStock: true,
    rating: 4.7
  },
  {
    id: 19,
    name: "Camarones Jumbo",
    price: 110.17,
    image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750301972146L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
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
    image: "https://tse2.mm.bing.net/th/id/OIP.DDWQ8xcyz25c9jngcNBGtgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "meat",
    brand: "PorkPrime",
    description: "Chuletas de cerdo tiernas y jugosas",
    inStock: true,
    rating: 4.4
  },
  {
    id: 21,
    name: "Atún Fresco",
    price: 100.02,
    image: "https://meatstorehn.com/wp-content/uploads/2020/05/Atun-fresco-en-cubos1.jpg",
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
    image: "data:image/webp;base64,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",
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