import React from "react";
import "./../styles/DataPage.css";

const Table = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Receiver</th>
          <th>Sender</th>
          <th>Message</th>
          <th>Type</th>
          <th>Country</th>
          <th>Parts</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.time}</td>
            <td>{row.receiver}</td>
            <td>{row.sender}</td>
            <td>{row.message}</td>
            <td>{row.type}</td>
            <td>{row.country}</td>
            <td>{row.parts}</td>
            <td className={`status ${row.status.toLowerCase()}`}>
              {row.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
