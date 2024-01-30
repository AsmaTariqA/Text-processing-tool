import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById("textArea");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied!", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared!", "success");
  };

  const handleSpeechClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    props.showAlert("Played!", "success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    const wordCount = newText.trim().split(/\s+/).filter(Boolean).length;

    setText(newText);
    setWordCount(wordCount);
  };

  const [wordCount, setWordCount] = useState(0);

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#030332' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#030332' }}>{props.heading}</h1>
        <div className="mb-3">
        <textarea
  className="form-control"
  value={text}
  onChange={handleOnChange}
  id="textArea"
  style={{
    backgroundColor: props.mode === 'light' ? '#dfdfdf' : 'light',
    color: props.mode === 'dark' ? 'white' : '#030332'
  }}
  rows="8"
></textarea>

        </div>
        <div className='btn-container'>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSpeechClick}>Play</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#030332' }}>
          <h2>Your text summary</h2>
          <p>{wordCount} words, {text.length} characters </p>
          <p>Can be read in {0.008 * text.length} minutes</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something in the textBox above to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

