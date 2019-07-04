import React from 'react';
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
    return(
            <div className="card bg-light-blue ma4 dib pa4 grow shadow-4">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="blah"/>
                <h1 className="tc">{props.name}</h1>
                <p className="tc"> {props.work} </p>
            </div>
        
    );
}
      


export default Avatar;