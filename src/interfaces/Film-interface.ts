export interface FilmItem {
  id: number;
  title: string;
  path: string;
  description: string;
  time: string;
  price: number;
  link: string;
  linkIframe: string;
}

export interface BasketItem {
  imagePath: string;
  countOfTickets: number;
  time: string;
  price: number;
}
