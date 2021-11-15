import './App.css';
import Conversion from "./components/Conversion";
import {useState} from "react";
import Newcurrency from "./components/Newcurrency";


function App() {
    const [page, setPage] = useState(false)
    const changePage = () => {
        setPage(!page)
    }
    return (
        <div className="App container mt-5">
            {!page ? <Conversion/> : <Newcurrency/>}
            <button onClick={changePage} className='mt-2 btn-dark'>{!page? 'Свежие валюты' : 'Конвертация валют'}</button>
        </div>
    );
}

export default App;
