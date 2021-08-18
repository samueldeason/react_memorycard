import  Card  from './components/card'

function App(){


    return(
        <div>
            <div className="bannersection">
                <h1>React Memory Game</h1>
                <p>This game is design to test your memory <br/>
                the highest score is 10!! <br/>🧠Good Luck🧠</p>
            </div>
            <Card />
        </div>
    );
}
export default App;