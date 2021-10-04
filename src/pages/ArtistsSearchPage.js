import React, { useState, useEffect } from 'react';
import axios from '../api';
import Artist from '../components/Artist';
import { useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export default function ArtistsSearch() {
	const history = useHistory();
	const [searchValue, setSearchValue] = useState('');
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		setSearchValue('');
		if (window.location.hash) {
			let value = window.location.hash.substring(1);
			setSearchValue(value);
		}

		if (!searchValue || !window.location.hash) return setArtists([]);
		let cancel = false;

		let getArtists = async () => {
			try {
				const response = await axios.get(
					`v1/search?query=${searchValue}&offset=0&limit=20&type=artist`
				);
				const data = response.data.artists.items;
				if (cancel) return;

				setArtists(
					data.map((artist) => {
						return {
							name: artist.name,
							id: artist.id,
							image: artist.images[1]?.url,
							followers: artist.followers.total,
							rating: artist.popularity,
						};
					})
				);
			} catch (error) {
				console.log({ error });
			}
		};

		getArtists();

		return () => {
			cancel = true;
		};
	}, [searchValue]);

	const handleOnChangeSearchValue = (e) => {
		window.history.pushState({}, null, `#${e.target.value}`);
		setSearchValue(e.target.value);
	};
	const handleOnClickArtist = (artist) => {
		history.push({
			pathname: `/artist/${artist.id}/albums`,
			state: artist,
		});
	};

	return (
		<div className={'w-screen flex flex-col justify-center items-center'}>
			<div
				className={
					'relative flex flex-row justify-between items-center bg-white w-3/6 md:w-5/12 xl:w-6/12 sm:p-4 p-2 rounded-full border-2 border-gray-300'
				}
			>
				<BsSearch className={'text-2xl text-gray-600'} />
				<input
					className={
						'bg-white focus:bg-white w-full ml-3 focus:outline-none'
					}
					type='search'
					placeholder='Search for an artist…'
					value={searchValue}
					onChange={(e) => handleOnChangeSearchValue(e)}
				/>
			</div>

			<div className={'mt-5 w-8/12 xs:w-10/12'}>
				<div
					className={
						'grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20'
					}
				>
					{artists &&
						artists.map((artist) => {
							return (
								<Artist
									artist={artist}
									key={artist.id}
									onClickArtist={handleOnClickArtist}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}
