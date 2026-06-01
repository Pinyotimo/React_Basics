

function Profile({ image, name, description}) {
    return (
        <div style={{
            border: '1px',
            borderRadius: '10px',
            padding: '16px',
            textAlign: 'center'

        }}>
            <img 
            src={image} 
            alt={name}
            style={{
             width: '110px',
             height: '110px',
             borderRadius: '50%',
             objectFit: 'cover',
             alignItems: 'center',
             
            }}
         />
         <h3>{name}</h3>
         <p style={{ 
            fontFamily: 'sans-serif', 
            fontStyle: 'italic', 
            color: 'green'
            }}>
                {description}</p>
        </div>
    );
}

export default Profile;