import React from 'react'
import Button from './Button'

function WordGenerator({handleClick, handleCount, count}) {

    return (
        <section className="create-word">
            <div className="set-syllable-amount">
                <button
                    alt="diminuir"
                    onClick={() => handleCount(count - 1)}
                    >-
                </button>

                <input type="number" onChange={(event) => handleCount(Number(event.target.value))} value={count}></input>

                <button
                    alt="aumentar"
                    onClick={() => handleCount(count + 1)}
                >+
                </button>
            </div>
            <Button onClick={handleClick} />
        </section>


    )
}

export default WordGenerator

