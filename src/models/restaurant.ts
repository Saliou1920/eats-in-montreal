interface Review {
  author: string;
  rating: number;
  comment: string;
}

interface Restaurant {
  name: string;
  location: string;
  description: string;
  address: string;
  cuisine: string[];
  phone: string;
  website: string;
  rating: number;
  reviews: Review[];
  images: string[];
  hours: { [day: string]: string };
}

export default Restaurant;
