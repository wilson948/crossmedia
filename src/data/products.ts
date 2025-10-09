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
    image: "https://i.blogs.es/3b963e/carrots-1508847_1920/840_560.jpg",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.kxLJelopYuQZdFtsSYn_SQHaFy?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse1.mm.bing.net/th/id/OIP.7dPilp3SEx3KXXDD59W69AHaGL?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse4.mm.bing.net/th/id/OIP.TVeOkslkSXc0vA5rRqlumAFMC8?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://th.bing.com/th/id/OIP.uPsBXJm0NSLrXRUT0TalAgHaFv?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://img.freepik.com/fotos-premium/fresas-organicas-frescas_863013-115754.jpg",
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
    image: "https://tse3.mm.bing.net/th/id/OIP.KvpWji6WMcV3DwF1Zq274QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse4.mm.bing.net/th/id/OIP.lBuFyfCSpZH6afw5rSztCAHaFx?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse2.mm.bing.net/th/id/OIP.yW5vs99_OzyXbCwKeLDO8gHaFW?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse2.mm.bing.net/th/id/OIP.wqlj5nAn9Qto82k017BqwAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://img.freepik.com/fotos-premium/cultivo-pepinos-organicos_641010-10848.jpg",
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
    image: "https://th.bing.com/th/id/OIP.5oY0wQgv2xo1Uf4estk5sAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://tse4.mm.bing.net/th/id/OIP.ZdV2eESDGivcsZ6Sb-JRuQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    price: 132.17,
    image: "https://tse2.mm.bing.net/th/id/OIP.FcrgXkYLCrkSeBGm419WKQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://walmarthn.vtexassets.com/arquivos/ids/295951/Chuleta-Cerdo-Instituc-Prog-Congelada-Paquete-Und-Chuleta-Cerdo-Instituc-Prog-Cong-Paq-Und-1-19878.jpg?v=638207017803600000",
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
    image: "https://i.blogs.es/04895d/bacalao_salado/1024_2000.jpg",
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
    image: "https://d50xhnwqnrbqk.cloudfront.net/images/products/large/COSTILLA-DE-RES_2.png",
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
    image: "https://th.bing.com/th/id/OIP.3iaxnfwmFR_FoxzraqyK6QAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://th.bing.com/th/id/OIP.D-FNl52LzqkWsMzHh6EF1gHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://th.bing.com/th/id/R.c28e8dcc2f6e1f16ffcb717187f89c00?rik=TkybX5HkA2RDDg&riu=http%3a%2f%2fwww.quesosnavarro.com%2fassets%2fimg%2fqueso-navarro-cheddar-a%c3%b1ejo.png&ehk=EROaM14YsQdPi0X99Z65Xqds8Csv6O9fDZ1dki2ddRg%3d&risl=&pid=ImgRaw&r=0",
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
    image: "https://tse3.mm.bing.net/th/id/OIP.8aROfS6E1FG0EX55OoCeBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://montefino.pe/wp-content/uploads/2023/08/mantequilla-1.png",
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
    image: "https://tiemporeal.periodismoudec.cl/wp-content/uploads/2016/11/pan-integral-1132x509.jpg",
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
    image: "https://tse3.mm.bing.net/th/id/OIP.g1RQBKSF2t_VVIZb35e0ZgHaEY?rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://cocina.guru/wp-content/uploads/2023/03/muffins-de-arandanos.jpg",
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
    image: "https://img2.rtve.es/i/?w=1600&i=1676541025640.jpg",
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
    image: "https://canalcocina.es/medias/images/0001083606QuiqueAlCuboT02E021HDonuts-de-galletasCLEAN01.jpg",
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
    image: "https://th.bing.com/th/id/R.d2605ceed7e311ac810a628b733e11c6?rik=ftT%2b6nem2xWnLg&pid=ImgRaw&r=0",
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
    image: "data:image/webp;base64,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",
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