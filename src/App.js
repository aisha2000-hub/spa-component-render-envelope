
import React from 'react';
import Envelope from "./components/envelope";

function App() {
    return (
        <div className="App">
            <Envelope fromPerson={"Mr.Sender"} addressLabel1={"Boston, MA 02118"} toPerson={"Mrs.Rocolver"} addressLabel2={"San Francisco,CA 94101"} stample={"stample.jpeg"}/>

        </div>
    );
}

export default App;