function GameManage(props){
    return(
        <div className="buttons">
            <button disabled={props.started} onClick={props.startGame}>START GAME</button>
            <button disabled={!props.started} onClick={props.restartGame}>RESTART</button>
            {/* <button disabled={!props.started} onClick={props.endGame}>END GAME</button> */}
        </div>
    )
}
export default GameManage;
