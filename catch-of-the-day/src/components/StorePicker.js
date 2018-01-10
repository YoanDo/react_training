import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
// <div><p>Hello world</p><h1>yo</h1></div>
        <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit store → </button>
        </form>

      )

  }
}

export default StorePicker;
