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
    image: "https://www.agrosuperventas.com/medias/1030211-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjU3NTB8aW1hZ2UvanBlZ3xhREkzTDJnMlpDODROems0TWpRd09UWTBOak00THpFd016QXlNVEZmTVY4ek1EQlhlRE13TUVnfDRmMjBmZDk2MWRhZmQyZjJkNDRmYmFkZDFiZTk0MTY1ZTZmMGVkNTAwMmIxYzZlZjBlYjkwY2IzZjY1NGZmYmE",
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
    image: "data:image/webp;base64,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",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.3iaxnfwmFR_FoxzraqyK6QAAAA?rs=1&pid=ImgDetMain&o=7&rm=30",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.-lMJ6fi_y0z_jrA5ir_H9QHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.ajBYYImpl0u0idEfurGFsQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.uz562D97Eup_F6CyR2af8gHaJB?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse4.mm.bing.net/th/id/OIP.iGN7v3Ny8xXUXihGuJ3DvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "data:image/webp;base64,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",
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