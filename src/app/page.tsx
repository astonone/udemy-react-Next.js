import {JSX} from 'react';
import {Button, HTag, PTag} from '@/app/components';

export default function Home(): JSX.Element {
    return (
        <>
            <HTag tag='h1'>Text</HTag>
            <Button appearance='primary' arrow='right'>Button</Button>
            <Button appearance='ghost' arrow='down'>Button</Button>
            <PTag size='s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur enim harum
                ipsa minima necessitatibus nisi possimus quisquam, suscipit voluptatibus!</PTag>
            <PTag size='m'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum nesciunt nihil nisi rem veniam?</PTag>
            <PTag size='l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellendus.</PTag>
        </>
    );
}
