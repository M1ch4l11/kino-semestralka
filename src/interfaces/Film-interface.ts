export interface Film {
  title: String;
  img: String;
  description: String;
  price: Number;
}

export interface FilmItem {
  id: number;
  title: string;
  path: string;
  description: string;
  time: string;
  price: number;
  link: string;
}

export interface BasketItem {
  imagePath: string;
  countOfTickets: number;
  time: string;
  price: number;
}
