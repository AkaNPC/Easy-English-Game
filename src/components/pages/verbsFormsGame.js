import React, { useState, useEffect } from "react";
import './verbsFormsGame.css';

const engVerbsInfinitive = [{ id: 1, word: 'be' }, { id: 2, word: 'beat' }, { id: 3, word: 'become' }, { id: 4, word: 'begin' }, { id: 5, word: 'bend' }, { id: 6, word: 'bite' },
{ id: 7, word: 'blow' }, { id: 8, word: 'break' }, { id: 9, word: 'bring' }, { id: 10, word: 'build' }, { id: 11, word: 'burn' }, { id: 12, word: 'burst' }, { id: 13, word: 'buy' },
{ id: 14, word: 'can' }, { id: 15, word: 'catch' }, { id: 16, word: 'choose' }, { id: 17, word: 'come' }, { id: 18, word: 'cost' }, { id: 19, word: 'cut' }, { id: 20, word: 'dig' },
{ id: 21, word: 'do' }, { id: 22, word: 'draw' }, { id: 23, word: 'dream' }, { id: 24, word: 'drink' }, { id: 25, word: 'drive' }, { id: 26, word: 'eat' }, { id: 27, word: 'fall' },
{ id: 28, word: 'feed' }, { id: 29, word: 'feel' }, { id: 30, word: 'fight' }, { id: 31, word: 'find' }, { id: 32, word: 'fly' }, { id: 33, word: 'forget' }, { id: 34, word: 'forgive' },
{ id: 35, word: 'freeze' }, { id: 36, word: 'get' }, { id: 37, word: 'give' }, { id: 38, word: 'go' }, { id: 39, word: 'grow' }, { id: 40, word: 'hang' }, { id: 41, word: 'have' },
{ id: 42, word: 'hear' }, { id: 43, word: 'hide' }, { id: 44, word: 'hit' }, { id: 45, word: 'hold' }, { id: 46, word: 'hurt' }, { id: 47, word: 'keep' }, { id: 48, word: 'kneel' },
{ id: 49, word: 'know' }, { id: 50, word: 'lay' }, { id: 51, word: 'lead' }, { id: 52, word: 'learn' }, { id: 53, word: 'leave' }, { id: 54, word: 'lend' }, { id: 55, word: 'let' },
{ id: 56, word: 'lie' }, { id: 57, word: 'light' }, { id: 58, word: 'lose' }, { id: 59, word: 'make' }, { id: 60, word: 'mean' }, { id: 61, word: 'meet' }, { id: 62, word: 'must' },
{ id: 63, word: 'pay' }, { id: 64, word: 'put' }, { id: 65, word: 'read' }, { id: 66, word: 'ride' }, { id: 67, word: 'ring' }, { id: 68, word: 'rise' }, { id: 69, word: 'run' },
{ id: 70, word: 'say' }, { id: 71, word: 'see' }, { id: 72, word: 'sell' }, { id: 73, word: 'send' }, { id: 74, word: 'set' }, { id: 75, word: 'shake' }, { id: 76, word: 'shine' },
{ id: 77, word: 'shoot' }, { id: 78, word: 'show' }, { id: 79, word: 'shut' }, { id: 80, word: 'sing' }, { id: 81, word: 'sink' }, { id: 82, word: 'sit' }, { id: 83, word: 'sleep' },
{ id: 84, word: 'slide' }, { id: 85, word: 'smell' }, { id: 86, word: 'speak' }, { id: 87, word: 'spend' }, { id: 88, word: 'spill' }, { id: 89, word: 'spoil' }, { id: 90, word: 'stand' },
{ id: 91, word: 'steal' }, { id: 92, word: 'stick' }, { id: 93, word: 'swim' }, { id: 94, word: 'take' }, { id: 95, word: 'teach' }, { id: 96, word: 'tear' }, { id: 97, word: 'tell' },
{ id: 98, word: 'think' }, { id: 99, word: 'throw' }, { id: 100, word: 'understand' }, { id: 101, word: 'wake' }, { id: 102, word: 'wear' }, { id: 103, word: 'win' }, { id: 104, word: 'write' }];

const verbsPastSimple = [{ id: 1, word: 'was/were' }, { id: 2, word: 'beat' }, { id: 3, word: 'became' }, { id: 4, word: 'began' }, { id: 5, word: 'bent' }, { id: 6, word: 'bit' },
{ id: 7, word: 'blew' }, { id: 8, word: 'broke' }, { id: 9, word: 'brought' }, { id: 10, word: 'built' }, { id: 11, word: 'burned/burnt' }, { id: 12, word: 'burst' }, { id: 13, word: 'bought' },
{ id: 14, word: 'could' }, { id: 15, word: 'caught' }, { id: 16, word: 'chose' }, { id: 17, word: 'came' }, { id: 18, word: 'cost' }, { id: 19, word: 'cut' }, { id: 20, word: 'dug' },
{ id: 21, word: 'did' }, { id: 22, word: 'drew' }, { id: 23, word: 'dreamed/dreamt' }, { id: 24, word: 'drank' }, { id: 25, word: 'drove' }, { id: 26, word: 'ate' }, { id: 27, word: 'fell' },
{ id: 28, word: 'fed' }, { id: 29, word: 'felt' }, { id: 30, word: 'fought' }, { id: 31, word: 'found' }, { id: 32, word: 'flew' }, { id: 33, word: 'forgot' }, { id: 34, word: 'forgave' },
{ id: 35, word: 'froze' }, { id: 36, word: 'got' }, { id: 37, word: 'gave' }, { id: 38, word: 'went' }, { id: 39, word: 'grew' }, { id: 40, word: 'hung' }, { id: 41, word: 'had' },
{ id: 42, word: 'heard' }, { id: 43, word: 'hid' }, { id: 44, word: 'hit' }, { id: 45, word: 'held' }, { id: 46, word: 'hurt' }, { id: 47, word: 'kept' }, { id: 48, word: 'knelt' },
{ id: 49, word: 'knew' }, { id: 50, word: 'laid' }, { id: 51, word: 'led' }, { id: 52, word: 'learned/learnt' }, { id: 53, word: 'left' }, { id: 54, word: 'lent' }, { id: 55, word: 'let' },
{ id: 56, word: 'lay' }, { id: 57, word: 'lit' }, { id: 58, word: 'lost' }, { id: 59, word: 'made' }, { id: 60, word: 'meant' }, { id: 61, word: 'met' }, { id: 62, word: 'had to' },
{ id: 63, word: 'paid' }, { id: 64, word: 'put' }, { id: 65, word: 'read' }, { id: 66, word: 'rode' }, { id: 67, word: 'rang' }, { id: 68, word: 'rose' }, { id: 69, word: 'ran' },
{ id: 70, word: 'said' }, { id: 71, word: 'saw' }, { id: 72, word: 'sold' }, { id: 73, word: 'sent' }, { id: 74, word: 'set' }, { id: 75, word: 'shook' }, { id: 76, word: 'shone' },
{ id: 77, word: 'shot' }, { id: 78, word: 'showed' }, { id: 79, word: 'shut' }, { id: 80, word: 'sang' }, { id: 81, word: 'sank' }, { id: 82, word: 'sat' }, { id: 83, word: 'slept' },
{ id: 84, word: 'slid' }, { id: 85, word: 'smelled/smelt' }, { id: 86, word: 'spoke' }, { id: 87, word: 'spent' }, { id: 88, word: 'spilled/spilt' }, { id: 89, word: 'spoiled/spoilt' },
{ id: 90, word: 'stood' }, { id: 91, word: 'stole' }, { id: 92, word: 'stuck' }, { id: 93, word: 'swam' }, { id: 94, word: 'took' }, { id: 95, word: 'taught' }, { id: 96, word: 'tore' },
{ id: 97, word: 'told' }, { id: 98, word: 'thought' }, { id: 99, word: 'threw' }, { id: 100, word: 'understood' }, { id: 101, word: 'woke' }, { id: 102, word: 'wore' }, { id: 103, word: 'won' },
{ id: 104, word: 'wrote' }];

const verbsPastParticiple = [{ id: 1, word: 'been' }, { id: 2, word: 'beaten' }, { id: 3, word: 'become' }, { id: 4, word: 'begun' }, { id: 5, word: 'bent' }, { id: 6, word: 'bitten' },
{ id: 7, word: 'blown' }, { id: 8, word: 'broken' }, { id: 9, word: 'brought' }, { id: 10, word: 'built' }, { id: 11, word: 'burned/burnt' }, { id: 12, word: 'burst' }, { id: 13, word: 'bought' },
{ id: 14, word: 'been able' }, { id: 15, word: 'caught' }, { id: 16, word: 'chosen' }, { id: 17, word: 'come' }, { id: 18, word: 'cost' }, { id: 19, word: 'cut' }, { id: 20, word: 'dug' },
{ id: 21, word: 'done' }, { id: 22, word: 'drawn' }, { id: 23, word: 'dreamed/dreamt' }, { id: 24, word: 'drunk' }, { id: 25, word: 'driven' }, { id: 26, word: 'eaten' }, { id: 27, word: 'fallen' },
{ id: 28, word: 'fed' }, { id: 29, word: 'felt' }, { id: 30, word: 'fought' }, { id: 31, word: 'found' }, { id: 32, word: 'flown' }, { id: 33, word: 'forgotten' }, { id: 34, word: 'forgiven' },
{ id: 35, word: 'frozen' }, { id: 36, word: 'got' }, { id: 37, word: 'given' }, { id: 38, word: 'gone/been' }, { id: 39, word: 'grown' }, { id: 40, word: 'hanged/hung' }, { id: 41, word: 'had' },
{ id: 42, word: 'heard' }, { id: 43, word: 'hidden' }, { id: 44, word: 'hit' }, { id: 45, word: 'held' }, { id: 46, word: 'hurt' }, { id: 47, word: 'kept' }, { id: 48, word: 'knelt' },
{ id: 49, word: 'known' }, { id: 50, word: 'laid' }, { id: 51, word: 'led' }, { id: 52, word: 'learned/learnt' }, { id: 53, word: 'left' }, { id: 54, word: 'lent' }, { id: 55, word: 'let' },
{ id: 56, word: 'lain' }, { id: 57, word: 'lit' }, { id: 58, word: 'lost' }, { id: 59, word: 'made' }, { id: 60, word: 'meant' }, { id: 61, word: 'met' }, { id: 62, word: 'had to' },
{ id: 63, word: 'paid' }, { id: 64, word: 'put' }, { id: 65, word: 'read' }, { id: 66, word: 'ridden' }, { id: 67, word: 'rung' }, { id: 68, word: 'risen' }, { id: 69, word: 'run' },
{ id: 70, word: 'said' }, { id: 71, word: 'seen' }, { id: 72, word: 'sold' }, { id: 73, word: 'sent' }, { id: 74, word: 'set' }, { id: 75, word: 'shaken' }, { id: 76, word: 'shone' },
{ id: 77, word: 'shot' }, { id: 78, word: 'shown' }, { id: 79, word: 'shut' }, { id: 80, word: 'sung' }, { id: 81, word: 'sunk' }, { id: 82, word: 'sat' }, { id: 83, word: 'slept' },
{ id: 84, word: 'slid' }, { id: 85, word: 'smelled/smelt' }, { id: 86, word: 'spoken' }, { id: 87, word: 'spent' }, { id: 88, word: 'spilled/spilt' }, { id: 89, word: 'spoiled/spoilt' },
{ id: 90, word: 'stood' }, { id: 91, word: 'stolen' }, { id: 92, word: 'stuck' }, { id: 93, word: 'swum' }, { id: 94, word: 'taken' }, { id: 95, word: 'taught' }, { id: 96, word: 'torn' },
{ id: 97, word: 'told' }, { id: 98, word: 'thought' }, { id: 99, word: 'thrown' }, { id: 100, word: 'understood' }, { id: 101, word: 'woken' }, { id: 102, word: 'worn' }, { id: 103, word: 'won' },
{ id: 104, word: 'written' }];

let randomQuestionIndex = Math.random();

export default function VerbsFormsGame({ currentPlayerName }) {
    const [currentVerbIndex, setIndexValue] = useState(0);

    const handleNextVerb = () => {
        randomQuestionIndex = Math.random();
        if (currentVerbIndex <= 103) {
            setIndexValue(currentVerbIndex + 1);
            toggleInputVisible(true);
            toggleInfinitiveVisible(false);
            setInputValue('');
            if (value === correctAnswer) {
                setCountValue(correctAnswerCount + 1);
            }
        } else {
            alert('Игра завершена!')
        }
    }

    const [value, setInputValue] = useState('');

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const [correctAnswerCount, setCountValue] = useState(0);

    const [infinitiveHide, toggleInfinitiveVisible] = useState(false);
    const [pastSimpleHide, togglePastSimpleVisible] = useState(true);
    const [pastPartHide, togglePastPartVisible] = useState(true);
    const [inputHide, toggleInputVisible] = useState(true);

    useEffect(() => {
        if (infinitiveHide === false) {
            let timeoutId1 = setTimeout(() => {
                toggleInfinitiveVisible((current) => !current);
                togglePastSimpleVisible((current) => !current);
            }, 2000);
    
            return () => clearTimeout(timeoutId1);
        }
    }, [infinitiveHide]);

    useEffect(() => {
        if (pastSimpleHide === false) {
            let timeoutId2 = setTimeout(() => {
                togglePastSimpleVisible((current) => !current);
                togglePastPartVisible((current) => !current);
            }, 2000);
    
            return () => clearTimeout(timeoutId2);
        }
    }, [pastSimpleHide]);

    useEffect(() => {
        if (pastPartHide === false) {
            let timeoutId3 = setTimeout(() => {
                togglePastPartVisible((current) => !current);
                toggleInputVisible((current) => !current);
            }, 2000);
    
            return () => clearTimeout(timeoutId3);
        }
    }, [pastPartHide]);

    // useEffect(() => {
    //     let timeoutId4 = setTimeout(() => {
    //         toggleInputVisible((current) => !current);
    //         toggleInfinitiveVisible((current) => !current);
    //     }, 11000);

    //     return () => clearTimeout(timeoutId4);
    // }, []);


    const verbForm = randomQuestionIndex < 0.5 ? 'Past Simple' : 'Past Participle';
    const correctAnswer = verbForm === "Past Simple" ? verbsPastSimple[currentVerbIndex].word : verbsPastParticiple[currentVerbIndex].word;
    const question = `Напишите глагол "${engVerbsInfinitive[currentVerbIndex].word}" в ${verbForm}`;

    return (
        <div className="verbsFormsStyle">
            <div className='topBar'>
                <h4>Правильных ответов: {correctAnswerCount}</h4>
                <h5>Игрок: {currentPlayerName}</h5>
            </div>
            <h3 className="roundCountStyle">Раунд {currentVerbIndex}</h3>
            <div className={`infinitiveStyle ${infinitiveHide ? 'hide' : ''}`}>
                <h3>Verb</h3>
                <h1 className="verbStyle">{engVerbsInfinitive[currentVerbIndex].word}</h1>
            </div>
            <div className={`pastSimpleStyle ${pastSimpleHide ? 'hide' : ''}`}>
                <h3>Past Simple Form</h3>
                <h1 className="verbStyle">{verbsPastSimple[currentVerbIndex].word}</h1>
            </div>
            <div className={`pastPartStyle ${pastPartHide ? 'hide' : ''}`}>
                <h3>Past Participle Form</h3>
                <h1 className="verbStyle">{verbsPastParticiple[currentVerbIndex].word}</h1>
            </div>
            <div className={`answerInputStyle ${inputHide ? 'hide' : ''}`}>
                <h2>{question}</h2>
                <input
                    type="text"
                    onChange={handleChangeInput}
                    value={value}></input>
                <p onClick={handleNextVerb}>Далее</p>
            </div>
        </div>
    )
}