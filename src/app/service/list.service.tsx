import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function listView(list: {name: string, icon: IconDefinition, color?: string}[]) {
    return list.map(item => {
        return (<li key={item.name}>
            <FontAwesomeIcon style={{color: item.color}} icon={item.icon} />
            {'\n'}
            { item.name }
        </li>
        )
    })
}