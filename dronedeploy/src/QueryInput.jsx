import './QueryInput.css';
import PropTypes from 'prop-types';

const QueryInput = ({ query, setQuery, handleQuerySubmit }) => {
  return (
    <div className="query-container">
      <input
        type="text"
        placeholder=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Submit</button>
    </div>
  );
};


QueryInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  handleQuerySubmit: PropTypes.func.isRequired,
};

export default QueryInput;