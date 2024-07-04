import React, { useContext, useState } from 'react';
import './maincontainer.css';
import FilterButton from './FilterButton';
import { FoNoCard } from '../../assets/FoNoCard';
import cardData from '../data/cardData';
import { FilterContext } from '../context/FilterContext';

export const MainContainer = ({ search }) => {
  const [showPopupFilter, setShowPopupFilter] = useState(false);
  const [food, setFood] = useState('Food');
  const {
    addedBy,
    itemAvailability,
    maxDistance,
    sortBy
  } = useContext(FilterContext);

  function handleClick() {
    setShowPopupFilter(!showPopupFilter);
  }

  function handleOnApply() {
    setShowPopupFilter(!showPopupFilter);
  }

  const filterData = () => {
    let filtered = cardData;

    
    if (food === 'Food') {
      filtered = filtered.filter(item => item.foodOrNoFood === 'Food');
    } else if (food === 'No Food') {
      filtered = filtered.filter(item => item.foodOrNoFood !== 'Food');
    }

   
    if (typeof search === 'string' && search.trim().length > 0) {
      const query = search.toLowerCase();
      filtered = filtered.filter(card => (
        card.itemName.toLowerCase().includes(query) ||
        card.location.toLowerCase().includes(query) ||
        card.freeOrBorrowOrWanted.toLowerCase().includes(query) ||
        card.foodOrNoFood.toLowerCase().includes(query) ||
        card.availability.toLowerCase().includes(query) ||
        card.addedBy.toLowerCase().includes(query)
      ));
    }

    // Apply addedBy filter
    if (addedBy) {
      filtered = filtered.filter(item => item.addedBy === addedBy);
    }

    // Apply itemAvailability filter
    if (itemAvailability) {
      filtered = filtered.filter(item => item.availability === itemAvailability);
    }

    return filtered;
  }

  const filteredData = filterData();

  return (
    <div className='MainContainer'>
      <div className='first-line'>
        <div className='foo-nofoo'>
          <button className={food === 'Food' ? 'border' : ''} onClick={() => setFood('Food')}>
            Food
          </button>
          <button className={food === 'No Food' ? 'border' : ''} onClick={() => setFood('No Food')}>
            Non Food
          </button>
        </div>
        <button className='filter-button' onClick={handleClick}>
          <i className="fa-solid fa-filter"></i>
        </button>
      </div>
      <h1>Items Listed: {filteredData.length}</h1>
      {showPopupFilter && <FilterButton onApply={handleOnApply} />}
      <div className='card-container'>
        {filteredData.map((value, id) => (
          <FoNoCard content={value} key={id} />
        ))}
      </div>
    </div>
  );
}
