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

export { BASE_URL, ENDPOINTS, CATEGORIES, CATEGORY_ENUM, QUERY_STALE_TIME}