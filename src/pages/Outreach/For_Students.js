import React from 'react';
import axios from 'axios';

export default class For_Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            title: "",
            imgPaths: [],
            isLoaded: false
        }
        this.getContent = this.getContent.bind(this);
    }

    async getContent() {
        let promise = await axios.get('/api/Outreach/Student', {params: {pageID: 7}});
        let status = promise.status;
        if(status === 200) {
            console.log("confirm");
            let data = promise.data;
            this.setState({
                content: data.pageContent,
                title: data.title,
                imgPath: data.imgPaths,
                isLoaded: true
            })
        }
    }

    componentDidMount() {
        this.getContent();
    }
    render() {
        return (
            <div>
                <div class="transbox">
                    <h1>Outreach</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <h1>For Students</h1>
                        <p>
                            Nunc consequat interdum varius sit amet mattis. Massa placerat duis ultricies lacus sed. Proin sed libero enim sed
                            faucibus turpis in eu mi. Leo integer malesuada nunc vel risus commodo. Fusce id velit ut tortor pretium viverra
                            suspendisse potenti. Vitae ultricies leo integer malesuada nunc vel risus. Nunc faucibus a pellentesque sit amet
                            porttitor eget dolor. Ultrices gravida dictum fusce ut placerat orci nulla. Congue quisque egestas diam in arcu cursus
                            euismod quis. Accumsan tortor posuere ac ut consequat semper viverra.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
