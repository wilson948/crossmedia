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
    image: "https://www.cerrodelosmedanos.com.ar/wp-content/uploads/2020/07/3107201-1030x1030.jpg",
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