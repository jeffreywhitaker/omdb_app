import React from "react";

export default function MovieThumbnail(props) {
  const { Title, Year } = props.movie;
  return (
    <div>
      <p>{Title}</p>
      <p>{Year}</p>
    </div>
  );
}
