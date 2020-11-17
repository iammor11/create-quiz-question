import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Task = () => {

  const [question, setQuestion] = useState();
  const [quesType, setQuesType] = useState();
  const [options, setOptions] = useState([{'option': ''}])
  const [ans, setAns] = useState()

  const handleChange = (e, updateValue) => {
  updateValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question, quesType, options, ans)
  }

  const handleOptionInput = (i, e) => {
    let updateOptions = options.slice();
    updateOptions[i].option = e.target.value
    setOptions(updateOptions);
  }

  const showOption = (i) => {
    return <input key={i} className="options" type="text" name={options[i]} placeholder='option' required="required" onChange={ e => {handleOptionInput(i, e)}} />    
  }

  const addOption = () => {
        setOptions([...options, {'option' : ''} ]);
  }

  return(
    <>    
    <form id="form">
    <div id="btn-grp">
    <button className="btn" onClick={handleSubmit}>Save</button>&nbsp;
    <button className="btn"><NavLink to="/" >Cancel</NavLink></button> 
    </div>
    <br />
    
        <div>
          <label>Question will be typed here: </label>
          <br />
          <input type="text" name="question" defaultValue={question} placeholder="Enter question" required="required" onChange={ e => {handleChange(e, setQuestion)}} />
        </div><br />

        <div>
          <label>Correct Answer will here: </label>
          <br />
          <input type="text" name="ans" defaultValue={ans} placeholder="Enter Correct Answer" required="required" onChange={ e => {handleChange(e, setAns)}} />
        </div><br />

        <div>
          <select name="quesType" id="quesType" required="required" onChange={ e => {handleChange(e, setQuesType)}}>
          <option value="Short Answer">Short Answer</option>
          <option value="Paragraph">Paragraph</option>
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="Checkboxes">Checkboxes</option>         
          </select>
        
        {options.map((ll, i) => {
                return showOption(i)
              })}
        <br />
        <button type="button" style={{margin: '5px 0 0 40%'}} name="Add option" value="Add option" onClick={addOption} >Add Option</button>
        </div>
      </form>
        </>
    )
}
export default Task