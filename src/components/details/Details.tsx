import { Person, Planet, Starship, Vehicle } from "../../utils/types/types";
import { getUrlPathName } from "../../utils/utils";
import { CATEGORY_ENUM } from "../../utils/constants/constants";
import { PersonDetailsList } from "./detailsLists/PersonDetailsList";
import { PlanetDetailsList } from "./detailsLists/PlanetDetailsList";
import { VehicleDetailsList } from "./detailsLists/VehicleDetailsList";
import { StarshipDetailsList } from "./detailsLists/StarshipDetailsList";

type PersonDetailsProps = {
  item: Person | null;
};

type PlanetDetailsProps = {
  item: Planet | null;
};

type VehicleDetailsProps = {
  item: Vehicle | null;
};

type StarshipDetailsProps = {
  item: Starship | null;
};

export const Details = ({
  item,
}:
  | PersonDetailsProps
  | PlanetDetailsProps
  | VehicleDetailsProps
  | StarshipDetailsProps) => {
  const category = getUrlPathName(item?.url ?? "").split("/")[1];

  switch (category) {
    case CATEGORY_ENUM.People:
      return <PersonDetailsList item={item} />;
    case CATEGORY_ENUM.Planets:
      return <PlanetDetailsList item={item} />;
    case CATEGORY_ENUM.Vehicles:
      return <VehicleDetailsList item={item} />;
    case CATEGORY_ENUM.Starships:
      return <StarshipDetailsList item={item} />;
  }
};
