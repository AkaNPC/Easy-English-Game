import React from "react";
import './infoBar.css';

export default function InfoBar({ correctCount, incorrectCount, currentPlayerName }) {

    return (
        <div className="topBar">
            <h4>Количество правильных ответов: {correctCount}</h4>
            <h5>Игрок: {currentPlayerName}</h5>
            <h4>Количество ошибок: {incorrectCount}</h4>
        </div>
    )
};

