import React from 'react';

export default function Header({ logout, isAuthenticated }) {
	return (
		<div
			className={
				'w-full h-16 fixed flex flex-row justify-center items-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 z-10 float-left'
			}
		>
			<div className={'w-10/12 m-auto flex justify-between items-center'}>
				<h1
					className={
						'text-black font-semibold text-xl md:text-2xl lg:text-3xl'
					}
				>
					Spotify Artist Search
				</h1>
				{isAuthenticated && (
					<button
						onClick={() => logout()}
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
