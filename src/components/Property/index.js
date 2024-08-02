import React, { Component } from 'react';
import Header from '../Header';
import PropertyList from '../PropertyList';
import './index.css';

class Property extends Component {
  state = {
    properties: [],
    filterByLocation: '',
    filterByPrice: '',
    filterByBedrooms: ''
  };

  componentDidMount() {
    this.getPropertiesList();
  }

  getPropertiesList = () => {
    fetch('/properties.json')
      .then(response => response.json())
      .then(data => this.setState({ properties: data }))
      .catch(error => console.error('Error fetching properties:', error));
  };

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePriceFilterChange = (priceRange) => {
    this.setState({ filterByPrice: priceRange });
  };

  filterProperties = () => {
    const { properties, filterByLocation, filterByPrice, filterByBedrooms } = this.state;
    return properties.filter(property => {
      const matchesLocation = filterByLocation ? property.location.toLowerCase().includes(filterByLocation.toLowerCase()) : true;
      const matchesPrice = filterByPrice === 'below10000' ? parseInt(property.price) <= 10000 :
                           filterByPrice === 'below20000' ? parseInt(property.price) <= 20000 :
                           filterByPrice === 'above20000' ? parseInt(property.price) > 20000 : true;
      const matchesBedrooms = filterByBedrooms ? parseInt(property.numberOfBedrooms) === parseInt(filterByBedrooms) : true;
      return matchesLocation && matchesPrice && matchesBedrooms;
    });
  };

  render() {
    const { filterByLocation, filterByPrice, filterByBedrooms } = this.state;
    const filteredProperties = this.filterProperties();

    return (
      <>
        <Header />
        <div className="filter-container">
          <div className='location-container'>
          <label className='label-text' htmlFor='location'>Location</label>
          <select
            name="filterByLocation"
            value={filterByLocation}
            onChange={this.handleFilterChange}
            id="location"
          >
            <option value="">All Location</option>
            <option value="coimbatore">Coimbatore</option>
            <option value="goa">Goa</option>
            <option value="chennai">Chennai</option>
            <option value="ooty">Ooty</option>
            <option value="kerala">Kerala</option>
          </select>
          </div>
          <div className="price-radios">
            <label className='price-radio'>
              <input
                type="radio"
                name="filterByPrice"
                value="below10000"
                checked={filterByPrice === 'below10000'}
                onChange={this.handleFilterChange}
              />
              Below Rs 10,000
            </label>
            <label className='price-radio'>
              <input
                type="radio"
                name="filterByPrice"
                value="below20000"
                checked={filterByPrice === 'below20000'}
                onChange={this.handleFilterChange}
              />
              Below Rs 20,000
            </label>
            <label className='price-radio'>
              <input
                type="radio"
                name="filterByPrice"
                value="above20000"
                checked={filterByPrice === 'above20000'}
                onChange={this.handleFilterChange}
              />
              Above Rs 20,000
            </label>
            
          </div>
          <input
            type="text"
            name="filterByBedrooms"
            placeholder="No of bedrooms"
            className='input-bedroom'
            value={filterByBedrooms}
            onChange={this.handleFilterChange}
          />
        </div>
        <div className='property-container'>
          {filteredProperties.length === 0 ? <h1 className='no-result'>No result Found</h1> : <ul className="properties-list">
            {filteredProperties.map(property => (
              <PropertyList key={property.id} {...property} />
            ))}
          </ul> }
        </div>
      </>
    );
  }
}

export default Property;