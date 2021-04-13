import React from 'react';
import Test_Image from '../assets/Test_Image.jpg';
export default class memberInfo extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.members.map((member, key) => {
                return (
                    <div key = {key}>
                        <h2>{member.name}</h2>
                        <h2>{member.position}</h2>
                        <p>
                            <img src={Test_Image} alt='Test Image' />
                            {member.description}
                        </p>
                    </div>
                )
            })
        )
    }
}