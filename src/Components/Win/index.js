function WinGame (props){
    
    return(
        <div className="Win"> 
            <h1>CONGRATULATIONS</h1>
            <h2>YOU WON THE GAME!</h2>
            <h2>If you want to start new game click the START</h2>
            <button onClick={props.start}>START</button>
        </div>
    )
}
export default WinGame;