import React from 'react';
import axios from 'axios';

export default class Miscellaneous extends React.Component {
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
        let promise = await axios.get('/api/Outreach/Other', {params: {pageID: 9}});
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
                        <h1>Miscellaneous</h1>
                        <p>
                            Urna neque viverra justo nec ultrices dui. Urna porttitor rhoncus dolor purus non enim praesent elementum. In est ante
                            in nibh. Bibendum arcu vitae elementum curabitur vitae nunc sed. Id cursus metus aliquam eleifend mi in nulla posuere.
                            Arcu non sodales neque sodales ut etiam sit. Id aliquet lectus proin nibh nisl. Non quam lacus suspendisse faucibus
                            interdum posuere lorem. Mi quis hendrerit dolor magna eget est lorem. Quam viverra orci sagittis eu volutpat odio.
                            Eleifend quam adipiscing vitae proin.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
