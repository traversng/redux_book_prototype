import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return (
				<div>Please select a book</div>
			);
		}

		return (
			<div className="container">
				<h3>Details for: </h3>
				<h4>Title: { this.props.book.title }</h4>
				<div>pages: { this.props.book.pages }</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);