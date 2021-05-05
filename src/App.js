import './App.css';
import Menu from "./components/Menu";
import CardList from "./components/CardList";
import React, {useCallback, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Results from "./components/Results";
import Counter from "./components/Counter";
import {selectLevel, stepStart, listRestart} from './reducers/cardSlice';


function App() {
    const level = useSelector(state => state.memory.level);
    const [start, setStart] = useState(false)
    const [result, setResult] = useState(false)
    const [counter, setCounter] = useState(null);
    const handlerRes = useCallback((params) => setResult(params), []);
    const dispatch = useDispatch()

    const begin = useCallback((params) => {
        setStart(params);
        switch (level) {
            case 'beginner':
                setCounter(100);
                break;
            case 'intermediate':
                setCounter(60);
                break;
            case 'advanced':
                setCounter(5);
                break;
            default:
                alert("error");
        }
    }, [level])

    const restart = () => {
        dispatch(selectLevel(null))
        dispatch(stepStart())
        dispatch(listRestart())
        setStart(false)
        setResult(false)
    }

    return (
        <div className='wraper'>
            {result ? <Results restart={restart}/> : (start ? <><Counter result={handlerRes}
                                                                         param={counter}/><CardList/></> :
                <Menu begin={begin}/>)}
        </div>
    );
}

export default App;
