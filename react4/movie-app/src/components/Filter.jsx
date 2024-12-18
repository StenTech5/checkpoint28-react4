const Filter = ({ filterMovies, setSearchTitle, setSearchRating }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Search by rating"
                onChange={(e) => setSearchRating(e.target.value)}
            />
            <button onClick={filterMovies}>Filter</button>
        </div>
    );
};

export default Filter;
