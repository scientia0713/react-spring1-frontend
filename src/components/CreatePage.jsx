import React , { useState } from "react";
import axios from "axios";

export const CreatePage = () => {
    const[answer , setAnswer] = useState("");
    const[question , setQuestion] = useState("");
    const[dammy1 , setDammy1] = useState("");
    const[dammy2 , setDammy2] = useState("");
    const[dammy3 , setDammy3] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "http://localhost:8080/create";

        axios.post(apiUrl,{
            answer,
            question,
            dammy1,
            dammy2,
            dammy3,
        }).then((res) => {
            setAnswer(res.data.answer);
            setQuestion(res.data.question);
            setDammy1(res.data.dammy1);
            setDammy2(res.data.dammy2);
            setDammy3(res.data.dammy3);
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <div>
            <input type="text" placeholder="クイズを入力" onChange={(e) => {setQuestion(e.target.value)}}/>のは？<br/>
            <input type="text" placeholder="答えを入力" onChange={(e) => {setAnswer(e.target.value)}}/><br/>
            <input type="text" placeholder="選択肢1を入力" onChange={(e) => {setDammy1(e.target.value)}}/><br/>
            <input type="text" placeholder="選択肢2入力" onChange={(e) => {setDammy2(e.target.value)}}/><br/>
            <input type="text" placeholder="選択肢3を入力" onChange={(e) => {setDammy3(e.target.value)}}/><br/>
            <button onClick={handleSubmit}>登録</button>
        </div>
    )
}