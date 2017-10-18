import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header'
import './App.css';
import Postlist from './postlist'

class App extends Component {
	state = {
		pageHeader: 'Naming posts'
	};
	componentDidMount() {
		
	}
	componentWillMount() {
		
	}


  	render() {
	    return (
	    	<div className="App">
	    		<Header message={this.state.pageHeader}/>
	    		{this.props.contests.map(contest =>
	    			<Postlist {...contest}/>
	    		)}

	    	</div>
	    );
  	}
}

export default App;
