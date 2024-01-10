import React from "react";
import './app.css';
import RowBlock from "../rowBlock/rowBlock";
import InfoBar from "../infoBar/infoBar";
import GameTimer from "../gameTimer/gameTimer";
import ModalMenu from "../modalMenu/modalMenu";

const engVerbsList = [{ id: 1, word: 'be' }, { id: 2, word: 'have' }, { id: 3, word: 'do' }, { id: 4, word: 'say' }, { id: 5, word: 'go' }, { id: 6, word: 'get' },
{ id: 7, word: 'make' }, { id: 8, word: 'know' }, { id: 9, word: 'think' }, { id: 10, word: 'take' }, { id: 11, word: 'see' }, { id: 12, word: 'come' },
{ id: 13, word: 'want' }, { id: 14, word: 'use' }, { id: 15, word: 'find' }, { id: 16, word: 'give' }, { id: 17, word: 'tell' }, { id: 18, word: 'work' },
{ id: 19, word: 'call' }, { id: 20, word: 'try' }, { id: 21, word: 'ask' }, { id: 22, word: 'need' }, { id: 23, word: 'feel' }, { id: 24, word: 'become' },
{ id: 25, word: 'leave' }, { id: 26, word: 'put' }, { id: 27, word: 'mean' }, { id: 28, word: 'keep' }, { id: 29, word: 'let' }, { id: 30, word: 'begin' },
{ id: 31, word: 'seem' }, { id: 32, word: 'help' }, { id: 33, word: 'show' }, { id: 34, word: 'hear' }, { id: 35, word: 'play' }, { id: 36, word: 'run' },
{ id: 37, word: 'move' }, { id: 38, word: 'live' }, { id: 39, word: 'believe' }, { id: 40, word: 'bring' }, { id: 41, word: 'happen' }, { id: 42, word: 'write' },
{ id: 43, word: 'sit' }, { id: 44, word: 'stand' }, { id: 45, word: 'lose' }, { id: 46, word: 'pay' }, { id: 47, word: 'meet' }, { id: 48, word: 'include' },
{ id: 49, word: 'continue' }, { id: 50, word: 'set' }, { id: 51, word: 'learn' }, { id: 52, word: 'change' }, { id: 53, word: 'lead' },
{ id: 54, word: 'understand' }, { id: 55, word: 'watch' }, { id: 56, word: 'follow' }, { id: 57, word: 'stop' }, { id: 58, word: 'create' },
{ id: 59, word: 'speak' }, { id: 60, word: 'read' }, { id: 61, word: 'spend' }, { id: 62, word: 'grow' }, { id: 63, word: 'open' }, { id: 64, word: 'walk' },
{ id: 65, word: 'win' }, { id: 66, word: 'teach' }, { id: 67, word: 'offer' }, { id: 68, word: 'remember' }, { id: 69, word: 'consider' }, { id: 70, word: 'appear' },
{ id: 71, word: 'buy' }, { id: 72, word: 'serve' }, { id: 73, word: 'die' }, { id: 74, word: 'send' }, { id: 75, word: 'build' }, { id: 76, word: 'stay' },
{ id: 77, word: 'fall' }, { id: 78, word: 'cut' }, { id: 79, word: 'reach' }, { id: 80, word: 'kill' }, { id: 81, word: 'raise' }, { id: 82, word: 'pass' },
{ id: 83, word: 'sell' }, { id: 84, word: 'decide' }, { id: 85, word: 'return' }, { id: 86, word: 'explain' }, { id: 87, word: 'hope' }, { id: 88, word: 'develop' },
{ id: 89, word: 'carry' }, { id: 90, word: 'break' }, { id: 91, word: 'receive' }, { id: 92, word: 'agree' }, { id: 93, word: 'support' }, { id: 94, word: 'hit' },
{ id: 95, word: 'produce' }, { id: 96, word: 'eat' }, { id: 97, word: 'cover' }, { id: 98, word: 'catch' }, { id: 99, word: 'draw' }, { id: 100, word: 'choose' }];

const rusVerbsList = [{ id: 1, word: 'быть' }, { id: 2, word: 'иметь' }, { id: 3, word: 'делать' }, { id: 4, word: 'говорить' }, { id: 5, word: 'идти, ехать' },
{ id: 6, word: 'получать, становиться' }, { id: 7, word: 'создавать что-то' }, { id: 8, word: 'знать' }, { id: 9, word: 'думать' }, { id: 10, word: 'брать' },
{ id: 11, word: 'видеть' }, { id: 12, word: 'приходить' }, { id: 13, word: 'хотеть' }, { id: 14, word: 'использовать' }, { id: 15, word: 'находить' },
{ id: 16, word: 'давать' }, { id: 17, word: 'рассказывать' }, { id: 18, word: 'работать' }, { id: 19, word: 'звать, звонить' }, { id: 20, word: 'пытаться' },
{ id: 21, word: 'просить, спрашивать' }, { id: 22, word: 'нуждаться' }, { id: 23, word: 'чувствовать' }, { id: 24, word: 'становиться' }, { id: 25, word: 'оставлять' },
{ id: 26, word: 'класть, ставить' }, { id: 27, word: 'значить' }, { id: 28, word: 'хранить' }, { id: 29, word: 'позволять, давать' }, { id: 30, word: 'начинать' },
{ id: 31, word: 'казаться' }, { id: 32, word: 'помогать' }, { id: 33, word: 'показывать' }, { id: 34, word: 'слышать' }, { id: 35, word: 'играть' },
{ id: 36, word: 'бежать' }, { id: 37, word: 'двигаться' }, { id: 38, word: 'жить' }, { id: 39, word: 'верить' }, { id: 40, word: 'приносить' }, { id: 41, word: 'случаться' },
{ id: 42, word: 'писать' }, { id: 43, word: 'сидеть' }, { id: 44, word: 'стоять' }, { id: 45, word: 'терять' }, { id: 46, word: 'платить' }, { id: 47, word: 'встречать' },
{ id: 48, word: 'включать' }, { id: 49, word: 'продолжать' }, { id: 50, word: 'устанавливать' }, { id: 51, word: 'учиться' }, { id: 52, word: 'менять' },
{ id: 53, word: 'вести' }, { id: 54, word: 'понимать' }, { id: 55, word: 'смотреть' }, { id: 56, word: 'следовать' }, { id: 57, word: 'остановиться' },
{ id: 58, word: 'создать что-то новое' }, { id: 59, word: 'разговаривать' }, { id: 60, word: 'читать' }, { id: 61, word: 'тратить' }, { id: 62, word: 'расти' },
{ id: 63, word: 'открывать' }, { id: 64, word: 'идти' }, { id: 65, word: 'побеждать' }, { id: 66, word: 'обучать' }, { id: 67, word: 'предлагать' }, { id: 68, word: 'помнить' },
{ id: 69, word: 'полагать, рассматривать' }, { id: 70, word: 'появляться' }, { id: 71, word: 'покупать' }, { id: 72, word: 'служить' }, { id: 73, word: 'умирать' }, { id: 74, word: 'посылать' },
{ id: 75, word: 'строить' }, { id: 76, word: 'оставаться' }, { id: 77, word: 'падать' }, { id: 78, word: 'резать' }, { id: 79, word: 'достигать' }, { id: 80, word: 'убивать' },
{ id: 81, word: 'поднимать' }, { id: 82, word: 'передавать, проходить' }, { id: 83, word: 'продавать' }, { id: 84, word: 'решать' }, { id: 85, word: 'возвращаться' },
{ id: 86, word: 'объяснять' }, { id: 87, word: 'надеяться' }, { id: 88, word: 'развивать' }, { id: 89, word: 'везти, нести' }, { id: 90, word: 'ломать' },
{ id: 91, word: 'получать' }, { id: 92, word: 'соглашаться' }, { id: 93, word: 'поддерживать' }, { id: 94, word: 'ударить' }, { id: 95, word: 'производить' },
{ id: 96, word: 'есть' }, { id: 97, word: 'покрывать, прикрывать' }, { id: 98, word: 'ловить' }, { id: 99, word: 'рисовать' }, { id: 100, word: 'выбирать' }]

const list1 = engVerbsList.sort(() => Math.random() - 0.5).slice(0, 15);
console.log(list1);
const list2 = rusVerbsList.sort(() => Math.random() - 0.5).filter(({ id }) => list1.some(item => item.id === id));
console.log(list2);



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            engWordsClicked: [],
            rusWordsClicked: [],
            correctCount: 0,
            incorrectCount: 0,
            isTimeRunning: false
        };
        this.handlerClick1 = this.handlerClick1.bind(this);
        this.handlerClick2 = this.handlerClick2.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    handlerClick1 = (key) => {
        if (!this.state.engWordsClicked.includes(key)) {
            this.setState({
                engWordsClicked: [...this.state.engWordsClicked, key],
                isTimeRunning: true
            });
        }
        console.log(this.state)
    }

    //Используем callback-функцию в setState для получения актуального значения correctCount
    handlerClick2 = (key) => {
        if (!this.state.rusWordsClicked.includes(key) && this.state.engWordsClicked.includes(key)) {
            this.setState((prevState) => ({
                rusWordsClicked: [...this.state.rusWordsClicked, key],
                correctCount: prevState.correctCount + 1
            }), () => {if (this.state.correctCount === 15) {
                this.setState({
                    isTimeRunning: false
                });
            }});
        } 
        else {
            this.setState({
                incorrectCount: this.state.incorrectCount + 1
            })
        }
        console.log(this.state)
    }

    resetGame = () => {
        this.setState({
            engWordsClicked: [],
            rusWordsClicked: [],
            correctCount: 0,
            incorrectCount: 0,
            isTimeRunning: false,
            resetTime: false
        })
    }

    componentDidMount() {
        console.log('Компонент появляется');
    }

    componentDidUpdate() {
        console.log('Компонент обновляется');
    }


    render() {

        console.log('Компонент рендерится');
        const { engWordsClicked, rusWordsClicked, correctCount, incorrectCount } = this.state;

        const renderListEng = list1.map((item, index) =>
            <li
                key={index}
                className={`${engWordsClicked.includes(item.id) && engWordsClicked[engWordsClicked.length - 1] === item.id ? 'green' : ''} ${rusWordsClicked.includes(item.id) && engWordsClicked.includes(item.id) ? 'hide' : ''}`}
                onClick={() => this.handlerClick1(item.id)}
            >{item.word}</li>
        );


        const renderListRus = list2.map((item, index) =>
            <li
                key={index}
                className={engWordsClicked.includes(item.id) && rusWordsClicked.includes(item.id) ? 'green hide' : ''}
                onClick={() => this.handlerClick2(item.id)}
            >{item.word}</li>
        );


        return (
            <>
             <InfoBar 
             correctCount={correctCount} 
             incorrectCount={incorrectCount} 
             isTimeRunning={this.state.isTimeRunning} />
                <h3><GameTimer isTimeRunning={this.state.isTimeRunning} correctCount={this.state.correctCount} /></h3>
            <div className="lists">
                <RowBlock left={renderListEng} right={renderListRus} />
            </div>
            <ModalMenu 
            resetGame={() => this.resetGame()}/>
            </>
            
        )
    }
}

