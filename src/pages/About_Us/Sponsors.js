import React from 'react';

export default class Sponsors extends React.Component {
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
        let promise = await axios.get('/api/Sponsor', {params: {pageID: 5}});
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
                    <h1>About Us</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <h1>Sponsors</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Metus aliquam eleifend mi in nulla. Commodo sed egestas egestas fringilla phasellus faucibus
                            scelerisque eleifend. Tortor pretium viverra suspendisse potenti nullam. Vulputate mi sit amet mauris.
                            Scelerisque eu ultrices vitae auctor eu augue ut lectus. Cursus vitae congue mauris rhoncus aenean. Elementum
                            tempus egestas sed sed risus pretium quam. Et tortor consequat id porta. Egestas fringilla phasellus faucibus
                            scelerisque eleifend. Arcu risus quis varius quam quisque id diam vel quam. Ut eu sem integer vitae justo eget
                            magna. Cursus euismod quis viverra nibh cras pulvinar mattis.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
