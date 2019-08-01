import * as React from 'react';

const Home = ({ onAdd }) => (
	<div className='home'>
		<button type='button' onClick={onAdd}>Add</button>
	</div>
);

export default Home;
