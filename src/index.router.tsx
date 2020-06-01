import React, { lazy, Suspense } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Index from '@components/app';

const About = lazy(() =>
	import(/* webpackChunkName:'about'*/ '@components/about')
);
function index(): React.ReactElement {
	return (
		<HashRouter>
			<Switch>
				<Suspense fallback={<div>loading</div>}>
					<Route path="/" render={() => <Index />} exact />
					<Route path="/about" render={() => <About />} />
				</Suspense>
			</Switch>
		</HashRouter>
	);
}

export default index;
