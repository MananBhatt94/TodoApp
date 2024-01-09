function SearchBar({ searchTerm, setSearchTerm,searchDate,setsearchDate }) {
  return (<>
    <input
      className="mb-2"
      type="text"
      placeholder="Search Todo Items"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {<input 
      className="mb-2 ml-2 "
      type="date"
      placeholder="search by date"
      value={searchDate}
      onChange={(e)=>setsearchDate(e.target.value)}
    /> }
  </>
  );
}

export default SearchBar;

