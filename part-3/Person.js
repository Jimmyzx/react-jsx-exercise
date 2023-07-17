const Person = ({ name, age, hobbies }) => {
    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>{age >= 18 ? "Please go vote!" : "You must be 18 to vote"}</h3>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <br />
      </div>
    );
  };