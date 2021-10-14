import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchForm({ onChangeSearchValue, searchValue }) {
	return (
		<div
			className={
				'relative flex flex-row justify-between items-center bg-white w-3/6 md:w-5/12 xl:w-6/12 sm:p-4 p-2 rounded-full border-2 border-gray-300'
			}
		>
			<BsSearch className={'text-2xl text-gray-600'} />
			<input
				className={'bg-white focus:bg-white w-full ml-3 focus:outline-none'}
				type='search'
				placeholder='Search for an artist…'
				value={searchValue}
				onChange={(e) => onChangeSearchValue(e)}
			/>
		</div>
	);
}

export default SearchForm;
