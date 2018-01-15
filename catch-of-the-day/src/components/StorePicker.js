import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  gotToStore(event) {
    event.preventDefault()
    console.log("Url changed")
    //1 - grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`going to ${storeId}`)
    //2 - transition from / to store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
        <form className="store-selector" onSubmit={(e) => this.gotToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit store → </button>
        </form>

      )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
