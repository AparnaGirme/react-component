import React from 'react';

export default class Dropdown extends React.Component{
    render(){
        return <select id="priority">
        <option>P1</option>
        <option>P2</option>
        <option>P3</option>
        <option>P4</option>
        </select>
    }
}