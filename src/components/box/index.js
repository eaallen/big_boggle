import React from 'react'
import { wordTraker } from '../../js/boggle_rules/BobbleRules';
import Die from "../die";
export default function Box(props) {
    const [mouseStatus, setMouseStatus] = React.useState(false)
    console.log('Box Render',mouseStatus)
    // let mouseStatus = useRef(false)
    // let dice_ref = useRef(props.dice)
    const wordDone = () => {
        console.log('mouseStatus',mouseStatus)
        setMouseStatus(false)
        console.log('mouseStatus',mouseStatus)
        wordTraker.addWord()
        console.log('word tracker:',wordTraker.words_points)
    }
    const wordStart = () => {
        setMouseStatus(true)
    }
    // const setMouseStatus = (bool) => mouseStatus.current = bool
    return (
        <div className="box" onMouseUp={wordDone} >
            {props.dice.map((x, i) => (
                <Die
                    face_values={x}
                    key={i}
                    mouseStatus={mouseStatus}
                    onMouseDown={wordStart}
                    setMouseStatus={setMouseStatus}
                />
            ))}
        </div>
    );
}
