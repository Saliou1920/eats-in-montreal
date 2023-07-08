import Restaurant from '@/models/restaurant';

export const restaurantData: Restaurant[] = [
  {
    name: 'Restaurant 1',
    location: 'Toronto, Canada',
    address: '123 Main Street',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    cuisine: ['Italian', 'Mediterranean'],
    phone: '123-456-7890',
    website: 'http://www.restaurant1.com',
    rating: 4.5,
    reviews: [
      {
        author: 'John Doe',
        rating: 4,
        comment: 'Great food and service!',
      },
      {
        author: 'Jane Smith',
        rating: 5,
        comment: 'Highly recommended!',
      },
    ],
    images: [
      'http://www.restaurant1.com/image1.jpg',
      'http://www.restaurant1.com/image2.jpg',
    ],
    hours: {
      Monday: '9:00 AM - 10:00 PM',
      Tuesday: '9:00 AM - 10:00 PM',
      Wednesday: '9:00 AM - 10:00 PM',
      Thursday: '9:00 AM - 10:00 PM',
      Friday: '9:00 AM - 11:00 PM',
      Saturday: '11:00 AM - 11:00 PM',
      Sunday: '11:00 AM - 10:00 PM',
    },
  },
  {
    name: 'Restaurant 2',
    location: 'Toronto, Canada',
    address: '456 Elm Street',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    cuisine: ['Japanese', 'Sushi'],
    phone: '987-654-3210',
    website: 'http://www.restaurant2.com',
    rating: 4.2,
    reviews: [
      {
        author: 'Alex Johnson',
        rating: 4.5,
        comment: 'Fresh and delicious sushi!',
      },
      {
        author: 'Emily Davis',
        rating: 3.8,
        comment: 'Decent food but slow service.',
      },
    ],
    images: [
      'http://www.restaurant2.com/image1.jpg',
      'http://www.restaurant2.com/image2.jpg',
    ],
    hours: {
      Monday: '11:30 AM - 10:00 PM',
      Tuesday: '11:30 AM - 10:00 PM',
      Wednesday: '11:30 AM - 10:00 PM',
      Thursday: '11:30 AM - 10:00 PM',
      Friday: '11:30 AM - 11:00 PM',
      Saturday: '12:00 PM - 11:00 PM',
      Sunday: '12:00 PM - 9:30 PM',
    },
  },
  {
    name: 'Restaurant 3',
    location: 'Toronto, Canada',
    address: '456 Elm Street',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    cuisine: ['Japanese', 'Sushi'],
    phone: '987-654-3210',
    website: 'http://www.restaurant2.com',
    rating: 4.2,
    reviews: [
      {
        author: 'Alex Johnson',
        rating: 4.5,
        comment: 'Fresh and delicious sushi!',
      },
      {
        author: 'Emily Davis',
        rating: 3.8,
        comment: 'Decent food but slow service.',
      },
    ],
    images: [
      'http://www.restaurant2.com/image1.jpg',
      'http://www.restaurant2.com/image2.jpg',
    ],
    hours: {
      Monday: '11:30 AM - 10:00 PM',
      Tuesday: '11:30 AM - 10:00 PM',
      Wednesday: '11:30 AM - 10:00 PM',
      Thursday: '11:30 AM - 10:00 PM',
      Friday: '11:30 AM - 11:00 PM',
      Saturday: '12:00 PM - 11:00 PM',
      Sunday: '12:00 PM - 9:30 PM',
    },
  },
];
