export interface Submission {
  username: string;
  date: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const submissions: Submission[] = [];
