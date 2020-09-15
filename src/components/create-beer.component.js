import React, { Component } from 'react';

export default class CreateBeer extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeBeerName = this.onChangeBeerName.bind(this);
        this.onChangeBeerBrewery = this.onChangeBeerBrewery.bind(this);
        this.onChangeBeerType = this.onChangeBeerType.bind(this);
        this.onChangeBeerAbv = this.onChangeBeerAbv.bind(this);
        this.onChangeBeerDescription = this.onChangeBeerDescription.bind(this);
        this.onChangeBeerImageSrc = this.onChangeBeerImageSrc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            beer_name: '',
            beer_brewery: '',
            beer_type: '',
            beer_abv: '',
            beer_description: '',
            beer_imageSrc: '',
            beer_collected: false
        }
    }
    
    onChangeBeerName(e) {
        this.setState({
            beer_name: e.target.value
        });
    }
    
    onChangeBeerBrewery(e) {
        this.setState({
            beer_brewery: e.target.value
        });
    }
    
    onChangeBeerType(e) {
        this.setState({
            beer_type: e.target.value
        });
    }
    
    onChangeBeerAbv(e) {
        this.setState({
            beer_abv: e.target.value
        });
    }
    
    onChangeBeerDescription(e) {
        this.setState({
            beer_description: e.target.value
        });
    }
    
    onChangeBeerImageSrc(e) {
        this.setState({
            beer_imageSrc: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
    
        console.log(`Form submitted.`);
        console.log(`Beer Name: ${this.state.beer_name}`);
        console.log(`Beer Brewery: ${this.state.beer_brewery}`);
        console.log(`Beer Type: ${this.state.beer_type}`);
        console.log(`Beer ABV: ${this.state.beer_abv}`);
        console.log(`Beer Description: ${this.state.beer_description}`);
        console.log(`Beer Image Source: ${this.state.beer_imageSrc}`);
    
        this.setState = ({
            beer_name: '',
            beer_brewery: '',
            beer_type: '',
            beer_abv: '',
            beer_description: '',
            beer_imageSrc: '',
            beer_collected: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1>Kanpai!</h1>
                <p>Create a New Beer:</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Beer Name:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_name}
                            onChange={this.onChangeBeerName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Beer Brewery:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_brewery}
                            onChange={this.onChangeBeerBrewery}
                            />
                    </div>
                    <div className="form-group">
                        <label>Beer Type:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_type}
                            onChange={this.onChangeBeerType}
                            />
                    </div>
                    <div className="form-group">
                        <label>Beer ABV:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_abv}
                            onChange={this.onChangeBeerAbv}
                            />
                    </div>
                    <div className="form-group">
                        <label>Beer Description:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_description}
                            onChange={this.onChangeBeerDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Beer Image Source:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.beer_imageSrc}
                            onChange={this.onChangeBeerImageSrc}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Beer" className="btn btn-primary" />
                    </div>
                </form>
                
            </div>
        )
    }
}

// 09/14/2020 Successful test submission of Front End Create form