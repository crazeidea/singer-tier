export type Singer = {
  name: string;
  image: string;
  songs: Song[];
};

export type Song = {
  name: string;
  videoId?: string;
};
