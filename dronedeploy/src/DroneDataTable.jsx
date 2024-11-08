
import PropTypes from 'prop-types';
import DroneData from './src/DroneData';

const DroneDataTable = ({ data }) => (
  <div>
    {data.map(({ image_id, latitude, longitude }) => (
      <div key={image_id}>
        <p>Image ID: {image_id}</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
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

const App = () => <DroneDataTable data={DroneData} />;

export default App;

