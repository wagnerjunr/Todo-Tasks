import { Icon } from '@chakra-ui/react';
import { CalendarIcon, EditIcon,CopyIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

function List(props) {

    return (
        <div >
            <ul className={props.drawer?'list-drawer':'list'}>
                <li>
                    <Link to="/"> <Icon as={CalendarIcon}/> Dashboard</Link>
                </li>

                <li>
                    <Link to="newtask"><Icon as={EditIcon}/> New Task</Link>
                </li>

                <li>
                    <Link to="historic"><Icon as={CopyIcon}/> Historic</Link>
                </li>
            </ul>
        </div>
    )
}

export default List;