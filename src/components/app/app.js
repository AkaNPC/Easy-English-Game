import React from "react";
import './app.css';
import ModalMenu from "../modalMenu/modalMenu";
import TranslateVerbsGame from "../pages/translateVerbsGame";
import ErrorMessage from "../errorMessage/errorMessage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../layouts/homePageLayout";
import MainMenu from "../pages/mainMenu";
import HighScoreTable from "../highScoreTable/highScoreTable";

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
            playersData: [],
            currentPlayerName: '',
            showHighScoreTable: false
        };

        this.resetGame = this.resetGame.bind(this);
        this.correctCountIncr = this.correctCountIncr.bind(this);
        this.incorrectCountIncr = this.incorrectCountIncr.bind(this);
        this.toggleTimeRun = this.toggleTimeRun.bind(this);
        this.getFinalTime = this.getFinalTime.bind(this);
        this.toggleTimeToZero = this.toggleTimeToZero.bind(this);
        this.createPlayerData = this.createPlayerData.bind(this);
        this.updatePlayerHighScore = this.updatePlayerHighScore.bind(this);
        this.toggleHighScoreVisible = this.toggleHighScoreVisible.bind(this)
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        console.log('Компонент появляется');
        if(this.state.showHighScoreTable) {
            this.toggleHighScoreVisible()
        }
    }

    componentDidUpdate() {
        console.log('Компонент обновляется');
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log('Компонент исчезает');
    }

    resetGame = () => {
        this.setState({
            correctCount: 0,
            incorrectCount: 0
        });
    }

    toggleHighScoreVisible = () => {
        this.setState({
            showHighScoreTable: !this.state.showHighScoreTable
        });
    }

    getFinalTime = (targetValue) => {
        const minutes = (Math.floor((targetValue / 60000) % 60)).toString().slice(-2);
        const seconds = (Math.floor((targetValue / 1000) % 60)).toString().slice(-2);
        const milliseconds = (((targetValue / 10) % 100)).toString().slice(-2);
        this.setState({
            finalTime: `${minutes} мин ${seconds} сек ${milliseconds} мс`
        })
    }

    updatePlayerHighScore = () => {
        const { playersData, currentPlayerName, finalTime } = this.state;
        this.setState({
            playersData: [...playersData, { name: currentPlayerName, highScore: finalTime }]
        });
    }

    createPlayerData = (value) => {
        if (value !== '') {
            this.setState({
                currentPlayerName: value
            });
        } else {
            alert('Заполните пустое поле');
        };
    }

    correctCountIncr = () => {
        this.setState({
            correctCount: this.state.correctCount + 1
        });
    }

    incorrectCountIncr = () => {
        this.setState({
            incorrectCount: this.state.incorrectCount + 1
        });
    }

    toggleTimeRun = (value) => {
        this.setState({
            isTimeRunning: value
        });
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
        const { isTimeRunning, correctCount, incorrectCount, finalTime, playersData, showHighScoreTable, currentPlayerName } = this.state;


        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout
                            createPlayerData={this.createPlayerData} />}>
                        </Route>
                        <Route path="/mainMenu" element={<MainMenu
                        toggleHighScoreVisible={() => this.toggleHighScoreVisible()} />} />
                        <Route path="/translateVerbsGame" element={<TranslateVerbsGame
                            correctCountIncr={this.correctCountIncr}
                            incorrectCountIncr={this.incorrectCountIncr}
                            toggleTimeRun={this.toggleTimeRun}
                            toggleTimeToZero={this.toggleTimeToZero}
                            isTimeRunning={isTimeRunning}
                            correctCount={correctCount}
                            incorrectCount={incorrectCount}
                            getFinalTime={this.getFinalTime}
                            updatePlayerHighScore={this.updatePlayerHighScore}
                            finalTime={finalTime} 
                            currentPlayerName={currentPlayerName}/>}
                        />

                        <Route path="*" element={<h1>Указан неправильный url-адрес. Такая страница не существует</h1>} />
                    </Routes>

                    <ModalMenu
                        correctCount={correctCount}
                        finalTime={finalTime}
                        showHighScoreTable={showHighScoreTable}
                        resetGame={() => this.resetGame()} 
                        toggleHighScoreVisible={() => this.toggleHighScoreVisible()}/>

                    <HighScoreTable
                        showHighScoreTable={showHighScoreTable}
                        playersData={playersData}
                        toggleHighScoreVisible={() => this.toggleHighScoreVisible()} />
                </Router>
            </>
        )
    }
}


