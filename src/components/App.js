import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory/Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Inventory/Fish';
import base from './base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
    {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`]=fish;
    this.setState({fishes});
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});

  }

  render() {
    return(
      <div className="catch-of-the-day"> 
          <div className="menu">
              <Header tagline="Fresh Seafood Market" />
              <ul className="list-of-fishes">
                {
                  Object
                    .keys(this.state.fishes)
                    .map(key => <Fish 
                                  key={key}
                                  index={key} 
                                  details={this.state.fishes[key]} 
                                  addToOrder={this.addToOrder} />)
                }
              </ul>
          </div>
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory  addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
  }

export default App;