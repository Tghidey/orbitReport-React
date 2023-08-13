import React from 'react';

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td> {/* Assuming the key for Type of Satellite is "type" */}
              <td>{data.launchDate}</td> {/* Assuming the key for Launch Date is "launchDate" */}
              <td>{data.operational ? 'Active' : 'Inactive'}</td> {/* Assuming the key for Status is "operational" */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
