import React from 'react'
import Store from "./store";

class Observation {
  constructor(data) {
    this.store = new Store(data);
  }

  setData(data) {
    this.store.setData(data);
  }

  connect(Component) {
    const store = this.store;
    return class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: store.data
        }
      }

      componentDidMount() {
        store.subscribe(() => this.setState({data: store.getData()}))
      }

      render () {
        const data = store.data;
        console.log(data);
        return (
          <Component data={data}/>
        )
      }
    }
  };
}

export default Observation
