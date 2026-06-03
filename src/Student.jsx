
function Student(){

    const name = 'Jay';
    const age = '21';
    const course = 'Bachelor Of Science in Computer Science';
    const department = 'School of Computing and Mathematics';

    
        return (
            <div style={{ 
                fontFamily: 'Arial', 
                color:'aquamarine', 
                background: 'darkblue', 
                margin: '45px', 
                borderRadius:'40px 10px 40px 10px', 
                padding:'7px', textAlign:'center'
                }}>
                 <h4>Welcome, {name}</h4>
                 <p>Age: {age} yrs</p>
                 <p>Course: {course}</p>
                 <p>Department: {department}</p>

            </div>
        );

       
}

export default Student;