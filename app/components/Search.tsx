"use client";

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoUrl, geoApiOptions } from "../services/api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue: any) => {
    try {
      const response = await fetch(
        `${geoUrl}/cities?minPopulation=200000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      const cities = {
        options: result?.data.map((city: any) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };

      console.log(cities);

      return cities;
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
