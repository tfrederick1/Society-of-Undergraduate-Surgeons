import React from 'react';
import { PropTypes } from 'prop-types';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            txt: "this is the state text"
        }
    }

    update(e)
    {
        this.setState({txt: e.target.value})
    }

    render()
    {
        let txt = this.props.txt

        return (
            <div>
                <Button>Heyo</Button>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
}

// Miscellaneous stuff I was messing around with
const Widget = (props) => <input type="text" onChange={props.update} /> 
const Button = (props) => <button>{props.children}</button>

export default App

// More miscellaneous stuff I was messing around with (put between <div> </div> to see what it does)
/*
<h1>Hello there</h1>
<h1>*cough cough* General Kenobi!</h1>
<h2>{txt}</h2>
<Button>Heyo</Button>
<Widget update={this.update.bind(this)} />
<h2>{this.state.txt}</h2>
 */