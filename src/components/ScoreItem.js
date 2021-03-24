export default function ScoreItem({key, value}){
    return(<>
        <div className='score-key'>{key}</div>
        <div className='score-value'>{value}</div>
    </>)
}