import React, {useState} from "react";
import './homePage.css';
import { Link } from "react-router-dom";

export default function HomePage({createPlayerData}) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    }

    

    return (

        <div className="homeStyle">
            <div className="homeBlock">
                <h1>Добро пожаловать! Изучай английский язык с удовольствием!</h1>
                <h4>Введите пожалуйста свое имя</h4>
                <input 
                type="text" 
                onChange={handleChange} 
                value={value}
                // onKeyDown={(e) => {
                //     if (e.key === "Enter")
                //         handlerFuntion();
                //     }}
                    ></input>
                <p onClick={() => createPlayerData(value)}><Link to="/mainMenu" style={{ color: 'inherit', textDecoration: 'inherit' }}>Далее</Link></p>
            </div>
        </div>
    )
}