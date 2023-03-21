export interface DeveloperResultInterface {
  count: number;
  next: string;
  previous: string;
  results: DeveloperInterface[];
}

export interface DeveloperInterface {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
