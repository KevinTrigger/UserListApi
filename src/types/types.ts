export interface People {
  list: Person[],
}

export type PeopleProps = {
  list: Person[];
  loading: boolean;
  error: string | null;
}

export interface Person {
  phone: string,
  dob: Dob,
  email: string,
  gender: string,
  location: Location,
  name: Name,
  id: Id,
  picture: Picture,
  isActive: boolean
}

export interface Dob {
  age: number,
  date: string,
}

export interface Location {
  city: string,
  country: string,
  state: string
}

export interface Name {
  title: string,
  first: string,
  last: string
}

export interface Picture {
  large: string
}

export interface Id {
  value: string
}