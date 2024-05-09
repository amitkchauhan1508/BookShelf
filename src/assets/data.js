const data = [
  {
    id: 1,
    name: 'The Lost City',
    author: 'John Smith',
    price: 10.99,
    category: 'Fiction',
    description:
      'The Lost City is an intriguing tale of adventure and discovery, following the journey of a young explorer who stumbles upon a hidden civilization deep in the Amazon rainforest. As he uncovers the secrets of this ancient city, he must navigate treacherous traps and face formidable adversaries to uncover the truth about its mysterious past.',
    image: require('./b1.jpg'),
    images: [require('./b1.jpg'), require('./b1.jpg'), require('./b1.jpg')],
  },
  {
    id: 2,
    name: 'Secrets of the Forest',
    author: 'Emily Johnson',
    price: 12.99,
    category: 'Mystery',
    description:
      "In Secrets of the Forest, a group of friends embarks on a camping trip to the remote woods in search of adventure. But as night falls, strange things begin to happen, and they soon find themselves caught up in a web of mystery and intrigue. With secrets lurking behind every tree, they must unravel the truth before it's too late.",
    image: require('./b2.jpg'),
    images: [require('./b2.jpg'), require('./b2.jpg'), require('./b2.jpg')],
  },
  {
    id: 3,
    name: 'The Silent Witness',
    author: 'Daniel Brown',
    price: 8.99,
    category: 'Thriller',
    description:
      'The Silent Witness is a gripping thriller that keeps you on the edge of your seat from start to finish. When a young woman witnesses a brutal murder, she becomes the target of a ruthless killer who will stop at nothing to silence her. As she races against time to uncover the truth, she must confront her own demons and unravel a conspiracy that goes deeper than she ever imagined.',
    image: require('./b3.jpg'),
    images: [require('./b3.jpg'), require('./b3.jpg'), require('./b3.jpg')],
  },
  {
    id: 4,
    name: 'Journey to Enlightenment',
    author: 'Sophia Lee',
    price: 14.99,
    category: 'Non-fiction',
    description:
      'Embark on a Journey to Enlightenment with this enlightening book that explores the depths of the human spirit and the path to self-discovery. Drawing on ancient wisdom and modern science, it offers practical insights and transformative practices to help you awaken to your true potential and live a life of purpose and fulfillment.',
    image: require('./b4.jpg'),
    images: [require('./b4.jpg'), require('./b4.jpg'), require('./b4.jpg')],
  },
  {
    id: 5,
    name: 'Beyond the Stars',
    author: 'Michael Williams',
    price: 9.99,
    category: 'Science Fiction',
    description:
      'Beyond the Stars takes you on a thrilling journey through the cosmos, where humanity has colonized distant planets and encountered alien civilizations. As tensions rise between rival factions and ancient secrets are unearthed, a young pilot finds himself at the center of a conflict that will determine the fate of the galaxy.',
    image: require('./b5.jpg'),
    images: [require('./b5.jpg'), require('./b5.jpg'), require('./b5.jpg')],
  },
  {
    id: 6,
    name: "Love's Journey",
    author: 'Emma Davis',
    price: 11.99,
    category: 'Romance',
    description:
      "Love's Journey is a heartwarming tale of love, loss, and redemption. Set against the backdrop of a quaint seaside town, it follows the intertwining lives of its residents as they navigate the ups and downs of relationships, family, and friendship. With humor, heart, and plenty of twists and turns, it's a story you won't soon forget.",
    image: require('./b6.webp'),
    images: [require('./b6.webp'), require('./b6.webp'), require('./b6.webp')],
  },
  {
    id: 7,
    name: 'The Magic Kingdom',
    author: 'William Clark',
    price: 13.99,
    category: 'Fantasy',
    description:
      "Step into The Magic Kingdom and embark on an epic adventure through a world of magic, mystery, and danger. From enchanted forests to ancient castles, you'll encounter mythical creatures, powerful sorcerers, and dark forces that threaten to plunge the realm into chaos. With courage and cunning, you must journey forth to save the kingdom and fulfill your destiny.",
    image: require('./b7.webp'),
    images: [require('./b7.webp'), require('./b7.webp'), require('./b7.webp')],
  },
  {
    id: 8,
    name: 'A Life Remembered',
    author: 'Olivia Robinson',
    price: 7.99,
    category: 'Biography',
    description:
      'A Life Remembered is a poignant biography that pays tribute to the remarkable life of a beloved public figure. From humble beginnings to historic achievements, it chronicles their triumphs and tribulations, offering insight into the person behind the legend. With heartfelt anecdotes and rare photographs, it celebrates their enduring legacy and inspires readers to follow their own path.',
    image: require('./b8.webp'),
    images: [require('./b8.webp'), require('./b8.webp'), require('./b8.webp')],
  },
];

export default data;
