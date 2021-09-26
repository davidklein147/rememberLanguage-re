import React from 'react';
import { InputWord } from "../../classes/inputsClasses";

const InputNewWord = () => {

    const inputWord = new InputWord(JSON.parse(localStorage.getItem("userData")).userId, true)
    console.log(inputWord);

    return (
        <React.Fragment>
            <div className="row text-center gx-0" >
                <div className="col">
                    <div class="card text-dark bg-light ms-5 mb-3 px-0" 
                    style ={{
                        borderTopRightRadius:  "0px",
                        borderBottomRightRadius:  "0px",
                        borderRight: "none"
                        }} >
                        <div class="card-header text-start" style = {{borderLeft: "none"}}>Header</div>
                        <div class="card-body" style = {{borderRight: "0.5px solid rgba(0,0,0,.125)"}}>
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className = "col" style={{position:"absolute" , zIndex : "1", }}>fgdgdf</div>

                <div className="col">
                <div class="card text-dark bg-light me-5 mb-3 px-0" 
                style ={{
                    borderTopLeftRadius:  "0px", 
                    borderBottomLeftRadius:  "0px",
                    borderLeft: "none"
                    }} >
                        <div class="card-header text-start" style = {{borderLeft: "none"}}>Header</div>
                        <div class="card-body" style = {{borderLeft: "0.5px solid rgba(0,0,0,.125)"}}>
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default InputNewWord