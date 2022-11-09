import React from 'react'
import "../assets/Table.css"

function Table(props) {
  return (
    <table>
      <TableHeader/>
      <TableBody playlistData={props.playlistData}/>
    </table>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Length</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.playlistData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.artist}</td>
        <td>{row.album}</td>
        <td>{row.length}</td>
      </tr>
    );
  });
  return (
    <tbody>
      {rows}
    </tbody>
  );
}

export default Table;