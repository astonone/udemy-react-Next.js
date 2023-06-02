'use client';
import {JSX, useState} from 'react';
import {Button, HTag, PTag, Rating, Tag} from '@/app/components';
import {withLayout} from '@/app/layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);

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
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);
