import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = (fish) => {
		const fishes = { ...this.state.fishes }; // '...' object spread, takes copy of the object
		fishes[`fish${Date.now()}`] = fish;
		this.setState({
			fishes: fishes // let the copy of fishes equal the state.fishes
		});
	};
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;