'user client'

import { IconDefinition, faMountain, faRunning, faBicycle, faComputer, faBook } from '@fortawesome/free-solid-svg-icons'
import { listView } from '@/app/service/list.service';

  const skills: {name: string; icon: IconDefinition, color?: string}[] = [
    {name: 'Mountains', icon: faMountain, color: 'green'},
    {name: 'Running', icon: faRunning, color: 'cadetblue'},
    {name: 'Biking', icon: faBicycle, color: 'grey'},
    {name: 'Gaming', icon: faComputer},
    {name: 'Trying to fix my life', icon: faBook, color: 'coral'},
]

export default function Hobby() {
    const skillList = listView(skills);

    return (
        <div>
            <p className='pb-4 text-textprimary'>
                Hobbies: 
            </p>
            <ul>
                { skillList }
            </ul>
        </div>)
}