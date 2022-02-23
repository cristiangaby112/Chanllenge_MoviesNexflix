import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMoviesSearch } from "../actions/index";
import {BsSearch} from 'react-icons/bs';
import s from '../css/SearchBar.module.css'

const SearchBar = () => {
  const dispatch = useDispatch ();
  const [name, setName] = useState("");
  const history = useHistory();

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }

  function handleSubmit(e){
    dispatch(getMoviesSearch(name))
    setName("");
    e.preventDefault();
    console.log("el boton");
    history.push("/search");
  }


  return (
    <form className={s.searchcontainer} onSubmit={(e) => handleSubmit(e)}>
      <input 
      className={s.input}
      type="text" 
      placeholder="Search..."
      onChange={(e) => handleInputChange(e)}
      value={name}
      />
      <button type="submit" className={s.SearchButton}><BsSearch /></button>
    </form>
  )
}

export default SearchBar;