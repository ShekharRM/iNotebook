import React, { useState } from "react";


export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleInvertClick = () => {
        let newText = '';
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
        props.showAlert("Converted to Inverrtcase", "success");
    }
    const handleCopyClick = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary mx-2 my-2" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'blue', color: props.mode === 'dark' ? 'white' : 'white' }} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'blue', color: props.mode === 'dark' ? 'white' : 'white' }} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'blue', color: props.mode === 'dark' ? 'white' : 'white' }} onClick={handleInvertClick}>Convert to InvertCase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'blue', color: props.mode === 'dark' ? 'white' : 'white' }} onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'blue', color: props.mode === 'dark' ? 'white' : 'white' }} onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'enter something above in the textbox to preview it'}</p>
            </div>
        </>
    );
}
