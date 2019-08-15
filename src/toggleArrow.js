import React from 'react';

export default class ToggleArrow extends React.Component{

    render(){
        return <button width="100" 
        className={this.props.className} 
        onClick={this.props.onClick}>
        {this.props.value}</button>
    }
}