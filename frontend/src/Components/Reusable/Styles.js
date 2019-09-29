import styled, { keyframes } from 'styled-components';
import { zoomIn, fadeIn } from 'react-animations';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledForm = styled.div`
	font-family: 'Roboto',
		sans-serif;
	width: 100vw;
	height: 100%;
	background-color: transparent;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: 1s
	${keyframes`${zoomIn}`};
`;

export const StyledContent = styled(Content)`
	min-height: 100vh;
	width: 100%;
	padding-left: 20%;
	padding-right: 20%;
	overflow: auto;
	animation: 0.3s
		${keyframes`${fadeIn}`};
`;
