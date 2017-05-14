import React, { Component } from 'react';
import $ from 'jquery'

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

export default Players;
