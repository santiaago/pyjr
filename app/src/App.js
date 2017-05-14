import React, { Component } from 'react';
import $ from 'jquery'

import './App.css';

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

class Player extends Component{
    render(){
	return <div>Name: {this.props.name}</div>
    }
}

class Players extends Component{
    render() {
	if(!this.props.players.length) {
	    return <div className='Players'>no players to show</div>
	}

	const playersNodes = this.props.players.map(function(player, i){
	    return <Player key={'player-' + i} name={player.name} />
	})
	return <div className='Players'>{playersNodes}</div>
    }
}

export default App;
