import React, { Component } from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];


class App extends Component {
  render() {
    return (
      <div className="App">
          <table>
              {list.map(item =>
                  <tr key={item.objectID}>
                  <td>
                      <a href={item.url}>{item.title}</a>
                  </td>
                      <td>{item.author}</td>
                      <td>{item.num_comments}</td>
                      <td>{item.points}</td>
                  </tr>
              )}
          </table>
      </div>
    );
  }
}

export default App;
