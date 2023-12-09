import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","Success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","Success");

  };

  const handleclear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(""); //1..here from text goes to textarea that is final text we want to display

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'blue'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          {/*2..from here it goes to onchange goes  */}
          <textarea
            className="form-control"
            value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'blue'}}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
          ></textarea>
        </div>

        {/* from when button is clicked it goes click and sets the text */}
        <button
          type="button"
          class="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          type="button"
          class="btn btn-primary mx-2"
          onClick={handleDownClick}
        >
          Convert to LowerCase
        </button>

        <button
          type="button"
          class="btn btn-primary mx-2"
          onClick={handleclear}
        >
          Clear Text
        </button>
      </div>

      <div className="conatiner my-5" style={{color:props.mode === 'dark'?'white':'blue'}}>
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} and {text.length}characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
