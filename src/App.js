// use a hook to store user selection of twitter topics
import React, { useState } from 'react';
import './App.css';
import slapImg from "./components/willvchris.jpeg"
import Donut from './components/charts/Pie'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import {  OscarsSlapDonut, 
          Oscars2022Donut, 
          WillSmithDonut, 
          ChrisRockDonut  } from './data';

const twitterTopics = [
  { value: OscarsSlapDonut, label: "Oscars 2022 Slap" },
  { value: Oscars2022Donut, label: "Oscars 2022" },
  { value: WillSmithDonut, label: "Will Smith"},
  { value: ChrisRockDonut, label: "Chris Rock"},
];


function App() {
  // Declare a new array of Topics selected called topic
  const [topic ,setTopic] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h1>Will Smith v. Chris Rock: Tweets from the 2022 Oscars</h1>
        <img src = {slapImg} alt = "Will Smith and Chris Rock at Oscars 2022" />
        <div className = "section">
          <h3>Topic</h3>
          <Select 
            components = {makeAnimated()}
            onChange = {setTopic}
            options = {twitterTopics}
            defaultValue={[twitterTopics[2], twitterTopics[3]]}
            placeholder = "select Twitter topics" 
            isMulti
            autoFocus
            isSearchable 
            />
          {/* <ResponsiveContainer width = "100%" height = "100%"> */}
            <PieChart width = {730} height = {300}>
              {/* conditionally render chart if user input exists */}
              {topic[0] &&
              <Pie 
                data = {topic[0].value}
                dataKey = "value" 
                nameKey = "status" 
                cy = {150}
                cx = {730/4}
                innerRadius = {40} 
                outerRadius = {80} 
                fill = "#fff"
                label 
              >
              </Pie>}
              <Tooltip />
              {topic[1] &&
              <Pie
                data = {topic[1].value} 
                dataKey = "value" 
                nameKey = "status" 
                cy = {150}
                cx = {730 -(730/4)}
                innerRadius = {40} 
                outerRadius = {80} 
                fill = "#fff" 
                label
              >
              </Pie>
              }
            </PieChart> 
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}

export default App;
