import React from 'react';
import Banner from './Banner';
import Avatar from './Avatar';
import './Avatar.css';

 const Webpage = () => {

    const avatararraylist = [
        {
            id : 1,
            name : "Usama",
            work : 'web developer'
        },
        {
            id : 2,
            name : "James",
            work : 'react developer'
        },
        {
            id : 3,
            name : "Jonsnow",
            work : 'android developer'
        },
        {
            id : 4,
            name : "David",
            work : 'ios developer'
        }
        
    ]

    const arrayfinal = avatararraylist.map( (abc,i) => {
        return <Avatar 
        id={avatararraylist[i].id} 
        name={avatararraylist[i].name} 
        work={avatararraylist[i].work}   />
    });


     return ( <div className="heading">
         <center>
             <h1>MY FIRST REACT WEBPAGE </h1>
         </center>
         <Banner />
         <br/>
            {arrayfinal}
        </div>

     )
 }

 export default Webpage;