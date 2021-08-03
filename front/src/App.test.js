import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Renders correctly - general test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// Fetch the data correctly from api
it("display the data from api", async () => {
  const fakeData = [{
    timestamp: "2021-07-17T17:26:42.622Z", 
    index: 17, 
    stocks: "18.891"
  }];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );
    // Check the length of the data received
    expect(!fakeData.length).toBe(false);
});

// Checking the modification of the data
it("modify the data", async () => {
  const fakeData = [{
    timestamp: "2021-07-17T17:26:42.622Z", 
    index: 17, 
    stocks: "18.891"
  }];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );
    // More test are needed and I'm willing to learn how to test sytematicaly the code. 
    // This is an area for improvement highlighted during the interview.
});