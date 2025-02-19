import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpper = () => {
        console.log('convert to upper case', text.toUpperCase())
        setText(text.toUpperCase())
    };

    const handleLower = () => {
        console.log('convert to upper case', text.toUpperCase())
        setText(text.toLowerCase())
    };

    const getEmail = () => {
        let textArray = text.split(" ");
        for(let word of textArray) {
            if (word.includes('@') && word.includes('.com')){

                let email = window.confirm(`Is this your email? ${word}`);
                console.log('email is ', email)
            }
        }
    };

    const clearText = () => {
        setText('');
    };

    const removeExtraSpace = () => {
        let sp = text.replace(/\s+/g, ' ').trim()
        setText(sp);
    }

    const copyText = () => {
        var message = document.getElementById('my-text');
        message.select();
        navigator.clipboard.writeText(message.value);
    };

    const onChanges = (event) => {
        console.log('on changes', event.target.value);
       setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
      <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>{props.heading}</h3>
              <div className="mb-3">
                  {/* <label htmlFor="my-text" className="form-label">Example textarea</label> */}
                  <textarea className="form-control" placeholder="Enter the text here" value={text} onChange={onChanges} id="my-text" rows="8"
                      style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
              </div>
            <button className="btn btn-primary my-1" onClick={handleUpper}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLower}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={getEmail}>Email extract</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={copyText}>copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your text summary</h3>
            {
                text.length > 0 ? (
                    <p>{text.split(/\s+/g).length} words and {text.length} charecters</p>
                ) : ''
            }
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
      </>
  )
}
