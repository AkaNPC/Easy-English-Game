import React from "react";
import './modalMenu.css';
import { Link } from "react-router-dom";


export default function ModalMenu({ resetGame, correctCount, finalTime, toggleHighScoreVisible, showHighScoreTable }) {

    return (
        <>
            <ul className={`modalUl ${correctCount === 3 && !showHighScoreTable ? 'show' : 'hide'}`}>
                <h3>Поздравляем! Вы прошли раунд за {finalTime}.</h3>
                <li onClick={resetGame}>Начать заново</li>
                <li onClick={toggleHighScoreVisible}>Таблица рекордов</li>
                <li onClick={resetGame}><Link to="/mainMenu" style={{ color: 'inherit', textDecoration: 'inherit' }}>Выйти в главное меню</Link></li>
            </ul>
        </>
    )
}