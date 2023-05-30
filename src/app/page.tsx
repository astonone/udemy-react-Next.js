import {JSX} from 'react';
import {Button, Htag} from '@/app/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary'>Button</Button>
      <Button appearance='ghost'>Button</Button>
    </>
  );
}
