import React, {useState} from 'react'



export default function TextForm(props){

    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case","success");
    }
    const handleClearClick = () => {
        let newText = ' ';
        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const[text,setText] = useState('');
    
    return(
        <>
        
            <div className="container" style = {{color: props.mode ==='light'?'black':'white'}}>
                <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode ==='light'?'white':'#d6d0d0' , color: props.mode ==='light'?'black':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-2" style = {{color: props.mode ==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0 }).length} Minutes to read</p>
            </div>

        </>
    )
}