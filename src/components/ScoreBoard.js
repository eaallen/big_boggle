export default function ScoreBoard({ data }) {
    return (<div>
        <p>Score</p>
        <div className='score-grid'>
            {Object.entries(data).map(x => (<div key={x[0]}>
                <div className='score-key'>{x[0]}</div>
                <div className='score-value'>{x[1]}</div>
            </div>))}
        </div>
    </div>)
}