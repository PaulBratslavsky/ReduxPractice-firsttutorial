import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    
    renderList() {
        return this.props.books.map( (book) => {
            return(
                <div>
                    <li key={book.title} className="list-group-item">{book.title}</li> 
                </div>
            );
        }) ;
    }

    render() {
        console.log('from book list', this.props.books);
        return(
            <div>
                <p>Whats Up</p>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    // WHAT EVER IS RETURNED HERE WILL
    // SHOW UP AS PROPS IN BOOKS LIST
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);
