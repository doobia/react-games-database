type Platform = {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
};

type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type ESRBRating = {
  id: number;
  slug: string;
  name: string;
};

export type GameType = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {
    [key: string]: Rating;
  };
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {
    [key: string]: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: ESRBRating | null;
  platforms: Platform[];
};
