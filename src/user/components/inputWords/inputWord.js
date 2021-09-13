import React from 'react';
import { InputWord } from "../../../classes/inputsClasses";

const InputNewWord = ()=>{
    
    const inputWord = new InputWord(JSON.parse(localStorage.getItem("userData")).userId,true)
    console.log(inputWord);
    
    return (
        <React.Fragment>
            `jfjflsjf;lsjaflksjflj;`
        </React.Fragment>
    )
}

export default InputNewWord