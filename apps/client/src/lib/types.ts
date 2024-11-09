export type Option = {
  id: number;
  name: string;
  votes: number;
};

export type Poll = {
  id: number;
  name: string;
  options: Option[];
};
