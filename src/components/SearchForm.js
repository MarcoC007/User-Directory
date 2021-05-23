import React from 'react';


function searchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="users">Find User:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                list="search"
                type="text"
                className="form-control"
                placeholder="Type user name to begin search"
                id="search"
                />
                    {/* <button type="submit" onClick={props.searchFiltered} className="btn btn-success">
                        Search
                    </button> */}
            </div>
        </form>
    )
}

export default searchForm;