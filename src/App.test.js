import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//"it" is a global function, it will callit any time when create a test
//Don't need to require or import because is GLOBAL
//The first argument of it function are to be the same, the first is a description, type string
//The second argument is the logic, the body to execute
//Don't need to specify the name if the file to test, because the file is in this case App.js and by default it already import the file.

//The test use JEST and it runs in the terminal, Jest simule the browser 
it('renders without crashing', () => {
// Create the div to simulate a div, because the test run in terminal not in browser it's a fake div
  const div = document.createElement('div');
// React dom render an app component in a JSDOM inside of that the render
  ReactDOM.render(<App />, div);
// Look inside the div
// and checks to see if the CommentBox is in there  
console.log(div.innerHTML)
//  expect(div.innerHTML).toContain('Hi there!')

//Line of code below is going to find app component and remove app component entirely
//Is a clean up after the test run, if not clean, the component can run during test and can affect the performance of test
  ReactDOM.unmountComponentAtNode(div);
});
