import { useEffect, useState } from 'react'
import { wordTraker } from '../../js/boggle_rules/BobbleRules'
export default function Die({ face_values, mouseStatus, setMouseStatus }) {
    const [_class, setClass] = useState("not-selected")
    console.log('Die Render', mouseStatus, _class)
    
    // const face = useRef(getFace(face_values))
    // useEffect((()=>{
    //     console.log('render')
    //     // face.current = getFace(face_values)
    //     setClass("not-selected")
    // }),[face_values])

    const addLetter = () => {
        if (mouseStatus) {
            if(_class!=='selected'){
                wordTraker.createWord(face_values)
            }
            console.log(wordTraker.word)
            setClass('selected')
        }
    }
    const wordStart = async() => {
        console.log('start word mouseStatus:', mouseStatus)
        await setMouseStatus(true)
        addLetter()
    }
    return <div 
        onMouseEnter={addLetter} 
        onMouseDown={wordStart} 
        className={`noselect die not-selected`} >{face_values}</div>;
}


