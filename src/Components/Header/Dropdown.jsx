import { useState } from 'react'
import '../../Styles/Header/Dropdown.scss'
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ data }) => {

    const [visible, setVisible] = useState(false) // this state helps to show the data on mouse hover event

    return (
        <li className='Dropdown' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <p>{data.text} <FaCaretDown className={visible ? 'rotate' : ''} /></p>
            { 
                visible && ( 
                    <ul> {/* here the ul tag will only be vivible if the visible state is true */}
                        {
                            data.child.map(item => (
                                <p key={item}>{item}</p>
                            ))
                        }
                    </ul>
                )
            }
        </li>
    )
}

export default Dropdown