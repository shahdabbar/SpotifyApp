import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Album({ album }) {
	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<div
			data-aos='zoom-out-up'
			data-aos-duration='600'
			className={
				'bg-darkOne rounded h-100 flex flex-col flex-nowrap justify-between items-start'
			}
		>
			<div className={'max-h-50 w-full bg-cover bg-no-repeat bg-center'}>
				<img
					src={album.image}
					alt=''
					className={'w-full h-full rounded-sm'}
				/>
			</div>
			<div className={'m-4 w-5/6 flex flex-col justify-center items-start'}>
				<h2
					className={
						'text-gray-50 font-semibold text-lg text-left w-full truncate '
					}
				>
					{album.name}
				</h2>
				<h4 className={'text-gray-400 text-sm'}>{album.aryistName}</h4>
				<div className={'mt-3'}>
					<p className={'text-gray-400 text-xs'}>{album.releaseDate}</p>
					<p className={'text-gray-400 text-xs'}>{album.tracks} tracks</p>
				</div>
			</div>
			<button
				style={{ backgroundColor: '#19E68C' }}
				className={
					'w-full p-1 border-1 border-red-900 font-semibold rounded-b'
				}
			>
				Preview on Spotify
			</button>
		</div>
	);
}
