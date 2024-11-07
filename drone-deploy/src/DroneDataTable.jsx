import PropTypes from "prop-types";

const DroneDataTable = ({ data }) => (
  <div className="drone-table-container">
    <table className="drone-table">
      <thead>
        <tr>
          <th>Image ID</th>
          <th>Timestamp</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Altitude (m)</th>
          <th>Battery (%)</th>
          <th>Tags</th>
          <th>File Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            image_id,
            timestamp,
            latitude,
            longitude,
            altitude_m,
            battery_level_pct,
            image_tags,
            file_name,
          }) => (
            <tr key={image_id}>
              <td>{image_id}</td>
              <td>{timestamp}</td>
              <td>{latitude}</td>
              <td>{longitude}</td>
              <td>{altitude_m}</td>
              <td>{battery_level_pct}</td>
              <td>{image_tags.join(", ")}</td>
              <td>{file_name}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
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
export default DroneDataTable;
