// Address Geo
interface Geo {
  lat: String;
  lng: String;
}
interface Address {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: Geo;
}

//Company
interface Company {
  name: String;
  catchPhrase: String;
  bs: String;
}

//User Address Company
export interface User {
  id: Number | null | string;
  name: String;
  username: String;
  email: String;
  address?: Address;
  phone: String;
  website?: String;
  company?: Company;
}
