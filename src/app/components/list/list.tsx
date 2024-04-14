'use client'

import Hobby from './hobby';
import Skill from './skill';
import Technology from './technology';

export default function List() {
    return (
        <div id={'skill'} className={'grid grid-cols-3 grid-flow-col gap-4 col-span-10 text-textrest page'}>            
            <Technology/>
            <Skill/>
            <Hobby/>
        </div>
    );
}