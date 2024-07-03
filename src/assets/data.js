export const categories = [
  'Fiction',
  'Mystery',
  'Thriller',
  'Non-fiction',
  'Science Fiction',
  'Romance',
  'Fantasy',
  'Biography',
];

const descriptionParts = [
  'An intriguing tale of adventure and discovery, following the journey of a brave explorer as they uncover hidden secrets and face numerous challenges. Along the way, they encounter mysterious creatures and unravel the mysteries of ancient civilizations, making for an unforgettable adventure that will captivate readers from start to finish.',
  'A gripping mystery set in the remote woods, where a group of friends embarks on a camping trip only to find themselves caught up in a web of secrets and danger. As strange events unfold and tensions rise, they must work together to solve the mystery before it’s too late. With unexpected twists and turns, this story will keep you on the edge of your seat.',
  'A thrilling story of survival and truth, centering on a young woman who becomes the sole witness to a brutal crime. As she fights to stay one step ahead of the relentless pursuer, she uncovers a conspiracy that reaches far beyond her wildest nightmares. With time running out, she must rely on her wits and courage to expose the truth and stay alive.',
  'An enlightening book on self-discovery that guides readers through a transformative journey of personal growth and spiritual awakening. Drawing on ancient wisdom and modern insights, it offers practical advice and exercises to help individuals tap into their true potential, overcome obstacles, and live a more fulfilling and purposeful life.',
  'A thrilling journey through the cosmos, where humanity has expanded its reach to distant planets and encountered alien civilizations. Amidst interstellar conflicts and ancient mysteries, a young pilot finds himself at the center of a struggle that will determine the fate of the galaxy. With breathtaking action and deep exploration of space, this story is a must-read for sci-fi enthusiasts.',
  'A heartwarming tale of love and redemption set against the backdrop of a charming seaside town. The story follows the lives of its residents as they navigate the complexities of relationships, family dynamics, and personal struggles. With touching moments, heartfelt dialogue, and a touch of humor, this book is a testament to the enduring power of love.',
  'An epic adventure through a world of magic, where a young hero must embark on a perilous quest to save their kingdom from dark forces. Along the way, they encounter mythical creatures, powerful allies, and formidable enemies. With rich world-building and captivating storytelling, this fantasy novel is sure to enchant readers of all ages.',
  'A poignant biography of a beloved public figure, offering a detailed account of their life from humble beginnings to monumental achievements. Through personal anecdotes, rare photographs, and insightful reflections, this book celebrates their legacy and provides inspiration to those who seek to follow in their footsteps. It’s a heartfelt tribute to a life well-lived.',
];

const prices = [10.99, 12.99, 8.99, 14.99, 9.99, 11.99, 13.99, 7.99];

const images = [
  require('./b1.jpg'),
  require('./b2.jpg'),
  require('./b3.jpg'),
  require('./b4.jpg'),
  require('./b5.jpg'),
  require('./b6.webp'),
  require('./b7.webp'),
  require('./b8.webp'),
];

const titleWords1 = [
  'The',
  'A',
  'An',
  'Journey',
  'Secrets',
  'Mystery',
  'Magic',
];
const titleWords2 = [
  'Lost',
  'Enchanted',
  'Silent',
  'Forgotten',
  'Hidden',
  'Forbidden',
  'Dark',
];
const titleWords3 = [
  'City',
  'Forest',
  'Witness',
  'Kingdom',
  'Galaxy',
  'Dreams',
  'World',
];

const authorFirstNames = [
  'John',
  'Emily',
  'Daniel',
  'Sophia',
  'Michael',
  'Emma',
  'William',
  'Olivia',
];
const authorLastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Lee',
  'Williams',
  'Davis',
  'Clark',
  'Robinson',
];

const generateRandomTitle = () => {
  const word1 = titleWords1[Math.floor(Math.random() * titleWords1.length)];
  const word2 = titleWords2[Math.floor(Math.random() * titleWords2.length)];
  const word3 = titleWords3[Math.floor(Math.random() * titleWords3.length)];
  return `${word1} ${word2} ${word3}`;
};

const generateRandomAuthor = () => {
  const firstName =
    authorFirstNames[Math.floor(Math.random() * authorFirstNames.length)];
  const lastName =
    authorLastNames[Math.floor(Math.random() * authorLastNames.length)];
  return `${firstName} ${lastName}`;
};

const generateBooks = num => {
  const data = [];
  for (let i = 1; i <= num; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const author = generateRandomAuthor();
    const title = generateRandomTitle();
    const description =
      descriptionParts[Math.floor(Math.random() * descriptionParts.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const id = i;
    const image = images[Math.floor(Math.random() * images.length)];
    const bookImages = [image, image, image];

    data.push({
      id,
      name: title,
      author,
      price,
      category,
      description,
      image,
      images: bookImages,
    });
  }
  return data;
};

const data = generateBooks(500);

export default data;
