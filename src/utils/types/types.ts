
type Category = {
  id: number;
  label: string;
  value: string;
};

type Person = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

type Planet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

type Vehicle = {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: never[]; // no data on the API
  films: string[];
  url: string;
  vehicle_class: string;
};

type Starship = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: never[]; // no data on the API
  starship_class: string;
  url: string;
};

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

interface PeopleApiResponse extends ApiResponse {
  results: Person[];
}

interface PlanetsApiResponse extends ApiResponse {
  results: Planet[];
}

interface VehiclesApiResponse extends ApiResponse {
  results: Vehicle[];
}

interface StarshipsApiResponse extends ApiResponse {
  results: Starship[];
}


type CategoryApiResponse = PeopleApiResponse | PlanetsApiResponse | VehiclesApiResponse | StarshipsApiResponse;

type AllApiResponses = PeopleApiResponse | PlanetsApiResponse | VehiclesApiResponse | StarshipsApiResponse | CategoryApiResponse[];


export type {
  Category,
  ApiResponse,
  Person,
  Planet,
  Vehicle,
  Starship,
  PeopleApiResponse,
  PlanetsApiResponse,
  VehiclesApiResponse,
  StarshipsApiResponse,
  CategoryApiResponse,
  AllApiResponses
} 