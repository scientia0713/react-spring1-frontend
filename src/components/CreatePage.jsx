import React , { useState } from "react";
import axios from "axios";

export const CreatePage = () => {
    const[question , setQuestion] = useState("");
    const[answer , setAnswer] = useState("");
    const[dammy1 , setDammy1] = useState("");
    const[dammy2 , setDammy2] = useState("");
    const[dammy3 , setDammy3] = useState("");
    const[isRegister , setIsRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "http://localhost:8080/create";

        axios.post(apiUrl,{
            answer,
            question,
            dammy1,
            dammy2,
            dammy3,
        }).then(() => {
            setQuestion("");
            setAnswer("");
            setDammy1("");
            setDammy2("");
            setDammy3("");
            setIsRegister(true);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    return (
        <div>
            <span>クイズを入力：</span><input type="text" value={question} onChange={(e) => {setQuestion(e.target.value)}}/>のは？　例：プロ野球史上最高球速を記録した(のは？)<br/>
            <span>答えを入力：</span><input type="text" value={answer} onChange={(e) => {setAnswer(e.target.value)}}/>　例：チアゴ・ビエイラ<br/>
            <span>間違った選択肢1を入力：</span><input type="text" value={dammy1} onChange={(e) => {setDammy1(e.target.value)}}/>　例：大谷翔平<br/>
            <span>間違った選択肢2を入力：</span><input type="text" value={dammy2} onChange={(e) => {setDammy2(e.target.value)}}/>　例：マーク・クルーン<br/>
            <span>間違った選択肢3を入力：</span><input type="text" value={dammy3} onChange={(e) => {setDammy3(e.target.value)}}/>　例：佐々木朗希<br/>
            <button onClick={handleSubmit}>登録</button><br/>
            {isRegister && <p>クイズを1件登録しました。</p>}
        </div>
    )
}