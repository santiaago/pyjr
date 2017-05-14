import React, { Component } from 'react';
import $ from 'jquery'

import './App.css';

import Players from './Players.js'

class App extends Component {
    constructor(props){
	super(props)
	this.state = {players: []}
    }
    getPlayers(){
	$.ajax({
	    url: '/api/players',
	    type: "GET",
	    success: function(response){
		if(response.players){
		    console.log('players ' + response.players)
		    this.setState({players: response.players})
		}else{
		    console.log('players not available ')
		}
	    }.bind(this),
	    dataType: 'json'
	})
    }
    render() {
	return (
	    <div className="App">
		<div className="App-header">
		    <h2>python, javascript, react demo</h2>
		</div>
		<p className="App-intro">
		    hello, world
		</p>
		<a onClick={() => this.getPlayers()}>get players</a>
		<Players players={this.state.players} />
	    </div>
	);
    }
}

export default App;
