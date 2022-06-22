export type Object<T> = { [key: string | number | symbol]: T };

export type Image = {
  src: string;
  alt: string;
};

export type User = {
  id: number;
  name: string;
}