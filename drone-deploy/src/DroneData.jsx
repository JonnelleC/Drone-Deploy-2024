import PropTypes from 'prop-types';

const DroneData = [
    {
      image_id: "001",
      timestamp: "2024-09-24 14:31:05",
      latitude: "44.4280° N",
      longitude: "110.5885° W",
      altitude_m: 50,
      battery_level_pct: 98,
      image_tags: ["Geyser", "Steam"],
      file_name: "YNP_001.jpg"
    },
    {
      image_id: "002",
      timestamp: "2024-09-24 14:33:22",
      latitude: "44.4279° N",
      longitude: "110.5890° W",
      altitude_m: 75,
      battery_level_pct: 95,
      image_tags: ["Forest", "River"],
      file_name: "YNP_002.jpg"
    },
    {
      image_id: "003",
      timestamp: "2024-09-24 14:36:47",
      latitude: "44.4275° N",
      longitude: "110.5888° W",
      altitude_m: 100,
      battery_level_pct: 91,
      image_tags: ["Wildlife", "Elk"],
      file_name: "YNP_003.jpg"
    },
    {
      image_id: "004",
      timestamp: "2024-09-24 14:40:13",
      latitude: "44.4277° N",
      longitude: "110.5882° W",
      altitude_m: 120,
      battery_level_pct: 88,
      image_tags: ["Mountain", "Sky"],
      file_name: "YNP_004.jpg"
    }
  ];

  DroneData.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        image_id: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
        altitude_m: PropTypes.number.isRequired,
        battery_level_pct: PropTypes.number.isRequired,
        image_tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
        file_name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default DroneData;