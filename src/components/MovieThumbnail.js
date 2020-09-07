import React from "react";
import styled from "styled-components";

export default function MovieThumbnail(props) {
  let { Title, Year, imdbID } = props.movie;
  let { nominated, onClickNominate } = props;

  console.log("movie", props.movie);

  function isNominated() {
    if (nominated.length > 0) {
      return nominated.some((movie) => movie.imdbID === imdbID);
    } else return false;
  }

  return (
    <Article className="card">
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Year}</h6>
        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        {!isNominated() && (
          <button
            className="button btn-sm btn-outline-primary"
            onClick={(e) => onClickNominate(e, props.movie, "add")}
          >
            Nominate
          </button>
        )}
        {isNominated() && (
          <button
            className="button btn-sm btn-outline-danger"
            onClick={(e) => onClickNominate(e, props.movie, "remove")}
          >
            Remove
          </button>
        )}
        {isNominated() && <span>Nominated!</span>}
      </div>
    </Article>

    // <Article>
    //   <p>
    //     {Title}, | <span>{Year}</span>
    //   </p>
    //   {!isNominated() && (
    //     <button
    //       className="button btn-sm btn-outline-primary"
    //       onClick={(e) => onClickNominate(e, props.movie, "add")}
    //     >
    //       Nominate
    //     </button>
    //   )}
    //   {isNominated() && (
    //     <button onClick={(e) => onClickNominate(e, props.movie, "remove")}>
    //       Remove
    //     </button>
    //   )}
    //   {isNominated() && <span>Nominated!</span>}
    // </Article>
  );
}

const Article = styled.div`
  margin: 5px 8px;
  width: 18rem;
  > div {
    > span {
      padding: 2px;
      background-color: lightgreen;
      margin-left: 10px;
    }
  }
`;

// const Article = styled.article`
//   border-top: 1px solid black;
//   border-bottom: 1px solid black;
//   margin: 5px;
//   padding: 2px;
//   width: 48%;
//   > p {
//     margin: 0;

//     > span {
//       font-style: italic;
//     }
//   }
//   > span {
//     background-color: lightgreen;
//     margin-left: 10px;
//   }

//   @media only screen and (max-width: 500px) {
//     flex-direction: column;
//     div {
//       width: 90%;
//     }
//   }
// `;
