import * as React from 'react';
import { Spin, Icon } from 'antd';

const Loading = () => (
	<Spin
		indicator={<Icon type='loading' style={{ fontSize: '4rem' }} />}
		style={{
			position: 'absolute', top: '40%', left: '50%', transform: 'translate(-40%, -50%)',
		}}
	/>
);
export default Loading;
