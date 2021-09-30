import React from 'react';

export default function Header() {
	const handleLogout = () => {
		localStorage.clear();
		window.location = '/login';
	};
	return (
		<div
			className={
				'w-full h-16 fixed flex flex-row justify-center items-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 z-10 float-left'
			}
		>
			<div className={'w-10/12 m-auto flex justify-between items-center'}>
				<h1 className={'text-3xl text-black font-semibold'}>
					Spotify Artist Search
				</h1>
				{localStorage.getItem('accessToken') && (
					<button
						onClick={() => handleLogout()}
						className={
							'font-semibold cursor-pointer underline hover:text-blue-700'
						}
					>
						Logout
					</button>
				)}
			</div>
		</div>
	);
}
