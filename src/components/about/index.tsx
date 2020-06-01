import React from 'react';
import styles from './index.m.scss';
import classnames from 'classnames';

interface State {
	num: number;
	anim: boolean;
}
interface Props {
	onClick?: () => void;
}
export default class About extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			anim: false,
		};
	}
	handleAnim() {
		const { anim } = this.state;
		this.setState({
			anim: !anim,
		});
	}
	handleClick() {
		this.handleAnim();
		this.props.onClick && this.props.onClick();
	}
	render() {
		const { num, anim } = this.state;
		return (
			<div className={styles.componentAbout}>
				<div
					onClick={() => {
						setTimeout(() => {
							location.href = 'http://dev.m.com:9000';
						}, 100);
					}}
					className={styles.go}>
					gogo
				</div>
				<div>num={num}</div>
				<div
					className={styles.add}
					onClick={() => {
						this.setState({
							num: num + 1,
						});
					}}>
					add
				</div>
				<div
					className={styles.reduce}
					onClick={() => {
						this.setState({
							num: num - 1,
						});
					}}>
					reduce
				</div>
				<div
					onClick={this.handleAnim.bind(this)}
					className={classnames(styles.hello, {
						[styles.helloA]: anim,
					})}>
					hello
				</div>
			</div>
		);
	}
}

// export default reduxComponent({})(App);
