import React from "react";
import { useState , useEffect } from "react"; 
import { Link , Outlet } from "react-router-dom";

export const IndexPage = () => {

    const[players , setPlayers] = useState([]);
    const[isLoading , setIsLoading] = useState(true);

    useEffect(() =>{
        fetch("http://localhost:8080/player",{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            setPlayers(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("データの取得に失敗しました", error);
            setIsLoading(false);
        });
    } , []);
    
    const questionArray = players.map((player) => {return player.question;});

    return(
        <div>{isLoading ? <p>Loading...</p> : 
        <>
            <ul>{
            questionArray.map((question , index) => (
                <li key={index}>
                    <Link to="answer" state={{question:question , players}}>
                        {question}のは？
                    </Link>
                </li>
            ))}
            </ul>
            <hr />
            <Outlet />
        </>}
        </div>
    )
}