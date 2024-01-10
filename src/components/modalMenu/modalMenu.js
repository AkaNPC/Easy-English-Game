import React from "react";
import './modalMenu.css';

export default function ModalMenu({resetGame}) {

    return (
        <>
            <ul>
                <li 
                className="modalMenu"
                onClick={resetGame}>Начать заново</li>
                <li 
                className="modalMenu">Таблица рекордов</li>
                <li 
                className="modalMenu">Выйти в главное меню</li>
            </ul>
        </>
    )
}