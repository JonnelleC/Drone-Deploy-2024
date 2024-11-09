
import PropTypes from 'prop-types';
<<<<<<< HEAD

=======
import DroneData from './src/DroneData';
>>>>>>> ba4bd7e4a6c0f7d8c54dc83e246bf76d99771b6d

const DroneDataTable = ({ data }) => (
  <div>
    {data.map(({ image_id, latitude, longitude, altitude }) => (
      <div key={image_id}>
        <p>Image ID: {image_id}</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Altitude:{altitude}</p>
      </div>
    ))}
  </div>
);

DroneDataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image_id: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
      altitude_m: PropTypes.number.isRequired,
      battery_level_pct: PropTypes.number.isRequired,
      image_tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      file_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

<<<<<<< HEAD


export default DroneDataTable;
=======
const App = () => <DroneDataTable data={DroneData} />;

export default App;
>>>>>>> ba4bd7e4a6c0f7d8c54dc83e246bf76d99771b6d

