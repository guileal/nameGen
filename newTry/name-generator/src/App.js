import React, { useState } from 'react'
import './App.css';
import { GeneratedWord } from './components/GeneratedWord'
import WordGenerator from './components/WordGenerator';
import { wordGenerator1 } from './nameGen'


function App() {
    // methods
    const [count, setCount] = useState(2)
    const [newWord, setNewWord] = useState(wordGenerator1(count))
    function handleClick() {
        setNewWord(wordGenerator1(count))

    }

    function handleCount(value) {
        setCount(value)
    }
    return (
        <div className="App">
            <header>
                <h1>Name Generator</h1>
                <span>Gere nomes aleatórios em poucos cliques</span>
            </header>

            <div className="content-wrapper">
                <section className="create-word">
                    <span>Defina a quantidade de sílabas</span>

                    <WordGenerator
                        handleClick={handleClick}
                        handleCount={handleCount}
                        count={count}
                    />
                </section>

                <GeneratedWord newWord={newWord} />

                <section className="credits">
                    Designed and developed by Guilherme Leal
                    Special thanks to VitaoPB/Martins


                </section>
            </div>

        </div >
    );
}

export default App;
