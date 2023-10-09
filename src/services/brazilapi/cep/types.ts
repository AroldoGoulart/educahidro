export interface CepType {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: Location;
}

interface Location {
  type: string;
  coordinates: Coordinates;
}

interface Coordinates {
  longitude: string;
  latitude: string;
}
