import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
const Cell = function (props) {
    return (
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

const Chessboard = () => {
    const [cells, setCells] = React.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ])

    const [n, setN] = React.useState(0)
    const [finished, setFinished] = React.useState(false)
    const tell = (cells) => {
        for (let i = 0; i < 3; i++) {
            if (cells[i][0] === cells[0][1] && cells[i][1] === cells[i][2]
                && cells[i][0] !== null
            ) {
                console.log(cells[i][0] + '赢了')
                setFinished(true)
                break
            }
        }
        for (let i = 0; i < 3; i++) {
            if (cells[0][i] === cells[0][i] && cells[0][i] === cells[0][i]
                && cells[0][i] !== null
            ) {
                console.log(cells[0][i] + '赢了')
                setFinished(true)
                break
            }
        }
    }
    const onClickCell = (row, col) => {
        setN(n + 1)
        const copy = JSON.parse(JSON.stringify(cells))
        setCells(copy)
        copy[row][col] = n % 2 === 0 ? 'x' : 'o'
        setCells(copy)
        tell(copy)
    }
    return (
        <div>
            {cells.map((items, row) => <div className="row">
                {items.map(
                    (item, col) => <div className="col">
                        <Cell text={item} onClick={() => onClickCell(row, col)} />
                    </div>)
                }</div>)}
        </div>
    )
}
ReactDom.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))