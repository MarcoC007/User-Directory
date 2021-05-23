import React from 'react';

function SearchResults(props) {
    return (
     
        <div className="list-group">
            {props.users.length ? (
                <table>
                    <tr>
                     <th>Picture</th>
                     <th 
                     className="cursor"
                     onClick={() => props.sortedSearch("last")}>
                         Name
                         </th>
                     <th
                     className="cursor"
                     onClick={() => props.sortedSearch("email")}>
                     Email
                     </th>
                     <th
                     className="cursor"
                     onClick={() => props.sortedSearch("location")}>
                         Location
                         </th>
                     <th
                     className="cursor"
                     onClick={() => props.sortedSearch("dob")}>
                         DoB
                         </th>
                    </tr>
                    <tbody>
                        {props.users.map(result => (
                            <tr key={result.login}>
                                <td>
                                    <img alt="users" src={result.picture}/>
                                </td>
                                <td>
                                    <p>{result.first}</p> 
                                    <p>{result.last}</p>
                                </td>
                                <td>
                                    <p>{result.email}</p>
                                </td>
                                <td>
                                    <p>{result.location}</p>
                                </td>
                                <td>
                                    <p>{result.dob}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>No results found!</h2>
                )}
        </div>
    )
}

export default SearchResults;