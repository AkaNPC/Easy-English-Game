import React from "react";
import './modalMenu.css';

export default function ModalMenu({ resetGame, correctCount, finalTime }) {

    return (
        <>
            <ul className={`modalUl ${correctCount === 3 ? 'show' : 'hide'}`}>
            <h3>Поздравляем! Вы прошли раунд за {finalTime}.</h3>
                <li onClick={resetGame}>Начать заново</li>
                <li>Сохранить результат</li>
                <li>Таблица рекордов</li>
                <li>Выйти в главное меню</li>
            </ul>
        </>
    )
}