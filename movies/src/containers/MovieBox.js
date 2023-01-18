import React, {useState} from "react";
import MovieList from "../components/MovieList";
import Movie from "../components/Movie";

//Define the Movie box
const MovieBox = () => {
    // Why is this list not inside the MovieList??
    const [movies, setMovies] = useState (
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", 
                url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]
    )
    return (
        <>
            <h2>Upcoming Film Releases for UK</h2>
            <MovieList movieAsAProp = {movies}/>
            <a href="https://www.imdb.com/calendar/?region=gb"><h2>View more upcoming releases</h2></a>
        </>
    )
}

// why do we need this new variable (movieAsAProp)? Is it so MovieList can see the movies? 
//MovieList passes itself to the Movie via the prop above? You cant pass info from children to parents, but you can the other way.

export default MovieBox;