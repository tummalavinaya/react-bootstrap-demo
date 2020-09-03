import React, { Component } from 'react';
class Form extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             vaue : ""
        }
    }
    render(){
        return (<form onSubmit = {this.handleSubmit}>
            <label>
        firstName :
        lastName :
        email :
        phone:
            </label>

        </form>);
    }
}