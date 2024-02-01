import React from "react";
import './highScoreTable.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function HighScoreTable({ showHighScoreTable, playersData, toggleHighScoreVisible }) {

    const highScoreTable = playersData.map((obj, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{obj.name}</td>
            <td>{obj.highScore}</td>
        </tr>
    );

    return (
        <div className={`highScoreList ${showHighScoreTable ? 'show' : 'hide'}`}>
            <div className="actionModalBar">
            <FontAwesomeIcon 
            className="modalBtn" 
            onClick={toggleHighScoreVisible}
            icon={faXmark} />
            </div>
            <h3>Таблица лидеров</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Номер</th>
                        <th>Имя</th>
                        <th>Время</th>
                    </tr>
                    {highScoreTable}
                </tbody>
            </table>
        </div>
    )
}