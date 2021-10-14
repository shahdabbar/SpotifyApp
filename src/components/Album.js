import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Album({ album }) {
	useEffect(() => {
		AOS.init({});
	}, []);

	const viewAlbum = () => {
		window.open(album.external_urls, '_blank');
	};

	return (
		<div
			data-aos='zoom-out-up'
			data-aos-duration='1000'
			className={
				'bg-darkTwo h-100 rounded-lg flex flex-col flex-nowrap justify-between items-start hover:bg-opacity-90'
			}
		>
			<div className={'w-5/6 m-auto mt-5 mb-3 shadow-2xl rounded'}>
				{album.image ? (
					<img
						className={'h-full w-full object-fill rounded'}
						src={album.image}
						alt=''
					/>
				) : (
					<img
						className={'h-full w-full rounded object-fill'}
						src={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYcwuuzoFenCVd6DxTU0_oR9NYEZUrnmZ9x2c6jGfZfxTL8qHoi3OcAb164YC3qi8fl4&usqp=CAU'
						}
						alt={'noImage'}
					/>
				)}
			</div>
			<div
				className={'m-auto w-5/6 flex flex-col justify-center items-start'}
			>
				<h2
					className={
						'text-white font-semibold text-xl text-left w-full truncate'
					}
				>
					{album.name}
				</h2>
				<h4 className={'text-gray-400 text-sm'}>{album.aryistName}</h4>
				<div className={'my-3'}>
					<p className={'text-gray-400 text-xs'}>{album.releaseDate}</p>
					<p className={'text-gray-400 text-xs'}>{album.tracks} tracks</p>
				</div>
			</div>
			<button
				onClick={viewAlbum}
				style={{ backgroundColor: '#19E68C' }}
				className={
					'w-full p-1 border-1 border-red-900 font-semibold rounded-b-lg'
				}
			>
				Preview on Spotify
			</button>
		</div>
	);
}
