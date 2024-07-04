import React, { useContext } from 'react';
import './maincontainer.css';
import { FilterContext } from '../context/FilterContext';

const FilterButton = ({ onApply }) => {
  const {
    addedBy, setAddedBy,
    itemAvailability, setItemAvailability,
    maxDistance, setMaxdistance,
    sortBy, setSortBy,
  } = useContext(FilterContext);

  const onApplyHandleClick = (event) => {
    event.preventDefault();
    onApply();
  };

  return (
    <div className="filter-container">
      <h2 className='heading'>Food Filter</h2>
      <form>
        <h3>Item added by</h3>
        <div className='filtered-option'>
          <div className={`filtered-item ${addedBy === '' ? 'selected' : ''}`} onClick={() => setAddedBy('')}>All</div>
          <div className={`filtered-item ${addedBy === 'Personal' ? 'selected' : ''}`} onClick={() => setAddedBy('Personal')}>Personal</div>
          <div className={`filtered-item ${addedBy === 'Volunteer' ? 'selected' : ''}`} onClick={() => setAddedBy('Volunteer')}>Volunteer</div>
        </div>

        <h3>Item Availability</h3>
        <div className='filtered-option'>
          <div className={`filtered-item ${itemAvailability === '' ? 'selected' : ''}`} onClick={() => setItemAvailability('')}>All</div>
          <div className={`filtered-item ${itemAvailability === 'Available' ? 'selected' : ''}`} onClick={() => setItemAvailability('Available')}>Available only</div>
          <div className={`filtered-item ${itemAvailability === 'Sold Out' ? 'selected' : ''}`} onClick={() => setItemAvailability('Sold Out')}>Just gone</div>
        </div>

        <h3>Maximum distance</h3>
        <div className='filtered-option'>
          <div className={`filtered-item ${maxDistance === '0.5 km' ? 'selected' : ''}`} onClick={() => setMaxdistance('0.5 km')}>0.5 km</div>
          <div className={`filtered-item ${maxDistance === '1 km' ? 'selected' : ''}`} onClick={() => setMaxdistance('1 km')}>1 km</div>
          <div className={`filtered-item ${maxDistance === '2 km' ? 'selected' : ''}`} onClick={() => setMaxdistance('2 km')}>2 km</div>
          <div className={`filtered-item ${maxDistance === '5 km' ? 'selected' : ''}`} onClick={() => setMaxdistance('5 km')}>5 km</div>
        </div>

        <h3>Sort by</h3>
        <div className='filtered-option'>
          <div className={`filtered-item ${sortBy === 'Newest' ? 'selected' : ''}`} onClick={() => setSortBy('Newest')}>Newest</div>
          <div className={`filtered-item ${sortBy === 'Closest' ? 'selected' : ''}`} onClick={() => setSortBy('Closest')}>Closest</div>
        </div>

        <button className='apply-button' onClick={onApplyHandleClick}>close</button>
      </form>
    </div>
  );
};

export default FilterButton;