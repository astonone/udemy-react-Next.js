import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import {Button, HTag, PTag, Rating, Tag} from '../components';
import {withLayout} from '../layout/Layout';
import {MenuItem} from '../interfaces/MenuItem.interface';
import {HomeProps} from '../interfaces/HomeProps.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<HTag tag='h1'>Text</HTag>
			<Button appearance='primary' arrow='right'>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<PTag size='s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur enim harum
				ipsa minima necessitatibus nisi possimus quisquam, suscipit voluptatibus!</PTag>
			<PTag size='m'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum nesciunt nihil nisi rem
				veniam?</PTag>
			<PTag size='l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellendus.</PTag>
			<Tag size='s'>Small</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='gray'>Gray</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Tag color='primary' href='https://www.google.com'>Link</Tag>
			<Rating rating={3}/>
			{/*{firstCategory}
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>*/}
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};