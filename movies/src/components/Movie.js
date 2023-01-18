import React from "react";

const Movie = ({nameAsAProp, linkAsAProp}) => {
    return (
        <>
            <a href={linkAsAProp}><h4>Name: {nameAsAProp} </h4></a>
        </>
    )
}

export default Movie