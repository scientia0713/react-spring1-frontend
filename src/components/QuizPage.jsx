import React from "react";
import { useState } from "react"; 

export const QuizPage = () => {

    //データ取得用
    const[quizArray , setQuizArray] = useState([]);

    const[isLoading , setIsLoading] = useState(true);

    //クイズ作成用
    const[currentQuestion , setCurrentQuestion] = useState(0);
    const[selectedAnswer , setSelectedAnswer] = useState(null);
    const[isCorrect , setIsCorrect] = useState(null);
    const[isLast , setIsLast] = useState(false);

    //正解数表示用
    const[correctCount , setCorrectCount] = useState(0);

    //サーバーに接続し、データを取得
    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/player",{method:"GET"});
        const players = await response.json();
        setIsLoading(false);
        return players;  
    }

    //選択肢の順番をランダムに入れ替える
    const arrayShuffle = (array) => {
        for(let i = (array.length -1); 0 < i ; i--){
            let r = Math.floor(Math.random() * (i + 1));

            let temp = array[i];
            array[i] = array[r];
            array[r] = temp;
        }
        return array;
    }
    
    //問題と選択肢をペアにしてクイズを作成する
    const arrayCreate = (players) => {
        const questionArray = players.map((player) => {return player.question;});
        const answerArray = players.map((player) => {return player.answer;});
        const dammy1Array = players.map((player) => {return player.dammy1;});
        const dammy2Array = players.map((player) => {return player.dammy2;});
        const dammy3Array = players.map((player) => {return player.dammy3;});

        const quizArray = [];

        for(let i = 0; i < questionArray.length; i++){
            const quizObj = {};
            let choiceArray = [];
            for(let j = 0; j < 4; j++){
                const choiceObj = {};
                switch(j){
                    case 0:
                        choiceObj.text = answerArray[i];
                        choiceObj.correct = true;
                        choiceArray.push(choiceObj);
                        break;
                    case 1:
                        choiceObj.text = dammy1Array[i];
                        choiceObj.correct = false;
                        choiceArray.push(choiceObj);
                        break;
                    case 2:
                        choiceObj.text = dammy2Array[i];
                        choiceObj.correct = false;
                        choiceArray.push(choiceObj);
                        break;
                    case 3:
                        choiceObj.text = dammy3Array[i];
                        choiceObj.correct = false;
                        choiceArray.push(choiceObj);
                        break;
                    default:
                        console.log('選択肢作成過程でエラー')
                }
            }
            quizObj.question = questionArray[i];
            choiceArray = arrayShuffle(choiceArray);
            quizObj.choices = choiceArray;
            quizArray.push(quizObj);
        }

        return quizArray;
    }

    const allQuiz = async () => {
        const players = await fetchData();
        const quizArray = arrayCreate(players);
        setQuizArray(quizArray);
    }

    //サーバー接続処理を起動
    if(isLoading){
        allQuiz();
    };

    //回答ボタン押下時の制御
    const handleSubmit = () => {
        if(selectedAnswer === null){
            alert('回答が選択されていません');
            return;
        }

        setIsCorrect(quizArray[currentQuestion].choices[selectedAnswer].correct);
    };

    //次の問題へボタン押下時の制御
    const handleNextQuestion = () => {
        if(isCorrect){
            setCorrectCount(correctCount + 1);
        }
        if(currentQuestion === quizArray.length - 1){
            setIsLast(true);
            return;
        }

        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    //最初に戻るボタン押下時の制御
    const handleReturnToStart = () => {
        setCurrentQuestion(0);
    }
    
    return(
        <div>{isLoading ? <p>Loading...</p> : <><p>{quizArray[currentQuestion].question}のは？</p>
        {quizArray[currentQuestion].choices.map((choice , index) => (
            <div key={index}>
              <input type="radio" 
              id={choice.text}
              name="choice"
              value={index}
              onChange={(e) => setSelectedAnswer(Number(e.target.value))}
              />
              <label htmlFor={choice.text}>{choice.text}</label> 
            </div>
        ))}
        <button onClick={handleSubmit}>回答を送信</button>
        {isCorrect !== null &&(
            <p>{isCorrect ? '正解' : '不正解'}</p>
        )}
        {isCorrect !== null && !isLast && (
            <button onClick={handleNextQuestion}>次の問題へ</button>
        )}
        {isLast && (
            <div>
                <p>正解数は{correctCount}</p>
                <button onClick={handleReturnToStart}>最初に戻る</button>
            </div>
        )}
        </>} 
        </div>
    );
}