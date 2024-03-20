import React from "react";
import { useState , useEffect } from "react"; 
import { Link , Outlet } from "react-router-dom";

export const IndexPage = () => {

    const[players , setPlayers] = useState([]);
    // const[isLoading , setIsLoading] = useState(true);
    // const[questionArray , setQuestionArray] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:8080/player",{method:"GET"})
        .then((res) => res.json())
        .then((data) => setPlayers(data))
    } , []);
    
    const questionArray = players.map((player) => {return player.question;});

    console.log(questionArray);

    return(
        <>
            <ul>{
            questionArray.map((question) => (
                <li><Link to="answer"
                    state={{question:question , players}}>{question}のは？</Link></li>
            ))}</ul>
            <hr />
            <Outlet />
        </>
    )
}