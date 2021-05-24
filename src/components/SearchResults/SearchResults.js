import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

function SearchResults(props) {
    return (
     
        <div className="table">
            {props.users.length ? (
                <Table variant="dark" responsive="md" className="table">
                    <tr>
                     <th 
                     className="text">
                         Picture
                         </th>
                     <th 
                     className="text"
                     onClick={() => props.sortedSearch("last")}>
                         Name
                         </th>
                     <th
                     className="text"
                     onClick={() => props.sortedSearch("email")}>
                     Email
                     </th>
                     <th
                     className="text"
                     onClick={() => props.sortedSearch("location")}>
                         Location
                         </th>
                     <th
                     className="text"
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
                </Table>
            ) : (
                <h2>No results found!</h2>
                )}
        </div>
    )
}

export default SearchResults;