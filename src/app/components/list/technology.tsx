'user client'

import {
    IconDefinition,
    faAngular,
    faHtml5,
    faCss3,
    faBootstrap,
    faJs,
    faLinux,
    faWindows,
      } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faKey } from '@fortawesome/free-solid-svg-icons'
import { listView } from '@/app/service/list.service';

  const skills: {name: string; icon: IconDefinition, color?: string}[] = [
    {name: 'JavaScript', icon: faJs, color: 'orange' },
    {name: 'Angular', icon: faAngular, color: 'red'},
    {name: 'HTML', icon: faHtml5, color: '#dd4b25'},
    {name: 'CSS', icon: faCss3, color: '#254bdd'},
    {name: 'Bootstrap', icon: faBootstrap, color: 'purple'},
    {name: 'ElectronJS', icon: faCheck},
    {name: 'Keycloak', icon: faKey},
    {name: 'Windows', icon: faWindows, color: '#0174cd'},
    {name: 'Linux', icon: faLinux},
]

export default function Technology() {
    const skillList = listView(skills);

    return (
        <div>
            <p className='pb-4'>
                Technologies: 
            </p>
            <ul>
                { skillList }
            </ul>
        </div>)
}