/*jslint node: true, esversion:6 */
import React, { Component, PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class CopyButton extends Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
    textToCopy: PropTypes.string.isRequired
  }
	displayButton() {
		if (this.state.added === false) {
			return (
				<Button onClick={this.handleAdd()} styling={this.buttonStylingAdd}>
					<Glyphicon glyph={this.addGlyph} style={this.addGlyphStyling} />
				</Button>
			)
		} else {
			return (
				<Button onClick={this.handleAdd()} styling={this.buttonStylingAdd}>
					<Glyphicon glyph={this.addGlyph} style={this.addGlyphStyling} />
				</Button>
			)
		}
	}
	render() {
		return (
			<Button>
				<Glyphicon glyph="add" />
			</Button>
		);
	}
}

export default CopyButton;