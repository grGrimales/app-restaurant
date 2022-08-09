export const ORDERS = [
  {
    id: "1",
    date: Date.now(),
    total: 7800,
    items: [
      {
        id: 3,
        category: "panes",
        name: "Pan Hamburguesa",
        description: "Textura suave,decorado con semillas de sésano tostadas",
        weight: "520gr",
        price: 500,
      },
    ],
  },
  {
    id: 2,
    date: Date.now(),
    total: 6600,
    items: [
      {
        id: 4,
        category: "pastelitos",
        name: "Pastelitos con queso",
        description:
          "10 Pastelitos rellenos de queso listo para hornear o freir ",
        weight: "900gr",
        price: 3300,
      },
      {
        id: 5,
        category: "pastelitos",
        name: "Pastelitos con jamón y queso",
        description:
          "10 Pastelitos rellenos con jamón y queso listo para hornear o freir ",
        weight: "900gr",
        price: 3300,
      },
    ],
  },
];
