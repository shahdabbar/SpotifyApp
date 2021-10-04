import React, { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Artist({ artist, onClickArtist }) {
	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<button
			data-aos='zoom-out-up'
			data-aos-duration='1000'
			onClick={() => onClickArtist(artist)}
			className={
				'bg-darkTwo h-100 rounded-lg flex flex-col flex-nowrap justify-between items-start hover:bg-opacity-90'
			}
		>
			<div
				className={
					'max-h-52 w-5/6 m-auto my-5 bg-center shadow-2xl rounded-full'
				}
			>
				{artist.image ? (
					<img
						className={'w-full h-52 object-cover rounded-full'}
						src={artist.image}
						alt=''
					/>
				) : (
					<img
						className={'w-full h-52 object-fill rounded-full'}
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
					{artist.name}
				</h2>
				<p className={'text-gray-400 text-sm'}>
					{artist.followers.toLocaleString()} followers
				</p>
				<div className={'my-4'}>
					<StarRatings
						rating={artist.rating}
						starRatedColor='orange'
						starDimension='17px'
						starSpacing='0'
						numberOfStars={5}
						name='rating'
					/>
				</div>
			</div>
		</button>
	);
}
