import React from "react";
import Movie from "../components/Movie";

//Define MovieList. movieAsAProp is an object passed from MovieBox, that contains movies
const MovieList = ({movieAsAProp}) => {
    //Now we need to create a new array to hold the individual movies. I'm only going to keep the name, as that's what I want to display. 
    const arrayOfIndividualMovies = movieAsAProp.map((movie) => {
        return (
            <Movie nameAsAProp={movie.name} linkAsAProp={movie.url}/>
        )
    })
    // console.log(arrayOfIndividualMovies)
    return (
        <>
            {arrayOfIndividualMovies}
        </>
    )
}

export default MovieList;