import React from "react";
import { useLocation } from "react-router-dom"; 

export const AnswerPage = () => {

    const { question , players } = useLocation().state;

    const questionArray = players.map((player) =>{
        return player.question;
    });

    const targetIndex = questionArray.indexOf(question);

    const answerArray = players.map((player) => {
        return player.answer;
    });

    return (
        <div>
            <p>{question}のは、{answerArray[targetIndex]}選手</p>
        </div>
    )
}