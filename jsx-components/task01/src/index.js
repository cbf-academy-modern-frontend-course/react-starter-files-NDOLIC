import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'M. Claire';

function Profile(name){
            if (name) {
              return <main id='content' role= "main" className="base">
                <h1>{name}'s React Page</h1>
                <p>I am learning react</p>
                </main>
              
            }
            return <main id='content' role="main" className='base'>
            <h1>Justa  React Page</h1>
            <p>Nothing to see here!</p>
            </main>
}
ReactDOM.render(
  [
    Profile(name),
    Profile()
  ],document.getElementById('root')
);

