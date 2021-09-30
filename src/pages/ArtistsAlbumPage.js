import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../api';
import Album from '../components/Album';

export default function ArtistsAlbums() {
	const location = useLocation();
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		if (!location.state) return;

		const getArtistsAlbum = async () => {
			try {
				const response = await axios.get(
					`https://api.spotify.com/v1/artists/${location.state.id}/albums`
				);
				const data = response.data.items;
				setAlbums(
					data.map((album) => {
						return {
							name: album.name,
							id: album.id,
							aryistName: album.artists[0].name,
							releaseDate: album.release_date,
							tracks: album.total_tracks,
							image: album.images[1].url,
						};
					})
				);
			} catch (error) {
				console.log(error);
			}
		};

		getArtistsAlbum();
	}, [location.state]);

	return (
		<div className={'mt-5 w-10/12'}>
			{albums && (
				<>
					<div className={'mb-4'}>
						<h1 className={'text-2xl text-white font-semibold'}>
							{location.state.name}
						</h1>
						<h6 className={'text-md font-semibold text-gray-600'}>
							Albums
						</h6>
					</div>

					<div
						className={
							'grid grid-cols-1 gap-6 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20'
						}
					>
						{albums.map((album) => {
							return <Album album={album} key={album.id} />;
						})}
					</div>
				</>
			)}
		</div>
	);
}
