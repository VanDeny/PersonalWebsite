'use client'

import Hobby from './hobby';
import Skill from './skill';
import Technology from './technology';

export default function List() {
    return (
        <div id={'list'} className={'text-textrest page grid gap-4 mb-5 grid-rows-3 grid-flow-row row-span-10 md:grid-cols-3 md:grid-cols-row md:col-span-10'}>
            <Technology/>
            <Skill/>
            <Hobby/>
        </div>
    );
}