import styles from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({ id, name, species, gender, addFav, removeFav, image, onClose, myFavorites }) {

   const [isFav, setIsFav] = useState(false);
   const location = useLocation();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, onClose });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={styles.card}>
         <img src={image} alt={name} />
         <Link to={`/detail/${id}`} >
            <h1>{name}</h1>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {location.pathname !== '/favorites' &&
         <button onClick={() => onClose(id)}>X</button>}
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);