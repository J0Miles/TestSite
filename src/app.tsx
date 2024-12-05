import React from "react";


const print = console.log('test')
const App = () => {
    return (
        <div>{print}
            <h1>
                Welcome to React App thats built using Webpack and Babel separately
            </h1>
        </div>
    );
}

export default App