import "../filter.css"
import "../styles.css"

const Filter = ({ selectedColor, setSelectedColor, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  
  return (
    <div className="filter-container">
      <h2>Filter</h2>

      {/* Color Filter */}
      <div>
        <label>Select Color</label>
        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
  <option value="">All Colors</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
</select>

      </div>

      {/* Price Filter */}
      <div>
        <label>Price</label>
        <div className="price-filter">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
