import React from 'react';
import { FaSpotify } from 'react-icons/fa';

// 'https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';

const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'b3112235645e48379692166f5dbb1613';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000';
const SPACE_DELIMITER = '%20';
const SCOPES = [
	'streaming',
	'user-read-email',
	'user-read-private',
	'user-library-read',
	'user-read-playback-state',
	'playlist-read-private',
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

export default function Login() {
	const handleLogin = () => {
		const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
		window.location = url;
	};

	return (
		<button
			className={
				'relative flex justify-center items-center w-96 py-4 rounded-lg border-2 bg-gray-100 border-gray-300 cursor-pointer  focus:ring-2 focus:ring-green-500 transform hover:scale-110 motion-reduce:transform-none'
			}
			onClick={() => handleLogin()}
		>
			<div className={'text-2xl font-bold text-center'}>Login</div>
			<FaSpotify className={'text-green-400 absolute right-5 text-3xl'} />
		</button>
	);
}
// bg-gradient-to-r hover:from-pink-400 hover:to-green-400
