import './App.css';
import Menu from "./components/Menu";
import CardList from "./components/CardList";
import React, {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import Results from "./components/Results";
import Counter from "./components/Counter";


function App() {
    const level = useSelector(state => state.memory.level);
    const [start, setStart] = useState(false)
    const [result, setResult] = useState(false)
    const [counter, setCounter] = useState(null);
    const handlerRes = useCallback((params) => setResult(params), []);

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
                setCounter(30);
                break;
            default:
                alert("error");
        }
    }, [level])

    return (
        <>
            {result ? <Results/> : (start ? <><Counter result={handlerRes} param={counter}/><CardList/></> :
                <Menu begin={begin}/>)}
        </>
    );
}

export default App;
