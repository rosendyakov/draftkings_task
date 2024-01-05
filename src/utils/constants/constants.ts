import { Category } from "../types/types";

enum CategoryEnum {
  All = "all",
  People = "people",
  Planets = "planets",
  Vehicles = "vehicles",
  Starships = "starships",
}

const categories: Category[] = [
  { id: 1, label: "All", value: CategoryEnum.All },
  { id: 2, label: "People", value: CategoryEnum.People },
  { id: 3, label: "Planets", value: CategoryEnum.Planets },
  { id: 4, label: "Vehicles", value: CategoryEnum.Vehicles },
  { id: 5, label: "Starships", value: CategoryEnum.Starships },
];

const BASE_URL = "https://swapi.dev/api/"

const ENDPOINTS = ["people", "planets", "vehicles", "starships"]

export { BASE_URL, ENDPOINTS, categories, CategoryEnum}