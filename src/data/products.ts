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
    image: "https://th.bing.com/th/id/R.ad57402fb75707b4bbcdee79f7f9c42c?rik=V%2fpTO7v14vAC6g&riu=http%3a%2f%2fdismar.mx%2ffichas%2fQuesos-Gourmet%2fjpg%2fFicha_Tecnica_Mozarella_226g_GALBANI.jpg&ehk=8KN2Yz6N%2fQqHwsJGCk97oufK%2bPeFzjDA%2fXnHuJV5LEE%3d&risl=&pid=ImgRaw&r=0",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.qm7sFF9xPmzZsol6NhLtzQHaDV?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://th.bing.com/th/id/OIP.g1RQBKSF2t_VVIZb35e0ZgHaEY?w=317&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
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
    image: "data:image/webp;base64,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",
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