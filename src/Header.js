import React from "react";

const Header = (props) => (
  <header className="app-header__title">
    <h1 className="app-header">Super Sticky Notes</h1>
    <aside className="app-header__controls">
      <button className="add-new" onClick={props.addNote}>
        + New Note
      </button>
      <input
        className="search"
        type="text"
        placeholder="Type here to search..."
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
