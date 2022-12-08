const Images = [
  {image: require('../icons/beer.png')},
  {image: require('../icons/burger.png')},
  {image: require('../icons/coffee.png')},
  {image: require('../icons/nigiri.png')},
];

const CardImages = [
  {image: require('../Images/cardPub.jpg')},
  {image: require('../Images/cardBurger.jpg')},
  {image: require('../Images/cardCoffee.jpg')},
  {image: require('../Images/cardSushi.jpg')},
];

export const markers = [
  {
    coordinate: {
      latitude: 49.23819,
      longitude: -123.04943,
    },
    title: 'Lokál Hamburk',
    description: 'This is the best food place',
    image: Images[0].image,
    cardImage: CardImages[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: 49.2481923,
      longitude: -123.0694,
    },
    title: 'Boorgir',
    description: 'This is the second best food place',
    image: Images[1].image,
    cardImage: CardImages[1].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 49.21819,
      longitude: -123.03943,
    },
    title: 'Kaffee',
    description: 'This is the third best food place',
    image: Images[2].image,
    cardImage: CardImages[2].image,
    rating: 3,
    reviews: 490,
  },
  {
    coordinate: {
      latitude: 49.18819,
      longitude: -123.04543,
    },
    title: 'Sooshee',
    description: 'This is the fourth best food place',
    image: Images[3].image,
    cardImage: CardImages[3].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 49.22819,
      longitude: -123.00943,
    },
    title: 'Erdbeeren',
    description: 'This is the fifth best food place',
    image: Images[0].image,
    cardImage: CardImages[0].image,
    rating: 4,
    reviews: 178,
  },
  {
    coordinate: {
      latitude: 49.21819,
      longitude: -123.06643,
    },
    title: 'La Fantastica',
    description: 'This is the fourth best food place',
    image: Images[1].image,
    cardImage: CardImages[1].image,
    rating: 4,
    reviews: 48,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export const initialRegion = {
  latitude: 49.23819,
  longitude: -123.04943,
  latitudeDelta: 0.0,
  longitudeDelta: 0.096,
};
