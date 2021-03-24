import React from 'react'
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {t:1}
    }

    async test(){
        console.log(this.state)
        await this.setState({t:2})
        
    }

    render(){
        return <button onClick={this.test}>test me </button>
    }
}