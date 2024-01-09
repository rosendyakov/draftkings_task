
type Category = {
  id: number;
  label: string;
  value: string;
};

type Person = {
  category: 'person';
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
  category: 'planet';
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
  category: 'vehicle';
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
  category: 'starship';
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

type Film = {
  category: 'film';
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};

type Species = {
  category: 'species';
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
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
  Film,
  Species,
  PeopleApiResponse,
  PlanetsApiResponse,
  VehiclesApiResponse,
  StarshipsApiResponse,
  CategoryApiResponse,
  AllApiResponses
} 