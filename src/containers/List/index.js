import React, { Component } from "react";
import axios from "axios";
import Alert from './../../components/Alert/index';
import ListComponent from '../../components/List';
import { Container } from "@mui/material";
import Menu from "../../components/Menu";
import DataView from "../../components/DataView";
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen";
import error404 from '../../assets/images/unown-404.jpg';

class List extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handlePagination = this.handlePagination.bind(this);   
        this.searchPokemon = this.searchPokemon.bind(this);
        this.clearError = this.clearError.bind(this);
        this.state = {
            page:1,
            countToShow:20,
            data: null,
            showPokemon:false,
            pokemon: null,
            loading: true,
            error: null,
            hasError:false,
            showError:false,
        }
    }
    
    componentDidMount(){
        this.searchPokemon(true);
    }

    toggleDrawer(){
        this.setState(prevState => ({showPokemon:!prevState.showPokemon}));
    }

    onSubmit(value){
        this.setState(
            {loadingSearch:true},
            () => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
                .then(({data}) => this.setState({pokemon:data},this.toggleDrawer))
                .catch(error => this.setState({
                    showError:true,
                    error:{
                        message:'Unregistered pokemon! Look for another one to be your companion 😃',
                        error: error.message,
                        image: error404, 
                    }
                }))
                .finally(() => {
                    this.setState({loadingSearch:false})
                })
            }
        );
    }

    searchPokemon(setLoading = false){
        const { countToShow, page } = this.state;
        const offset = (page-1)*countToShow;
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${countToShow}&offset=${offset}`)
            .then(({data}) => this.setState({data}))
            .catch(error => this.setState({hasError:true,error:{
                message:'Unexpected error! Try again.',
                error: error.message,
                image: error404, 
            }}))
            .finally(() => {
                //if is pagination, i don't set 'loading' for stetic porpouse
                if(setLoading) {
                    //Timeout to avoid screen flickering
                    setTimeout(() => this.setState({loading:false},window.scrollTo(0, 0)),1000);
                } else {
                    window.scrollTo(0, 0);
                }
            });
    }

    clearError(){
        this.setState({showError:false});
    }

    handlePagination(evt, page){
        this.setState({page},this.searchPokemon);
    }

    render() {
        const {
            data,
            loading,
            hasError,
            showError,
            error,
            showPokemon,
            pokemon,
            loadingSearch,
            countToShow,
            page,
        } = this.state;
        let display = <LoadingScreen />;
        if(hasError){
            display = <ErrorScreen />;
        }else if(!loading){
            display = <ListComponent
                data={data}
                countToShow={countToShow}
                page={page}
                handlePagination={this.handlePagination}
            />;
        }
        return <>
            <Alert error={error} showError={showError} clearError={this.clearError} />
            <Menu onSubmit={this.onSubmit} loadingSubmit={loadingSearch} />
            <DataView open={showPokemon} data={pokemon} toggleDrawer={this.toggleDrawer} />
            <Container maxWidth="lg">
                {display}
            </Container>
        </>;
    }
}

export default List;