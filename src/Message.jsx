//PascalCasing
{/*Create a component called Welcome that displays a welcome message. */}
function Message() {

    const name = 'Jay';
    if (name)
        return <h1 style={{ 
            color:'tomato',
            fontSize:'2rem', 
            fontStyle:'italic', 
            alignItems: "center"
        }}>
            Welcome back, {name}
            </h1>
    return <h1>Welcome New User, Update your username</h1>


}

export default Message;