export interface GeoData {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserResponse {
  id: number | null;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersData {
  data: UserResponse[];
}

export interface UsersSlice {
  list: {
    getUsers: {
      users: UserResponse[];
      loading: boolean;
      error?: string;
    };
    getUsersById: {
      userById: UserResponse | null;
      loading: boolean;
      error?: string;
    };
  };
}
