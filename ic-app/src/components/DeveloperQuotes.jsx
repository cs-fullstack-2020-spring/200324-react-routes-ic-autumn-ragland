import React, { Component } from 'react'
import { Fragment } from 'react';
class DeveloperQuotes extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            quoteList: [], // array to store data from fetch
        }
    }
    // lifecycle method to call fetch
    componentDidMount() {
        this.loadData();
    }
    // fetch using async await
    loadData = async () => {
        // fetch from api
        const res = await fetch('https://programming-quotes-api.herokuapp.com/quotes');
        // save json data only
        const data = await res.json();
        // console.table(data); // check json data
        this.setState({ quoteList: data });
    }
    // display quote and author from fetch
    render() {
        return (
            <Fragment>
                {
                    this.state.quoteList.map(quote => {
                        return (
                            <div key={quote.id}>
                                <p>{quote.en}</p>
                                <p>By : {quote.author}</p>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default DeveloperQuotes