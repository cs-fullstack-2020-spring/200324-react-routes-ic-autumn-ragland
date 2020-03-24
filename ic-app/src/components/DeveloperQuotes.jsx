import React, { Component } from 'react'
import { Fragment } from 'react';
class DeveloperQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteList: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const res = await fetch('https://programming-quotes-api.herokuapp.com/quotes');
        const data = await res.json();
        this.setState({ quoteList: data });
        console.table(data);
    }

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