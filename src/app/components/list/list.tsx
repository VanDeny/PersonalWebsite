'use client'

import Hobby from './hobby';
import Skill from './skill';
import Technology from './technology';

export default function List() {
    return (
        <div id={'list'} className="text-textrest page grid gap-4 mb-5 grid-cols-1 md:grid-cols-3 w-fit">
            <Technology/>
            <Skill/>
            <Hobby/>
        </div>
    );
}