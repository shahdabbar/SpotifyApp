import React from 'react';
import { FaSpotify } from 'react-icons/fa';

const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
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
		<div className={'relative'}>
			<div
				className={
					'absolute top-0 -left-10 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'
				}
			/>
			<div
				className={
					'absolute top-0 -right-10 w-48 h-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'
				}
			/>
			<div
				className={
					'absolute bottom-0 -left-10 w-52 h-52 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'
				}
			/>
			<div
				className={
					'absolute bottom-0 -right-10 w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'
				}
			/>
			<div className='relative w-64 h-80 bg-white bg-opacity-20 flex flex-col justify-center items-center rounded shadow-xl'>
				<p className='text-gray-100 text-2xl text-center uppercase font-bold font-body mb-6'>
					Happiness is
					<br />
					spotify...
				</p>
				<button
					className={
						'relative flex justify-center items-center w-44 py-2 my-6 rounded-lg border-2 bg-gray-100 border-gray-300 cursor-pointer  focus:ring-2 focus:ring-green-500'
					}
					onClick={() => handleLogin()}
				>
					<div className={'text-2xl font-bold text-center'}>Login</div>
					<FaSpotify
						className={'text-green-400 absolute right-5 text-3xl'}
					/>
				</button>
			</div>
		</div>
	);
}
