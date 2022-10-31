import React, { useState } from "react";
import { title } from "./config";
import { countries } from "countries-list";

export default () => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchField(e.currentTarget.value);
  };
  const filteredCountries = Object.entries(countries).filter(
    country => {
      return (
        country[1]
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        country[1]
        .capital
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  return(
    <>
    <h1>{title}</h1>
    <div className="input-group rounded w-25">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleChange}
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </div>

    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Capital</th>
          <th scope="col">Display Flag</th>
          <th scope="col">link to wiki page</th>
        </tr>
      </thead>
      <tbody>
        {(searchField ? filteredCountries : Object.entries(countries)).map((country) => (
          <tr key={country[1].name}>
            <td>{country[1].name}</td>
            <td>{country[1].capital || "-"}</td>
            <td>{country[1].emoji}</td>
            <td>
              <a
                target="_blank"
                href={`https://en.wikipedia.org/wiki/${country[1].name}`}
              >
                wikilink
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
};
