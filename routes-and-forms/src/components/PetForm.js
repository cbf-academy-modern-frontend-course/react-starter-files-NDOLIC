import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    return(<div>Thank you for submit</div>)
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <React.Fragment>
          <label>Pet's Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label>Age: <input type="number" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
          <label>Colours: <input type="text" value={color} onChange={(e) => { setColours(e.target.value); setSubmitted(false) }} /></label>
        </React.Fragment>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        <h3>Results</h3>
            Name: {name}<br />
      </div>
    </div>
  );
}

export default PetForm;