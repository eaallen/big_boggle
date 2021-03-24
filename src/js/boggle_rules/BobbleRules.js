
const roleDice = (arr) => {
    const rolled_dice = []
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let num = Math.floor(Math.random() * arr.length)
        rolled_dice.push(arr.splice(num, 1)[0])
    }

    const faces = []
    for(const die of rolled_dice){
        faces.push(getFace(die))
    }

    return faces
}

const getFace = (face_values) =>{
    let ran_num = Math.floor(Math.random() * face_values.length)
    return face_values[ran_num]
}

class WordTraker {
    words_points = {}
    word = ''
    addWord = () => {
        // TODO calc points 
        this.words_points[this.word] = 1
        this.word = ''
    }
    createWord = (letter) => {
        this.word += letter
    }
    getWords = () => {
        return this.words_points
    }
}

const wordTraker = new WordTraker()
export { roleDice, wordTraker }