import React from 'react'

export function GeneratedWord({newWord}){

    return(
        <section className="generated-word">
        <label>Nome gerado:</label>
        <div className="card-suggestion">
            <div className="card-word">{newWord}</div>
            <span className=".icon-fix material-symbols-outlined">
                {/* flag_circle */}
            </span>
        </div>
        </section>
    )
 
}
