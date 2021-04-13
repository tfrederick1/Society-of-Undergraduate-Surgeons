import React from 'react';
import axios from 'axios';
import MemberInfo from '../../components/memberInfo';



export default class Board_Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            isLoaded: false
        }
        this.getMember = this.getMember.bind(this);
    }

    async getMember() {
        let promise = await axios.get('/About', {params: {pageID: 3}});
        let status = promise.status;
        if(status === 200) {
            console.log("confirm");
            let data = promise.data;
            console.log(data.members);
            this.setState({
                members: data.members,
                isLoaded: true
            })
        }
    }

    componentDidMount() {
        this.getMember();
    }
    
    render() {
        return (
            <div>
                <div class="transbox">
                <h1>About Us</h1>
            </div>
                <div class="flex-container-body">
                    <h1>Board Members</h1>
                    <MemberInfo members={this.state.members}/>
                </div>
            </div>
        );        
    }
}