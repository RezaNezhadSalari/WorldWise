import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Massage from "./Message";
import { useCities } from "../Contexts/CitiesContext";
// import PropTypes from "prop-types";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Massage massage="Add your first city by clicking on acity on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
// CityList.propTypes = {
//   cities: PropTypes.arrayOf(PropTypes.object),
//   isLoading: PropTypes.bool.isRequired,
// };

export default CityList;
