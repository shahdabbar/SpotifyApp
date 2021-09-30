import React, { useEffect } from 'react';
import ArtistsSearch from './pages/ArtistsSearchPage';
import Login from './pages/LoginPage';
import ArtistsAlbums from './pages/ArtistsAlbumPage';
import Header from './components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const getReturnedParamsFromSpotifyAuth = (hash) => {
	const stringAfterHashing = hash.substring(1);
	const paramsInUrl = stringAfterHashing.split('&');
	const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
		const [key, value] = currentValue.split('=');
		accumulator[key] = value;
		return accumulator;
	}, {});

	return paramsSplitUp;
};

function App() {
	const history = createBrowserHistory();
	const isAuthenticated = localStorage.getItem('accessToken');
	const hash = window.location.hash;

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			window.history.pushState({}, null, '/');
		}
		if (hash && !localStorage.getItem('accessToken')) {
			const { access_token, expires_in, token_type } =
				getReturnedParamsFromSpotifyAuth(hash);

			localStorage.clear();
			localStorage.setItem('accessToken', access_token);
			localStorage.setItem('expiresIn', expires_in);
			localStorage.setItem('tokenType', token_type);
			window.history.pushState({}, null, '/');
		}
	}, [hash]);

	return (
		<div className={'min-h-screen min-w-screen bg-darkThree'}>
			<Header />
			<div
				className={
					'min-h-screen min-w-screen pt-20 flex flex-col justify-center items-center'
				}
			>
				<Router history={history}>
					<Switch>
						{hash || isAuthenticated ? (
							<>
								<Route exact path='/'>
									<ArtistsSearch />
								</Route>
								<Route path='/artist/:id/albums'>
									<ArtistsAlbums />
								</Route>
							</>
						) : (
							<>
								<Redirect to='/login' />
								<Route path='/login'>
									<Login />
								</Route>
							</>
						)}
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
