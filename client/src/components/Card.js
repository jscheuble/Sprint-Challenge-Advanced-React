import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <h3>Name: {props.name}</h3>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    );
}