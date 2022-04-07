import React, { Component } from "react";
import axios from "axios";
import CardComponent from '../../components/Card';
import CardSkeleton from "../../components/Card/CardSkeleton";

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: false,
        }
    }
    
    componentDidMount(){
        const { url } = this.props;
        axios.get(url)
            .then(({data}) => this.setState({data}))
            .catch(rsp => console.log(rsp))
            .finally(rsp => {
                //Timeout to avoid screen flickering
                setTimeout(() => this.setState({loading:false}),500);
            });        
    }

    render() {
        const { data, loading, error } = this.state;
        if (loading) {
            return <CardSkeleton />;
        }
        if (!data) {
            return <div>No data</div>;
        }
        if (error) {
            return <div>Error!</div>
        }
        return <CardComponent data={data}/>;
    }
}

export default Card;