
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import { removeFav } from "../../redux/actions";
import React from "react";

const Favorites = ({ myFavorites, onClose, removeFav }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  // function closeFavorite(id) {
  //   onClose(id);
  //   dispatch(removeFav(id));
  // }

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      {
        myFavorites?.map(fav => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              // onClose={() => closeFavorite(fav.id)}
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFav: (id) => dispatch(removeFav(id))
//   };
// }

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps,
)(Favorites);