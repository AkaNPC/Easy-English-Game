import React from "react";
import './mainMenu.css';
import { Link } from "react-router-dom";

export default function MainMenu({toggleHighScoreVisible}) {


    return (
        <div className="mainMenu">
            <li>
            <Link to="/translateVerbsGame" style={{ color: 'inherit', textDecoration: 'inherit' }}>Начать игру "Перевод глаголов"</Link>
            </li>
            <li>
            <Link to="/verbsFormsGame" style={{ color: 'inherit', textDecoration: 'inherit' }}>Начать игру "Формы глаголов"</Link>
            </li>
            <li onClick={toggleHighScoreVisible}>
                Таблица рекордов
            </li>
            <li>
                Настройки
            </li>
            <li>
                Выход
            </li>

        </div>
    )
}