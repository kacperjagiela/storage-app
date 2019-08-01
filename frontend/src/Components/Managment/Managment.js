import * as React from 'react';

export default class Managment extends React.Component {
	render() {
		const { log } = this.props;
		return(
			<div>
				<button onClick={log}>Log</button>
			</div>
		);
	}
}