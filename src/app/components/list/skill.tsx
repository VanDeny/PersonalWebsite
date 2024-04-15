'user client'

import { IconDefinition, faCheck, faFire, faCake, faMoon, faStop } from '@fortawesome/free-solid-svg-icons'
import { listView } from '@/app/service/list.service';

  const skills: {name: string; icon: IconDefinition, color?: string}[] = [
    {name: 'Screw up pipeline', icon: faStop, color: 'red'},
    {name: 'Eat cakes', icon: faCake, color: 'chocolate'},
    {name: 'Burn calories (usually in oven)', icon: faFire, color: 'orange'},
    {name: 'Sleep', icon: faMoon, color: 'lightblue'},
]

export default function Skill() {
    const skillList = listView(skills);

    return (
        <div>
            <p className='pb-4 text-textprimary'>
                Skills: 
            </p>
            <ul>
                { skillList }
            </ul>
        </div>)
}