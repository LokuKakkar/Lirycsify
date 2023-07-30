import React from 'react'

export default function SearchBar({name,onChange,onSubmit}) {
  return (
    <div className="form">
        <form className="d-flex" role="search" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={name}
            onChange={onChange}
          />
          <button
            className="btn btn-outline-dark text-white bg-success"
            type="submit"

          >
            Search
          </button>
        </form>

      </div>
  )
}
