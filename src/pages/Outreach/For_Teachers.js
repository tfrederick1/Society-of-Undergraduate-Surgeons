import React from 'react';

export default class For_Teachers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            title: "",
            imgPaths: [],
            isLoaded: false
        }
        this.getMember = this.getMember.bind(this);
    }

    async getContent() {
        let promise = await axios.get('/api/Outreach/Teacher', {params: {pageID: 8}});
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
                        <h1>For Teachers</h1>
                        <p>
                            Neque laoreet suspendisse interdum consectetur libero. Eget duis at tellus at urna condimentum mattis pellentesque id.
                            Volutpat commodo sed egestas egestas fringilla. Id aliquet risus feugiat in ante metus dictum at tempor. Non blandit
                            massa enim nec dui nunc mattis enim. Quam pellentesque nec nam aliquam sem et. Porttitor rhoncus dolor purus non enim
                            praesent elementum. Eget mi proin sed libero enim sed faucibus turpis. Ultrices gravida dictum fusce ut placerat orci
                            nulla pellentesque. Amet purus gravida quis blandit turpis cursus. Donec et odio pellentesque diam volutpat commodo.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}