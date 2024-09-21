import { useState } from 'react'
import '../../Styles/Header/Dropdown.scss'
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ data }) => {

    const [visible, setVisible] = useState(false)

    return (
        <li className='Dropdown' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <p>{data.text} <FaCaretDown className={visible ? 'rotate' : ''} /></p>
            {
                visible && (
                    <ul>
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