import { useState } from "react"
export default function ItemList(props) {
    const [editValue, setEditValue] = useState('')
    const button = <button onClick={() => props.deleteItem(props.index)}>Delete</button>
    const buttonEdit = (
    <span>
        <button onClick={() => props.editItem(props.index, editValue)}>Edit</button>
        <input className="edit-input" type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
    </span>)
    return (
        <li>
            <div className="li-container">
                {props.name} <span style={{ float: 'right'}}> {button} {buttonEdit} </span>
            </div>
        </li>
    )
}