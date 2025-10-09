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
    image: "https://tse4.mm.bing.net/th/id/OIP.VuuoGsLF0T6jXTkglk8HpgHaE8?w=1350&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse1.explicit.bing.net/th/id/OIP.HKYmhtmRFzEOcxWZ6QiMRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse2.mm.bing.net/th/id/OIP.Adz16ywrOaGmg6W2O4lVZQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "data:image/webp;base64,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",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.ly1RXILlGXwWCeSHZIsWMQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    rating: 4.7,
    discount: 25
  },
  {
    <div className="p-4 bg-white rounded-2xl shadow-md">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover rounded-xl"
  />
  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
  <p className="text-gray-600">{product.description}</p>
</div>
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