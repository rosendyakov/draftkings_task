import { Category } from "../types/types";

enum CATEGORY_ENUM {
  All = "all",
  People = "people",
  Planets = "planets",
  Vehicles = "vehicles",
  Starships = "starships",
}

const CATEGORIES: Category[] = [
  { id: 1, label: "All", value: CATEGORY_ENUM.All },
  { id: 2, label: "People", value: CATEGORY_ENUM.People },
  { id: 3, label: "Planets", value: CATEGORY_ENUM.Planets },
  { id: 4, label: "Vehicles", value: CATEGORY_ENUM.Vehicles },
  { id: 5, label: "Starships", value: CATEGORY_ENUM.Starships },
];

const BASE_URL = "https://swapi.dev/api/"

const ENDPOINTS = ["people", "planets", "vehicles", "starships"]

const QUERY_STALE_TIME = 1000 * 60 * 5 // 5 mins

const PERSON_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Birth Year', key: 'birth_year' },
  // { label: 'Species', key: 'species' },
  // { label: 'Starships', key: 'starships' },
  // { label: 'Vehicles', key: 'vehicles' },
];

const PLANET_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Climate', key: 'climate' },
  { label: 'Diameter', key: 'diameter' },
  { label: 'Gravity', key: 'gravity' },
  // { label: 'Residents', key: 'residents' },
];

const VEHICLE_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Model', key: 'model' },
  { label: 'Manufacturer', key: 'manufacturer' },
  { label: 'Cost in Credits', key: 'cost_in_credits' },
  { label: 'Length', key: 'length' },
];

const STARSHIP_COLUMNS = [
  { label: 'Name', key: 'name' },
  { label: 'Model', key: 'model' },
  { label: 'Manufacturer', key: 'manufacturer' },
  { label: 'Cost in Credits', key: 'cost_in_credits' },
  { label: 'Length', key: 'length' },
];

export { BASE_URL, ENDPOINTS, CATEGORIES, CATEGORY_ENUM, QUERY_STALE_TIME, PERSON_COLUMNS, PLANET_COLUMNS, VEHICLE_COLUMNS, STARSHIP_COLUMNS}