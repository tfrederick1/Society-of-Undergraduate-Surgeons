import React from 'react';

export default class Board_Members extends React.Component {
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
        let promise = await axios.get('/api/About', {params: {pageID: 2}});
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
                        <p>
                            Proin sagittis nisl rhoncus mattis rhoncus. Amet venenatis urna cursus eget nunc. Convallis a cras semper auctor neque.
                            Non blandit massa enim nec. Quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae. Urna cursus
                            eget nunc scelerisque viverra mauris. Aliquam faucibus purus in massa tempor nec feugiat nisl. Ante metus dictum at
                            tempor commodo ullamcorper a. Fames ac turpis egestas integer eget aliquet nibh praesent. Sagittis eu volutpat odio
                            facilisis mauris.
                        </p>
                        <p>
                            Pulvinar elementum integer enim neque volutpat. Posuere morbi leo urna molestie at elementum eu. Interdum velit euismod
                            in pellentesque. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Hac habitasse platea dictumst quisque
                            sagittis purus. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Malesuada fames ac turpis egestas. Facilisis
                            gravida neque convallis a cras semper. Amet massa vitae tortor condimentum lacinia quis. Duis at consectetur lorem donec
                            massa. Vulputate eu scelerisque felis imperdiet. Mi proin sed libero enim sed faucibus turpis in. Ut aliquam purus sit
                            amet luctus venenatis lectus magna fringilla. Etiam dignissim diam quis enim lobortis. Ac odio tempor orci dapibus
                            ultrices in iaculis nunc sed. Ultrices gravida dictum fusce ut placerat orci nulla.
                        </p>
                        <p>
                            Netus et malesuada fames ac turpis egestas. Eu mi bibendum neque egestas congue quisque egestas. Facilisis sed odio morbi
                            quis commodo odio. Eget nunc lobortis mattis aliquam faucibus purus. Donec enim diam vulputate ut pharetra sit. Pharetra
                            pharetra massa massa ultricies mi quis hendrerit dolor magna. Sed tempus urna et pharetra pharetra. Facilisis volutpat
                            est velit egestas dui id ornare arcu. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Leo integer malesuada
                            nunc vel risus commodo. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Rhoncus mattis rhoncus urna neque viverra.
                            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
                        </p>
                        <p>
                            Egestas pretium aenean pharetra magna ac placerat vestibulum. Nullam non nisi est sit amet facilisis magna etiam. Elit duis
                            tristique sollicitudin nibh sit. Diam donec adipiscing tristique risus nec. Convallis posuere morbi leo urna molestie.
                            Suscipit tellus mauris a diam maecenas sed enim. A cras semper auctor neque vitae. Id venenatis a condimentum vitae sapien
                            pellentesque habitant morbi tristique. Commodo nulla facilisi nullam vehicula. Enim facilisis gravida neque convallis a cras
                            semper. Sit amet purus gravida quis blandit. Nullam non nisi est sit amet facilisis magna. Habitant morbi tristique senectus
                            et netus et malesuada. Ut sem viverra aliquet eget sit amet. Tincidunt eget nullam non nisi est. Nisl vel pretium lectus
                            quam id leo in vitae turpis. Sagittis purus sit amet volutpat consequat. Pulvinar pellentesque habitant morbi tristique.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
