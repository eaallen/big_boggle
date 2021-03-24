import React from 'react'
import * as Rules from '../js/boggle_rules/BobbleRules'
import DICE from '../data'
import Box from './box'
import Timer from './Timer'
export default function Game(props){
    const [dice, setDice] = React.useState(Rules.roleDice(DICE.split(' ')))
    const [resetTimer, setResetTimer] = React.useState(false)
    // const [timer, setTimer] = React.useState(5000)
    const Roll = () => {
        setDice(Rules.roleDice(DICE.split(' ')))
        setResetTimer(true)
    }
    return (
        <div className="game">
            <Timer timer_time={3*60*1000} reset={[resetTimer, setResetTimer]}/>
            <Box dice={dice} />
            <br/>
            <div className='button' onClick={Roll}>roll!</div>
        </div>
    );
}