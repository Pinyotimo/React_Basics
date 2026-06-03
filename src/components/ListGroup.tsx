{/*Create a component that displays a list of students from an array.*/}

function ListGroup() {
  const students = [
    'Steve',
    'Felix',
    'Bismarck',
    'Kikie',
    'Kinyua'
  ];

  return (
    <div 
      style={{
        fontFamily: 'Arial',
        color: 'maroon',
        background: 'aquamarine',
        margin: '45px',
        borderRadius: '40px',
        padding: '7px',
        textAlign: 'center'
      }}
    >
      <h1>List</h1>
      <ul className="list-group">
        {students.map((student, index) => (
          <ul key={index} onClick={() => console.log(student, index)}>{student}</ul>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
