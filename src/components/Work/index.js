import axios from 'axios'
import { Component } from 'react';
import {WorkClass, WorkTitle, Span, Part, Icon, PartTitle, Line,PartDesc } from './style.js'

class Work extends Component{
    state = {
        works : []
    }

    componentDidMount(){
       axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
    }

    render(){
        const {works} = this.state;
        const workList = works.map( (workItem) => {
            return(
                <Part first={workItem.id} key={workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line />
                <PartDesc>{workItem.body}</PartDesc>
            </Part>
            )
        })

    return(
        <WorkClass>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {workList}
        </div>
    </WorkClass>

    )
}
}

export default Work;