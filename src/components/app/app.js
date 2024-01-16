import React from "react";
import './app.css';
import InfoBar from "../infoBar/infoBar";
import GameTimer from "../gameTimer/gameTimer";
import ModalMenu from "../modalMenu/modalMenu";
import MainMenu from "../mainMenu/mainMenu";
import TranslateVerbsGame from "../pages/translateVerbsGame";
import ErrorMessage from "../errorMessage/errorMessage";
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctCount: 0,
            incorrectCount: 0,
            isTimeRunning: false,
            finalTime: 0,
            error: false,
            setTimeToZero: false,
            highScoreData: []
        };

        this.resetGame = this.resetGame.bind(this);
        this.correctCountIncr = this.correctCountIncr.bind(this);
        this.incorrectCountIncr = this.incorrectCountIncr.bind(this);
        this.toggleTimeRun = this.toggleTimeRun.bind(this);
        this.getFinalTime = this.getFinalTime.bind(this);
        this.toggleTimeToZero = this.toggleTimeToZero.bind(this)
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    
    componentDidMount() {
        console.log('Компонент появляется');
    }

    componentDidUpdate() {
        console.log('Компонент обновляется');
    }

    componentWillUnmount() {
        console.log('Компонент исчезает')
    }

    resetGame = () => {
        this.setState({
            correctCount: 0,
            incorrectCount: 0,
            finalTime: 0
        });
    }

    getFinalTime = (targetValue) => {
        const minutes = (Math.floor((targetValue / 60000) % 60)).toString().slice(-2);
    const seconds = (Math.floor((targetValue / 1000) % 60)).toString().slice(-2);
    const milliseconds = (((targetValue / 10) % 100)).toString().slice(-2);
        this.setState({
            finalTime: `${minutes}мин ${seconds}сек ${milliseconds}мс`
        })
    }

    correctCountIncr = () => {
        this.setState({
            correctCount: this.state.correctCount + 1
        })
    }

    incorrectCountIncr = () => {
        this.setState({
            incorrectCount: this.state.incorrectCount + 1
        })
    }

    toggleTimeRun = (value) => {
        this.setState({
            isTimeRunning: value
        });
        console.log('isTimeRunning изменился')
    }

    toggleTimeToZero = () => {
        this.setState({
            setTimeToZero: false
        })
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        console.log('Компонент рендерится');
        const { isTimeRunning, correctCount, incorrectCount, finalTime } = this.state;


        return (
            <>
                {/* <Router>
                <Routes> */}
                <InfoBar
                    correctCount={correctCount}
                    incorrectCount={incorrectCount}
                />
                <h3><GameTimer
                    correctCount={correctCount}
                    isTimeRunning={isTimeRunning}
                    getFinalTime={this.getFinalTime}
                    finalTime={finalTime}
                /></h3>
                <TranslateVerbsGame
                    correctCountIncr={this.correctCountIncr}
                    incorrectCountIncr={this.incorrectCountIncr}
                    toggleTimeRun={this.toggleTimeRun}
                    toggleTimeToZero={this.toggleTimeToZero}
                    isTimeRunning={isTimeRunning}
                />
                <ModalMenu
                    correctCount={correctCount}
                    finalTime={finalTime}
                    resetGame={() => this.resetGame()} />
                <MainMenu /> 
                {/* </Routes>
                </Router> */}
            </>

        )
    }
}


