import React from "react";
import { useLocation , useNavigate } from "react-router-dom";

export const AnswerPage = () => {

    //ガード処理の実装
    const navigate = useNavigate();
    const location = useLocation();

    if(!location.state){
        alert("不正なアクセスです。");
        navigate("/");
        return null;
    }

    const { question , players } = location.state;

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