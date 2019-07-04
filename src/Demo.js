import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = ({name}) => {
    return <div className="myclass">
    <h1>HELLO {name}</h1>
    <p>This is my first react script</p>
    </div>
}

export default Demo;
